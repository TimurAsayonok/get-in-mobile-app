import { StyleSheet, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const APP_TITLE = 'Get In';

export const SCREEN_BACKGROUNDCOLOR = '#00B762';
export const SCREEN_BACKGROUNDCOLOR_TOP = '#005C36';
export const SCREEN_GRADIENT_TOP = '#5AC8FA';
export const SCREEN_GRADIENT_BUTTOM = "#007AFF";
export const TITLE_COLOR = '#333';
export const BUTTON_GROUP_SELECTED_COLOR = '#525252';

export const TextColors = {
  title3: '#504e4e',
  body: '#8c8787',
  itemInfo: '#a8a8a8'
}

export const COLORS = {
  оrange: '#ff9800',
  green: '#00b762',
  blue: '#5AC8FA',
  red: '#ff3333',
  white: '#fff',
  grey: '#D5D5D5',
  grey2: '#333',
  black: '#333333',
};

export const AppTitleStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  color: COLORS.white
};

export const TextStyle = StyleSheet.create({
  title1: {
    fontSize: 34,
    fontWeight: 'bold',
    color: TITLE_COLOR
  },
  title2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: TITLE_COLOR
  },
  title3: {
    fontSize: 22,
    fontWeight: 'bold',
    color: TextColors.grey2
  },
  title4: {
    fontSize: 20,
    fontWeight: '600',
    color: TITLE_COLOR
  },
  body: {
    fontSize: 17,
    color: COLORS.black
  },
  headLine: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.grey2
  },
  headLineNormal: {
    fontSize: 17,
    fontWeight: 'normal',
    color: TITLE_COLOR
  },
  body2: {
    fontSize: 17,
    color: COLORS.grey2
  },
  callout: {
    fontSize: 16,
    color: '#888888'
  },
  subHead: {
    fontSize: 15,
    color: COLORS.grey2
  },
  footNote: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.grey2
  }
});

/**
 * Buttons constants
 */
export const ButtonStyles = {
  fontSize: 17,
  fontWeight: '600'
};

/**
 * Navigation styles
 */

 export const NAVIGATION_STYLES = {
  navBarHidden: false,
  navBarTextColor: '#FFF',
  screenBackgroundColor: '#FFF',
  statusBarColor: SCREEN_GRADIENT_TOP,
  navBarBackgroundColor: SCREEN_GRADIENT_TOP,
  navBarButtonColor: '#fff',
  tabBarHidden: true,
  navBarNoBorder: true,
  //android
  navBarTitleTextCentered: true
 }

export const MODAL_NAVIGATION_STYLES = {
  navBarHidden: true,
  navBarTextColor: '#FFF',
  screenBackgroundColor: '#FFF',
  statusBarHidden: true,
  navBarButtonColor: '#fff',
  tabBarHidden: true,
  //android
}

export const NAVIGATION_STYLES_MAIN = {
  topBar: {
    noBorder: true,
    title: {
      color: '#FFF'
    },
    background: {
      color: SCREEN_GRADIENT_TOP
    },
    backButton: {
      color: '#FFF'
    },
    buttonColor: '#FFF',
  },
  layout: {
    backgroundColor: '#FFF'
  },
  statusBar: {
    backgroundColor: SCREEN_GRADIENT_TOP
  }
};

export const NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE = {
  topBar: {
    noBorder: true,
    title: {
      color: '#FFF',
    },
    background: {
      color: SCREEN_GRADIENT_TOP
    },
    buttonColor: '#FFF',
    backButton: {
      color: '#FFF'
    },
    largeTitle: {
      visible: true,
      fontSize: 34,
      color: 'white'
    },
  },
  layout: {
    backgroundColor: '#FFF'
  },
  statusBar: {
    backgroundColor: SCREEN_GRADIENT_TOP
  }
};

export const MODAL_STYLES = {
  statusBar: {
    backgroundColor: SCREEN_GRADIENT_TOP
  }
};