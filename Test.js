
import React from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Test extends React.Component {

  onLogin() {
    let result = []
    for(let i = 0; i < 5 ; i++)
    {
    result[i] = ["key" + i,"Device " + (i)]
    }
    //var a = JSON.stringify(result)
      AsyncStorage.multiSet(result,(error) => {
        if(error) { 
             alert("saved password fail !");
        } else { 
             alert("saved password success!");
        }
      });
    
    // AsyncStorage.multiSet([['CodeId1','Tocken1'],["CodeId2","Tocken2"]],(error) => {
    //     if(error) { 
    //          alert("saved password fail !");
    //     } else { 
    //          alert("saved password success!");
    //     }
    //   });
  }
   onLogout = async () => {
    try {
      await AsyncStorage.getAllKeys((error,keys) => {
          if (error === null) {
            AsyncStorage.multiGet(keys, (err, stores) => {
                if (err === null) {
                    console.log(stores)
                }
              });
          }
      })
      await AsyncStorage.clear((error) => {
        if (error !== null) {
          console.log(error)
        }
      })
    } catch (error) {
      //Alert.alert(error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this.onLogin}>
         <Text>click save</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={this.onLogout}>
         <Text>click display</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    backgroundColor: '#b9c5e7'
  },
});
