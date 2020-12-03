import React from "react";
import { Text, TouchableOpacity } from "react-native";

const AppButton = ({ onPress, title }) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  appButtonContainer: {
    elevation: 5,
    backgroundColor: '#ffa8a8',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: '#00000',
    alignSelf: 'center',
    fontFamily: 'Gotham-Light',
  },
};

export default AppButton;