
mapboxgl.accessToken = 'pk.eyJ1IjoiY29maSIsImEiOiJjbHl6djlwdm8ycHVxMnFzNnF0NjQ3dzFxIn0.cS7PDb30iYYjVLrmGyDm9A';





//susjedi
const neighbors = {
    'Algeria': ['Libya', 'Mali', 'Mauritania', 'Morocco', 'Niger', 'Tunisia', 'Western Sahara'],
    'Angola': ['Democratic Republic of the Congo', 'Namibia', 'Zambia'],
    'Benin': ['Burkina Faso', 'Niger', 'Nigeria', 'Togo'],
    'Botswana': ['Namibia', 'South Africa', 'Zambia', 'Zimbabwe'],
    'Burkina Faso': ['Benin', 'Ivory Coast', 'Ghana', 'Mali', 'Niger', 'Togo'],
    'Burundi': ['Democratic Republic of the Congo', 'Rwanda', 'United Republic of Tanzania'],
    'Cameroon': ['Central African Republic', 'Chad', 'Republic of Congo', 'Equatorial Guinea', 'Gabon', 'Nigeria'],
    'Central African Republic': ['Cameroon', 'Chad', 'Republic of Congo', 'Democratic Republic of the Congo', 'South Sudan', 'Sudan'],
    'Chad': ['Cameroon', 'Central African Republic', 'Libya', 'Niger', 'Nigeria', 'Sudan'],
    'Republic of Congo': ['Cameroon', 'Central African Republic', 'Democratic Republic of the Congo', 'Gabon'],
    'Ivory Coast': ['Burkina Faso', 'Ghana', 'Guinea', 'Liberia', 'Mali'],
    'Democratic Republic of the Congo': ['Angola', 'Burundi', 'Central African Republic', 'Republic of Congo', 'Rwanda', 'South Sudan', 'United Republic of Tanzania', 'Uganda', 'Zambia'],
    'Djibouti': ['Eritrea', 'Ethiopia', 'Somalia', 'Somaliland'],
    'Egypt': ['Libya', 'Sudan'],
    'Equatorial Guinea': ['Cameroon', 'Gabon'],
    'Eritrea': ['Djibouti', 'Ethiopia', 'Sudan'],
    'Swaziland': ['Mozambique', 'South Africa'],
    'Ethiopia': ['Djibouti', 'Eritrea', 'Kenya', 'Somalia', 'South Sudan', 'Sudan', 'Somaliland'],
    'Gabon': ['Cameroon', 'Republic of Congo', 'Equatorial Guinea'],
    'Gambia': ['Senegal'],
    'Ghana': ['Burkina Faso', 'Ivory Coast', 'Togo'],
    'Guinea': ['Ivory Coast', 'Guinea Bissau', 'Liberia', 'Mali', 'Senegal', 'Sierra Leone'],
    'Kenya': ['Ethiopia', 'Somalia', 'South Sudan', 'United Republic of Tanzania', 'Uganda'],
    'Lesotho': ['South Africa'],
    'Liberia': ['Ivory Coast', 'Guinea', 'Sierra Leone'],
    'Libya': ['Algeria', 'Chad', 'Egypt', 'Niger', 'Sudan', 'Tunisia'],
    'Madagascar': [], // Otok nema kopnenih granica
    'Malawi': ['Mozambique', 'United Republic of Tanzania', 'Zambia'],
    'Mali': ['Algeria', 'Burkina Faso', 'Ivory Coast', 'Guinea', 'Mauritania', 'Niger', 'Senegal'],
    'Mauritania': ['Algeria', 'Mali', 'Senegal', 'Western Sahara'],
    'Morocco': ['Algeria', 'Western Sahara'],
    'Mozambique': ['Swaziland', 'Malawi', 'South Africa', 'United Republic of Tanzania', 'Zambia', 'Zimbabwe'],
    'Namibia': ['Angola', 'Botswana', 'South Africa', 'Zambia'],
    'Niger': ['Algeria', 'Benin', 'Burkina Faso', 'Chad', 'Libya', 'Mali', 'Nigeria'],
    'Nigeria': ['Benin', 'Cameroon', 'Chad', 'Niger'],
    'Rwanda': ['Burundi', 'Democratic Republic of the Congo', 'United Republic of Tanzania', 'Uganda'],
    'Senegal': ['Gambia', 'Guinea', 'Guinea Bissau', 'Mali', 'Mauritania'],
    'Sierra Leone': ['Guinea', 'Liberia'],
    'Somalia': ['Djibouti', 'Ethiopia', 'Kenya', 'Somaliland'],
    'South Africa': ['Botswana', 'Swaziland', 'Lesotho', 'Mozambique', 'Namibia', 'Zimbabwe'],
    'South Sudan': ['Central African Republic', 'Democratic Republic of the Congo', 'Ethiopia', 'Kenya', 'Sudan', 'Uganda'],
    'Sudan': ['Central African Republic', 'Chad', 'Egypt', 'Eritrea', 'Ethiopia', 'Libya', 'South Sudan'],
    'United Republic of Tanzania': ['Burundi', 'Democratic Republic of the Congo', 'Kenya', 'Malawi', 'Mozambique', 'Rwanda', 'Uganda', 'Zambia'],
    'Togo': ['Benin', 'Burkina Faso', 'Ghana'],
    'Tunisia': ['Algeria', 'Libya'],
    'Uganda': ['Democratic Republic of the Congo', 'Kenya', 'Rwanda', 'South Sudan', 'United Republic of Tanzania'],
    'Zambia': ['Angola', 'Botswana', 'Democratic Republic of the Congo', 'Malawi', 'Mozambique', 'Namibia', 'United Republic of Tanzania', 'Zimbabwe'],
    'Zimbabwe': ['Botswana', 'Mozambique', 'South Africa', 'Zambia'],
    'Guinea Bissau': ['Guinea', 'Senegal'],
    'Western Sahara': ['Algeria', 'Morocco', 'Mauritania'],
    'Somaliland': ['Ethiopia', 'Somalia', 'Djibouti']
};


    
// Filtriranje GeoJSON imena za Afriku
const europeCountries = [
    'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 
    'Central African Republic', 'Chad', 'Ivory Coast', 'Democratic Republic of the Congo', 
    'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Swaziland', 'Ethiopia', 
    'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 
    'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Morocco', 'Mozambique', 
    'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Senegal', 'Sierra Leone', 'Somalia', 
    'South Africa', 'South Sudan', 'Sudan', 'United Republic of Tanzania', 'Togo', 'Tunisia', 
    'Uganda', 'Zambia', 'Zimbabwe', 'Republic of Congo', 'Western Sahara', 'Somaliland'
];
    
    
// Zastave
const countries = [
    { name: 'Algeria', code: 'DZ', flag: 'https://flagcdn.com/w40/dz.png' },
    { name: 'Angola', code: 'AO', flag: 'https://flagcdn.com/w40/ao.png' },
    { name: 'Benin', code: 'BJ', flag: 'https://flagcdn.com/w40/bj.png' },
    { name: 'Botswana', code: 'BW', flag: 'https://flagcdn.com/w40/bw.png' },
    { name: 'Burkina Faso', code: 'BF', flag: 'https://flagcdn.com/w40/bf.png' },
    { name: 'Burundi', code: 'BI', flag: 'https://flagcdn.com/w40/bi.png' },
    { name: 'Cameroon', code: 'CM', flag: 'https://flagcdn.com/w40/cm.png' },
    { name: 'Central African Republic', code: 'CF', flag: 'https://flagcdn.com/w40/cf.png' },
    { name: 'Chad', code: 'TD', flag: 'https://flagcdn.com/w40/td.png' },
    { name: 'Ivory Coast', code: 'CI', flag: 'https://flagcdn.com/w40/ci.png' },
    { name: 'Democratic Republic of the Congo', code: 'CD', flag: 'https://flagcdn.com/w40/cd.png' },
    { name: 'Djibouti', code: 'DJ', flag: 'https://flagcdn.com/w40/dj.png' },
    { name: 'Egypt', code: 'EG', flag: 'https://flagcdn.com/w40/eg.png' },
    { name: 'Equatorial Guinea', code: 'GQ', flag: 'https://flagcdn.com/w40/gq.png' },
    { name: 'Eritrea', code: 'ER', flag: 'https://flagcdn.com/w40/er.png' },
    { name: 'Swaziland', code: 'SZ', flag: 'https://flagcdn.com/w40/sz.png' },
    { name: 'Ethiopia', code: 'ET', flag: 'https://flagcdn.com/w40/et.png' },
    { name: 'Gabon', code: 'GA', flag: 'https://flagcdn.com/w40/ga.png' },
    { name: 'Gambia', code: 'GM', flag: 'https://flagcdn.com/w40/gm.png' },
    { name: 'Ghana', code: 'GH', flag: 'https://flagcdn.com/w40/gh.png' },
    { name: 'Guinea', code: 'GN', flag: 'https://flagcdn.com/w40/gn.png' },
    { name: 'Guinea Bissau', code: 'GW', flag: 'https://flagcdn.com/w40/gw.png' },
    { name: 'Kenya', code: 'KE', flag: 'https://flagcdn.com/w40/ke.png' },
    { name: 'Lesotho', code: 'LS', flag: 'https://flagcdn.com/w40/ls.png' },
    { name: 'Liberia', code: 'LR', flag: 'https://flagcdn.com/w40/lr.png' },
    { name: 'Libya', code: 'LY', flag: 'https://flagcdn.com/w40/ly.png' },
    { name: 'Madagascar', code: 'MG', flag: 'https://flagcdn.com/w40/mg.png' },
    { name: 'Malawi', code: 'MW', flag: 'https://flagcdn.com/w40/mw.png' },
    { name: 'Mali', code: 'ML', flag: 'https://flagcdn.com/w40/ml.png' },
    { name: 'Mauritania', code: 'MR', flag: 'https://flagcdn.com/w40/mr.png' },
    { name: 'Morocco', code: 'MA', flag: 'https://flagcdn.com/w40/ma.png' },
    { name: 'Mozambique', code: 'MZ', flag: 'https://flagcdn.com/w40/mz.png' },
    { name: 'Namibia', code: 'NA', flag: 'https://flagcdn.com/w40/na.png' },
    { name: 'Niger', code: 'NE', flag: 'https://flagcdn.com/w40/ne.png' },
    { name: 'Nigeria', code: 'NG', flag: 'https://flagcdn.com/w40/ng.png' },
    { name: 'Rwanda', code: 'RW', flag: 'https://flagcdn.com/w40/rw.png' },
    { name: 'Senegal', code: 'SN', flag: 'https://flagcdn.com/w40/sn.png' },
    { name: 'Sierra Leone', code: 'SL', flag: 'https://flagcdn.com/w40/sl.png' },
    { name: 'Somalia', code: 'SO', flag: 'https://flagcdn.com/w40/so.png' },
    { name: 'South Africa', code: 'ZA', flag: 'https://flagcdn.com/w40/za.png' },
    { name: 'South Sudan', code: 'SS', flag: 'https://flagcdn.com/w40/ss.png' },
    { name: 'Sudan', code: 'SD', flag: 'https://flagcdn.com/w40/sd.png' },
    { name: 'United Republic of Tanzania', code: 'TZ', flag: 'https://flagcdn.com/w40/tz.png' },
    { name: 'Togo', code: 'TG', flag: 'https://flagcdn.com/w40/tg.png' },
    { name: 'Tunisia', code: 'TN', flag: 'https://flagcdn.com/w40/tn.png' },
    { name: 'Uganda', code: 'UG', flag: 'https://flagcdn.com/w40/ug.png' },
    { name: 'Zambia', code: 'ZM', flag: 'https://flagcdn.com/w40/zm.png' },
    { name: 'Zimbabwe', code: 'ZW', flag: 'https://flagcdn.com/w40/zw.png' },
    { name: 'Republic of Congo', code: 'CG', flag: 'https://flagcdn.com/w40/cg.png'},
    { name: 'Western Sahara', code: 'EH', flag: 'https://flagcdn.com/w40/eh.png'},
    { name: 'Somaliland', code: 'SML', flag: 'https://flagcdn.com/w40/so.png.'}
];

    
















