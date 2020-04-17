export const MAP_TYPES = {
  COUNTRY: 'country',
  STATE: 'state',
};

export const MAPS_DIR = '/maps';
export const DATA_DIR = '/data';

export const MAP_META = {
  Nepal: {
    name: 'Nepal',
    geoDataFile: `${MAPS_DIR}/nepal.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectName: 'nepal',
  },
  'Province 1': {
    name: 'Province 1',
    geoDataFile: `${MAPS_DIR}/province1.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province1_district',
  },
  'Province 2': {
    name: 'Province 2',
    geoDataFile: `${MAPS_DIR}/province2.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province2_district',
  },
  'Province 3': {
    name: 'Province 3',
    geoDataFile: `${MAPS_DIR}/province3.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province3_district',
  },
  'Province 4': {
    name: 'Province 4',
    geoDataFile: `${MAPS_DIR}/province4.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province4_district',
  },
  'Province 5': {
    name: 'Province 5',
    geoDataFile: `${MAPS_DIR}/province5.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province5_district',
  },
  'Province 6': {
    name: 'Province 6',
    geoDataFile: `${MAPS_DIR}/province6.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province6_district',
  },
  'Province 7': {
    name: 'Province 7',
    geoDataFile: `${MAPS_DIR}/province7.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'province7_district',
  },
};

export const STATE_CODES = {
  P1: 'Province 1',
  P2: 'Province 2',
  P3: 'Province 3',
  P4: 'Province 4',
  P5: 'Province 5',
  P6: 'Province 6',
  P7: 'Province 7',
};

const reverseStateCodes = {};
Object.keys(STATE_CODES).map((key, index) => {
  reverseStateCodes[STATE_CODES[key]] = key;
  return null;
});
export const STATE_CODES_REVERSE = reverseStateCodes;

const stateCodes = [];
Object.keys(STATE_CODES).map((key, index) => {
  stateCodes.push({code: key, name: STATE_CODES[key]});
  return null;
});
export const STATE_CODES_ARRAY = stateCodes;

export const DISTRICTS_ARRAY = [
  {
    district: 'Jhapa',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Illam',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Panchthar',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Taplejung',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Morang',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Sunsari',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Bhojpur',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Dhankuta',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Tehrathum',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Sankhuwasabha',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Udayapur',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Khotang',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Okhaldunga',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Solukhumbu',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Saptari',
    othernamesspellings: '',
    state: 'Province 2',
  },
  {
    district: 'Siraha',
    othernamesspellings: '',
    state: 'Province 2',
  },
  {
    district: 'Dhanusa',
    othernamesspellings: '',
    state: 'Province 2',
  },
  {
    district: 'Mahottari',
    othernamesspellings: '',
    state: 'Province 2',
  },
  {
    district: 'Sarlahi',
    othernamesspellings: '',
    state: 'Province 2',
  },
  {
    district: 'Bara',
    othernamesspellings: '',
    state: 'Province 2',
  },
  {
    district: 'Parsa',
    othernamesspellings: '',
    state: 'Province 2',
  },
  {
    district: 'Rautahat',
    othernamesspellings: '',
    state: 'Province 2',
  },
  {
    district: 'Sindhuli',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Ramechhap',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Dolakha',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Bhaktapur',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Dhading',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Kathmandu',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'kavrepalanchowk',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Lalitpur',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Nuwakot',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Rasuwa',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Sindhupalchowk',
    othernamesspellings: '',
    state: 'Province 3',
  },
  {
    district: 'Chitwan',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Makwanpur',
    othernamesspellings: '',
    state: 'Province 1',
  },
  {
    district: 'Gorkha',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Kaski',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Lamjung',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Syangja',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Tanahu',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Manang',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Nawalpur',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Baglung',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Myagdi',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Parbat',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Mustang',
    othernamesspellings: '',
    state: 'Province 4',
  },
  {
    district: 'Kapilvastu',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Parasi',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Rupandehi',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Argakhanchi',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Gulmi',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Palpa',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Dang',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Pyuthan',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Rolpa',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Eastern Rukum',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Banke',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Bardiya',
    othernamesspellings: '',
    state: 'Province 5',
  },
  {
    district: 'Western Rukum',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Salyan',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Dolpa',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Humla',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Jumla',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Kalikot',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Mugu',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Surkhet',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Dailekh',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Jajarkot',
    othernamesspellings: '',
    state: 'Province 6',
  },
  {
    district: 'Kailali',
    othernamesspellings: '',
    state: 'Province 7',
  },
  {
    district: 'Achham',
    othernamesspellings: '',
    state: 'Province 7',
  },
  {
    district: 'Doti',
    othernamesspellings: '',
    state: 'Province 7',
  },
  {
    district: 'Bajhang',
    othernamesspellings: '',
    state: 'Province 7',
  },
  {
    district: 'Bajura',
    othernamesspellings: '',
    state: 'Province 7',
  },
  {
    district: 'Kanchanpur',
    othernamesspellings: '',
    state: 'Province 7',
  },
  {
    district: 'Dadeldhura',
    othernamesspellings: '',
    state: 'Province 7',
  },
  {
    district: 'Baitadi',
    othernamesspellings: '',
    state: 'Province 7',
  },
  {
    district: 'Darchula',
    othernamesspellings: '',
    state: 'Province 7',
  },
];
