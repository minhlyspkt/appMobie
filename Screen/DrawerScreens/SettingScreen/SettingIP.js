
import { _ } from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native';
import {getPublicIP, submitPublicIP} from "../../reduxStore/ducks/Home.actions";
class SettingScreenContent extends React.Component {
  constructor({ router, navigation, props }) {
    super(router, navigation, props)
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
  }

componentDidMount(){
    this.props.getPublicIP()
}

  setDeviceName(name,item) {
   let datachange = Object.assign({},item)
   datachange.Name = name
   this.props.updateName(datachange)
  }

  handleSubmitButton(){
    this.props.submitPublicIP()
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#307ecc',
        justifyContent: 'center',
      }}>
         <Text style={styles.textStyle}>{this.props.publicIP}</Text>
         <KeyboardAvoidingView enabled>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={this.handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>GET PUBLIC IP</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </View>
    );
  };
}

const mapStateToProps = (state) => {
    const { Home } = state
    return {
        publicIP : Home.publicIP
    }
  }

const mapDispatchToProps = {
  getPublicIP,
  submitPublicIP
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreenContent)
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
  textStyle: {
    height: 30,
    color: 'white',
    paddingTop: 5,
    marginLeft: 40,
    marginRight:40,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    textAlign: 'center'
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
  }
});