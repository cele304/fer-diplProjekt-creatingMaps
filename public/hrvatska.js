


mapboxgl.accessToken = 'pk.eyJ1IjoiY29maSIsImEiOiJjbHl6djlwdm8ycHVxMnFzNnF0NjQ3dzFxIn0.cS7PDb30iYYjVLrmGyDm9A';






const neighbors = {
    "Zagrebačka": ["Grad Zagreb", "Krapinsko-Zagorska", "Varaždinska", "Sisačko-Moslavačka", "Karlovačka", "Bjelovarska-Bilogorska"],
    "Krapinsko-Zagorska": ["Zagrebačka", "Varaždinska", "Bjelovarska-Bilogorska", "Grad Zagreb"],
    "Varaždinska": ["Krapinsko-Zagorska", "Međimurska", "Koprivničko-Križevačka", "Zagrebačka"],
    "Međimurska": ["Varaždinska", "Koprivničko-Križevačka"],
    "Koprivničko-Križevačka": ["Međimurska", "Varaždinska", "Bjelovarska-Bilogorska", "Virovitičko-Podravska"],
    "Bjelovarska-Bilogorska": ["Krapinsko-Zagorska", "Varaždinska", "Koprivničko-Križevačka", "Virovitičko-Podravska", "Zagrebačka", "Sisačko-Moslavačka"],
    "Virovitičko-Podravska": ["Koprivničko-Križevačka", "Bjelovarsko-Bilogorska", "Požeško-Slavonska", "Osječko-Baranjska"],
    "Osječko-Baranjska": ["Virovitičko-Podravska", "Požeško-Slavonska", "Vukovarsko-Srijemska"],
    "Požeško-Slavonska": ["Virovitičko-Podravska", "Osječko-Baranjska", "Brodsko-Posavska"],
    "Brodsko-Posavska": ["Požeško-Slavonska", "Vukovarsko-Srijemska", "Sisačko-Moslavačka"],
    "Vukovarsko-Srijemska": ["Osječko-Baranjska", "Brodsko-Posavska"],
    "Primorsko-Goranska": ["Istarska", "Ličko-Senjska", "Karlovačka", "Zadarska"],
    "Istarska": ["Primorsko-Goranska"],
    "Ličko-Senjska": ["Primorsko-Goranska", "Karlovačka", "Zadarska", "Šibensko-Kninska"],
    "Karlovačka": ["Primorsko-Goranska", "Zagrebačka", "Sisačko-Moslavačka", "Ličko-Senjska"],
    "Sisačko-Moslavačka": ["Zagrebačka", "Karlovačka", "Bjelovarska-Bilogorska", "Brodsko-Posavska", "Ličko-Senjska", "Grad Zagreb"],
    "Zadarska": ["Ličko-Senjska", "Šibensko-Kninska", "Primorsko-Goranska"],
    "Šibensko-Kninska": ["Zadarska", "Splitsko-Dalmatinska"],
    "Splitsko-Dalmatinska": ["Šibensko-Kninska", "Dubrovačko-Neretvanska"],
    "Dubrovačko-Neretvanska": ["Splitsko-Dalmatinska"],
    "Grad Zagreb": ["Sisačko-Moslavačka", "Zagrebačka", "Krapinsko-Zagorska"]
};
    
    
    
    
    
    
const europeCountries = [
    'Grad Zagreb',
    'Zagrebačka',
    'Krapinsko-Zagorska',
    'Varaždinska',
    'Međimurska',
    'Brodsko-Posavska',
    'Virovitičko-Podravska',
    'Osječko-Baranjska',
    'Bjelovarska-Bilogorska',
    'Primorsko-Goranska',
    'Ličko-Senjska',
    'Karlovačka',
    'Istarska',
    'Zadarska',
    'Šibensko-Kninska',
    'Splitsko-Dalmatinska',
    'Dubrovačko-Neretvanska',
    'Sisačko-Moslavačka'
];
    
    

const countries = [
    { name: 'Grad Zagreb', code: 'HR-ZG' },
    { name: 'Zagrebačka', code: 'HR-ZG' },
    { name: 'Krapinsko-Zagorska', code: 'HR-KA' },
    { name: 'Varaždinska', code: 'HR-VA' },
    { name: 'Međimurska', code: 'HR-ME' },
    { name: 'Brodsko-Posavska', code: 'HR-BP' },
    { name: 'Virovitičko-Podravska', code: 'HR-VP' },
    { name: 'Osječko-Baranjska', code: 'HR-OB' },
    { name: 'Bjelovarsko-Bilogorska', code: 'HR-BB' },
    { name: 'Primorsko-Goranska', code: 'HR-PG' },
    { name: 'Ličko-Senjska', code: 'HR-LS' },
    { name: 'Karlovačka', code: 'HR-KA' },
    { name: 'Istarska', code: 'HR-IS' },
    { name: 'Zadarska', code: 'HR-ZA' },
    { name: 'Šibensko-Kninska', code: 'HR-SK' },
    { name: 'Splitsko-Dalmatinska', code: 'HR-SD' },
    { name: 'Dubrovačko-Neretvanska', code: 'HR-DN' },
    { name: 'Sisačko-Moslavačka', code: 'HR-SK'}
];
    
    

