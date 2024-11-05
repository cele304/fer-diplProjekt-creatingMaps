
//zasto u nekim slojevima radi bojanje a u drugome ne
//kada u jednom sloju obojam pa odem u drugi sloj di inace moze bojat ne oboja se


//ovo bi trebalo sve kaj se moze prebacit sa frontenda na backend kako bi se uklonio ovaj api kljuc od tuda sa frontenda
mapboxgl.accessToken = 'pk.eyJ1IjoiY29maSIsImEiOiJjbHl6djlwdm8ycHVxMnFzNnF0NjQ3dzFxIn0.cS7PDb30iYYjVLrmGyDm9A';








// Popis susjeda država
const neighbors = {
    'Argentina': ['Bolivia', 'Brazil', 'Chile', 'Paraguay', 'Uruguay'],
    'Bolivia': ['Argentina', 'Brazil', 'Chile', 'Paraguay', 'Peru'],
    'Brazil': ['Argentina', 'Bolivia', 'Colombia', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela'],
    'Chile': ['Argentina', 'Bolivia', 'Peru'],
    'Colombia': ['Brazil', 'Ecuador', 'Panama', 'Peru', 'Venezuela'],
    'Ecuador': ['Colombia', 'Peru'],
    'Guyana': ['Brazil', 'Suriname', 'Venezuela'],
    'Paraguay': ['Argentina', 'Bolivia', 'Brazil'],
    'Peru': ['Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador'],
    'Suriname': ['Brazil', 'Guyana'],
    'Uruguay': ['Argentina', 'Brazil'],
    'Venezuela': ['Brazil', 'Colombia', 'Guyana']
};

// Filtriranje GeoJSON podataka za Južnu Ameriku, naziv varijable europe neka ostaje
const europeCountries = [
    'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 
    'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 
    'Uruguay', 'Venezuela'
];


// zastave
const countries = [
    { name: 'Argentina', code: 'AR', flag: 'https://flagcdn.com/w40/ar.png' },
    { name: 'Bolivia', code: 'BO', flag: 'https://flagcdn.com/w40/bo.png' },
    { name: 'Brazil', code: 'BR', flag: 'https://flagcdn.com/w40/br.png' },
    { name: 'Chile', code: 'CL', flag: 'https://flagcdn.com/w40/cl.png' },
    { name: 'Colombia', code: 'CO', flag: 'https://flagcdn.com/w40/co.png' },
    { name: 'Ecuador', code: 'EC', flag: 'https://flagcdn.com/w40/ec.png' },
    { name: 'Guyana', code: 'GY', flag: 'https://flagcdn.com/w40/gy.png' },
    { name: 'Paraguay', code: 'PY', flag: 'https://flagcdn.com/w40/py.png' },
    { name: 'Peru', code: 'PE', flag: 'https://flagcdn.com/w40/pe.png' },
    { name: 'Suriname', code: 'SR', flag: 'https://flagcdn.com/w40/sr.png' },
    { name: 'Uruguay', code: 'UY', flag: 'https://flagcdn.com/w40/uy.png' },
    { name: 'Venezuela', code: 'VE', flag: 'https://flagcdn.com/w40/ve.png' },
];



















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













// Inicijalizacija mape za Južnu Ameriku
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-60.0, -25.0], // Centar Južne Amerike (long, lat)
    zoom: 3 // Postavka zumiranja za prikaz cijele regije
});



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



