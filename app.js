//konfigurirati env file za sve bitne varijable, uspio sam za weatherapi, ali za mapbox bi morao puno toga mijenjati




const express = require('express');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const { Pool } = require('pg');







require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Configure PostgreSQL pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });




  

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }  // Change to true if using HTTPS
}));


// Middleware to protect routes
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next(); // User is authenticated, proceed to the next middleware
    }
    // User is not authenticated, redirect to the login page
    res.redirect('/login');
}















// Route to serve `pocetna.html` only if the user is logged in
app.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.sendFile(path.join(__dirname, 'public', 'pocetna.html'));
    } else {
      res.redirect('/login');
    }
  });


// Additional routes for login and registration
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
  });
  
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
  });




// Registration
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      await pool.query(
        'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)',
        [username, email, hashedPassword]
      );
      res.json({ success: true, message: 'Registration successful' });
    } catch (err) {
      if (err.code === '23505') { // Unique constraint violation (duplicate email or username)
        res.json({ success: false, message: 'Username or email already exists' });
      } else {
        res.json({ success: false, message: 'Error registering user' });
      }
    }
  });
  
  
  // Login
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const isValid = await bcrypt.compare(password, user.password_hash);
  
        if (isValid) {
            req.session.userId = user.user_id;

            return res.json({ success: true, message: 'Login successful', username: user.username });
          } else {
            return res.json({ success: false, message: 'Invalid credentials' });
          }
        } else {
          return res.json({ success: false, message: 'Invalid credentials' });
        }
      } catch (err) {
        return res.json({ success: false, message: 'Error logging in' });
      }
  });
  


  // Logout
  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
  });

  
// Home route
app.get('/home', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pocetna.html'));
  });


// Route for 'juzna-amerika.html'
app.get('/juzna-amerika', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'juzna-amerika.html'));
  });
  
  // Route for 'europa.html'
  app.get('/europa', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'europa.html'));
  });
  
  // Route for 'azija.html'
  app.get('/azija', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'azija.html'));
  });

  

  // Route for 'hrvatska.html'
app.get('/hrvatska', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hrvatska.html'));
  });
  
  // Route for 'usa.html'
  app.get('/usa', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'usa.html'));
  });
  
  // Route for 'africa.html'
  app.get('/africa', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'africa.html'));
  });
  

   // Route for 'profile.html'
   app.get('/profile', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
  });







  // Endpoint za dohvaćanje korisničkih podataka
app.get('/get-user-info', async (req, res) => {
  const userId = req.session.userId; // Pretpostavljam da imate način za identificiranje korisnika

  try {
      const result = await pool.query('SELECT username, email FROM users WHERE user_id = $1', [userId]);
      
      if (result.rows.length > 0) {
          return res.json({ success: true, user: result.rows[0] });
      } else {
          return res.json({ success: false, message: 'User not found' });
      }
  } catch (err) {
      console.error('Error fetching user info:', err);
      return res.json({ success: false, message: 'Error fetching user info' });
  }
});



// Endpoint za ažuriranje korisničkih podataka
app.post('/update-user-info', async (req, res) => {
  const { username, email } = req.body;
  const userId = req.session.userId; // Pretpostavljam da imate način za identificiranje korisnika

  try {
      const result = await pool.query(
          'UPDATE users SET username = $1, email = $2 WHERE user_id = $3',
          [username, email, userId]
      );

      if (result.rowCount > 0) {
          return res.json({ success: true });
      } else {
          return res.json({ success: false, message: 'Error updating user info' });
      }
  } catch (err) {
      console.error('Error updating user info:', err);
      return res.json({ success: false, message: 'Error updating user info' });
  }
});








  // Spremanje posjećenih država u bazu
app.post('/save-visited-countries', async (req, res) => {
  const { visitedCountries } = req.body;  // Očekuje se da se šalje niz kodova država
  const userId = req.session.userId;  // Dohvati userId iz sesije

  if (!userId) {
      return res.status(401).json({ success: false, message: 'User not authenticated' });
  }

  try {
      // Dodaj nove posjećene države
      const insertQuery = 'INSERT INTO visited_countries (user_id, country_code) VALUES ($1, $2)';
      for (let countryCode of visitedCountries) {
          await pool.query(insertQuery, [userId, countryCode]);
      }

      return res.json({ success: true, message: 'Visited countries saved successfully' });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Error saving visited countries' });
  }
});




app.get('/get-visited-countries', async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
      return res.status(401).json({ success: false, message: 'User not authenticated' });
  }

  try {
      const result = await pool.query(
          'SELECT country_code, notes FROM visited_countries WHERE user_id = $1',
          [userId]
      );

      return res.json({ success: true, visitedCountries: result.rows });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Error fetching visited countries' });
  }
});





// Endpoint za ažuriranje bilješke za državu
app.post('/update-country-note', async (req, res) => {
  const { countryCode, notes } = req.body;

  try {
      // Izvrši upit za ažuriranje bilješke za određenu državu
      const result = await pool.query(
          'UPDATE visited_countries SET notes = $1 WHERE country_code = $2',
          [notes, countryCode]
      );

      // Provjeri da li je red ažuriran
      if (result.rowCount > 0) {
          return res.json({ success: true });
      } else {
          return res.json({ success: false, message: 'Country not found' });
      }
  } catch (err) {
      console.error('Error updating note:', err);
      return res.json({ success: false, message: 'Error updating note' });
  }
});




// Endpoint za brisanje posjećene države
app.post('/delete-visited-country', async (req, res) => {
  const { countryCode } = req.body;

  try {
      // Izvrši upit za brisanje države iz baze
      const result = await pool.query(
          'DELETE FROM visited_countries WHERE country_code = $1',
          [countryCode]
      );

      // Provjeri da li je red obrisan
      if (result.rowCount > 0) {
          return res.json({ success: true });
      } else {
          return res.json({ success: false, message: 'Country not found' });
      }
  } catch (err) {
      console.error('Error deleting country:', err);
      return res.json({ success: false, message: 'Error deleting country' });
  }
});


  








//za api kljuceve
const weatherApiKey = process.env.WEATHER_API_KEY;
app.get('/weather', async (req, res) => {
  const { lat, lng } = req.query;

  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${weatherApiKey}`);
      const data = await response.json();

      const temperature = Math.round(data.main.temp * 10) / 10; // Zaokruži na 1 decimalu
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      res.json({ temperature, description, icon });
  } catch (error) {
      console.error("Greška pri dohvaćanju vremenskih podataka:", error);
      res.status(500).json({ error: "Greška pri dohvaćanju vremenskih podataka" });
  }
});






  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});