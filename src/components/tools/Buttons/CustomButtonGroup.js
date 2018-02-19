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
    activeTabStyle={{ backgroundColor: '#C3C3C3' }}
    tabStyle={[Styles.tabStyle, { borderColor: '#E1E1E1' }]}
    values={buttons}
    selectedIndex={selectedIndex}
    onTabPress={onPress}
    borderRadius={0}
    textNumberOfLines={2}
  />
);

CustomButtonGroup.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  buttons: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CustomButtonGroup;