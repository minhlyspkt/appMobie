
import { _ } from 'lodash';
import React,{ createRef} from 'react';
import { connect } from 'react-redux'
import {  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,} from 'react-native';
import HomeContent from "./HomeContent";
import HomeModel from "../Model/HomeModel";
import Loader from '../Components/Loader';
import SettingScreenContent from "./SettingScreenContent";
import {submitUpdate} from "../reduxStore/ducks/Home.actions";
class SettingScreen extends React.Component {
  constructor({ router, navigation, props }) {
    super(router, navigation, props)
    this.state = {
      navigation:navigation,
      errortext:""
    }
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
  }

  handleSubmitButton(){
    this.props.submitUpdate(this.props.homeData)
  }

  render() {
    if (this.props.isRegistraionSuccess) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#307ecc',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../Image/success.png')}
            style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
          />
          <Text style={styles.successTextStyle}>Update Successful.</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => this.state.navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonTextStyle}>Home Now</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{flex: 1, backgroundColor: '#307ecc'}}>
        <Loader loading={this.props.isLoading} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Image/aboutreact.png')}
              style={{
                width: '50%',
                height: 100,
                resizeMode: 'contain',
                margin: 30,
              }}
            />
          </View>
          <KeyboardAvoidingView enabled>
            {
              _.map(this.props.homeData, (item, key) => {
                return  <SettingScreenContent key = {key} data = {item}/>
              })
            }
            {this.state.errortext != '' ? (
              <Text style={styles.errorTextStyle}> {this.state.errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={this.handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>UPDATE</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  };
}

const mapStateToProps = (state) => {
  const { Home } = state
  return {
    isRegistraionSuccess : Home.isRegistraionSuccess,
    isLoading : Home.isLoading,
    homeData : Home.homeData
  }
}
const mapDispatchToProps = {
  submitUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});