const extendedCountryInfo = {
    'Grad Zagreb': { capital: 'Zagreb', population: '769,944', area: '641 km²', flag: '' },
    'Zagrebačka': { capital: 'Zagreb', population: '317,606', area: '3,078 km²', flag: '' },
    'Krapinsko-Zagorska': { capital: 'Krapina', population: '115,406', area: '1,224 km²', flag: '' },
    'Varaždinska': { capital: 'Varaždin', population: '160,264', area: '1,261 km²', flag: '' },
    'Međimurska': { capital: 'Čakovec', population: '104,346', area: '729 km²', flag: '' },
    'Brodsko-Posavska': { capital: 'Slavonski Brod', population: '130,782', area: '2,030 km²', flag: '' },
    'Virovitičko-Podravska': { capital: 'Virovitica', population: '70,660', area: '2,024 km²', flag: '' },
    'Osječko-Baranjska': { capital: 'Osijek', population: '259,481', area: '4,155 km²', flag: '' },
    'Bjelovarska-Bilogorska': { capital: 'Bjelovar', population: '102,295', area: '2,640 km²', flag: '' },
    'Primorsko-Goranska': { capital: 'Rijeka', population: '265,419', area: '3,588 km²', flag: '' },
    'Ličko-Senjska': { capital: 'Gospić', population: '42,893', area: '5,353 km²', flag: '' },
    'Karlovačka': { capital: 'Karlovac', population: '114,129', area: '3,622 km²', flag: '' },
    'Istarska': { capital: 'Pula', population: '195,794', area: '2,813 km²', flag: '' },
    'Zadarska': { capital: 'Zadar', population: '160,340', area: '3,646 km²', flag: '' },
    'Šibensko-Kninska': { capital: 'Šibenik', population: '98,213', area: '2,984 km²', flag: '' },
    'Splitsko-Dalmatinska': { capital: 'Split', population: '425,412', area: '4,524 km²', flag: '' },
    'Dubrovačko-Neretvanska': { capital: 'Dubrovnik', population: '115,862', area: '1,782 km²', flag: '' },
    'Sisačko-Moslavačka': {capital: 'Sisak', population: '140 549', area: '4 468 km²', flag: ''}
};





const capitalCoordinates = {
    'Grad Zagreb': { lng: 15.9819, lat: 45.815 },
    'Zagrebačka': { lng: 15.9819, lat: 45.815 }, // Zagreb
    'Krapinsko-Zagorska': { lng: 15.8794, lat: 46.1581 }, // Krapina
    'Varaždinska': { lng: 16.3366, lat: 46.3057 }, // Varaždin
    'Međimurska': { lng: 16.4276, lat: 46.3843 }, // Čakovec
    'Brodsko-Posavska': { lng: 18.0119, lat: 45.1603 }, // Slavonski Brod
    'Virovitičko-Podravska': { lng: 17.3831, lat: 45.8311 }, // Virovitica
    'Osječko-Baranjska': { lng: 18.6955, lat: 45.554 }, // Osijek
    'Bjelovarska-Bilogorska': { lng: 16.8435, lat: 45.8986 }, // Bjelovar
    'Primorsko-Goranska': { lng: 14.4422, lat: 45.3271 }, // Rijeka
    'Ličko-Senjska': { lng: 15.3757, lat: 44.5469 }, // Gospić
    'Karlovačka': { lng: 15.547, lat: 45.4875 }, // Karlovac
    'Istarska': { lng: 13.8506, lat: 44.8666 }, // Pula
    'Zadarska': { lng: 15.2314, lat: 44.1194 }, // Zadar
    'Šibensko-Kninska': { lng: 15.895, lat: 43.734 }, // Šibenik
    'Splitsko-Dalmatinska': { lng: 16.4402, lat: 43.5081 }, // Split
    'Dubrovačko-Neretvanska': { lng: 18.0944, lat: 42.6507 }, // Dubrovnik
    'Sisačko-Moslavačka': {lng: 16.36, lat: 45.48} //Sisak
};


function getCapitalName(county) {
    const capitalNames = {
        'Grad Zagreb': 'Zagreb',
        'Zagrebačka': 'Zagreb',
        'Krapinsko-Zagorska': 'Krapina',
        'Varaždinska': 'Varaždin',
        'Međimurska': 'Čakovec',
        'Brodsko-Posavska': 'Slavonski Brod',
        'Virovitičko-Podravska': 'Virovitica',
        'Osječko-Baranjska': 'Osijek',
        'Bjelovarska-Bilogorska': 'Bjelovar',
        'Primorsko-Goranska': 'Rijeka',
        'Ličko-Senjska': 'Gospić',
        'Karlovačka': 'Karlovac',
        'Istarska': 'Pula',
        'Zadarska': 'Zadar',
        'Šibensko-Kninska': 'Šibenik',
        'Splitsko-Dalmatinska': 'Split',
        'Dubrovačko-Neretvanska': 'Dubrovnik',
        'Sisačko-Moslavačka': 'Sisak'
    };
    return capitalNames[county] || 'N/A';
}



