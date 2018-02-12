import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView
} from 'react-native';
import { change } from 'redux-form';

import { Content } from 'native-base';
import { Button, Title } from 'components/tools';
import { SEARCH_BUTTON, LIST_SCREEN_TITLE } from 'constants/commons';

import SearchFormComponent from './SeacrhComponentForm';
import Styles from './styles';


class SearchComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchDetails: {
        type: 'apartment',
        location: {
          type: 'nearby',
          lat: null,
          lng: null,
          address: null,
          logo: null,
          name: null,
          _id: null
        },
        room: '1',
        from: null,
        to: null
      }
    };

    this.goToListScreen = this.goToListScreen.bind(this);
  }

  render() {
    const { screenTitle } = this.props;
    const { searchDetails } = this.state;

    console.log(searchDetails)
    return (
      <Content contentContainerStyle={Styles.content}>
        <Title title={screenTitle} />
        <SearchFormComponent
          onSubmit={values => this.setState({ searchDetails: values })}
          initialValues={searchDetails}
          goToListScreen={this.goToListScreen}
        />
        <Button.CustomButton
          button={SEARCH_BUTTON}
          style={{ marginVertical: 20 }}
        />
      </Content>
    );
  }

  goToListScreen(screen) {
    const { navigator } = this.props;
    const { searchDetails } = this.state;
    console.log(screen);

    navigator.push({
      screen: 'ListScreen',
      title: LIST_SCREEN_TITLE[screen].title,
      passProps: {
        selectedItemId: searchDetails.location._id,
        screenType: screen,
        chooseListItem: (value) => {
          this.setState({
            searchDetails: {
              ...searchDetails,
              location: {
                ...value,
                type: screen
              }
            }
          });
          this.props.dispatch(change('searchdetails', 'location', {
            ...value,
            type: screen
          }));
          navigator.pop({});
        }
      }
    });
  }
}

SearchComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  screenTitle: PropTypes.string.isRequired,
};

export default SearchComponent;
