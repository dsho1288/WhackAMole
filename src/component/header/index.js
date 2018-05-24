import React from 'react';
import Proptypes from 'prop-types';
import { View, ImageBackground } from 'react-native';
import Timer from '../timer';
import Button from '../button';

class Header extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.count !== this.props.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
     <ImageBackground style={{
        flex: 0,
        flexDirection: 'row',
        paddingTop: 50,
        justifyContent: 'space-between',

      }} source={require('../../img/top.png')}>
        <Button onClick={() => {}} text={this.props.count} />
        <Timer timer={this.props.timer} onClick={() => {}} endGame={this.props.endGame} />
      </ImageBackground>

    );
  }
}

Header.propTypes = {
  count: Proptypes.number.isRequired,
  endGame: Proptypes.func.isRequired,
  timer: Proptypes.number.isRequired,
};

export default Header;
