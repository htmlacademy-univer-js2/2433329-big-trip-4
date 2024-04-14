const CITIES = [
  'Tokio',
  'Geneva',
  'Moskva',
  'Sochi',
  'Ekaterinburg',
  'Amsterdam',
  'Baldurs Gate',
  'San-Franchisko',
  'China',
];

const DESTINATION_COUNT = 9;
const TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const OFFER_COUNT = [10,20,30];
const POINT_COUNT = 3;
const DESCRIPTION = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'];

const FilterType = {
  ANY: 'any',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const FilterSettings = {
  [FilterType.ANY]: {
    label: 'Everything',
    defaultSelected: true,
  },
  [FilterType.FUTURE]: { label: 'Future' },
  [FilterType.PRESENT]: { label: 'Present' },
  [FilterType.PAST]: { label: 'Past' },
};

const SORTING_COLUMNS = [
  {
    type: SortType.DAY,
    label: 'Day',
    active: true,
    defaultSelected: true,
  },
  {
    type: SortType.EVENT,
    label: 'Event',
    active: false,
  },
  {
    type: SortType.TIME,
    label: 'Time',
    active: true,
  },
  {
    type: SortType.PRICE,
    label: 'Price',
    active: true,
  },
  {
    type: SortType.OFFER,
    label: 'Offer',
    active: false,
  },
];

const Price = {
  MIN: 1,
  MAX: 1000
};

const Duration = {
  HOUR: 5,
  DAY: 5,
  MIN: 59,
};

export {
  CITIES,
  DESCRIPTION,
  Price,
  Duration,
  TYPES,
  OFFER_COUNT,
  POINT_COUNT,
  DESTINATION_COUNT,
  FilterType,
  SortType,
  FilterSettings,
  SORTING_COLUMNS,
};
