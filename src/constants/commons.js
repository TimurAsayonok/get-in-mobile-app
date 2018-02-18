import { COLORS } from './UIStyles';

export const APP_TITLE = 'Get In';
export const LIST_SCREEN_TITLE = {
  metro_station: {
    title: 'Metro stations'
  },
  education: {
    title: 'Educations'
  },
  area: {
    title: 'Areas'
  }
};

export const NUMBER_OF_ROOMS = ['1', '2', '3', '4', '5'];

export const LOCATION_TYPE_BUTTONS_NAME = ['Nearby', 'Metro station', 'Education', 'Area'];
export const LOCATION_TYPES = ['nearby', 'metro_station', 'education', 'area'];

export const SEARCH_BUTTON = {
  title: 'Find',
  color: COLORS.white,
  backgroundColor: COLORS.blue
};

export const GET_IN_BUTTON = {
  title: 'Get In',
  color: COLORS.white,
  backgroundColor: COLORS.blue
};

export const ADDED_BUTTON = {
  title: 'Chosen',
  color: COLORS.black,
  backgroundColor: COLORS.grey
};

export const LOG_OUT_BUTTON = {
  title: 'Log out',
  color: COLORS.white,
  backgroundColor: COLORS.blue
}

export const LOCATION_BUTTONS = [
  {
    title: 'Apartment',
    image: require('images/apartment.png'),
    selectedImage: require('images/apartmentselected.png'),
    height: 50,
    width: 45
  },
  {
    title: 'House',
    image: require('images/house.png'),
    selectedImage: require('images/houseselected.png'),
    height: 50,
    width: 45
  },
  {
    title: 'Room',
    image: require('images/room-bed.png'),
    selectedImage: require('images/room-bedselected.png'),
    height: 30,
    width: 50
  }
];

export const LOCATION_BUTTONS_TYPES = ['apartment', 'house', 'room'];