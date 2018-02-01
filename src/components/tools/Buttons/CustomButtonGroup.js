import React from 'react';
import PropTypes from 'prop-types';
import { BUTTON_GROUP_SELECTED_COLOR } from 'constants/UIStyles';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { ButtonGroupStyles as Styles } from './styles';


const CustomButtonGroup = ({ selectedIndex, buttons, onPress }) => (
  <SegmentedControlTab
    tabsContainerStyle={Styles.segmentControllContainer}
    tabTextStyle={Styles.textStyle}
    activeTabTextStyle={Styles.selectedTextStyle}
    activeTabStyle={{ backgroundColor: BUTTON_GROUP_SELECTED_COLOR }}
    tabStyle={[Styles.bordersStyle, { borderColor: BUTTON_GROUP_SELECTED_COLOR }]}
    values={buttons}
    selectedIndex={selectedIndex}
    onTabPress={onPress}
    activeOpacity={0.5}
  />
);

CustomButtonGroup.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  buttons: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CustomButtonGroup;