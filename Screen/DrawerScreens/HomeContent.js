import { StatusBar } from 'expo-status-bar';
import { _ } from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import lightOff from '../../Image/lightOff.jpg'
import lightOn from '../../Image/lightOn.jpg'
import  ButtonConten  from "./ButtonConten";

export default class HomeContent extends React.PureComponent {
  constructor({ route, navigation, props }) {
    super(props)
    this.state = {
      data : null
    }
    
    this.setStatus = this.setStatus.bind(this)
  }
  componentDidMount(){
    this.setState({data : this.props.data})
  }
  setStatus(item) {
    let otherProps = _.omit(item, ['setStatus'])
    fetch('http://192.168.1.7:8080/Embedded/chibipro/public/home/updateStatus', {
    //fetch('http://192.168.1.4/131220-2-4-33-L3/output', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ otherProps })
    }).then((response) => response.json())
      .then((json) => {
        this.setState({ data: json })
      })
      .catch((error) => Alert.alert(error));
  }
  render() {
       return this.state.data && <View>
        <Image
        style={styles.tinyLogo}
        source={this.state.data.Status === '0' ? lightOff : lightOn}
      />
      <ButtonConten key = {this.state.data.key} setStatus = {this.setStatus} {...this.state.data}/>
       </View>
  }
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