const capitalOffsets = {
    'Grad Zagreb': 1,
    'Zagrebačka': 1,
    'Krapinsko-Zagorska': 1,
    'Varaždinska': 1,
    'Međimurska': 1,
    'Brodsko-Posavska': 1,
    'Virovitičko-Podravska': 1,
    'Osječko-Baranjska': 1,
    'Bjelovarska-Bilogorska': 1,
    'Primorsko-Goranska': 1,
    'Ličko-Senjska': 1,
    'Karlovačka': 1,
    'Istarska': 1,
    'Zadarska': 1,
    'Šibensko-Kninska': 1,
    'Splitsko-Dalmatinska': 1,
    'Dubrovačko-Neretvanska': 1,
    'Sisačko-Moslavačka': 1
};

    
        
// Inicijalizacija mape za Hrvatsku
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [15.2, 45.1], // Geografski centar Hrvatske
    zoom: 6 // Prikaz cijele Hrvatske
});

    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    





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

        /*
        const flagImg = document.createElement('img');
        flagImg.src = country.flag;
        flagImg.alt = `Flag of ${country.name}`;
        */
        div.appendChild(checkbox);
        //div.appendChild(flagImg);
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





let geojsonData
async function addLayers() {
    // Fetching the Croatian TopoJSON data
    const response = await fetch('https://gist.githubusercontent.com/franraknic/f3419d5e915115cd1feba681e8056f73/raw/00c2c67425df4e530efecd7aca11128a8865b142/zup.geojson');
    const topojsonData = await response.json();
    
    // Log the fetched data
    //console.log('Fetched TopoJSON:', topojsonData);

    // Convert TopoJSON to GeoJSON using topojson-client
    geojsonData = topojson.feature(topojsonData, topojsonData.objects.croatia);
    
    // Check if features are available
    if (!geojsonData.features || geojsonData.features.length === 0) {
        console.warn('No features found in GeoJSON.');
        return; // Exit if no features are found
    }

    // Add the new source for the GeoJSON data
    map.addSource('croatia-counties', {
        type: 'geojson',
        data: geojsonData
    });

    // Add a layer to show the counties
    map.addLayer({
        id: 'countries-layer',
        type: 'fill',
        source: 'croatia-counties',
        paint: {
            'fill-color': ['get', ['get', 'NAME_1'], ['literal', countryColors]],
            'fill-opacity': 0.6
        }
    });

    // Add a layer for borders
    map.addLayer({
        id: 'borders-layer',
        type: 'line',
        source: 'croatia-counties',
        paint: {
            'line-color': '#ffffff',
            'line-width': 1
        }
    });

    // Click event to color and add to visited counties
    map.on('click', 'countries-layer', (e) => {
        if (e.features.length > 0) {
            const countryName = e.features[0].properties.NAME_1;

            // Toggle visited status
            if (!visitedCountries.includes(countryName)) {
                visitedCountries.push(countryName);
                updateVisitedCountriesDropdown(countryName);
                colorCountry(countryName);
                checkCountryInDropdown(countryName, true);
            } else {
                removeCountryFromVisited(countryName);
                uncolorCountry(countryName);
                checkCountryInDropdown(countryName, false);
            }
        }
    });

    // Event listener for the dropdown selection
    visitedSelectElement.addEventListener('change', (e) => {
        const selectedCountyName = e.target.value;
        selectCountryFromDropdown(selectedCountyName);
    });
}




/*
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

*/




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
        'get', ['get', 'NAME_1'], ['literal', countryColors]
    ]);

    // Označi checkbox države kada je obojana
    checkCountryInDropdown(countryName, true);
}








// Function to uncolor the country
function uncolorCountry(countryName) {
    delete countryColors[countryName];

    map.setPaintProperty('countries-layer', 'fill-color', [
        'get', ['get', 'NAME_1'], ['literal', countryColors]
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
            const countryFeature = geojsonData.features.find(feature => feature.properties.NAME_1 === countryName);

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
            const countryFeature = geojsonData.features.find(feature => feature.properties.NAME_1 === countryName);

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
    const countryName = feature.properties.NAME_1 || 'Unknown';
    const countryCode = feature.properties.id || 'N/A';

    const country = extendedCountryInfo[countryName];
    const neighborsList = neighbors[countryName]?.join(', ') || 'N/A';

    countryInfoPopup.innerHTML = `
        <div class="popup-header">
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
 
    
    
    
    
    
    
    
    
    
    
    
