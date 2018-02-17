import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import moment from 'moment';

import { TextStyle } from 'constants/UIStyles';
import { ListItemStyles as Styles } from './styles';
import { scale } from 'utils/scale';

const ChatListItem = (props) => {
  const { chat } = props;

  return (
    <TouchableOpacity
      style={Styles.container}
    > 
      <View style={Styles.chatContainer}>
        <ResponsiveImage
          source={require('images/user.png')}
          initWidth={scale(50)}
          initHeight={scale(50)}
        />
        <View style={{ flex: 1 }}>
          <View style={Styles.chatHeader}>
            <View style={{ flex: 1 }}>
              <Text style={TextStyle.headLine}>{chat.sender}</Text>
            </View>
            <Text style={[TextStyle.footNote, { color: '#888888' }]}>
              {moment(chat.date).format("DD.MM.YY")}
            </Text>
          </View>
          <View style={Styles.body}>
            <Text numberOfLines={2} style={[TextStyle.body, { color: '#888888' }]}>{chat.message}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default ChatListItem