//ovaj dio isti za sve kontinente
// Objekt za boje država
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33FF'];
const countryColors = {};

// Initialize an empty array for visited countries
let visitedCountries = [];

const visitedSelectElement = document.getElementById('visited-select');
const visitedCountElement = document.getElementById('visited-count');

const countrySearchInput = document.getElementById('country-search');
const countryListElement = document.getElementById('country-list');

const dropdownToggle = document.getElementById('dropdown-toggle');
const clearVisitedButton = document.getElementById('clear-visited');

const settingsToggle = document.getElementById('settings-toggle');
const settingsMenu = document.getElementById('settings-menu');




// listener za settings
settingsToggle.addEventListener('click', () => {
    const isMenuVisible = settingsMenu.style.display === 'block';
    settingsMenu.style.display = isMenuVisible ? 'none' : 'block';
});



// Function to toggle the dropdown visibility
dropdownToggle.addEventListener('click', () => {
    const isVisible = countryListElement.style.display === 'block';
    countryListElement.style.display = isVisible ? 'none' : 'block';
});



function renderCountryList(filter = '') {
    const countryOptionsElement = document.getElementById('country-options');
    countryOptionsElement.innerHTML = ''; // Clear previous options

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredCountries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country-option');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = country.code;
        checkbox.checked = visitedCountries.includes(country.code);
        
        // Dodaj listener za promjenu statusa checkbox-a
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                addCountryToVisited(country.code);
                colorCountry(country.name); // Oboji državu
            } else {
                removeCountryFromVisited(country.code);
                uncolorCountry(country.name); // Makni boju države
            }
        });

        const flagImg = document.createElement('img');
        flagImg.src = country.flag;
        flagImg.alt = `Flag of ${country.name}`;

        div.appendChild(checkbox);
        div.appendChild(flagImg);
        div.appendChild(document.createTextNode(country.name));

        countryOptionsElement.appendChild(div);
    });
}




