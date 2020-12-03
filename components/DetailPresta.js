import React from 'react';
import { View, Button, FlatList, Text, StatusBar } from 'react-native';
import AppButton from './AppButton';
import prestation from '../assets/prestation.json';

function SelectPresta(){
  return(
    <View style={styles.view}>
      <Text style={styles.text}>Veuillez d'abord sélectionner une prestation</Text>
    </View>
  )
}
function AffichPresta(){
  if (global.id == null) {
    return("error");
  }
  const data=prestation[global.id -1]
  return(
    <View style={styles.view}>
      <Text style={styles.text}>
        Id: {data.prestation_id}
      </Text>
      <Text style={styles.text}>
        Canceled: {data.canceled} 
      </Text>
      <Text style={styles.text}>
        Rating -> ironing: {data.rating.ironing}, cleaning: {data.rating.cleaning}
      </Text>
      <Text style={styles.text}>
        Address: {data.address.street}, {data.address.zipcode}, {data.address.city}, {data.address.country}
      </Text>
      <Text style={styles.text}>
        Customer: {data.customer.firstname} {data.customer.lastname} 
      </Text>
      <Text style={styles.text}>
        Provider: {data.provider.firstname} {data.provider.lastname} 
      </Text>
    </View>
  )
}
export default function DetailPresta(){
  if (global.id >0) {
    return<AffichPresta/>
  }
  return <SelectPresta/>
}

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