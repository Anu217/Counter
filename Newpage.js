import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Newpage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> countdown!</Text>
        <Button
          title="start countdown"
          onPress={() =>
            this.props.navigation.navigate('Countdown')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Newpage;