import { COLORS } from './UIStyles';

export const APP_TITLE = 'Get In';

export const NUMBER_OF_ROOMS = ['1', '2', '3', '4', '5'];

export const LOCATION_TYPE_BUTTONS_NAME = ['Nearby', 'Metro station', 'Education', 'Area'];
export const LOCATION_TYPES = ['nearby', 'metro_station', 'education', 'area'];

export const SEARCH_BUTTON = {
  title: 'Find',
  color: COLORS.white,
  backgroundColor: COLORS.blue
};

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