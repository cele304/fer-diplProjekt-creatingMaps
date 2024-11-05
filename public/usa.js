
mapboxgl.accessToken = 'pk.eyJ1IjoiY29maSIsImEiOiJjbHl6djlwdm8ycHVxMnFzNnF0NjQ3dzFxIn0.cS7PDb30iYYjVLrmGyDm9A';







const neighbors = {
    'Alabama': ['Tennessee', 'Georgia', 'Mississippi', 'Florida'],
    'Alaska': [],
    'Arizona': ['California', 'Nevada', 'Utah', 'New Mexico'],
    'Arkansas': ['Missouri', 'Tennessee', 'Mississippi', 'Louisiana', 'Texas', 'Oklahoma'],
    'California': ['Oregon', 'Nevada', 'Arizona'],
    'Colorado': ['Wyoming', 'Nebraska', 'Kansas', 'Oklahoma', 'New Mexico', 'Utah'],
    'Connecticut': ['New York', 'Massachusetts', 'Rhode Island'],
    'Delaware': ['Maryland', 'New Jersey', 'Pennsylvania'],
    'Florida': ['Georgia', 'Alabama'],
    'Georgia': ['Florida', 'Alabama', 'Tennessee', 'North Carolina', 'South Carolina'],
    'Hawaii': [],
    'Idaho': ['Washington', 'Oregon', 'Nevada', 'Utah', 'Wyoming', 'Montana'],
    'Illinois': ['Wisconsin', 'Iowa', 'Missouri', 'Kentucky', 'Indiana'],
    'Indiana': ['Illinois', 'Michigan', 'Ohio', 'Kentucky'],
    'Iowa': ['Minnesota', 'Wisconsin', 'Illinois', 'Missouri', 'Nebraska', 'South Dakota'],
    'Kansas': ['Nebraska', 'Missouri', 'Oklahoma', 'Colorado'],
    'Kentucky': ['Illinois', 'Indiana', 'Ohio', 'West Virginia', 'Virginia', 'Tennessee', 'Missouri'],
    'Louisiana': ['Texas', 'Arkansas', 'Mississippi'],
    'Maine': ['New Hampshire'],
    'Maryland': ['Delaware', 'Pennsylvania', 'West Virginia', 'Virginia'],
    'Massachusetts': ['New York', 'Vermont', 'New Hampshire', 'Connecticut', 'Rhode Island'],
    'Michigan': ['Wisconsin', 'Indiana', 'Ohio'],
    'Minnesota': ['North Dakota', 'South Dakota', 'Iowa', 'Wisconsin'],
    'Mississippi': ['Tennessee', 'Alabama', 'Louisiana', 'Arkansas'],
    'Missouri': ['Iowa', 'Nebraska', 'Kansas', 'Oklahoma', 'Arkansas', 'Tennessee', 'Kentucky', 'Illinois'],
    'Montana': ['North Dakota', 'South Dakota', 'Wyoming', 'Idaho'],
    'Nebraska': ['South Dakota', 'Wyoming', 'Colorado', 'Kansas', 'Missouri', 'Iowa'],
    'Nevada': ['Oregon', 'Idaho', 'Utah', 'Arizona', 'California'],
    'New Hampshire': ['Maine', 'Massachusetts', 'Vermont'],
    'New Jersey': ['New York', 'Pennsylvania', 'Delaware'],
    'New Mexico': ['Arizona', 'Utah', 'Colorado', 'Oklahoma', 'Texas'],
    'New York': ['New Jersey', 'Pennsylvania', 'Vermont', 'Massachusetts', 'Connecticut'],
    'North Carolina': ['Virginia', 'South Carolina', 'Georgia', 'Tennessee'],
    'North Dakota': ['Minnesota', 'South Dakota', 'Montana'],
    'Ohio': ['Michigan', 'Pennsylvania', 'West Virginia', 'Kentucky', 'Indiana'],
    'Oklahoma': ['Kansas', 'Missouri', 'Arkansas', 'Texas', 'New Mexico', 'Colorado'],
    'Oregon': ['Washington', 'Idaho', 'Nevada', 'California'],
    'Pennsylvania': ['New York', 'New Jersey', 'Delaware', 'Maryland', 'West Virginia', 'Ohio'],
    'Rhode Island': ['Massachusetts', 'Connecticut'],
    'South Carolina': ['North Carolina', 'Georgia'],
    'South Dakota': ['North Dakota', 'Minnesota', 'Iowa', 'Nebraska', 'Wyoming', 'Montana'],
    'Tennessee': ['Kentucky', 'Virginia', 'North Carolina', 'Georgia', 'Alabama', 'Mississippi', 'Arkansas', 'Missouri'],
    'Texas': ['New Mexico', 'Oklahoma', 'Arkansas', 'Louisiana'],
    'Utah': ['Nevada', 'Idaho', 'Wyoming', 'Colorado', 'Arizona', 'New Mexico'],
    'Vermont': ['New York', 'Massachusetts', 'New Hampshire'],
    'Virginia': ['West Virginia', 'Maryland', 'North Carolina', 'Tennessee', 'Kentucky'],
    'Washington': ['Oregon', 'Idaho'],
    'West Virginia': ['Ohio', 'Pennsylvania', 'Maryland', 'Virginia', 'Kentucky'],
    'Wisconsin': ['Minnesota', 'Iowa', 'Illinois', 'Michigan'],
    'Wyoming': ['Montana', 'South Dakota', 'Nebraska', 'Colorado', 'Utah', 'Idaho']
};
    
    
const europeCountries = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
    

