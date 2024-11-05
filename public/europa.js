

mapboxgl.accessToken = 'pk.eyJ1IjoiY29maSIsImEiOiJjbHl6djlwdm8ycHVxMnFzNnF0NjQ3dzFxIn0.cS7PDb30iYYjVLrmGyDm9A';



// Popis susjeda država u Europi
const neighbors = {
    'Albania': ['Montenegro', 'Kosovo', 'Macedonia', 'Greece'],
    'Andorra': ['France', 'Spain'],
    'Armenia': ['Georgia', 'Azerbaijan', 'Turkey'],
    'Austria': ['Germany', 'Czech Republic', 'Slovakia', 'Hungary', 'Slovenia', 'Italy', 'Switzerland', 'Liechtenstein'],
    'Azerbaijan': ['Armenia', 'Georgia', 'Russia'],
    'Belarus': ['Lithuania', 'Latvia', 'Russia', 'Ukraine', 'Poland'],
    'Belgium': ['France', 'Luxembourg', 'Germany', 'Netherlands'],
    'Bosnia and Herzegovina': ['Croatia', 'Montenegro', 'Republic of Serbia'],
    'Bulgaria': ['Romania', 'Republic of Serbia', 'Macedonia', 'Greece', 'Turkey'],
    'Croatia': ['Slovenia', 'Hungary', 'Republic of Serbia', 'Bosnia and Herzegovina', 'Montenegro'],
    'Cyprus': [],
    'Czech Republic': ['Germany', 'Poland', 'Slovakia', 'Austria'],
    'Denmark': ['Germany'],
    'Estonia': ['Latvia', 'Russia'],
    'Finland': ['Sweden', 'Norway', 'Russia'],
    'France': ['Belgium', 'Luxembourg', 'Germany', 'Switzerland', 'Italy', 'Monaco', 'Spain', 'Andorra'],
    'Georgia': ['Russia', 'Azerbaijan', 'Armenia', 'Turkey'],
    'Germany': ['Denmark', 'Netherlands', 'Belgium', 'Luxembourg', 'France', 'Switzerland', 'Austria', 'Czech Republic', 'Poland'],
    'Greece': ['Albania', 'Macedonia', 'Bulgaria', 'Turkey'],
    'Hungary': ['Slovakia', 'Ukraine', 'Romania', 'Republic of Serbia', 'Croatia', 'Slovenia', 'Austria'],
    'Iceland': [],
    'Ireland': ['United Kingdom'],
    'Italy': ['France', 'Switzerland', 'Austria', 'Slovenia', 'San Marino', 'Vatican City'],
    'Kazakhstan': ['Russia'],
    'Kosovo': ['Montenegro', 'Albania', 'Macedonia', 'Republic of Serbia'],
    'Latvia': ['Estonia', 'Russia', 'Belarus', 'Lithuania'],
    'Liechtenstein': ['Switzerland', 'Austria'],
    'Lithuania': ['Latvia', 'Belarus', 'Poland', 'Russia'],
    'Luxembourg': ['Belgium', 'Germany', 'France'],
    'Malta': [],
    'Moldova': ['Romania', 'Ukraine'],
    'Monaco': ['France'],
    'Montenegro': ['Bosnia and Herzegovina', 'Republic of Serbia', 'Kosovo', 'Albania', 'Croatia'],
    'Netherlands': ['Belgium', 'Germany'],
    'Macedonia': ['Kosovo', 'Albania', 'Greece', 'Bulgaria', 'Republic of Serbia'],
    'Norway': ['Sweden', 'Finland', 'Russia'],
    'Poland': ['Germany', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],
    'Portugal': ['Spain'],
    'Romania': ['Ukraine', 'Moldova', 'Bulgaria', 'Republic of Serbia', 'Hungary'],
    'Russia': ['Norway', 'Finland', 'Estonia', 'Latvia', 'Lithuania', 'Poland', 'Belarus', 'Ukraine', 'Georgia', 'Azerbaijan', 'Kazakhstan'],
    'San Marino': ['Italy'],
    'Republic of Serbia': ['Hungary', 'Romania', 'Bulgaria', 'Macedonia', 'Kosovo', 'Montenegro', 'Bosnia and Herzegovina', 'Croatia'],
    'Slovakia': ['Czech Republic', 'Poland', 'Ukraine', 'Hungary', 'Austria'],
    'Slovenia': ['Austria', 'Hungary', 'Croatia', 'Italy'],
    'Spain': ['Portugal', 'France', 'Andorra'],
    'Sweden': ['Norway', 'Finland'],
    'Switzerland': ['France', 'Germany', 'Austria', 'Liechtenstein', 'Italy'],
    'Turkey': ['Greece', 'Bulgaria', 'Georgia', 'Armenia'],
    'Ukraine': ['Poland', 'Slovakia', 'Hungary', 'Romania', 'Moldova', 'Russia', 'Belarus'],
    'United Kingdom': ['Ireland'],
    'Vatican City': ['Italy']
};

