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
        from: 0,
        to: 0
      }
    };

    this.getLocation = this.getLocation.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount() {
    this.updateLocation();
  }

  render() {
    const { onButtomPress, isFetching, navigator } = this.props;
    const { searchDetails } = this.state;

    return (
      <Content contentContainerStyle={Styles.content}>

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
    const { navigator, dispatch, componentId } = this.props;

    if (screen === 'nearby') {
      this.updateLocation();
    } else {
      navigator.push(componentId, {
        component: { 
          name: 'screens.ListScreen',
          options: {
            topBar: {
              largeTitle: {
                visible: false,
              }
            }
          },
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
              dispatch(change('searchdetails', 'location', {
                ...value,
                type: screen
              }));
              navigator.popToRoot(componentId);
            }
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
  onButtomPress: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default SearchComponent;
