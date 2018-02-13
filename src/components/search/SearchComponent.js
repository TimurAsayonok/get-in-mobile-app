import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView
} from 'react-native';
import { change } from 'redux-form';

import { Content } from 'native-base';
import { Button, Title, PreLoaderIndicator } from 'components/tools';
import { SEARCH_BUTTON, LIST_SCREEN_TITLE } from 'constants/commons';

import SearchFormComponent from './SeacrhComponentForm';
import Styles from './styles';


class SearchComponent extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      searchDetails: {
        type: 'apartment',
        location: {
          type: 'nearby'
        },
        room: '1',
        from: null,
        to: null
      }
    };

    this.getLocation = this.getLocation.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount() {
    this.updateLocation();
  }

  render() {
    const { screenTitle, onButtomPress, isFetching } = this.props;
    const { searchDetails } = this.state;

    return (
      <Content contentContainerStyle={Styles.content}>
        {isFetching && <PreLoaderIndicator />}
        <Title title={screenTitle} />
        <SearchFormComponent
          onSubmit={values => this.setState({ searchDetails: values })}
          initialValues={searchDetails}
          getLocation={this.getLocation}
        />
        <Button.CustomButton
          button={SEARCH_BUTTON}
          style={{ marginVertical: 20 }}
          onPress={() => onButtomPress(searchDetails)}
        />
      </Content>
    );
  }

  getLocation(screen) {
    const { searchDetails } = this.state;
    if (screen === 'nearby') {
      this.updateLocation();
    } else {
      this.props.navigator.push({
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
            this.props.navigator.pop({});
          }
        }
      });
    }
  }

  updateLocation() {
    const { searchDetails } = this.state;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          searchDetails: {
            ...searchDetails,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              type: 'nearby'
            }
          }
        });
        this.props.dispatch(change('searchdetails', 'location', {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          type: 'nearby'
        }));
      },
      error => this.setState({ error: error.message })
    );
  }
}

SearchComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  screenTitle: PropTypes.string.isRequired,
  onButtomPress: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default SearchComponent;
