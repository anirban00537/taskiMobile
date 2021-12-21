import {Icon, Button} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const NavItem = ({title}) => {
  const infiniteAnimationIconRef = React.useRef();
  const renderInfiniteAnimationIcon = props => (
    <Icon
      {...props}
      ref={infiniteAnimationIconRef}
      animationConfig={{cycles: Infinity}}
      animation="shake"
      name="clock-outline"
    />
  );

  return (
    <Button
      appearance="ghost"
      size="small"
      status="success"
      style={styles.button}
      accessoryLeft={renderInfiniteAnimationIcon}
      onPress={() => infiniteAnimationIconRef.current.startAnimation()}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    color: '#fff',
  },
  pulseIcon: {
    width: 14,
    height: 14,
  },
});

export default NavItem;