// Function to add a country to the visited list
function addCountryToVisited(countryCode) {
    const country = countries.find(c => c.code === countryCode);
    if (!country || visitedCountries.includes(countryCode)) return;

    visitedCountries.push(countryCode);

    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    visitedSelectElement.appendChild(option);
    updateVisitedCount();
}





// Function to remove a country from the visited list
function removeCountryFromVisited(countryCode) {
    visitedCountries = visitedCountries.filter(code => code !== countryCode);
    const optionToRemove = Array.from(visitedSelectElement.options).find(
        option => option.value === countryCode
    );

    if (optionToRemove) {
        optionToRemove.remove();
        updateVisitedCount();
    }
}

// Function to update the visited count
function updateVisitedCount() {
    const count = visitedCountries.length;
    visitedCountElement.textContent = count;
}







// Event listener for the country search input
countrySearchInput.addEventListener('input', (e) => {
    renderCountryList(e.target.value);
});



// Event listener za gumb Clear
clearVisitedButton.addEventListener('click', () => {
    // 1. Isprazni popis visitedCountries
    visitedCountries = [];
    visitedSelectElement.innerHTML = '<option value="" disabled selected>Visited countries</option>';
    updateVisitedCount();

    // 2. Makni kvačice iz popisa zemalja
    const checkboxes = document.querySelectorAll('#country-options input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // 3. Makni boje sa svih obojenih država na karti
    for (let countryName in countryColors) {
        uncolorCountry(countryName);
    }

    // Očisti objekt s bojama za zemlje
    Object.keys(countryColors).forEach(key => delete countryColors[key]);
    
    // Ažuriraj prikaz popisa zemalja
    renderCountryList();
});




// Initial render of the country list
renderCountryList();
    
    
    






// Inicijalizacija mape za Afriku
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [20.0, 0.0], // Centar Afrike (long, lat)
    zoom: 3 // Postavka zumiranja za prikaz cijele regije
});








//ovo je takoder isto
// Kontrola za promjenu stila karte
document.getElementById('style-select').onchange = function() {
    map.setStyle(this.value);
    map.on('style.load', addLayers);
};





//pretrazivanje lokacija
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
}));


// Dodavanje kontrole za zoom i rotaciju
map.addControl(new mapboxgl.NavigationControl());



//da vidis svoju trenutnu lokaciju
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true
}));




let geojsonData;
// Function to add layers to the map
async function addLayers() {
    const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
    geojsonData = await response.json();

    const filteredFeatures = geojsonData.features.filter(feature =>
        europeCountries.includes(feature.properties.ADMIN)
    );

    const filteredGeoJSON = {
        type: 'FeatureCollection',
        features: filteredFeatures
    };

    // Uklanjanje starog izvora
    if (map.getSource('europe-countries')) {
        map.removeSource('europe-countries');
    }

    // Dodavanje novog izvora
    map.addSource('europe-countries', {
        type: 'geojson',
        data: filteredGeoJSON
    });

    // Dodavanje sloja za prikaz država
    map.addLayer({
        id: 'countries-layer',
        type: 'fill',
        source: 'europe-countries',
        paint: {
            'fill-color': ['get', ['get', 'ADMIN'], ['literal', countryColors]],
            'fill-opacity': 0.6
        }
    });

    // Dodavanje sloja za granice
    map.addLayer({
        id: 'borders-layer',
        type: 'line',
        source: 'europe-countries',
        paint: {
            'line-color': '#ffffff',
            'line-width': 1
        }
    });

    
   // Klik na državu za bojanje i dodavanje u visited
    map.on('click', 'countries-layer', (e) => {
        const countryName = e.features[0].properties.ADMIN;

        // Toggle visited status
        if (!visitedCountries.includes(countryName)) {
            // If not visited, add to visited countries
            visitedCountries.push(countryName);
            updateVisitedCountriesDropdown(countryName);
            colorCountry(countryName);
        } else {
            // If visited, remove from visited countries
            removeCountryFromVisited(countryName);
            uncolorCountry(countryName);
        }
        checkCountryInDropdown(countryName, visitedCountries.includes(countryName)); // Update checkbox status
    });


    // Event listener for the dropdown selection
    visitedSelectElement.addEventListener('change', (e) => {
        const selectedCountryName = e.target.value;
        selectCountryFromDropdown(selectedCountryName);
    });
}









// Function to color the country
function colorCountry(countryName) {
    const usedColors = new Set();
    neighbors[countryName]?.forEach(neighbor => {
        if (countryColors[neighbor]) {
            usedColors.add(countryColors[neighbor]);
        }
    });

    for (let color of colors) {
        if (!usedColors.has(color)) {
            countryColors[countryName] = color;
            break;
        }
    }

    map.setPaintProperty('countries-layer', 'fill-color', [
        'get', ['get', 'ADMIN'], ['literal', countryColors]
    ]);

    // Označi checkbox države kada je obojana
    checkCountryInDropdown(countryName, true);
}








// Function to uncolor the country
function uncolorCountry(countryName) {
    delete countryColors[countryName];

    map.setPaintProperty('countries-layer', 'fill-color', [
        'get', ['get', 'ADMIN'], ['literal', countryColors]
    ]);
}




// Function to handle selection from dropdown
function selectCountryFromDropdown(countryName) {
    if (!visitedCountries.includes(countryName)) {
        visitedCountries.push(countryName);
        updateVisitedCountriesDropdown(countryName);
    }

    colorCountry(countryName);
}




// Function to update the visited countries dropdown
function updateVisitedCountriesDropdown(countryName) {
    // Check if the country already exists in the dropdown
    if (![...visitedSelectElement.options].some(option => option.value === countryName)) {
        const option = document.createElement('option');
        option.value = countryName;
        option.textContent = countryName;
        visitedSelectElement.appendChild(option);
        updateVisitedCount(); // Update the count of visited countries
    }
}





// Function to remove a country from the visited list
function removeCountryFromVisited(countryName) {
    visitedCountries = visitedCountries.filter(country => country !== countryName);
    const optionToRemove = Array.from(visitedSelectElement.options).find(
        option => option.value === countryName
    );

    if (optionToRemove) {
        optionToRemove.remove();
        uncolorCountry(countryName); // Uncolor the country on map
        updateVisitedCount(); // Update the count of visited countries
    }
}

// Function to update the visited count
function updateVisitedCount() {
    const count = visitedCountries.length;
    visitedCountElement.textContent = count;
}




// Function to handle checkbox check/uncheck in the dropdown
function checkCountryInDropdown(countryName, isChecked) {
    const country = countries.find(c => c.name === countryName);
    if (!country) return;
    const checkbox = document.querySelector(`input[value="${country.code}"]`);
    if (checkbox) {
        checkbox.checked = isChecked;
    }
}








