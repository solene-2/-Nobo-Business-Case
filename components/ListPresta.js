import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from './AppButton';
import GoDetails from './GoDetails'

const _renderItem = ({ navigation, item }) => (
  <View styles={styles.view}>
    <Text styles={styles.text}>
      {item.prestation_id + '. ' + item.customer.lastname + ' ' + item.customer.firstname}
    </Text>
    {GoDetails(item)}
  </View>
);

export default (ListPresta = props => (
  <FlatList
    data={props.data}
    renderItem={_renderItem} />
))

const styles = {
  view: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'Gotham-Light',
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  }
};