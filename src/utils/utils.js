import moment from 'moment';
import { photoURI } from 'constants/api';

export const getQueryString = (values = {}) => {
  let queryParams = '';

  Object.keys(values).forEach((key, index) => {
    if (values[key]) {
      if (index === 0) queryParams = queryParams + `?${key}=${values[key]}`;
      else queryParams = queryParams + `&${key}=${values[key]}`;
    }
  });

  return encodeURI(queryParams);
};

export const formatDate = time => moment(time).format('YYYY-MM-DD HH:mm:ss');

export const firstPhoto = (photos, defaultImage = '') => {
  const photo = photos && photos[0] ? photos[0] : null;
  const source = photo ? `${photoURI}${photo.path}` : defaultImage;
  return source;
};


export const isPathEqualUrl = path => path.includes('https://' || 'http://' || 'www.');
export const getPhotoPath = path => isPathEqualUrl(path) ? path : `${photoURI}${path}`;
