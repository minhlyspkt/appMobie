
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class ButtonContent extends React.Component {
  constructor({ props }) {
    super(props)
    this.state = {
    }
  }
  render() {
      return <View>
       <Button
        onPress={() => {
          this.props.setStatus(this.props);
        }}
        title={this.props.Name}
      />
       </View>
     }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