// Dodavanje event listenera za gumb "Spremi u bazu"
document.getElementById('save-to-db').addEventListener('click', () => {
    fetch('/save-visited-countries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ visitedCountries })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Visited countries successfully saved!');
        } else {
            alert('Error saving visited countries.');
        }
    })
    .catch(error => console.error('Error:', error));
});
    
    
    
    
    
    
    









// Kontrola za prikazivanje granica
document.getElementById('show-borders').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    map.setLayoutProperty('borders-layer', 'visibility', visibility);
};

// Kontrola za prikazivanje država
document.getElementById('show-countries').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    map.setLayoutProperty('countries-layer', 'visibility', visibility);
};

//za ovo dela jako lepo, to je ono kaj trazim
document.getElementById('show-counties').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.includes('boundary')) { // 'admin' slojevi za granice
            map.setLayoutProperty(layer.id, 'visibility', visibility);
        }
    });
};

// Kontrola za prikazivanje gradova
document.getElementById('show-cities').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.includes('settlement') && layer.id.includes('label')) { // Odabir slojeva koji sadrže 'settlement' i 'label'
            map.setLayoutProperty(layer.id, 'visibility', visibility);
        }
    });
};

// Kontrola za prikazivanje naziva drzava
document.getElementById('show-names').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.includes('country-label')) { // ili 'river', ovisno o nazivu sloja
            map.setLayoutProperty(layer.id, 'visibility', visibility);
        }
    });
};


// Kontrola za prikazivanje rijeka, jezera i ostalih voda
document.getElementById('show-water').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.includes('water') && !layer.id.includes('label')) { // Odabir slojeva koji sadrže 'water' bez 'label'
            map.setLayoutProperty(layer.id, 'visibility', visibility);
        }
    });
};


// Kontrola za prikazivanje naziva mora
document.getElementById('show-sea-names').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.includes('water') && layer.id.includes('label')) { // Odabir slojeva koji sadrže 'water' i 'label'
            map.setLayoutProperty(layer.id, 'visibility', visibility);
        }
    });
};


// Kontrola za prikazivanje planina
document.getElementById('show-mountains').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.includes('mountain') || layer.id.includes('hill')) { // Odabir slojeva koji sadrže 'mountain' ili 'hill'
            map.setLayoutProperty(layer.id, 'visibility', visibility);
        }
    });
};


// Kontrola za prikazivanje cesta
document.getElementById('show-roads').onchange = function() {
    const visibility = this.checked ? 'visible' : 'none';
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.includes('road')) { // Odabir slojeva koji sadrže 'road'
            map.setLayoutProperty(layer.id, 'visibility', visibility);
        }
    });
};

















//sad se oboja poligon, nemreju se podslojevi od kvacica sa strane maknuti, no valjda je ovo dovoljno jer imam i po razlicitim stilovima i obojano kak treba
function downloadStaticMap() {
    const mapboxToken = 'pk.eyJ1IjoiY29maSIsImEiOiJjbHl6djlwdm8ycHVxMnFzNnF0NjQ3dzFxIn0.cS7PDb30iYYjVLrmGyDm9A';
    const center = map.getCenter();
    const zoom = map.getZoom();
    const bearing = map.getBearing();
    const pitch = map.getPitch();

    const longitude = parseFloat(center.lng);
    const latitude = parseFloat(center.lat);
    const zoomLevel = parseFloat(zoom);
    const bearingValue = parseFloat(bearing);
    const pitchValue = parseFloat(pitch);

    if (isNaN(longitude) || isNaN(latitude) || isNaN(zoomLevel)) {
        console.error("Longitude, latitude, and zoom must be valid numbers.");
        return;
    }

    const styleURL = map.getStyle().sprite;
    const styleID = styleURL.split('/')[4];

    const width = 1280;
    const height = 840;

    const url = `https://api.mapbox.com/styles/v1/mapbox/${styleID}/static/${longitude},${latitude},${zoomLevel},${bearingValue},${pitchValue}/${width}x${height}?access_token=${mapboxToken}`;
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;

    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw static map image onto the canvas
        ctx.drawImage(img, 0, 0);

        // Render colored polygons for each selected country
        Object.entries(countryColors).forEach(([countryName, color]) => {
            const countryFeature = geojsonData.features.find(feature => feature.properties.ADMIN === countryName);

            if (countryFeature) {
                const coordinates = countryFeature.geometry.coordinates;
                const isMultiPolygon = countryFeature.geometry.type === 'MultiPolygon';

                ctx.fillStyle = color;
                ctx.globalAlpha = 0.6;

                coordinates.forEach(polygon => {
                    const rings = isMultiPolygon ? polygon : [polygon];

                    rings.forEach(ring => {
                        const bounds = ring.reduce((acc, [lon, lat]) => {
                            const projected = map.project([lon, lat]);
                            acc.minX = Math.min(acc.minX, projected.x);
                            acc.minY = Math.min(acc.minY, projected.y);
                            acc.maxX = Math.max(acc.maxX, projected.x);
                            acc.maxY = Math.max(acc.maxY, projected.y);
                            return acc;
                        }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });

                        const polygonCenterX = (bounds.minX + bounds.maxX) / 2;
                        const polygonCenterY = (bounds.minY + bounds.maxY) / 2;

                        const scaleFactor = 1; // Adjust as needed
                        const offsetX = -285;     // Adjust this to move left
                        const offsetY = -62;     // Adjust this to move up

                        ctx.beginPath();
                        ring.forEach((coord, index) => {
                            const [lon, lat] = coord;

                            if (isNaN(lon) || isNaN(lat)) {
                                console.warn(`Skipping invalid coordinate for ${countryName}: [${lon}, ${lat}]`);
                                return;
                            }

                            const projected = map.project([lon, lat]);

                            const adjustedX = polygonCenterX + (projected.x - polygonCenterX) * scaleFactor + offsetX;
                            const adjustedY = polygonCenterY + (projected.y - polygonCenterY) * scaleFactor + offsetY;

                            if (index === 0) {
                                ctx.moveTo(adjustedX, adjustedY);
                            } else {
                                ctx.lineTo(adjustedX, adjustedY);
                            }
                        });

                        ctx.closePath();
                        ctx.fill();
                    });
                });
            }
        });

        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'map-with-colored-countries.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    img.onerror = (error) => {
        console.error("Error loading the map image: ", error);
    };
}


// Use this function to trigger the static image download
document.getElementById('export-png').onclick = downloadStaticMap;





