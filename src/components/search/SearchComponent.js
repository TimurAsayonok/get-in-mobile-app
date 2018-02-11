import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView
} from 'react-native';

import { Content } from 'native-base';
import { Button, Title } from 'components/tools';
import { SEARCH_BUTTON } from 'constants/commons';

import SearchFormComponent from './SeacrhComponentForm';
import Styles from './styles';


class SearchComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchDetails: {
        type: 'apartment',
        location: 'nearby',
        room: '1',
        from: null,
        to: null
      }
    };
  }

  render() {
    const { screenTitle } = this.props;
    const { searchDetails } = this.state;
    return (
      <Content contentContainerStyle={Styles.content}>
        <Title title={screenTitle} />
        <SearchFormComponent
          onSubmit={values => this.setState({ searchDetails: values })}
          initialValues={searchDetails}
        />
        <Button.CustomButton
          button={SEARCH_BUTTON}
          style={{ marginVertical: 20 }}
        />
      </Content>
    );
  }
}

SearchComponent.propTypes = {
  screenTitle: PropTypes.string.isRequired
};

export default SearchComponent;
