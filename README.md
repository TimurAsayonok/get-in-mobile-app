# GetInMobileApp :computer:

GetInMobileApp is the mobile application which uses server from [GetInBackend](https://github.com/TimurAsayonok/GetInBackend) repository.
**This project is designed as part of the thesis for the [Vistula](http://www.vistula.edu.pl/) University :mortar_board:**

![MainScreenMaket](https://github.com/TimurAsayonok/GetInMobileApp/blob/master/media/MainScreensMaket.jpg)

## Navigation:
For navigation in the application is used [react-native-navigation](https://github.com/wix/react-native-navigation) from Wix

## Managing aplication's store:
To control the store, [redux](https://github.com/reactjs/react-redux)

## Persist the store:
To persist and rehydrate a redux store is used [redux-persist](https://github.com/rt2zz/redux-persist)

## User interface and screens:
**The Login screen, the SingUp screen and the Remind my password screen.**
There are fields of data entry on each page, user mail, password or others, for these forms is used [redux-form](https://github.com/erikras/redux-form). If the validation for the field does not pass, then information about the error will be displayed, also if the response from the server containing the message appears, it will be displayed.

![LoginScreenMaket](https://github.com/TimurAsayonok/GetInMobileApp/blob/master/media/LoginScreensMaket.jpg)


**The Search screen, the Results screen and the Offer information screen.**
The search for proposals is based on four main parameters:
* Type - ```apartament, house, room```
* Location - ```nearby, metro station, education, area```
* Price - ```price from, price to```
* Rooms - ```from 1 to 5```
On this page is also used [redux-form](https://github.com/erikras/redux-form) for forms. When you are choosing a location, coordinates ```lat, lng``` are used for searching offers within a radius of 1 km. If you select area, then the search uses the name of area.

For Offer info screen [ModalView](https://wix.github.io/react-native-navigation/#/screen-api?id=showmodalparams-) is used. There is a button ```Get In``` on this page. Button press adds the offer to your chosen offers screen.

![SearchScreenMaket](https://github.com/TimurAsayonok/GetInMobileApp/blob/master/media/SeacrhScreensMaket.jpg)

**The Chosen offers screen, the Chats screen, the More screen.**
There are all offers which you chosen on the Info offer screen.
There are your chats and messages on the Chats screen. But right now, you can see just mock data of chats. Сhat will work in future versions of the application.
On the More screen you can find user photo, email and count of chosen offers. This screen will be rebuilding in future versions of the application.

![ScreenMaket](https://github.com/TimurAsayonok/GetInMobileApp/blob/master/media/ScreensMaket.jpg)

## Getting Started :rocket:
* Clone code from repository and clone GetInBackend repository for local server. Global server will be used in future versions of the application.
* Go to folder what has code from repository in your computer.
* Install all libs from package.json
```
npm install
```
* For IOS install all pods
```
cd ios
pod install
```
* Last stap, starting react-native
```
react-native run-ios or react-native run-android
```
:heavy_exclamation_mark: It is important. For runnig the application you need to have Xcode or Android studio with devices.

## Demo :iphone::
![GetIn demo](https://github.com/TimurAsayonok/GetInMobileApp/blob/master/media/image.gif)


## License :page_facing_up:

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/TimurAsayonok/GetInMobileApp/blob/master/LICENSE) file for details.

