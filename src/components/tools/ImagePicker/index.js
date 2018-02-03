// import ImageCropPicker from 'react-native-image-crop-picker';
// import { Platform } from 'react-native';

// import isArray from 'lodash/isArray';

// let dialogIsOpen = false;

// export default {
//   pickImage(imageNamePrefix, onLoad = () => { }, onDecline = () => { }) {
//     console.log(imageNamePrefix);
//     const cropOptions = {
//       width: 300,
//       height: 400,
//       cropping: true,
//       multiple: true
//     };

//     if (!dialogIsOpen) {
//       dialogIsOpen = false;

//       ImageCropPicker.openPicker(cropOptions).then((response) => {
//         console.log(response);
//         const images = isArray(response) ? response : [response];
//         const photos = images.map((image) => {
//           let photo = {};

//           if (Platform.OS === 'android') {
//             photo = {
//               uri: image.path,
//               type: image.mime,
//               name: `${imageNamePrefix} ${image.modificationDate}`
//             };
//           } else {
//             photo = {
//               uri: image.path.replace('file://', ''),
//               type: image.mime || 'multipart/form-data',
//               name: imageNamePrefix || image.path.split('/').slice(-1)[0],
//             };
//           }

//           return photo;
//         });

//         onLoad(photos);
//       });

//     }
//   }
// };