const countries = [
    { name: 'Alabama', code: 'AL', flag: 'https://flagcdn.com/w40/us-al.png' },
    { name: 'Alaska', code: 'AK', flag: 'https://flagcdn.com/w40/us-ak.png' },
    { name: 'Arizona', code: 'AZ', flag: 'https://flagcdn.com/w40/us-az.png' },
    { name: 'Arkansas', code: 'AR', flag: 'https://flagcdn.com/w40/us-ar.png' },
    { name: 'California', code: 'CA', flag: 'https://flagcdn.com/w40/us-ca.png' },
    { name: 'Colorado', code: 'CO', flag: 'https://flagcdn.com/w40/us-co.png' },
    { name: 'Connecticut', code: 'CT', flag: 'https://flagcdn.com/w40/us-ct.png' },
    { name: 'Delaware', code: 'DE', flag: 'https://flagcdn.com/w40/us-de.png' },
    { name: 'Florida', code: 'FL', flag: 'https://flagcdn.com/w40/us-fl.png' },
    { name: 'Georgia', code: 'GA', flag: 'https://flagcdn.com/w40/us-ga.png' },
    { name: 'Hawaii', code: 'HI', flag: 'https://flagcdn.com/w40/us-hi.png' },
    { name: 'Idaho', code: 'ID', flag: 'https://flagcdn.com/w40/us-id.png' },
    { name: 'Illinois', code: 'IL', flag: 'https://flagcdn.com/w40/us-il.png' },
    { name: 'Indiana', code: 'IN', flag: 'https://flagcdn.com/w40/us-in.png' },
    { name: 'Iowa', code: 'IA', flag: 'https://flagcdn.com/w40/us-ia.png' },
    { name: 'Kansas', code: 'KS', flag: 'https://flagcdn.com/w40/us-ks.png' },
    { name: 'Kentucky', code: 'KY', flag: 'https://flagcdn.com/w40/us-ky.png' },
    { name: 'Louisiana', code: 'LA', flag: 'https://flagcdn.com/w40/us-la.png' },
    { name: 'Maine', code: 'ME', flag: 'https://flagcdn.com/w40/us-me.png' },
    { name: 'Maryland', code: 'MD', flag: 'https://flagcdn.com/w40/us-md.png' },
    { name: 'Massachusetts', code: 'MA', flag: 'https://flagcdn.com/w40/us-ma.png' },
    { name: 'Michigan', code: 'MI', flag: 'https://flagcdn.com/w40/us-mi.png' },
    { name: 'Minnesota', code: 'MN', flag: 'https://flagcdn.com/w40/us-mn.png' },
    { name: 'Mississippi', code: 'MS', flag: 'https://flagcdn.com/w40/us-ms.png' },
    { name: 'Missouri', code: 'MO', flag: 'https://flagcdn.com/w40/us-mo.png' },
    { name: 'Montana', code: 'MT', flag: 'https://flagcdn.com/w40/us-mt.png' },
    { name: 'Nebraska', code: 'NE', flag: 'https://flagcdn.com/w40/us-ne.png' },
    { name: 'Nevada', code: 'NV', flag: 'https://flagcdn.com/w40/us-nv.png' },
    { name: 'New Hampshire', code: 'NH', flag: 'https://flagcdn.com/w40/us-nh.png' },
    { name: 'New Jersey', code: 'NJ', flag: 'https://flagcdn.com/w40/us-nj.png' },
    { name: 'New Mexico', code: 'NM', flag: 'https://flagcdn.com/w40/us-nm.png' },
    { name: 'New York', code: 'NY', flag: 'https://flagcdn.com/w40/us-ny.png' },
    { name: 'North Carolina', code: 'NC', flag: 'https://flagcdn.com/w40/us-nc.png' },
    { name: 'North Dakota', code: 'ND', flag: 'https://flagcdn.com/w40/us-nd.png' },
    { name: 'Ohio', code: 'OH', flag: 'https://flagcdn.com/w40/us-oh.png' },
    { name: 'Oklahoma', code: 'OK', flag: 'https://flagcdn.com/w40/us-ok.png' },
    { name: 'Oregon', code: 'OR', flag: 'https://flagcdn.com/w40/us-or.png' },
    { name: 'Pennsylvania', code: 'PA', flag: 'https://flagcdn.com/w40/us-pa.png' },
    { name: 'Rhode Island', code: 'RI', flag: 'https://flagcdn.com/w40/us-ri.png' },
    { name: 'South Carolina', code: 'SC', flag: 'https://flagcdn.com/w40/us-sc.png' },
    { name: 'South Dakota', code: 'SD', flag: 'https://flagcdn.com/w40/us-sd.png' },
    { name: 'Tennessee', code: 'TN', flag: 'https://flagcdn.com/w40/us-tn.png' },
    { name: 'Texas', code: 'TX', flag: 'https://flagcdn.com/w40/us-tx.png' },
    { name: 'Utah', code: 'UT', flag: 'https://flagcdn.com/w40/us-ut.png' },
    { name: 'Vermont', code: 'VT', flag: 'https://flagcdn.com/w40/us-vt.png' },
    { name: 'Virginia', code: 'VA', flag: 'https://flagcdn.com/w40/us-va.png' },
    { name: 'Washington', code: 'WA', flag: 'https://flagcdn.com/w40/us-wa.png' },
    { name: 'West Virginia', code: 'WV', flag: 'https://flagcdn.com/w40/us-wv.png' },
    { name: 'Wisconsin', code: 'WI', flag: 'https://flagcdn.com/w40/us-wi.png' },
    { name: 'Wyoming', code: 'WY', flag: 'https://flagcdn.com/w40/us-wy.png' }
];
    





