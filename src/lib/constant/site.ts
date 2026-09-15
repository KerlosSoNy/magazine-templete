export const SITE_URL = 'https://mindsadvisory.com';

export const ORG_NAME = 'Minds Advisory';
export const ORG_LOGO_PATH = '/images/logos/logo.png';
export const ORG_PHONE = '+966138455555';
export const ORG_EMAIL = 'discover@mindsadvisory.com';

export const ORG_ADDRESS = {
  streetAddress: '3640 King Faisal Rd, Al Khalidiyah',
  addressLocality: 'Dammam',
  postalCode: '31411',
  addressRegion: 'Eastern Province',
  addressCountry: 'SA',
} as const;

export const ORG_GEO = {
  latitude: 26.4048,
  longitude: 50.0898,
} as const;

export const ORG_FOUNDERS = [
  { name: 'Ahmed Fahmy', jobTitle: 'Managing Partner' },
  { name: 'Mourad Ashour', jobTitle: 'Managing Partner' },
] as const;
