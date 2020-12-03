import React from "react";
import { Image } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, alignSelf: 'center' }}
      source={require('../assets/logo.png')}
    />
  );
}

export default LogoTitle;