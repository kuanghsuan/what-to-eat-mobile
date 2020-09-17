import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity,Image } from 'react-native';
import Icon from './Icon';

const City = () => {
  return (
    <TouchableOpacity >
        <Image style={styles.locationIcon} source={require('../assets/images/icon_location.png')}/>
    </TouchableOpacity>
  );
};

export default City;
