import React from 'react';
import AsyncStorage from 'react-native';
import AppButton from './AppButton';
import prestation from '../assets/prestation.json';

export default function GoDetails(item){
  return (
    <AppButton
      title={`Sélectionner`}
      onPress={() => {
        global.id=item.prestation_id;
        alert("Détails disponibles dans l'onglet Détails")
      }}
    />
  );
}