const extendedCountryInfo = {
    'Alabama': { capital: 'Montgomery', population: '5,024,279', area: '135,767 km²', flag: 'https://flagcdn.com/w40/us-al.png' },
    'Alaska': { capital: 'Juneau', population: '733,391', area: '1,723,337 km²', flag: 'https://flagcdn.com/w40/us-ak.png' },
    'Arizona': { capital: 'Phoenix', population: '7,276,316', area: '295,234 km²', flag: 'https://flagcdn.com/w40/us-az.png' },
    'Arkansas': { capital: 'Little Rock', population: '3,011,524', area: '137,732 km²', flag: 'https://flagcdn.com/w40/us-ar.png' },
    'California': { capital: 'Sacramento', population: '39,538,223', area: '423,967 km²', flag: 'https://flagcdn.com/w40/us-ca.png' },
    'Colorado': { capital: 'Denver', population: '5,773,714', area: '269,601 km²', flag: 'https://flagcdn.com/w40/us-co.png' },
    'Connecticut': { capital: 'Hartford', population: '3,605,944', area: '14,357 km²', flag: 'https://flagcdn.com/w40/us-ct.png' },
    'Delaware': { capital: 'Dover', population: '989,948', area: '6,446 km²', flag: 'https://flagcdn.com/w40/us-de.png' },
    'Florida': { capital: 'Tallahassee', population: '21,538,187', area: '170,312 km²', flag: 'https://flagcdn.com/w40/us-fl.png' },
    'Georgia': { capital: 'Atlanta', population: '10,711,908', area: '153,910 km²', flag: 'https://flagcdn.com/w40/us-ga.png' },
    'Hawaii': { capital: 'Honolulu', population: '1,455,271', area: '28,311 km²', flag: 'https://flagcdn.com/w40/us-hi.png' },
    'Idaho': { capital: 'Boise', population: '1,839,106', area: '216,443 km²', flag: 'https://flagcdn.com/w40/us-id.png' },
    'Illinois': { capital: 'Springfield', population: '12,812,508', area: '149,995 km²', flag: 'https://flagcdn.com/w40/us-il.png' },
    'Indiana': { capital: 'Indianapolis', population: '6,785,528', area: '94,326 km²', flag: 'https://flagcdn.com/w40/us-in.png' },
    'Iowa': { capital: 'Des Moines', population: '3,190,369', area: '145,746 km²', flag: 'https://flagcdn.com/w40/us-ia.png' },
    'Kansas': { capital: 'Topeka', population: '2,937,880', area: '213,100 km²', flag: 'https://flagcdn.com/w40/us-ks.png' },
    'Kentucky': { capital: 'Frankfort', population: '4,505,836', area: '104,656 km²', flag: 'https://flagcdn.com/w40/us-ky.png' },
    'Louisiana': { capital: 'Baton Rouge', population: '4,657,757', area: '135,659 km²', flag: 'https://flagcdn.com/w40/us-la.png' },
    'Maine': { capital: 'Augusta', population: '1,362,359', area: '91,633 km²', flag: 'https://flagcdn.com/w40/us-me.png' },
    'Maryland': { capital: 'Annapolis', population: '6,177,224', area: '32,131 km²', flag: 'https://flagcdn.com/w40/us-md.png' },
    'Massachusetts': { capital: 'Boston', population: '7,029,917', area: '27,336 km²', flag: 'https://flagcdn.com/w40/us-ma.png' },
    'Michigan': { capital: 'Lansing', population: '10,077,331', area: '250,487 km²', flag: 'https://flagcdn.com/w40/us-mi.png' },
    'Minnesota': { capital: 'St. Paul', population: '5,706,494', area: '225,163 km²', flag: 'https://flagcdn.com/w40/us-mn.png' },
    'Mississippi': { capital: 'Jackson', population: '2,961,279', area: '125,438 km²', flag: 'https://flagcdn.com/w40/us-ms.png' },
    'Missouri': { capital: 'Jefferson City', population: '6,154,913', area: '180,540 km²', flag: 'https://flagcdn.com/w40/us-mo.png' },
    'Montana': { capital: 'Helena', population: '1,084,225', area: '380,831 km²', flag: 'https://flagcdn.com/w40/us-mt.png' },
    'Nebraska': { capital: 'Lincoln', population: '1,961,504', area: '200,330 km²', flag: 'https://flagcdn.com/w40/us-ne.png' },
    'Nevada': { capital: 'Carson City', population: '3,104,614', area: '286,380 km²', flag: 'https://flagcdn.com/w40/us-nv.png' },
    'New Hampshire': { capital: 'Concord', population: '1,377,529', area: '24,214 km²', flag: 'https://flagcdn.com/w40/us-nh.png' },
    'New Jersey': { capital: 'Trenton', population: '9,288,994', area: '22,591 km²', flag: 'https://flagcdn.com/w40/us-nj.png' },
    'New Mexico': { capital: 'Santa Fe', population: '2,117,522', area: '314,917 km²', flag: 'https://flagcdn.com/w40/us-nm.png' },
    'New York': { capital: 'Albany', population: '20,201,249', area: '141,297 km²', flag: 'https://flagcdn.com/w40/us-ny.png' },
    'North Carolina': { capital: 'Raleigh', population: '10,439,388', area: '139,391 km²', flag: 'https://flagcdn.com/w40/us-nc.png' },
    'North Dakota': { capital: 'Bismarck', population: '779,094', area: '183,108 km²', flag: 'https://flagcdn.com/w40/us-nd.png' },
    'Ohio': { capital: 'Columbus', population: '11,799,448', area: '116,096 km²', flag: 'https://flagcdn.com/w40/us-oh.png' },
    'Oklahoma': { capital: 'Oklahoma City', population: '3,959,353', area: '181,037 km²', flag: 'https://flagcdn.com/w40/us-ok.png' },
    'Oregon': { capital: 'Salem', population: '4,237,256', area: '254,799 km²', flag: 'https://flagcdn.com/w40/us-or.png' },
    'Pennsylvania': { capital: 'Harrisburg', population: '13,002,700', area: '119,280 km²', flag: 'https://flagcdn.com/w40/us-pa.png' },
    'Rhode Island': { capital: 'Providence', population: '1,097,379', area: '4,001 km²', flag: 'https://flagcdn.com/w40/us-ri.png' },
    'South Carolina': { capital: 'Columbia', population: '5,118,425', area: '82,933 km²', flag: 'https://flagcdn.com/w40/us-sc.png' },
    'South Dakota': { capital: 'Pierre', population: '886,667', area: '199,729 km²', flag: 'https://flagcdn.com/w40/us-sd.png' },
    'Tennessee': { capital: 'Nashville', population: '6,910,840', area: '109,153 km²', flag: 'https://flagcdn.com/w40/us-tn.png' },
    'Texas': { capital: 'Austin', population: '29,145,505', area: '695,662 km²', flag: 'https://flagcdn.com/w40/us-tx.png' },
    'Utah': { capital: 'Salt Lake City', population: '3,271,616', area: '219,882 km²', flag: 'https://flagcdn.com/w40/us-ut.png' },
    'Vermont': { capital: 'Montpelier', population: '643,077', area: '24,214 km²', flag: 'https://flagcdn.com/w40/us-vt.png' },
    'Virginia': { capital: 'Richmond', population: '8,654,542', area: '110,787 km²', flag: 'https://flagcdn.com/w40/us-va.png' },
    'Washington': { capital: 'Olympia', population: '7,705,281', area: '184,661 km²', flag: 'https://flagcdn.com/w40/us-wa.png' },
    'West Virginia': { capital: 'Charleston', population: '1,793,716', area: '62,755 km²', flag: 'https://flagcdn.com/w40/us-wv.png' },
    'Wisconsin': { capital: 'Madison', population: '5,893,718', area: '169,635 km²', flag: 'https://flagcdn.com/w40/us-wi.png' },
    'Wyoming': { capital: 'Cheyenne', population: '576,851', area: '253,335 km²', flag: 'https://flagcdn.com/w40/us-wy.png' }
};





