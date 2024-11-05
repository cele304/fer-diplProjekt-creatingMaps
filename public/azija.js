
mapboxgl.accessToken = 'pk.eyJ1IjoiY29maSIsImEiOiJjbHl6djlwdm8ycHVxMnFzNnF0NjQ3dzFxIn0.cS7PDb30iYYjVLrmGyDm9A';







const neighbors = {
    'Afghanistan': ['China', 'Iran', 'Pakistan', 'Tajikistan', 'Turkmenistan', 'Uzbekistan'],
    'Armenia': ['Azerbaijan', 'Georgia', 'Iran', 'Turkey', 'Russia'],
    'Azerbaijan': ['Armenia', 'Georgia', 'Iran', 'Russia', 'Turkey'],
    'Bahrain': [], // Otok nema kopnenih granica
    'Bangladesh': ['India', 'Myanmar'],
    'Bhutan': ['China', 'India'],
    'Brunei': ['Malaysia'],
    'Cambodia': ['Laos', 'Thailand', 'Vietnam'],
    'China': ['Afghanistan', 'Bhutan', 'India', 'Kazakhstan', 'Kyrgyzstan', 'Laos', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Pakistan', 'Russia', 'Tajikistan', 'Vietnam'],
    'Cyprus': [], // Otok nema kopnenih granica
    'Georgia': ['Armenia', 'Azerbaijan', 'Russia', 'Turkey'],
    'India': ['Bangladesh', 'Bhutan', 'China', 'Myanmar', 'Nepal', 'Pakistan'],
    'Indonesia': ['Papua New Guinea', 'East Timor', 'Malaysia'],
    'Iran': ['Afghanistan', 'Armenia', 'Azerbaijan', 'Iraq', 'Pakistan', 'Turkey', 'Turkmenistan'],
    'Iraq': ['Iran', 'Jordan', 'Kuwait', 'Saudi Arabia', 'Syria', 'Turkey'],
    'Israel': ['Egypt', 'Jordan', 'Lebanon', 'Palestine', 'Syria'],
    'Japan': [], // Otok nema kopnenih granica
    'Jordan': ['Iraq', 'Israel', 'Saudi Arabia', 'Syria'],
    'Kazakhstan': ['China', 'Kyrgyzstan', 'Russia', 'Turkmenistan', 'Uzbekistan'],
    'Kuwait': ['Iraq', 'Saudi Arabia'],
    'Kyrgyzstan': ['China', 'Kazakhstan', 'Tajikistan', 'Uzbekistan'],
    'Laos': ['Cambodia', 'China', 'Myanmar', 'Thailand', 'Vietnam'],
    'Lebanon': ['Israel', 'Syria'],
    'Malaysia': ['Brunei', 'Indonesia', 'Thailand'],
    'Maldives': [], // Otok nema kopnenih granica
    'Mongolia': ['China', 'Russia'],
    'Myanmar': ['Bangladesh', 'China', 'India', 'Laos', 'Thailand'],
    'Nepal': ['China', 'India'],
    'North Korea': ['China', 'South Korea', 'Russia'],
    'Oman': ['Saudi Arabia', 'United Arab Emirates', 'Yemen'],
    'Pakistan': ['Afghanistan', 'China', 'India', 'Iran'],
    'Palestine': ['Egypt', 'Israel', 'Jordan'],
    'Philippines': [], // Otok nema kopnenih granica
    'Qatar': ['Saudi Arabia'],
    'Saudi Arabia': ['Iraq', 'Jordan', 'Kuwait', 'Oman', 'Qatar', 'United Arab Emirates', 'Yemen'],
    'Singapore': [], // Otok nema kopnenih granica
    'South Korea': ['North Korea'],
    'Sri Lanka': [], // Otok nema kopnenih granica
    'Syria': ['Iraq', 'Israel', 'Jordan', 'Lebanon', 'Turkey'],
    'Taiwan': [], // Otok nema kopnenih granica
    'Tajikistan': ['Afghanistan', 'China', 'Kyrgyzstan', 'Uzbekistan'],
    'Thailand': ['Cambodia', 'Laos', 'Malaysia', 'Myanmar'],
    'East Timor': ['Indonesia'],
    'Turkmenistan': ['Afghanistan', 'Iran', 'Kazakhstan', 'Uzbekistan'],
    'United Arab Emirates': ['Oman', 'Saudi Arabia'],
    'Uzbekistan': ['Afghanistan', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan'],
    'Vietnam': ['Cambodia', 'China', 'Laos'],
    'Yemen': ['Oman', 'Saudi Arabia'],
    'Papua New Guinea': ['Indonesia'],

    'Russia': ['Azerbaijan', 'Belarus', 'Estonia', 'Finland', 'Georgia',  'Kazakhstan', 'China', 'Lithuania', 'Latvia', 'Moldova', 'Norway', 'Poland', 'Ukraine', 'Mongolia', 'Armenia'],
    'Turkey': ['Armenia', 'Azerbaijan', 'Bulgaria', 'Greece', 'Georgia', 'Iran', 'Iraq', 'Syria']
};



// Filtriranje GeoJSON podataka za Aziju
const europeCountries = [
    'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 
    'Cambodia', 'China', 'Cyprus', 'Georgia', 'India', 'Indonesia', 'Iran', 
    'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 
    'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 
    'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Saudi Arabia', 
    'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan', 
    'Thailand', 'East Timor', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 
    'Vietnam', 'Yemen', 'Papua New Guinea', 'Russia', 'Turkey'
];
    


// Zastave
const countries = [
    { name: 'Afghanistan', code: 'AF', flag: 'https://flagcdn.com/w40/af.png' },
    { name: 'Armenia', code: 'AM', flag: 'https://flagcdn.com/w40/am.png' },
    { name: 'Azerbaijan', code: 'AZ', flag: 'https://flagcdn.com/w40/az.png' },
    { name: 'Bahrain', code: 'BH', flag: 'https://flagcdn.com/w40/bh.png' },
    { name: 'Bangladesh', code: 'BD', flag: 'https://flagcdn.com/w40/bd.png' },
    { name: 'Bhutan', code: 'BT', flag: 'https://flagcdn.com/w40/bt.png' },
    { name: 'Brunei', code: 'BN', flag: 'https://flagcdn.com/w40/bn.png' },
    { name: 'Cambodia', code: 'KH', flag: 'https://flagcdn.com/w40/kh.png' },
    { name: 'China', code: 'CN', flag: 'https://flagcdn.com/w40/cn.png' },
    { name: 'Cyprus', code: 'CY', flag: 'https://flagcdn.com/w40/cy.png' },
    { name: 'Georgia', code: 'GE', flag: 'https://flagcdn.com/w40/ge.png' },
    { name: 'India', code: 'IN', flag: 'https://flagcdn.com/w40/in.png' },
    { name: 'Indonesia', code: 'ID', flag: 'https://flagcdn.com/w40/id.png' },
    { name: 'Iran', code: 'IR', flag: 'https://flagcdn.com/w40/ir.png' },
    { name: 'Iraq', code: 'IQ', flag: 'https://flagcdn.com/w40/iq.png' },
    { name: 'Israel', code: 'IL', flag: 'https://flagcdn.com/w40/il.png' },
    { name: 'Japan', code: 'JP', flag: 'https://flagcdn.com/w40/jp.png' },
    { name: 'Jordan', code: 'JO', flag: 'https://flagcdn.com/w40/jo.png' },
    { name: 'Kazakhstan', code: 'KZ', flag: 'https://flagcdn.com/w40/kz.png' },
    { name: 'Kuwait', code: 'KW', flag: 'https://flagcdn.com/w40/kw.png' },
    { name: 'Kyrgyzstan', code: 'KG', flag: 'https://flagcdn.com/w40/kg.png' },
    { name: 'Laos', code: 'LA', flag: 'https://flagcdn.com/w40/la.png' },
    { name: 'Lebanon', code: 'LB', flag: 'https://flagcdn.com/w40/lb.png' },
    { name: 'Malaysia', code: 'MY', flag: 'https://flagcdn.com/w40/my.png' },
    { name: 'Maldives', code: 'MV', flag: 'https://flagcdn.com/w40/mv.png' },
    { name: 'Mongolia', code: 'MN', flag: 'https://flagcdn.com/w40/mn.png' },
    { name: 'Myanmar', code: 'MM', flag: 'https://flagcdn.com/w40/mm.png' },
    { name: 'Nepal', code: 'NP', flag: 'https://flagcdn.com/w40/np.png' },
    { name: 'North Korea', code: 'KP', flag: 'https://flagcdn.com/w40/kp.png' },
    { name: 'Oman', code: 'OM', flag: 'https://flagcdn.com/w40/om.png' },
    { name: 'Pakistan', code: 'PK', flag: 'https://flagcdn.com/w40/pk.png' },
    { name: 'Palestine', code: 'PS', flag: 'https://flagcdn.com/w40/ps.png' },
    { name: 'Philippines', code: 'PH', flag: 'https://flagcdn.com/w40/ph.png' },
    { name: 'Qatar', code: 'QA', flag: 'https://flagcdn.com/w40/qa.png' },
    { name: 'Saudi Arabia', code: 'SA', flag: 'https://flagcdn.com/w40/sa.png' },
    { name: 'Singapore', code: 'SG', flag: 'https://flagcdn.com/w40/sg.png' },
    { name: 'South Korea', code: 'KR', flag: 'https://flagcdn.com/w40/kr.png' },
    { name: 'Sri Lanka', code: 'LK', flag: 'https://flagcdn.com/w40/lk.png' },
    { name: 'Syria', code: 'SY', flag: 'https://flagcdn.com/w40/sy.png' },
    { name: 'Taiwan', code: 'TW', flag: 'https://flagcdn.com/w40/tw.png' },
    { name: 'Tajikistan', code: 'TJ', flag: 'https://flagcdn.com/w40/tj.png' },
    { name: 'Thailand', code: 'TH', flag: 'https://flagcdn.com/w40/th.png' },
    { name: 'East Timor', code: 'TL', flag: 'https://flagcdn.com/w40/tl.png' },
    { name: 'Turkmenistan', code: 'TM', flag: 'https://flagcdn.com/w40/tm.png' },
    { name: 'United Arab Emirates', code: 'AE', flag: 'https://flagcdn.com/w40/ae.png' },
    { name: 'Uzbekistan', code: 'UZ', flag: 'https://flagcdn.com/w40/uz.png' },
    { name: 'Vietnam', code: 'VN', flag: 'https://flagcdn.com/w40/vn.png' },
    { name: 'Yemen', code: 'YE', flag: 'https://flagcdn.com/w40/ye.png' },
    { name: 'Papua New Guinea', code: 'PG', flag: 'https://flagcdn.com/w40/pg.png' },
    { name: 'Russia', code: 'RU', flag: 'https://flagcdn.com/w40/ru.png' },
    { name: 'Turkey', code: 'TR', flag: 'https://flagcdn.com/w40/tr.png' }
];





const extendedCountryInfo = {
    'Afghanistan': { capital: 'Kabul', population: '41,128,771', area: '652,230 km²', flag: 'https://flagcdn.com/w40/af.png' },
    'Armenia': { capital: 'Yerevan', population: '2,968,127', area: '29,743 km²', flag: 'https://flagcdn.com/w40/am.png' },
    'Azerbaijan': { capital: 'Baku', population: '10,354,309', area: '86,600 km²', flag: 'https://flagcdn.com/w40/az.png' },
    'Bahrain': { capital: 'Manama', population: '1,783,983', area: '765 km²', flag: 'https://flagcdn.com/w40/bh.png' },
    'Bangladesh': { capital: 'Dhaka', population: '169,356,251', area: '147,570 km²', flag: 'https://flagcdn.com/w40/bd.png' },
    'Bhutan': { capital: 'Thimphu', population: '786,760', area: '38,394 km²', flag: 'https://flagcdn.com/w40/bt.png' },
    'Brunei': { capital: 'Bandar Seri Begawan', population: '453,600', area: '5,765 km²', flag: 'https://flagcdn.com/w40/bn.png' },
    'Cambodia': { capital: 'Phnom Penh', population: '16,926,984', area: '181,035 km²', flag: 'https://flagcdn.com/w40/kh.png' },
    'China': { capital: 'Beijing', population: '1,425,887,337', area: '9,596,961 km²', flag: 'https://flagcdn.com/w40/cn.png' },
    'Cyprus': { capital: 'Nicosia', population: '1,251,488', area: '9,251 km²', flag: 'https://flagcdn.com/w40/cy.png' },
    'Georgia': { capital: 'Tbilisi', population: '3,688,647', area: '69,700 km²', flag: 'https://flagcdn.com/w40/ge.png' },
    'India': { capital: 'New Delhi', population: '1,425,775,850', area: '3,287,263 km²', flag: 'https://flagcdn.com/w40/in.png' },
    'Indonesia': { capital: 'Jakarta', population: '275,773,800', area: '1,904,569 km²', flag: 'https://flagcdn.com/w40/id.png' },
    'Iran': { capital: 'Tehran', population: '89,172,767', area: '1,648,195 km²', flag: 'https://flagcdn.com/w40/ir.png' },
    'Iraq': { capital: 'Baghdad', population: '43,533,592', area: '438,317 km²', flag: 'https://flagcdn.com/w40/iq.png' },
    'Israel': { capital: 'Jerusalem', population: '9,727,000', area: '22,072 km²', flag: 'https://flagcdn.com/w40/il.png' },
    'Japan': { capital: 'Tokyo', population: '124,214,766', area: '377,975 km²', flag: 'https://flagcdn.com/w40/jp.png' },
    'Jordan': { capital: 'Amman', population: '11,237,963', area: '89,342 km²', flag: 'https://flagcdn.com/w40/jo.png' },
    'Kazakhstan': { capital: 'Nur-Sultan', population: '19,611,900', area: '2,724,900 km²', flag: 'https://flagcdn.com/w40/kz.png' },
    'Kuwait': { capital: 'Kuwait City', population: '4,687,600', area: '17,818 km²', flag: 'https://flagcdn.com/w40/kw.png' },
    'Kyrgyzstan': { capital: 'Bishkek', population: '6,676,046', area: '199,951 km²', flag: 'https://flagcdn.com/w40/kg.png' },
    'Laos': { capital: 'Vientiane', population: '7,749,591', area: '236,800 km²', flag: 'https://flagcdn.com/w40/la.png' },
    'Lebanon': { capital: 'Beirut', population: '5,296,814', area: '10,452 km²', flag: 'https://flagcdn.com/w40/lb.png' },
    'Malaysia': { capital: 'Kuala Lumpur', population: '33,573,874', area: '330,803 km²', flag: 'https://flagcdn.com/w40/my.png' },
    'Maldives': { capital: 'Malé', population: '521,021', area: '298 km²', flag: 'https://flagcdn.com/w40/mv.png' },
    'Mongolia': { capital: 'Ulaanbaatar', population: '3,409,939', area: '1,564,116 km²', flag: 'https://flagcdn.com/w40/mn.png' },
    'Myanmar': { capital: 'Naypyidaw', population: '54,179,306', area: '676,578 km²', flag: 'https://flagcdn.com/w40/mm.png' },
    'Nepal': { capital: 'Kathmandu', population: '30,316,088', area: '147,181 km²', flag: 'https://flagcdn.com/w40/np.png' },
    'North Korea': { capital: 'Pyongyang', population: '26,067,251', area: '120,538 km²', flag: 'https://flagcdn.com/w40/kp.png' },
    'Oman': { capital: 'Muscat', population: '4,576,298', area: '309,500 km²', flag: 'https://flagcdn.com/w40/om.png' },
    'Pakistan': { capital: 'Islamabad', population: '248,256,000', area: '881,913 km²', flag: 'https://flagcdn.com/w40/pk.png' },
    'Palestine': { capital: 'Jerusalem (East)', population: '5,203,659', area: '6,220 km²', flag: 'https://flagcdn.com/w40/ps.png' },
    'Philippines': { capital: 'Manila', population: '114,420,518', area: '300,000 km²', flag: 'https://flagcdn.com/w40/ph.png' },
    'Qatar': { capital: 'Doha', population: '2,926,239', area: '11,586 km²', flag: 'https://flagcdn.com/w40/qa.png' },
    'Saudi Arabia': { capital: 'Riyadh', population: '37,840,000', area: '2,149,690 km²', flag: 'https://flagcdn.com/w40/sa.png' },
    'Singapore': { capital: 'Singapore', population: '5,637,000', area: '710 km²', flag: 'https://flagcdn.com/w40/sg.png' },
    'South Korea': { capital: 'Seoul', population: '51,616,045', area: '100,210 km²', flag: 'https://flagcdn.com/w40/kr.png' },
    'Sri Lanka': { capital: 'Sri Jayawardenepura Kotte', population: '21,411,303', area: '65,610 km²', flag: 'https://flagcdn.com/w40/lk.png' },
    'Syria': { capital: 'Damascus', population: '22,125,100', area: '185,180 km²', flag: 'https://flagcdn.com/w40/sy.png' },
    'Taiwan': { capital: 'Taipei', population: '23,888,595', area: '36,193 km²', flag: 'https://flagcdn.com/w40/tw.png' },
    'Tajikistan': { capital: 'Dushanbe', population: '10,231,000', area: '143,100 km²', flag: 'https://flagcdn.com/w40/tj.png' },
    'Thailand': { capital: 'Bangkok', population: '70,847,000', area: '513,120 km²', flag: 'https://flagcdn.com/w40/th.png' },
    'East Timor': { capital: 'Dili', population: '1,356,412', area: '14,874 km²', flag: 'https://flagcdn.com/w40/tl.png' },
    'Turkmenistan': { capital: 'Ashgabat', population: '6,500,000', area: '488,100 km²', flag: 'https://flagcdn.com/w40/tm.png' },
    'United Arab Emirates': { capital: 'Abu Dhabi', population: '10,226,000', area: '83,600 km²', flag: 'https://flagcdn.com/w40/ae.png' },
    'Uzbekistan': { capital: 'Tashkent', population: '35,400,000', area: '447,400 km²', flag: 'https://flagcdn.com/w40/uz.png' },
    'Vietnam': { capital: 'Hanoi', population: '100,883,085', area: '331,212 km²', flag: 'https://flagcdn.com/w40/vn.png' },
    'Yemen': { capital: 'Sana\'a', population: '33,377,000', area: '527,968 km²', flag: 'https://flagcdn.com/w40/ye.png' },
    'Papua New Guinea': { capital: 'Port Moresby', population: '9,231,000', area: '462,840 km²', flag: 'https://flagcdn.com/w40/pg.png' },
    'Russia': { capital: 'Moscow', population: '146,171,015', area: '17,098,242 km²', flag: 'https://flagcdn.com/w40/ru.png' },
    'Turkey': { capital: 'Ankara', population: '85,279,553', area: '783,562 km²', flag: 'https://flagcdn.com/w40/tr.png' }
};



const capitalCoordinates = {
    'Afghanistan': { lng: 69.2075, lat: 34.5553 },
    'Armenia': { lng: 44.5152, lat: 40.1833 },
    'Azerbaijan': { lng: 49.8671, lat: 40.4093 },
    'Bahrain': { lng: 50.5861, lat: 26.2285 },
    'Bangladesh': { lng: 90.4125, lat: 23.8103 },
    'Bhutan': { lng: 89.6361, lat: 27.4728 },
    'Brunei': { lng: 114.939, lat: 4.9031 },
    'Cambodia': { lng: 104.916, lat: 11.5564 },
    'China': { lng: 116.4074, lat: 39.9042 },
    'Cyprus': { lng: 33.3823, lat: 35.1856 },
    'Georgia': { lng: 44.7833, lat: 41.7167 },
    'India': { lng: 77.209, lat: 28.6139 },
    'Indonesia': { lng: 106.8456, lat: -6.2088 },
    'Iran': { lng: 51.389, lat: 35.6892 },
    'Iraq': { lng: 44.3615, lat: 33.3152 },
    'Israel': { lng: 35.2137, lat: 31.7683 },
    'Japan': { lng: 139.6917, lat: 35.6895 },
    'Jordan': { lng: 35.9306, lat: 31.9539 },
    'Kazakhstan': { lng: 71.4704, lat: 51.1694 },
    'Kuwait': { lng: 47.9774, lat: 29.3759 },
    'Kyrgyzstan': { lng: 74.5698, lat: 42.8746 },
    'Laos': { lng: 102.6341, lat: 17.9757 },
    'Lebanon': { lng: 35.5018, lat: 33.8938 },
    'Malaysia': { lng: 101.6869, lat: 3.139 },
    'Maldives': { lng: 73.5089, lat: 4.1755 },
    'Mongolia': { lng: 106.917, lat: 47.8864 },
    'Myanmar': { lng: 96.158, lat: 19.745 },
    'Nepal': { lng: 85.324, lat: 27.7172 },
    'North Korea': { lng: 125.763, lat: 39.0392 },
    'Oman': { lng: 58.5933, lat: 23.5859 },
    'Pakistan': { lng: 73.0479, lat: 33.6844 },
    'Palestine': { lng: 35.2348, lat: 31.9474 },
    'Philippines': { lng: 120.9842, lat: 14.5995 },
    'Qatar': { lng: 51.531, lat: 25.2769 },
    'Saudi Arabia': { lng: 46.7219, lat: 24.7136 },
    'Singapore': { lng: 103.8198, lat: 1.3521 },
    'South Korea': { lng: 126.9779, lat: 37.5665 },
    'Sri Lanka': { lng: 79.9585, lat: 6.9271 },
    'Syria': { lng: 36.2783, lat: 33.5138 },
    'Taiwan': { lng: 121.5654, lat: 25.0329 },
    'Tajikistan': { lng: 68.7739, lat: 38.5598 },
    'Thailand': { lng: 100.5018, lat: 13.7563 },
    'East Timor': { lng: 125.5736, lat: -8.5586 },
    'Turkmenistan': { lng: 58.3838, lat: 37.9601 },
    'United Arab Emirates': { lng: 54.3705, lat: 24.4539 },
    'Uzbekistan': { lng: 69.2471, lat: 41.2995 },
    'Vietnam': { lng: 105.8542, lat: 21.0285 },
    'Yemen': { lng: 44.207, lat: 15.3694 },
    'Papua New Guinea': { lng: 147.1797, lat: -9.4438 },
    'Russia': { lng: 37.6173, lat: 55.7558 },
    'Turkey': { lng: 32.8597, lat: 39.9334 }
};


function getCapitalName(country) {
    const capitalNames = {
        'Afghanistan': 'Kabul',
        'Armenia': 'Yerevan',
        'Azerbaijan': 'Baku',
        'Bahrain': 'Manama',
        'Bangladesh': 'Dhaka',
        'Bhutan': 'Thimphu',
        'Brunei': 'Bandar Seri Begawan',
        'Cambodia': 'Phnom Penh',
        'China': 'Beijing',
        'Cyprus': 'Nicosia',
        'Georgia': 'Tbilisi',
        'India': 'New Delhi',
        'Indonesia': 'Jakarta',
        'Iran': 'Tehran',
        'Iraq': 'Baghdad',
        'Israel': 'Jerusalem',
        'Japan': 'Tokyo',
        'Jordan': 'Amman',
        'Kazakhstan': 'Nur-Sultan',
        'Kuwait': 'Kuwait City',
        'Kyrgyzstan': 'Bishkek',
        'Laos': 'Vientiane',
        'Lebanon': 'Beirut',
        'Malaysia': 'Kuala Lumpur',
        'Maldives': 'Malé',
        'Mongolia': 'Ulaanbaatar',
        'Myanmar': 'Naypyidaw',
        'Nepal': 'Kathmandu',
        'North Korea': 'Pyongyang',
        'Oman': 'Muscat',
        'Pakistan': 'Islamabad',
        'Palestine': 'Jerusalem (East)',
        'Philippines': 'Manila',
        'Qatar': 'Doha',
        'Saudi Arabia': 'Riyadh',
        'Singapore': 'Singapore',
        'South Korea': 'Seoul',
        'Sri Lanka': 'Sri Jayawardenepura Kotte',
        'Syria': 'Damascus',
        'Taiwan': 'Taipei',
        'Tajikistan': 'Dushanbe',
        'Thailand': 'Bangkok',
        'East Timor': 'Dili',
        'Turkmenistan': 'Ashgabat',
        'United Arab Emirates': 'Abu Dhabi',
        'Uzbekistan': 'Tashkent',
        'Vietnam': 'Hanoi',
        'Yemen': 'Sana\'a',
        'Papua New Guinea': 'Port Moresby',
        'Russia': 'Moscow',
        'Turkey': 'Ankara'
    };
    return capitalNames[country] || 'N/A';
}


const capitalOffsets = {
    'Afghanistan': 4.5,
    'Armenia': 4,
    'Azerbaijan': 4,
    'Bahrain': 3,
    'Bangladesh': 6,
    'Bhutan': 6,
    'Brunei': 8,
    'Cambodia': 7,
    'China': 8,
    'Cyprus': 2,
    'Georgia': 4,
    'India': 5.5,
    'Indonesia': 7,
    'Iran': 3.5,
    'Iraq': 3,
    'Israel': 2,
    'Japan': 9,
    'Jordan': 3,
    'Kazakhstan': 5,
    'Kuwait': 3,
    'Kyrgyzstan': 6,
    'Laos': 7,
    'Lebanon': 2,
    'Malaysia': 8,
    'Maldives': 5,
    'Mongolia': 8,
    'Myanmar': 6.5,
    'Nepal': 5.75,
    'North Korea': 9,
    'Oman': 4,
    'Pakistan': 5,
    'Palestine': 2,
    'Philippines': 8,
    'Qatar': 3,
    'Saudi Arabia': 3,
    'Singapore': 8,
    'South Korea': 9,
    'Sri Lanka': 5.5,
    'Syria': 2,
    'Taiwan': 8,
    'Tajikistan': 5,
    'Thailand': 7,
    'East Timor': 9,
    'Turkmenistan': 5,
    'United Arab Emirates': 4,
    'Uzbekistan': 5,
    'Vietnam': 7,
    'Yemen': 3,
    'Papua New Guinea': 10,
    'Russia': 3,
    'Turkey': 3
};








// Inicijalizacija mape za Aziju
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [105.0, 35.0], // Centar Azije (long, lat)
    zoom: 2.5 // Postavka zumiranja za prikaz cijele regije
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
 
    
    
    
    