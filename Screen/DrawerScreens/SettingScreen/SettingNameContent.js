
import { _ } from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native';
import {updateName} from "../../reduxStore/ducks/Home.actions";
class SettingNameContent extends React.Component {
  constructor({ router, navigation, props }) {
    super(router, navigation, props)
  }

  setDeviceName(name,item) {
   let datachange = Object.assign({},item)
   datachange.Name = name
   this.props.updateName(datachange)
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#307ecc' }}>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => this.setDeviceName(text,this.props.data)}
            underlineColorAndroid="#f000"
            value={this.props.data.Name}
            placeholderTextColor="#8b9cb5"
            autoCapitalize="sentences"
            returnKeyType="next"
            onSubmitEditing={() =>
              emailInputRef.current && emailInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
      </View>
    );
  };
}
const mapDispatchToProps = {
  updateName
}

export default connect(null, mapDispatchToProps)(SettingNameContent)
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