const capitalCoordinates = {
    'Alabama': { lng: -86.3000, lat: 32.3777 },
    'Alaska': { lng: -134.4197, lat: 58.3019 },
    'Arizona': { lng: -112.0740, lat: 33.4484 },
    'Arkansas': { lng: -92.2896, lat: 34.7465 },
    'California': { lng: -121.4944, lat: 38.5816 },
    'Colorado': { lng: -104.9903, lat: 39.7392 },
    'Connecticut': { lng: -72.6851, lat: 41.7637 },
    'Delaware': { lng: -75.5398, lat: 39.1582 },
    'Florida': { lng: -84.2807, lat: 30.4383 },
    'Georgia': { lng: -84.3880, lat: 33.7490 },
    'Hawaii': { lng: -157.8583, lat: 21.3070 },
    'Idaho': { lng: -116.2023, lat: 43.6150 },
    'Illinois': { lng: -89.6501, lat: 39.7980 },
    'Indiana': { lng: -86.1580, lat: 39.7684 },
    'Iowa': { lng: -93.6091, lat: 41.5868 },
    'Kansas': { lng: -95.6907, lat: 39.0489 },
    'Kentucky': { lng: -84.8753, lat: 38.2009 },
    'Louisiana': { lng: -91.1403, lat: 30.4515 },
    'Maine': { lng: -69.7795, lat: 44.3070 },
    'Maryland': { lng: -76.4900, lat: 38.9784 },
    'Massachusetts': { lng: -71.0596, lat: 42.3601 },
    'Michigan': { lng: -84.5555, lat: 42.7325 },
    'Minnesota': { lng: -93.1017, lat: 44.9537 },
    'Mississippi': { lng: -90.1848, lat: 32.2988 },
    'Missouri': { lng: -92.1735, lat: 38.5767 },
    'Montana': { lng: -112.0376, lat: 46.5891 },
    'Nebraska': { lng: -96.6997, lat: 40.8136 },
    'Nevada': { lng: -119.7660, lat: 39.1638 },
    'New Hampshire': { lng: -71.5491, lat: 43.2069 },
    'New Jersey': { lng: -74.7642, lat: 40.2171 },
    'New Mexico': { lng: -105.9378, lat: 35.6869 },
    'New York': { lng: -73.7562, lat: 42.6526 },
    'North Carolina': { lng: -78.6382, lat: 35.7796 },
    'North Dakota': { lng: -100.7837, lat: 46.8083 },
    'Ohio': { lng: -82.9988, lat: 39.9612 },
    'Oklahoma': { lng: -97.5164, lat: 35.4676 },
    'Oregon': { lng: -123.0351, lat: 44.9429 },
    'Pennsylvania': { lng: -76.8844, lat: 40.2737 },
    'Rhode Island': { lng: -71.4128, lat: 41.8230 },
    'South Carolina': { lng: -81.0350, lat: 34.0007 },
    'South Dakota': { lng: -100.3464, lat: 44.3683 },
    'Tennessee': { lng: -86.7844, lat: 36.1627 },
    'Texas': { lng: -97.7431, lat: 30.2672 },
    'Utah': { lng: -111.8910, lat: 40.7608 },
    'Vermont': { lng: -72.5754, lat: 44.2601 },
    'Virginia': { lng: -77.4360, lat: 37.5407 },
    'Washington': { lng: -122.9007, lat: 47.0379 },
    'West Virginia': { lng: -81.6333, lat: 38.3498 },
    'Wisconsin': { lng: -89.4012, lat: 43.0731 },
    'Wyoming': { lng: -104.8202, lat: 41.1400 }
};