/*  dodaj u moj settings-menu (tamo gdje pise Postavke) i 
    da je ta opcija inicijalno iskljucena i 
    da kada je ukljucena da se onda ne mogu bojati drzave i 
    da se te biljeske mogu spremati, uredivati i brisati, ali to ako ti se bas bude dalo
map.on('click', (e) => {
    const coordinates = e.lngLat;
    new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
});
*/






















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
    'Argentina': { capital: 'Buenos Aires', population: '46 115 021', area: '2,780,400 km²', flag: 'https://flagcdn.com/w40/ar.png' },
    'Bolivia': { capital: 'Sucre', population: '11 510 784', area: '1,098,581 km²', flag: 'https://flagcdn.com/w40/bo.png' },
    'Brazil': { capital: 'Brasília', population: '216 623 000', area: '8,515,767 km²', flag: 'https://flagcdn.com/w40/br.png' },
    'Chile': { capital: 'Santiago', population: '19 952 070', area: '756,102 km²', flag: 'https://flagcdn.com/w40/cl.png' },
    'Colombia': { capital: 'Bogotá', population: '51 507 235', area: '1,141,748 km²', flag: 'https://flagcdn.com/w40/co.png' },
    'Ecuador': { capital: 'Quito', population: '17 694 900', area: '256,370 km²', flag: 'https://flagcdn.com/w40/ec.png' },
    'Guyana': { capital: 'Georgetown', population: '794 000', area: '214,970 km²', flag: 'https://flagcdn.com/w40/gy.png' },
    'Paraguay': { capital: 'Asunción', population: '7 331 700', area: '406,752 km²', flag: 'https://flagcdn.com/w40/py.png' },
    'Peru': { capital: 'Lima', population: '33 572 000', area: '1,285,216 km²', flag: 'https://flagcdn.com/w40/pe.png' },
    'Suriname': { capital: 'Paramaribo', population: '611 000', area: '163,820 km²', flag: 'https://flagcdn.com/w40/sr.png' },
    'Uruguay': { capital: 'Montevideo', population: '3 542 000', area: '176,215 km²', flag: 'https://flagcdn.com/w40/uy.png' },
    'Venezuela': { capital: 'Caracas', population: '29 580 000', area: '916,445 km²', flag: 'https://flagcdn.com/w40/ve.png' }
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
    'Argentina': { lng: -58.4173, lat: -34.6118 },
    'Bolivia': { lng: -64.9016, lat: -19.0346 },
    'Brazil': { lng: -47.9292, lat: -15.7801 },
    'Chile': { lng: -70.6483, lat: -33.4569 },
    'Colombia': { lng: -74.0721, lat: 4.7105 },
    'Ecuador': { lng: -78.4678, lat: -0.2295 },
    'Guyana': { lng: -58.1551, lat: 6.8047 },
    'Paraguay': { lng: -57.5759, lat: -25.2637 },
    'Peru': { lng: -77.0428, lat: -12.0464 },
    'Suriname': { lng: -55.1668, lat: 5.8660 },
    'Uruguay': { lng: -56.1645, lat: -34.9011 },
    'Venezuela': { lng: -66.9036, lat: 10.4880 }
};

// Funkcija za dobivanje imena glavnog grada
function getCapitalName(country) {
    const capitalNames = {
        'Argentina': 'Buenos Aires',
        'Bolivia': 'Sucre',
        'Brazil': 'Brasília',
        'Chile': 'Santiago',
        'Colombia': 'Bogotá',
        'Ecuador': 'Quito',
        'Guyana': 'Georgetown',
        'Paraguay': 'Asunción',
        'Peru': 'Lima',
        'Suriname': 'Paramaribo',
        'Uruguay': 'Montevideo',
        'Venezuela': 'Caracas'
    };
    
    return capitalNames[country] || 'N/A'; // Vraća ime glavnog grada ili 'N/A' ako nije pronađeno
}


// Globalni niz za pohranu markera
let markers = [];

/*
// Vremenski API ključ
const weatherApiKey = 'kljuc';

// Funkcija za dobivanje vremenskih podataka glavnog grada
async function getWeatherData(lat, lng) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${weatherApiKey}`);
        const data = await response.json();

        const temperature = Math.round(data.main.temp * 10) / 10; // Zaokruži na 1 decimalu
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        return { temperature, description, icon };
    } catch (error) {
        console.error("Greška pri dohvaćanju vremenskih podataka:", error);
        return null;
    }
}
*/
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
    'Argentina': -3, // Buenos Aires
    'Bolivia': -4,   // Sucre
    'Brazil': -3,    // Brasília
    'Chile': -3,     // Santiago
    'Colombia': -5,  // Bogotá
    'Ecuador': -5,   // Quito
    'Guyana': -4,    // Georgetown
    'Paraguay': -4,  // Asunción
    'Peru': -5,      // Lima
    'Suriname': -3,  // Paramaribo
    'Uruguay': -3,   // Montevideo
    'Venezuela': -4   // Caracas
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