//dela napokon kak treba
async function downloadMapAnimation() {
    const mapboxToken = 'pk.eyJ1IjoiY29maSIsImEiOiJjbHl6djlwdm8ycHVxMnFzNnF0NjQ3dzFxIn0.cS7PDb30iYYjVLrmGyDm9A';
    const center = map.getCenter();
    const zoom = map.getZoom();
    const bearing = map.getBearing();
    const pitch = map.getPitch();

    const longitude = parseFloat(center.lng);
    const latitude = parseFloat(center.lat);
    const zoomLevel = parseFloat(zoom);
    const bearingValue = parseFloat(bearing);
    const pitchValue = parseFloat(pitch);

    if (isNaN(longitude) || isNaN(latitude) || isNaN(zoomLevel)) {
        console.error("Longitude, latitude, and zoom must be valid numbers.");
        return;
    }

    const styleURL = map.getStyle().sprite;
    const styleID = styleURL.split('/')[4];

    const width = 1280;
    const height = 840;

    const url = `https://api.mapbox.com/styles/v1/mapbox/${styleID}/static/${longitude},${latitude},${zoomLevel},${bearingValue},${pitchValue}/${width}x${height}?access_token=${mapboxToken}`;
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;

    img.onload = async () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw the static map image as the background
        ctx.drawImage(img, 0, 0);

        // Initialize the CCapture instance
        const capturer = new CCapture({
            format: 'webm',
            framerate: 1, // Adjust the speed of the animation
            quality: 100
        });

        capturer.start();

        // Add 2-second delay before starting to color countries
        for (let i = 0; i < 1; i++) { // 1 frames at 1 fps = 1 seconds
            capturer.capture(canvas);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Draw each country one by one with delay to create the animation effect
        for (const [countryName, color] of Object.entries(countryColors)) {
            const countryFeature = geojsonData.features.find(feature => feature.properties.ADMIN === countryName);

            if (countryFeature) {
                const coordinates = countryFeature.geometry.coordinates;
                const isMultiPolygon = countryFeature.geometry.type === 'MultiPolygon';

                ctx.fillStyle = color;
                ctx.globalAlpha = 0.6;

                coordinates.forEach(polygon => {
                    const rings = isMultiPolygon ? polygon : [polygon];

                    rings.forEach(ring => {
                        const bounds = ring.reduce((acc, [lon, lat]) => {
                            const projected = map.project([lon, lat]);
                            acc.minX = Math.min(acc.minX, projected.x);
                            acc.minY = Math.min(acc.minY, projected.y);
                            acc.maxX = Math.max(acc.maxX, projected.x);
                            acc.maxY = Math.max(acc.maxY, projected.y);
                            return acc;
                        }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });

                        const polygonCenterX = (bounds.minX + bounds.maxX) / 2;
                        const polygonCenterY = (bounds.minY + bounds.maxY) / 2;

                        const scaleFactor = 1; // Adjust as needed
                        const offsetX = -285;     // Adjust this to move left
                        const offsetY = -62;     // Adjust this to move up

                        ctx.beginPath();
                        ring.forEach((coord, index) => {
                            const [lon, lat] = coord;

                            if (isNaN(lon) || isNaN(lat)) {
                                console.warn(`Skipping invalid coordinate for ${countryName}: [${lon}, ${lat}]`);
                                return;
                            }

                            const projected = map.project([lon, lat]);

                            const adjustedX = polygonCenterX + (projected.x - polygonCenterX) * scaleFactor + offsetX;
                            const adjustedY = polygonCenterY + (projected.y - polygonCenterY) * scaleFactor + offsetY;

                            if (index === 0) {
                                ctx.moveTo(adjustedX, adjustedY);
                            } else {
                                ctx.lineTo(adjustedX, adjustedY);
                            }
                        });

                        ctx.closePath();
                        ctx.fill();
                    });
                });

                // Capture each frame after painting each country
                capturer.capture(canvas);
                await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for each country (1000ms)
            }
        }

        // Add 3-second delay after finishing the coloring
        for (let i = 0; i < 2; i++) { // 2 frames at 1 fps = 2 seconds
            capturer.capture(canvas);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        capturer.stop();
        capturer.save();
    };

    img.onerror = (error) => {
        console.error("Error loading the map image: ", error);
    };
}


// Kontrola za izvoz GIF-a
document.getElementById('export-gif').onclick = downloadMapAnimation;

    
    
    
    

    
    
 




// Dodavanje slojeva prilikom učitavanja
map.on('load', addLayers);


map.on('style.load', function () {
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        console.log(layer.id);
    });
});



//kada refresham da se izbornik postavi na light
window.onload = function() {
    // Postavi izbornik na opciju 'Light' kada se stranica učita
    document.getElementById('style-select').value = 'mapbox://styles/mapbox/light-v10';
    
};

// Prilikom učitavanja stranice postavi sve checkbox-ove na "checked"
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('show-borders').checked = true;
    document.getElementById('show-countries').checked = true;
    document.getElementById('show-counties').checked = true;
    document.getElementById('show-cities').checked = true;
    document.getElementById('show-names').checked = true;
    document.getElementById('show-water').checked = true;
    document.getElementById('show-sea-names').checked = true;
    document.getElementById('show-mountains').checked = true;
    document.getElementById('show-roads').checked = true;
    
    // Osiguraj da su svi slojevi vidljivi
    map.setLayoutProperty('borders-layer', 'visibility', 'visible');
    map.setLayoutProperty('countries-layer', 'visibility', 'visible');
    
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.includes('boundary') || layer.id.includes('settlement') || layer.id.includes('country-label') || 
            (layer.id.includes('water') && !layer.id.includes('label')) || (layer.id.includes('water') && layer.id.includes('label')) || 
            layer.id.includes('mountain') || layer.id.includes('hill') || layer.id.includes('road')) {
            map.setLayoutProperty(layer.id, 'visibility', 'visible');
        }
    });
});
    
    
    










    
    
    
    





