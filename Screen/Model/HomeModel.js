import { _ } from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
let HomeModel = {
    async GetDataHome(datat) {
        let data = { "2": "0", "4": "0", "33": "0" }
        let result = []
        let storage = []
        let i = 1
        let j = 1
        let keys = []
        _.map(data, (value, index) => {
            keys[j - 1] = index
            j++
        })
        await AsyncStorage.multiGet(keys, (err, stores) => {
            if (err) {
                console.log("getAll key value fail !");
            } else {
                if (stores[0][1] === null) {
                    _.map(data, (value, index) => {
                        result[i - 1] = { key: index, Status: value, Name: "Device " + (index), GPIO: index }
                        storage[i - 1] = [index, "Device " + (index)]
                        i++
                    })
                    AsyncStorage.multiSet(storage, (error) => {
                        if (error) {
                            console.log("saved device fail !");
                        } else {
                            console.log("saved device success!");
                        }
                    });
                } else {
                    _.map(data, (value, index) => {
                        result[i - 1] = { key: index, Status: value, Name: stores[i - 1][1], GPIO: index }
                        i++
                    })
                }
            }
        });
        return result
    },
    GetDataHomeContent(data) {
        let result = {}
        _.map(data, (value, index) => {
            result = { key: index, Status: value, Name: "Device " + (index), GPIO: index }
        })
        return result
    },
    async UpdateNameStorage(data) {
        let storage = []
        let result = false
        _.forEach(data, (value, index) => {
            storage[index] = [value.key, value.Name]
        })

        await AsyncStorage.multiSet(storage, (error) => {
            if (error) {
                result = false
                console.log("saved device fail !");
            } else {
                result = true
                console.log("saved device success!");
            }
        });
        return result
    },
    async getConnectStorage() {
        let responseData = null
        await AsyncStorage.getItem('Connect',(error,result) => {
            if (error) {
                console.log('get key value fail !')
            } else {
                responseData = result
            }
        })
        return responseData
    },
    async getPublicIPStorage() {
        let responseData = null
        await AsyncStorage.getItem('PublicIP',(error,result) => {
            if (error) {
                console.log('get key value fail !')
            } else {
                responseData = result
            }
        })
        return responseData
    },
    async updatePublicIPStorage(ip) {
        let responseData = false
        let result = []
        result[0] = ['PublicIP',ip]
        await AsyncStorage.multiSet(result,(error) => {
            if (error) {
                console.log('update key value fail !')
                responseData = false
            } else {
                console.log('update key value successfull !')
                responseData = true
            }
        })
        return responseData
    },
}
export default HomeModel