function getCapitalName(state) {
    const capitalNames = {
        'Alabama': 'Montgomery',
        'Alaska': 'Juneau',
        'Arizona': 'Phoenix',
        'Arkansas': 'Little Rock',
        'California': 'Sacramento',
        'Colorado': 'Denver',
        'Connecticut': 'Hartford',
        'Delaware': 'Dover',
        'Florida': 'Tallahassee',
        'Georgia': 'Atlanta',
        'Hawaii': 'Honolulu',
        'Idaho': 'Boise',
        'Illinois': 'Springfield',
        'Indiana': 'Indianapolis',
        'Iowa': 'Des Moines',
        'Kansas': 'Topeka',
        'Kentucky': 'Frankfort',
        'Louisiana': 'Baton Rouge',
        'Maine': 'Augusta',
        'Maryland': 'Annapolis',
        'Massachusetts': 'Boston',
        'Michigan': 'Lansing',
        'Minnesota': 'St. Paul',
        'Mississippi': 'Jackson',
        'Missouri': 'Jefferson City',
        'Montana': 'Helena',
        'Nebraska': 'Lincoln',
        'Nevada': 'Carson City',
        'New Hampshire': 'Concord',
        'New Jersey': 'Trenton',
        'New Mexico': 'Santa Fe',
        'New York': 'Albany',
        'North Carolina': 'Raleigh',
        'North Dakota': 'Bismarck',
        'Ohio': 'Columbus',
        'Oklahoma': 'Oklahoma City',
        'Oregon': 'Salem',
        'Pennsylvania': 'Harrisburg',
        'Rhode Island': 'Providence',
        'South Carolina': 'Columbia',
        'South Dakota': 'Pierre',
        'Tennessee': 'Nashville',
        'Texas': 'Austin',
        'Utah': 'Salt Lake City',
        'Vermont': 'Montpelier',
        'Virginia': 'Richmond',
        'Washington': 'Olympia',
        'West Virginia': 'Charleston',
        'Wisconsin': 'Madison',
        'Wyoming': 'Cheyenne'
    };
    return capitalNames[state] || 'N/A';
}