//za prikazivanje informacija o drzavama kada se hovera preko njih
const extendedCountryInfo = {
    'Algeria': { capital: 'Algiers', population: '45,010,389', area: '2,381,741 km²', flag: 'https://flagcdn.com/w40/dz.png' },
    'Angola': { capital: 'Luanda', population: '36,684,202', area: '1,246,700 km²', flag: 'https://flagcdn.com/w40/ao.png' },
    'Benin': { capital: 'Porto-Novo', population: '13,301,694', area: '112,622 km²', flag: 'https://flagcdn.com/w40/bj.png' },
    'Botswana': { capital: 'Gaborone', population: '2,630,296', area: '581,730 km²', flag: 'https://flagcdn.com/w40/bw.png' },
    'Burkina Faso': { capital: 'Ouagadougou', population: '22,102,838', area: '272,967 km²', flag: 'https://flagcdn.com/w40/bf.png' },
    'Burundi': { capital: 'Gitega', population: '13,098,467', area: '27,834 km²', flag: 'https://flagcdn.com/w40/bi.png' },
    'Cameroon': { capital: 'Yaoundé', population: '28,524,175', area: '475,442 km²', flag: 'https://flagcdn.com/w40/cm.png' },
    'Central African Republic': { capital: 'Bangui', population: '5,454,533', area: '622,984 km²', flag: 'https://flagcdn.com/w40/cf.png' },
    'Chad': { capital: 'N\'Djamena', population: '18,278,568', area: '1,284,000 km²', flag: 'https://flagcdn.com/w40/td.png' },
    'Ivory Coast': { capital: 'Yamoussoukro', population: '28,711,000', area: '322,463 km²', flag: 'https://flagcdn.com/w40/ci.png' },
    'Democratic Republic of the Congo': { capital: 'Kinshasa', population: '108,407,721', area: '2,344,858 km²', flag: 'https://flagcdn.com/w40/cd.png' },
    'Djibouti': { capital: 'Djibouti', population: '1,120,849', area: '23,200 km²', flag: 'https://flagcdn.com/w40/dj.png' },
    'Egypt': { capital: 'Cairo', population: '112,716,598', area: '1,001,450 km²', flag: 'https://flagcdn.com/w40/eg.png' },
    'Equatorial Guinea': { capital: 'Malabo', population: '1,679,172', area: '28,051 km²', flag: 'https://flagcdn.com/w40/gq.png' },
    'Eritrea': { capital: 'Asmara', population: '3,684,032', area: '117,600 km²', flag: 'https://flagcdn.com/w40/er.png' },
    'Swaziland': { capital: 'Mbabane', population: '1,201,670', area: '17,364 km²', flag: 'https://flagcdn.com/w40/sz.png' },
    'Ethiopia': { capital: 'Addis Ababa', population: '126,527,060', area: '1,104,300 km²', flag: 'https://flagcdn.com/w40/et.png' },
    'Gabon': { capital: 'Libreville', population: '2,340,612', area: '267,668 km²', flag: 'https://flagcdn.com/w40/ga.png' },
    'Gambia': { capital: 'Banjul', population: '2,773,168', area: '11,295 km²', flag: 'https://flagcdn.com/w40/gm.png' },
    'Ghana': { capital: 'Accra', population: '34,121,060', area: '238,533 km²', flag: 'https://flagcdn.com/w40/gh.png' },
    'Guinea': { capital: 'Conakry', population: '14,394,825', area: '245,857 km²', flag: 'https://flagcdn.com/w40/gn.png' },
    'Guinea Bissau': { capital: 'Bissau', population: '2,231,296', area: '36,125 km²', flag: 'https://flagcdn.com/w40/gw.png' },
    'Kenya': { capital: 'Nairobi', population: '54,027,487', area: '580,367 km²', flag: 'https://flagcdn.com/w40/ke.png' },
    'Lesotho': { capital: 'Maseru', population: '2,330,000', area: '30,355 km²', flag: 'https://flagcdn.com/w40/ls.png' },
    'Liberia': { capital: 'Monrovia', population: '5,428,197', area: '111,369 km²', flag: 'https://flagcdn.com/w40/lr.png' },
    'Libya': { capital: 'Tripoli', population: '6,812,341', area: '1,759,541 km²', flag: 'https://flagcdn.com/w40/ly.png' },
    'Madagascar': { capital: 'Antananarivo', population: '30,344,000', area: '587,041 km²', flag: 'https://flagcdn.com/w40/mg.png' },
    'Malawi': { capital: 'Lilongwe', population: '21,279,597', area: '118,484 km²', flag: 'https://flagcdn.com/w40/mw.png' },
    'Mali': { capital: 'Bamako', population: '22,973,764', area: '1,240,192 km²', flag: 'https://flagcdn.com/w40/ml.png' },
    'Mauritania': { capital: 'Nouakchott', population: '4,901,981', area: '1,030,700 km²', flag: 'https://flagcdn.com/w40/mr.png' },
    'Morocco': { capital: 'Rabat', population: '37,984,655', area: '446,550 km²', flag: 'https://flagcdn.com/w40/ma.png' },
    'Mozambique': { capital: 'Maputo', population: '33,089,461', area: '801,590 km²', flag: 'https://flagcdn.com/w40/mz.png' },
    'Namibia': { capital: 'Windhoek', population: '2,550,226', area: '825,615 km²', flag: 'https://flagcdn.com/w40/na.png' },
    'Niger': { capital: 'Niamey', population: '27,291,921', area: '1,267,000 km²', flag: 'https://flagcdn.com/w40/ne.png' },
    'Nigeria': { capital: 'Abuja', population: '223,804,632', area: '923,769 km²', flag: 'https://flagcdn.com/w40/ng.png' },
    'Rwanda': { capital: 'Kigali', population: '13,687,000', area: '26,338 km²', flag: 'https://flagcdn.com/w40/rw.png' },
    'Senegal': { capital: 'Dakar', population: '17,733,725', area: '196,722 km²', flag: 'https://flagcdn.com/w40/sn.png' },
    'Sierra Leone': { capital: 'Freetown', population: '8,636,000', area: '71,740 km²', flag: 'https://flagcdn.com/w40/sl.png' },
    'Somalia': { capital: 'Mogadishu', population: '17,066,000', area: '637,657 km²', flag: 'https://flagcdn.com/w40/so.png' },
    'South Africa': { capital: 'Pretoria', population: '60,041,994', area: '1,221,037 km²', flag: 'https://flagcdn.com/w40/za.png' },
    'South Sudan': { capital: 'Juba', population: '11,556,698', area: '619,745 km²', flag: 'https://flagcdn.com/w40/ss.png' },
    'Sudan': { capital: 'Khartoum', population: '48,109,000', area: '1,886,068 km²', flag: 'https://flagcdn.com/w40/sd.png' },
    'United Republic of Tanzania': { capital: 'Dodoma', population: '67,438,700', area: '945,087 km²', flag: 'https://flagcdn.com/w40/tz.png' },
    'Togo': { capital: 'Lomé', population: '8,746,000', area: '56,785 km²', flag: 'https://flagcdn.com/w40/tg.png' },
    'Tunisia': { capital: 'Tunis', population: '12,262,054', area: '163,610 km²', flag: 'https://flagcdn.com/w40/tn.png' },
    'Uganda': { capital: 'Kampala', population: '48,432,300', area: '241,038 km²', flag: 'https://flagcdn.com/w40/ug.png' },
    'Zambia': { capital: 'Lusaka', population: '20,017,675', area: '752,612 km²', flag: 'https://flagcdn.com/w40/zm.png' },
    'Zimbabwe': { capital: 'Harare', population: '15,269,025', area: '390,757 km²', flag: 'https://flagcdn.com/w40/zw.png' },
    'Republic of Congo': { capital: 'Brazzaville', population: '6,206,000', area: '342,000 km²', flag: 'https://flagcdn.com/w40/cg.png' },
    'Western Sahara': { capital: 'Laayoune', population: '652,271', area: '266,000 km²', flag: 'https://flagcdn.com/w40/eh.png' },
    'Somaliland': { capital: 'Hargeisa', population: '5,700,000', area: '137,600 km²', flag: 'https://flagcdn.com/w40/so.png' }
};
