// Filtriranje GeoJSON podataka za Europu
const europeCountries = [
    'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 
    'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 
    'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 
    'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kazakhstan', 'Kosovo', 'Latvia', 
    'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 
    'Montenegro', 'Netherlands', 'Macedonia', 'Norway', 'Poland', 'Portugal', 
    'Romania', 'Russia', 'San Marino', 'Republic of Serbia', 'Slovakia', 'Slovenia', 'Spain', 
    'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'
];




const countries = [
    { name: 'Albania', code: 'AL', flag: 'https://flagcdn.com/w40/al.png' },
    { name: 'Andorra', code: 'AD', flag: 'https://flagcdn.com/w40/ad.png' },
    { name: 'Armenia', code: 'AM', flag: 'https://flagcdn.com/w40/am.png' },
    { name: 'Austria', code: 'AT', flag: 'https://flagcdn.com/w40/at.png' },
    { name: 'Azerbaijan', code: 'AZ', flag: 'https://flagcdn.com/w40/az.png' },
    { name: 'Belarus', code: 'BY', flag: 'https://flagcdn.com/w40/by.png' },
    { name: 'Belgium', code: 'BE', flag: 'https://flagcdn.com/w40/be.png' },
    { name: 'Bosnia and Herzegovina', code: 'BA', flag: 'https://flagcdn.com/w40/ba.png' },
    { name: 'Bulgaria', code: 'BG', flag: 'https://flagcdn.com/w40/bg.png' },
    { name: 'Croatia', code: 'HR', flag: 'https://flagcdn.com/w40/hr.png' },
    { name: 'Cyprus', code: 'CY', flag: 'https://flagcdn.com/w40/cy.png' },
    { name: 'Czech Republic', code: 'CZ', flag: 'https://flagcdn.com/w40/cz.png' },
    { name: 'Denmark', code: 'DK', flag: 'https://flagcdn.com/w40/dk.png' },
    { name: 'Estonia', code: 'EE', flag: 'https://flagcdn.com/w40/ee.png' },
    { name: 'Finland', code: 'FI', flag: 'https://flagcdn.com/w40/fi.png' },
    { name: 'France', code: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
    { name: 'Georgia', code: 'GE', flag: 'https://flagcdn.com/w40/ge.png' },
    { name: 'Germany', code: 'DE', flag: 'https://flagcdn.com/w40/de.png' },
    { name: 'Greece', code: 'GR', flag: 'https://flagcdn.com/w40/gr.png' },
    { name: 'Hungary', code: 'HU', flag: 'https://flagcdn.com/w40/hu.png' },
    { name: 'Iceland', code: 'IS', flag: 'https://flagcdn.com/w40/is.png' },
    { name: 'Ireland', code: 'IE', flag: 'https://flagcdn.com/w40/ie.png' },
    { name: 'Italy', code: 'IT', flag: 'https://flagcdn.com/w40/it.png' },
    { name: 'Kazakhstan', code: 'KZ', flag: 'https://flagcdn.com/w40/kz.png' },
    { name: 'Kosovo', code: 'XK', flag: 'https://flagcdn.com/w40/xk.png' },
    { name: 'Latvia', code: 'LV', flag: 'https://flagcdn.com/w40/lv.png' },
    { name: 'Liechtenstein', code: 'LI', flag: 'https://flagcdn.com/w40/li.png' },
    { name: 'Lithuania', code: 'LT', flag: 'https://flagcdn.com/w40/lt.png' },
    { name: 'Luxembourg', code: 'LU', flag: 'https://flagcdn.com/w40/lu.png' },
    { name: 'Malta', code: 'MT', flag: 'https://flagcdn.com/w40/mt.png' },
    { name: 'Moldova', code: 'MD', flag: 'https://flagcdn.com/w40/md.png' },
    { name: 'Monaco', code: 'MC', flag: 'https://flagcdn.com/w40/mc.png' },
    { name: 'Montenegro', code: 'ME', flag: 'https://flagcdn.com/w40/me.png' },
    { name: 'Netherlands', code: 'NL', flag: 'https://flagcdn.com/w40/nl.png' },
    { name: 'Macedonia', code: 'MK', flag: 'https://flagcdn.com/w40/mk.png' },
    { name: 'Norway', code: 'NO', flag: 'https://flagcdn.com/w40/no.png' },
    { name: 'Poland', code: 'PL', flag: 'https://flagcdn.com/w40/pl.png' },
    { name: 'Portugal', code: 'PT', flag: 'https://flagcdn.com/w40/pt.png' },
    { name: 'Romania', code: 'RO', flag: 'https://flagcdn.com/w40/ro.png' },
    { name: 'Russia', code: 'RU', flag: 'https://flagcdn.com/w40/ru.png' },
    { name: 'San Marino', code: 'SM', flag: 'https://flagcdn.com/w40/sm.png' },
    { name: 'Republic of Serbia', code: 'RS', flag: 'https://flagcdn.com/w40/rs.png' },
    { name: 'Slovakia', code: 'SK', flag: 'https://flagcdn.com/w40/sk.png' },
    { name: 'Slovenia', code: 'SI', flag: 'https://flagcdn.com/w40/si.png' },
    { name: 'Spain', code: 'ES', flag: 'https://flagcdn.com/w40/es.png' },
    { name: 'Sweden', code: 'SE', flag: 'https://flagcdn.com/w40/se.png' },
    { name: 'Switzerland', code: 'CH', flag: 'https://flagcdn.com/w40/ch.png' },
    { name: 'Turkey', code: 'TR', flag: 'https://flagcdn.com/w40/tr.png' },
    { name: 'Ukraine', code: 'UA', flag: 'https://flagcdn.com/w40/ua.png' },
    { name: 'United Kingdom', code: 'GB', flag: 'https://flagcdn.com/w40/gb.png' },
    { name: 'Vatican City', code: 'VA', flag: 'https://flagcdn.com/w40/va.png' }
];





const extendedCountryInfo = {
    'Albania': { capital: 'Tirana', population: '2,845,955', area: '28,748 km²', flag: 'https://flagcdn.com/w40/al.png' },
    'Andorra': { capital: 'Andorra la Vella', population: '79,534', area: '468 km²', flag: 'https://flagcdn.com/w40/ad.png' },
    'Armenia': { capital: 'Yerevan', population: '2,968,127', area: '29,743 km²', flag: 'https://flagcdn.com/w40/am.png' },
    'Austria': { capital: 'Vienna', population: '8,917,205', area: '83,871 km²', flag: 'https://flagcdn.com/w40/at.png' },
    'Azerbaijan': { capital: 'Baku', population: '10,354,309', area: '86,600 km²', flag: 'https://flagcdn.com/w40/az.png' },
    'Belarus': { capital: 'Minsk', population: '9,349,645', area: '207,600 km²', flag: 'https://flagcdn.com/w40/by.png' },
    'Belgium': { capital: 'Brussels', population: '11,584,008', area: '30,528 km²', flag: 'https://flagcdn.com/w40/be.png' },
    'Bosnia and Herzegovina': { capital: 'Sarajevo', population: '3,280,819', area: '51,197 km²', flag: 'https://flagcdn.com/w40/ba.png' },
    'Bulgaria': { capital: 'Sofia', population: '6,838,937', area: '110,879 km²', flag: 'https://flagcdn.com/w40/bg.png' },
    'Croatia': { capital: 'Zagreb', population: '3,871,833', area: '56,594 km²', flag: 'https://flagcdn.com/w40/hr.png' },
    'Cyprus': { capital: 'Nicosia', population: '1,251,488', area: '9,251 km²', flag: 'https://flagcdn.com/w40/cy.png' },
    'Czech Republic': { capital: 'Prague', population: '10,693,939', area: '78,866 km²', flag: 'https://flagcdn.com/w40/cz.png' },
    'Denmark': { capital: 'Copenhagen', population: '5,867,156', area: '43,094 km²', flag: 'https://flagcdn.com/w40/dk.png' },
    'Estonia': { capital: 'Tallinn', population: '1,331,796', area: '45,227 km²', flag: 'https://flagcdn.com/w40/ee.png' },
    'Finland': { capital: 'Helsinki', population: '5,554,960', area: '338,424 km²', flag: 'https://flagcdn.com/w40/fi.png' },
    'France': { capital: 'Paris', population: '67,413,000', area: '551,695 km²', flag: 'https://flagcdn.com/w40/fr.png' },
    'Georgia': { capital: 'Tbilisi', population: '3,688,647', area: '69,700 km²', flag: 'https://flagcdn.com/w40/ge.png' },
    'Germany': { capital: 'Berlin', population: '83,190,556', area: '357,022 km²', flag: 'https://flagcdn.com/w40/de.png' },
    'Greece': { capital: 'Athens', population: '10,432,481', area: '131,957 km²', flag: 'https://flagcdn.com/w40/gr.png' },
    'Hungary': { capital: 'Budapest', population: '9,606,259', area: '93,028 km²', flag: 'https://flagcdn.com/w40/hu.png' },
    'Iceland': { capital: 'Reykjavik', population: '371,580', area: '103,000 km²', flag: 'https://flagcdn.com/w40/is.png' },
    'Ireland': { capital: 'Dublin', population: '5,033,000', area: '70,273 km²', flag: 'https://flagcdn.com/w40/ie.png' },
    'Italy': { capital: 'Rome', population: '59,030,133', area: '301,340 km²', flag: 'https://flagcdn.com/w40/it.png' },
    'Kazakhstan': { capital: 'Nur-Sultan', population: '19,611,900', area: '2,724,900 km²', flag: 'https://flagcdn.com/w40/kz.png' },
    'Kosovo': { capital: 'Pristina', population: '1,873,583', area: '10,887 km²', flag: 'https://flagcdn.com/w40/xk.png' },
    'Latvia': { capital: 'Riga', population: '1,848,837', area: '64,589 km²', flag: 'https://flagcdn.com/w40/lv.png' },
    'Liechtenstein': { capital: 'Vaduz', population: '39,327', area: '160 km²', flag: 'https://flagcdn.com/w40/li.png' },
    'Lithuania': { capital: 'Vilnius', population: '2,801,401', area: '65,300 km²', flag: 'https://flagcdn.com/w40/lt.png' },
    'Luxembourg': { capital: 'Luxembourg', population: '645,397', area: '2,586 km²', flag: 'https://flagcdn.com/w40/lu.png' },
    'Malta': { capital: 'Valletta', population: '516,100', area: '316 km²', flag: 'https://flagcdn.com/w40/mt.png' },
    'Moldova': { capital: 'Chisinau', population: '2,601,254', area: '33,846 km²', flag: 'https://flagcdn.com/w40/md.png' },
    'Monaco': { capital: 'Monaco', population: '39,244', area: '2 km²', flag: 'https://flagcdn.com/w40/mc.png' },
    'Montenegro': { capital: 'Podgorica', population: '620,739', area: '13,812 km²', flag: 'https://flagcdn.com/w40/me.png' },
    'Netherlands': { capital: 'Amsterdam', population: '17,564,014', area: '41,543 km²', flag: 'https://flagcdn.com/w40/nl.png' },
    'Macedonia': { capital: 'Skopje', population: '2,083,374', area: '25,713 km²', flag: 'https://flagcdn.com/w40/mk.png' },
    'Norway': { capital: 'Oslo', population: '5,425,270', area: '385,207 km²', flag: 'https://flagcdn.com/w40/no.png' },
    'Poland': { capital: 'Warsaw', population: '37,749,737', area: '312,696 km²', flag: 'https://flagcdn.com/w40/pl.png' },
    'Portugal': { capital: 'Lisbon', population: '10,274,324', area: '92,090 km²', flag: 'https://flagcdn.com/w40/pt.png' },
    'Romania': { capital: 'Bucharest', population: '19,659,267', area: '238,397 km²', flag: 'https://flagcdn.com/w40/ro.png' },
    'Russia': { capital: 'Moscow', population: '146,171,015', area: '17,098,242 km²', flag: 'https://flagcdn.com/w40/ru.png' },
    'San Marino': { capital: 'San Marino', population: '33,938', area: '61 km²', flag: 'https://flagcdn.com/w40/sm.png' },
    'Republic of Serbia': { capital: 'Belgrade', population: '6,707,266', area: '88,361 km²', flag: 'https://flagcdn.com/w40/rs.png' },
    'Slovakia': { capital: 'Bratislava', population: '5,450,421', area: '49,035 km²', flag: 'https://flagcdn.com/w40/sk.png' },
    'Slovenia': { capital: 'Ljubljana', population: '2,108,708', area: '20,273 km²', flag: 'https://flagcdn.com/w40/si.png' },
    'Spain': { capital: 'Madrid', population: '47,330,300', area: '505,990 km²', flag: 'https://flagcdn.com/w40/es.png' },
    'Sweden': { capital: 'Stockholm', population: '10,481,937', area: '450,295 km²', flag: 'https://flagcdn.com/w40/se.png' },
    'Switzerland': { capital: 'Bern', population: '8,670,300', area: '41,290 km²', flag: 'https://flagcdn.com/w40/ch.png' },
    'Turkey': { capital: 'Ankara', population: '85,279,553', area: '783,562 km²', flag: 'https://flagcdn.com/w40/tr.png' },
    'Ukraine': { capital: 'Kyiv', population: '39,701,739', area: '603,628 km²', flag: 'https://flagcdn.com/w40/ua.png' },
    'United Kingdom': { capital: 'London', population: '67,738,521', area: '243,610 km²', flag: 'https://flagcdn.com/w40/gb.png' },
    'Vatican City': { capital: 'Vatican City', population: '800', area: '0.49 km²', flag: 'https://flagcdn.com/w40/va.png' }
};








const capitalCoordinates = {
    'Albania': { lng: 19.8187, lat: 41.3275 },
    'Andorra': { lng: 1.5211, lat: 42.5078 },
    'Armenia': { lng: 44.5152, lat: 40.1833 },
    'Austria': { lng: 16.3738, lat: 48.2082 },
    'Azerbaijan': { lng: 49.8671, lat: 40.4093 },
    'Belarus': { lng: 27.5615, lat: 53.9006 },
    'Belgium': { lng: 4.3517, lat: 50.8503 },
    'Bosnia and Herzegovina': { lng: 18.4131, lat: 43.8563 },
    'Bulgaria': { lng: 23.3219, lat: 42.6977 },
    'Croatia': { lng: 15.9819, lat: 45.815 },
    'Cyprus': { lng: 33.3823, lat: 35.1856 },
    'Czech Republic': { lng: 14.4378, lat: 50.0755 },
    'Denmark': { lng: 12.5683, lat: 55.6761 },
    'Estonia': { lng: 24.7535, lat: 59.437 },
    'Finland': { lng: 24.941, lat: 60.1699 },
    'France': { lng: 2.3522, lat: 48.8566 },
    'Georgia': { lng: 44.7833, lat: 41.7167 },
    'Germany': { lng: 13.405, lat: 52.52 },
    'Greece': { lng: 23.7275, lat: 37.9838 },
    'Hungary': { lng: 19.0402, lat: 47.4979 },
    'Iceland': { lng: -21.8277, lat: 64.1355 },
    'Ireland': { lng: -6.2603, lat: 53.3498 },
    'Italy': { lng: 12.4964, lat: 41.9028 },
    'Kazakhstan': { lng: 71.4704, lat: 51.1694 },
    'Kosovo': { lng: 21.1655, lat: 42.6629 },
    'Latvia': { lng: 24.1052, lat: 56.9496 },
    'Liechtenstein': { lng: 9.5209, lat: 47.141 },
    'Lithuania': { lng: 25.2797, lat: 54.6872 },
    'Luxembourg': { lng: 6.1319, lat: 49.6116 },
    'Malta': { lng: 14.5146, lat: 35.8989 },
    'Moldova': { lng: 28.8575, lat: 47.0105 },
    'Monaco': { lng: 7.4246, lat: 43.7374 },
    'Montenegro': { lng: 19.262, lat: 42.441 },
    'Netherlands': { lng: 4.9041, lat: 52.3676 },
    'Macedonia': { lng: 21.4306, lat: 41.9981 },
    'Norway': { lng: 10.7522, lat: 59.9139 },
    'Poland': { lng: 21.0122, lat: 52.2297 },
    'Portugal': { lng: -9.1393, lat: 38.7169 },
    'Romania': { lng: 26.1025, lat: 44.4268 },
    'Russia': { lng: 37.6173, lat: 55.7558 },
    'San Marino': { lng: 12.4528, lat: 43.9333 },
    'Republic of Serbia': { lng: 20.4573, lat: 44.7866 },
    'Slovakia': { lng: 17.1077, lat: 48.1486 },
    'Slovenia': { lng: 14.5058, lat: 46.0569 },
    'Spain': { lng: -3.7038, lat: 40.4168 },
    'Sweden': { lng: 18.0686, lat: 59.3293 },
    'Switzerland': { lng: 7.4474, lat: 46.9481 },
    'Turkey': { lng: 32.8597, lat: 39.9334 },
    'Ukraine': { lng: 30.5238, lat: 50.4501 },
    'United Kingdom': { lng: -0.1276, lat: 51.5074 },
    'Vatican City': { lng: 12.4534, lat: 41.9029 }
};


function getCapitalName(country) {
    const capitalNames = {
        'Albania': 'Tirana',
        'Andorra': 'Andorra la Vella',
        'Armenia': 'Yerevan',
        'Austria': 'Vienna',
        'Azerbaijan': 'Baku',
        'Belarus': 'Minsk',
        'Belgium': 'Brussels',
        'Bosnia and Herzegovina': 'Sarajevo',
        'Bulgaria': 'Sofia',
        'Croatia': 'Zagreb',
        'Cyprus': 'Nicosia',
        'Czech Republic': 'Prague',
        'Denmark': 'Copenhagen',
        'Estonia': 'Tallinn',
        'Finland': 'Helsinki',
        'France': 'Paris',
        'Georgia': 'Tbilisi',
        'Germany': 'Berlin',
        'Greece': 'Athens',
        'Hungary': 'Budapest',
        'Iceland': 'Reykjavik',
        'Ireland': 'Dublin',
        'Italy': 'Rome',
        'Kazakhstan': 'Nur-Sultan',
        'Kosovo': 'Pristina',
        'Latvia': 'Riga',
        'Liechtenstein': 'Vaduz',
        'Lithuania': 'Vilnius',
        'Luxembourg': 'Luxembourg',
        'Malta': 'Valletta',
        'Moldova': 'Chisinau',
        'Monaco': 'Monaco',
        'Montenegro': 'Podgorica',
        'Netherlands': 'Amsterdam',
        'Macedonia': 'Skopje',
        'Norway': 'Oslo',
        'Poland': 'Warsaw',
        'Portugal': 'Lisbon',
        'Romania': 'Bucharest',
        'Russia': 'Moscow',
        'San Marino': 'San Marino',
        'Republic of Serbia': 'Belgrade',
        'Slovakia': 'Bratislava',
        'Slovenia': 'Ljubljana',
        'Spain': 'Madrid',
        'Sweden': 'Stockholm',
        'Switzerland': 'Bern',
        'Turkey': 'Ankara',
        'Ukraine': 'Kyiv',
        'United Kingdom': 'London',
        'Vatican City': 'Vatican City'
    };
    return capitalNames[country] || 'N/A';
}


const capitalOffsets = {
    'Albania': 1,
    'Andorra': 1,
    'Armenia': 4,
    'Austria': 1,
    'Azerbaijan': 4,
    'Belarus': 3,
    'Belgium': 1,
    'Bosnia and Herzegovina': 1,
    'Bulgaria': 2,
    'Croatia': 1,
    'Cyprus': 2,
    'Czech Republic': 1,
    'Denmark': 1,
    'Estonia': 2,
    'Finland': 2,
    'France': 1,
    'Georgia': 4,
    'Germany': 1,
    'Greece': 2,
    'Hungary': 1,
    'Iceland': 0,
    'Ireland': 0,
    'Italy': 1,
    'Kazakhstan': 5,
    'Kosovo': 1,
    'Latvia': 2,
    'Liechtenstein': 1,
    'Lithuania': 2,
    'Luxembourg': 1,
    'Malta': 1,
    'Moldova': 2,
    'Monaco': 1,
    'Montenegro': 1,
    'Netherlands': 1,
    'Macedonia': 1,
    'Norway': 1,
    'Poland': 1,
    'Portugal': 0,
    'Romania': 2,
    'Russia': 3,
    'San Marino': 1,
    'Republic of Serbia': 1,
    'Slovakia': 1,
    'Slovenia': 1,
    'Spain': 1,
    'Sweden': 1,
    'Switzerland': 1,
    'Turkey': 3,
    'Ukraine': 2,
    'United Kingdom': 0,
    'Vatican City': 1
};




// Inicijalizacija mape
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [10.0, 50.0], // Centar Europe
    zoom: 4
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
 
    
    
    
    