const capitalOffsets = {
    'Alabama': -6,
    'Alaska': -9,
    'Arizona': -7,
    'Arkansas': -6,
    'California': -8,
    'Colorado': -7,
    'Connecticut': -5,
    'Delaware': -5,
    'Florida': -5,
    'Georgia': -5,
    'Hawaii': -10,
    'Idaho': -7,
    'Illinois': -6,
    'Indiana': -5,
    'Iowa': -6,
    'Kansas': -6,
    'Kentucky': -5,
    'Louisiana': -6,
    'Maine': -5,
    'Maryland': -5,
    'Massachusetts': -5,
    'Michigan': -5,
    'Minnesota': -6,
    'Mississippi': -6,
    'Missouri': -6,
    'Montana': -7,
    'Nebraska': -6,
    'Nevada': -8,
    'New Hampshire': -5,
    'New Jersey': -5,
    'New Mexico': -7,
    'New York': -5,
    'North Carolina': -5,
    'North Dakota': -6,
    'Ohio': -5,
    'Oklahoma': -6,
    'Oregon': -8,
    'Pennsylvania': -5,
    'Rhode Island': -5,
    'South Carolina': -5,
    'South Dakota': -6,
    'Tennessee': -6,
    'Texas': -6,
    'Utah': -7,
    'Vermont': -5,
    'Virginia': -5,
    'Washington': -8,
    'West Virginia': -5,
    'Wisconsin': -6,
    'Wyoming': -7
};

    