// Kreirajte div za prikaz informacija o državi
const countryInfoPopup = document.createElement('div');
countryInfoPopup.id = 'country-info-popup';
countryInfoPopup.style.position = 'absolute';
countryInfoPopup.style.display = 'none';
countryInfoPopup.style.backgroundColor = 'white';
countryInfoPopup.style.padding = '5px';
countryInfoPopup.style.border = '1px solid #ccc';
countryInfoPopup.style.borderRadius = '3px';
document.body.appendChild(countryInfoPopup);

// Event listener za checkbox u postavkama
document.getElementById('enable-hover-info').addEventListener('change', (e) => {
    const hoverEnabled = e.target.checked;
    if (hoverEnabled) {
        activateHoverInfo();
    } else {
        deactivateHoverInfo();
    }
});

// Funkcija za aktiviranje prikaza informacija o državi na hover
function activateHoverInfo() {
    map.on('mousemove', 'countries-layer', showCountryInfo);
    map.on('mouseleave', 'countries-layer', hideCountryInfo);
}

// Funkcija za deaktiviranje prikaza informacija o državi na hover
function deactivateHoverInfo() {
    map.off('mousemove', 'countries-layer', showCountryInfo);
    map.off('mouseleave', 'countries-layer', hideCountryInfo);
    hideCountryInfo(); // Sakrij informacije ako su prikazane
}

// Funkcija za prikaz informacija o državi
// Funkcija za prikaz informacija o državi (ispravljena)
function showCountryInfo(e) {
    const feature = e.features[0];
    if (!feature) return;

    // Koristimo ispravne ključeve za naziv i kod države
    const countryName = feature.properties.ADMIN || 'Unknown';
    const countryCode = feature.properties.ISO_A3 || 'N/A';

    const country = extendedCountryInfo[countryName];
    const neighborsList = neighbors[countryName]?.join(', ') || 'N/A';

    countryInfoPopup.innerHTML = `
        <div class="popup-header">
            <img src="${country?.flag || ''}" alt="Flag of ${countryName}" class="popup-flag">
            <strong>${countryName}</strong>
        </div>
        <div class="popup-content">
            <p><strong>Code:</strong> ${countryCode}</p>
            <p><strong>Capital:</strong> ${country?.capital || 'N/A'}</p>
            <p><strong>Population:</strong> ${country?.population || 'N/A'}</p>
            <p><strong>Area:</strong> ${country?.area || 'N/A'}</p>
            <p><strong>Neighbors:</strong> ${neighborsList}</p>
        </div>
    `;
    
    countryInfoPopup.style.display = 'block';
    countryInfoPopup.style.left = `${e.point.x + 10}px`;
    countryInfoPopup.style.top = `${e.point.y + 10}px`;
}



// Funkcija za sakrivanje informacija o državi
function hideCountryInfo() {
    countryInfoPopup.style.display = 'none';
}

// Inicijalizacija hover funkcionalnosti prilikom učitavanja stranice
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('enable-hover-info').checked) {
        activateHoverInfo();
    }
});








//za markiranje glavnih gradova
const capitalCoordinates = {
    'Algeria': { lng: 3.0588, lat: 36.7538 },
    'Angola': { lng: 13.242, lat: -8.839 },
    'Benin': { lng: 2.6323, lat: 6.4969 },
    'Botswana': { lng: 25.9231, lat: -24.6581 },
    'Burkina Faso': { lng: -1.5339, lat: 12.3714 },
    'Burundi': { lng: 29.9246, lat: -3.3822 },
    'Cameroon': { lng: 11.5167, lat: 3.848 },
    'Central African Republic': { lng: 18.5582, lat: 4.3947 },
    'Chad': { lng: 15.0472, lat: 12.1222 },
    'Ivory Coast': { lng: -5.2767, lat: 6.8186 },
    'Democratic Republic of the Congo': { lng: 15.2663, lat: -4.4419 },
    'Djibouti': { lng: 43.145, lat: 11.5721 },
    'Egypt': { lng: 31.2357, lat: 30.0444 },
    'Equatorial Guinea': { lng: 8.7815, lat: 3.7506 },
    'Eritrea': { lng: 38.9318, lat: 15.3229 },
    'Swaziland': { lng: 31.1333, lat: -26.3167 },
    'Ethiopia': { lng: 38.7636, lat: 9.0108 },
    'Gabon': { lng: 9.448, lat: 0.3901 },
    'Gambia': { lng: -16.573, lat: 13.4549 },
    'Ghana': { lng: -0.186964, lat: 5.6037 },
    'Guinea': { lng: -13.7108, lat: 9.537 },
    'Guinea Bissau': { lng: -15.1804, lat: 11.865 },
    'Kenya': { lng: 36.8219, lat: -1.2921 },
    'Lesotho': { lng: 27.4788, lat: -29.3142 },
    'Liberia': { lng: -10.7969, lat: 6.3005 },
    'Libya': { lng: 13.1913, lat: 32.8872 },
    'Madagascar': { lng: 47.5316, lat: -18.8792 },
    'Malawi': { lng: 33.7741, lat: -13.9626 },
    'Mali': { lng: -7.9897, lat: 12.6392 },
    'Mauritania': { lng: -15.9697, lat: 18.0735 },
    'Mauritius': { lng: 57.4977, lat: -20.1609 },
    'Morocco': { lng: -6.8498, lat: 34.0209 },
    'Mozambique': { lng: 32.5887, lat: -25.9655 },
    'Namibia': { lng: 17.0832, lat: -22.5597 },
    'Niger': { lng: 2.1173, lat: 13.5126 },
    'Nigeria': { lng: 7.4891, lat: 9.0723 },
    'Rwanda': { lng: 30.0605, lat: -1.9499 },
    'Senegal': { lng: -17.454, lat: 14.7167 },
    'Sierra Leone': { lng: -13.2317, lat: 8.4863 },
    'Somalia': { lng: 45.3182, lat: 2.0469 },
    'South Africa': { lng: 28.2293, lat: -25.7461 },
    'South Sudan': { lng: 31.5789, lat: 4.8517 },
    'Sudan': { lng: 32.5599, lat: 15.5007 },
    'United Republic of Tanzania': { lng: 35.7516, lat: -6.1629 },
    'Togo': { lng: 1.2255, lat: 6.1319 },
    'Tunisia': { lng: 10.166, lat: 36.8065 },
    'Uganda': { lng: 32.5825, lat: 0.3476 },
    'Zambia': { lng: 28.3228, lat: -15.3875 },
    'Zimbabwe': { lng: 31.053, lat: -17.8249 },
    'Republic of Congo': { lng: 15.2832, lat: -4.2634 },
    'Western Sahara': { lng: -13.1727, lat: 27.1536 },
    'Somaliland': { lng: 44.0626, lat: 9.5585 }
};

