import React from 'react';
import Proptypes from 'prop-types';
import { Text, TouchableHighlight, ImageBackground } from 'react-native';
import styles from './styles';

const Button = ({ text, onClick }) => (
  <TouchableHighlight
    //
    onPress={onClick}
    underlayColor="#fff"
  ><ImageBackground style={styles.submit} source={require('../../img/gameBtn.png')}>
    <Text style={styles.submitText}>{text}</Text>
  </ImageBackground>
  </TouchableHighlight>
);


export default Button;