const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-98.5, 39.8], // Geografski centar SAD-a
    zoom: 3.2 // Prikaz cijele države
});
    
    
 
let geojsonData;
async function addLayers() {
    const response = await fetch('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json');
    geojsonData = await response.json();

    // Filter to include all U.S. states using the same variable name
    const filteredFeatures = geojsonData.features.filter(feature => 
        europeCountries.includes(feature.properties.name) // Keep this variable if it contains U.S. states
    );

    const filteredGeoJSON = {
        type: 'FeatureCollection',
        features: filteredFeatures
    };

    // Remove the old source if it exists
    if (map.getSource('europe-countries')) {
        map.removeSource('europe-countries');
    }

    // Add the new source
    map.addSource('europe-countries', {
        type: 'geojson',
        data: filteredGeoJSON
    });

    // Add a layer to show the states
    map.addLayer({
        id: 'countries-layer',
        type: 'fill',
        source: 'europe-countries',
        paint: {
            'fill-color': ['get', ['get', 'name'], ['literal', countryColors]], // Use 'name' to get the correct color
            'fill-opacity': 0.6
        }
    });

    // Add a layer for borders
    map.addLayer({
        id: 'borders-layer',
        type: 'line',
        source: 'europe-countries',
        paint: {
            'line-color': '#ffffff',
            'line-width': 1
        }
    });

    // Click event to color and add to visited states
    map.on('click', 'countries-layer', (e) => {
        const countryName = e.features[0].properties.name; // Keep using 'name'

        // Toggle visited status
        if (!visitedCountries.includes(countryName)) {
            // If not visited, add to visited countries
            visitedCountries.push(countryName);
            updateVisitedCountriesDropdown(countryName);
            colorCountry(countryName);
            checkCountryInDropdown(countryName, true); // Check the checkbox
        } else {
            // If visited, remove from visited countries
            removeCountryFromVisited(countryName);
            uncolorCountry(countryName);
            checkCountryInDropdown(countryName, false); // Uncheck the checkbox
        }
    });

    // Event listener for the dropdown selection
    visitedSelectElement.addEventListener('change', (e) => {
        const selectedCountryName = e.target.value; // Keep using the same variable
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
        'get', ['get', 'name'], ['literal', countryColors]
    ]);
    
}

// Function to uncolor the country
function uncolorCountry(countryName) {
    delete countryColors[countryName];

    map.setPaintProperty('countries-layer', 'fill-color', [
        'get', ['get', 'name'], ['literal', countryColors]
    ]);
}
    
    
    
    
    
    
    
    
    
    
    
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
            const countryFeature = geojsonData.features.find(feature => feature.properties.name === countryName);

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
            const countryFeature = geojsonData.features.find(feature => feature.properties.name === countryName);

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
    const countryName = feature.properties.name || 'Unknown';

    //const countryCode = feature.properties.ISO_A3 || 'N/A';
    // Pronađite odgovarajući kod države u `countries` nizu
    const countryData = countries.find(country => country.name === countryName);
    const countryCode = countryData ? countryData.code : 'N/A';



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
 
    
    
    
    