// Function to get the capital name
function getCapitalName(country) {
    const capitalNames = {
        'Algeria': 'Algiers',
        'Angola': 'Luanda',
        'Benin': 'Porto-Novo',
        'Botswana': 'Gaborone',
        'Burkina Faso': 'Ouagadougou',
        'Burundi': 'Gitega',
        'Cameroon': 'Yaoundé',
        'Central African Republic': 'Bangui',
        'Chad': 'N\'Djamena',
        'Ivory Coast': 'Yamoussoukro',
        'Democratic Republic of the Congo': 'Kinshasa',
        'Djibouti': 'Djibouti',
        'Egypt': 'Cairo',
        'Equatorial Guinea': 'Malabo',
        'Eritrea': 'Asmara',
        'Swaziland': 'Mbabane',
        'Ethiopia': 'Addis Ababa',
        'Gabon': 'Libreville',
        'Gambia': 'Banjul',
        'Ghana': 'Accra',
        'Guinea': 'Conakry',
        'Guinea Bissau': 'Bissau',
        'Kenya': 'Nairobi',
        'Lesotho': 'Maseru',
        'Liberia': 'Monrovia',
        'Libya': 'Tripoli',
        'Madagascar': 'Antananarivo',
        'Malawi': 'Lilongwe',
        'Mali': 'Bamako',
        'Mauritania': 'Nouakchott',
        'Mauritius': 'Port Louis',
        'Morocco': 'Rabat',
        'Mozambique': 'Maputo',
        'Namibia': 'Windhoek',
        'Niger': 'Niamey',
        'Nigeria': 'Abuja',
        'Rwanda': 'Kigali',
        'Senegal': 'Dakar',
        'Sierra Leone': 'Freetown',
        'Somalia': 'Mogadishu',
        'South Africa': 'Pretoria',
        'South Sudan': 'Juba',
        'Sudan': 'Khartoum',
        'United Republic of Tanzania': 'Dodoma',
        'Togo': 'Lomé',
        'Tunisia': 'Tunis',
        'Uganda': 'Kampala',
        'Zambia': 'Lusaka',
        'Zimbabwe': 'Harare',
        'Republic of Congo': 'Brazzaville',
        'Western Sahara': 'Laayoune',
        'Somaliland': 'Hargeisa'
    };
    return capitalNames[country] || 'N/A';
}











// Globalni niz za pohranu markera
let markers = [];

async function getWeatherData(lat, lng) {
    try {
        const response = await fetch(`/weather?lat=${lat}&lng=${lng}`);
        const data = await response.json();
        
        if (data.error) {
            console.error("Greška:", data.error);
            return null;
        }

        return {
            temperature: data.temperature,
            description: data.description,
            icon: data.icon
        };
    } catch (error) {
        console.error("Greška pri dohvaćanju vremenskih podataka:", error);
        return null;
    }
}






const capitalOffsets = {
    'Algeria': 1,
    'Angola': 1,
    'Benin': 1,
    'Botswana': 2,
    'Burkina Faso': 0,
    'Burundi': 2,
    'Cameroon': 1,
    'Central African Republic': 1,
    'Chad': 1,
    'Ivory Coast': 0,
    'Democratic Republic of the Congo': 1,
    'Djibouti': 3,
    'Egypt': 2,
    'Equatorial Guinea': 1,
    'Eritrea': 3,
    'Swaziland': 2,
    'Ethiopia': 3,
    'Gabon': 1,
    'Gambia': 0,
    'Ghana': 0,
    'Guinea': 0,
    'Guinea Bissau': 0,
    'Kenya': 3,
    'Lesotho': 2,
    'Liberia': 0,
    'Libya': 2,
    'Madagascar': 3,
    'Malawi': 2,
    'Mali': 0,
    'Mauritania': 0,
    'Mauritius': 4,
    'Morocco': 1,
    'Mozambique': 2,
    'Namibia': 2,
    'Niger': 1,
    'Nigeria': 1,
    'Rwanda': 2,
    'Senegal': 0,
    'Sierra Leone': 0,
    'Somalia': 3,
    'South Africa': 2,
    'South Sudan': 3,
    'Sudan': 2,
    'United Republic of Tanzania': 3,
    'Togo': 0,
    'Tunisia': 1,
    'Uganda': 3,
    'Zambia': 2,
    'Zimbabwe': 2,
    'Republic of Congo': 1,
    'Western Sahara': 0,
    'Somaliland': 3
};








function getLocalDate(lat, country) {
    const now = new Date();
    const utcOffset = capitalOffsets[country] * 60 * 60 * 1000; // UTC offset in milliseconds
    const localTime = new Date(now.getTime() + utcOffset);

    // Format the date and time
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // Use 24-hour format
        timeZone: 'UTC', // To ensure the date is calculated correctly
    };

    return localTime.toLocaleString('hr-HR', options);
}



// Funkcija za dodavanje markera za glavne gradove
async function addCapitalMarkers() {
    for (const country in capitalCoordinates) {
        const { lng, lat } = capitalCoordinates[country];

        // Fetch weather data
        const weatherData = await getWeatherData(lat, lng);

        // Create marker using location icon
        const markerElement = document.createElement('div');
        markerElement.className = 'marker';
        
        const marker = new mapboxgl.Marker(markerElement)
            .setLngLat([lng, lat])
            .addTo(map);

        // Prepare popup text with weather data if available
        const capitalName = getCapitalName(country);
        const currentDate = getLocalDate(lat, country); // Get local date
        
        const popupContent = document.createElement('div');
        popupContent.className = 'popup-content';
        popupContent.innerHTML = `
            <h4 class="popup-title">${country} - Capital city: ${capitalName}</h4>
            <p class="popup-time">Local time: ${currentDate}</p>
            ${weatherData ? `
                <p class="popup-temperature">Temperature: ${weatherData.temperature.toFixed(1)}°C</p>
                <p class="popup-description">Description: ${weatherData.description}</p>
                <img src="https://openweathermap.org/img/wn/${weatherData.icon}.png" alt="${weatherData.description}" class="popup-icon" />
            ` : ''}
        `;

        const popup = new mapboxgl.Popup({ closeButton: false, anchor: 'top' }).setDOMContent(popupContent);

        markerElement.addEventListener('mouseenter', () => {
            popup.setLngLat([lng, lat]).addTo(map);
        });

        markerElement.addEventListener('mouseleave', () => {
            popup.remove();
        });

        markers.push(marker);
    }
}






// Funkcija za uklanjanje markera glavnih gradova
function removeCapitalMarkers() {
    // Ukloni sve markere iz mape
    markers.forEach(marker => marker.remove());
    markers = []; // Očisti niz markera
}

// Event listener za checkbox
document.getElementById('enable-capital-markers').addEventListener('change', (e) => {
    const capitalMarkersEnabled = e.target.checked;
    if (capitalMarkersEnabled) {
        addCapitalMarkers(); // Dodaj markere kada je checkbox uključen
    } else {
        removeCapitalMarkers(); // Ukloni markere ako je checkbox isključen
    }
});

// Inicijalizacija checkboxa na početku
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('enable-capital-markers').checked = false; // Postavi checkbox na isključen
});
 
    
    
    
    
    
    
   