export const MAP_TYPES = {
  COUNTRY: 'country',
  STATE: 'state',
  DISTRICT: 'district',
};

export const MAPS_DIR = '/maps';
export const DATA_DIR = '/data';

export const STATE_ROW_STATISTICS = [
  'confirmed',
  'active',
  'recovered',
  'deaths',
];

export const DISTRICT_ROW_STATISTICS = [
  'confirmed',
  'active',
  'recovered',
  'deceased',
];

export const MAP_STATISTICS = {
  TOTAL: 0,
  PER_MILLION: 1,
  Zone: 2,
};

export const MAP_VIEWS = {
  STATES: 0,
  DISTRICTS: 1,
};

export const MAP_META = {
  Nepal: {
    geoDataFile: `${MAPS_DIR}/nepal.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectStates: 'nepal-states',
    graphObjectDistricts: 'nepal-districts',
  },
  'Province 1': {
    geoDataFile: `${MAPS_DIR}/province1.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'province1_district',
  },
  'Province 2': {
    geoDataFile: `${MAPS_DIR}/province2.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'province2_district',
  },
  'Bagmati Province': {
    geoDataFile: `${MAPS_DIR}/province3.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'province3_district',
  },
  'Gandaki Province': {
    geoDataFile: `${MAPS_DIR}/province4.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'province4_district',
  },
  'Province 5': {
    geoDataFile: `${MAPS_DIR}/province5.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'province5_district',
  },
  'Karnali Province': {
    geoDataFile: `${MAPS_DIR}/province6.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'province6_district',
  },
  'Sudurpaschim Province': {
    geoDataFile: `${MAPS_DIR}/province7.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'province7_district',
  },
};

export const STATE_CODES = {
  P1: 'Province 1',
  P2: 'Province 2',
  P3: 'Bagmati Province',
  P4: 'Gandaki Province',
  P5: 'Province 5',
  P6: 'Karnali Province',
  P7: 'Sudurpaschim Province',
};

export const STATE_POPULATIONS = {
  'Province 1': 4766923,
  'Province 2': 5871066,
  'Bagmati Province': 6026626,
  'Gandaki Province': 2472494,
  'Province 5': 4831638,
  'Karnali Province': 1701800,
  'Sudurpaschim Province': 2760947,
  Total: 28431494,
};

const stateCodes = [];
const reverseStateCodes = {};
Object.keys(STATE_CODES).map((key, index) => {
  reverseStateCodes[STATE_CODES[key]] = key;
  stateCodes.push({code: key, name: STATE_CODES[key]});
  return null;
});
export const STATE_CODES_REVERSE = reverseStateCodes;
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
    state: 'Bagmati Province',
  },
  {
    district: 'Ramechhap',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Dolakha',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Bhaktapur',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Dhading',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Kathmandu',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Kavrepalanchowk',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Lalitpur',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Nuwakot',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Rasuwa',
    othernamesspellings: '',
    state: 'Bagmati Province',
  },
  {
    district: 'Sindhupalchowk',
    othernamesspellings: '',
    state: 'Bagmati Province',
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
    state: 'Gandaki Province',
  },
  {
    district: 'Kaski',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Lamjung',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Syangja',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Tanahu',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Manang',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Nawalpur',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Baglung',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Myagdi',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Parbat',
    othernamesspellings: '',
    state: 'Gandaki Province',
  },
  {
    district: 'Mustang',
    othernamesspellings: '',
    state: 'Gandaki Province',
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
    state: 'Karnali Province',
  },
  {
    district: 'Salyan',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Dolpa',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Humla',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Jumla',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Kalikot',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Mugu',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Surkhet',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Dailekh',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Jajarkot',
    othernamesspellings: '',
    state: 'Karnali Province',
  },
  {
    district: 'Kailali',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
  {
    district: 'Achham',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
  {
    district: 'Doti',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
  {
    district: 'Bajhang',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
  {
    district: 'Bajura',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
  {
    district: 'Kanchanpur',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
  {
    district: 'Dadeldhura',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
  {
    district: 'Baitadi',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
  {
    district: 'Darchula',
    othernamesspellings: '',
    state: 'Sudurpaschim Province',
  },
];
