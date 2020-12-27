import { _ } from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
let HomeModel = {
    async GetDataHome(data) {
        let result = []
        let storage = []
        let i = 1
        let state = await AsyncStorage.getAllKeys((error, keys) => {
            if (error) {
                console.log("getAll key fail !");
            } else {
                console.log("getAll key success!");
            }
        })
        let getKey = await AsyncStorage.multiGet(state, (err, stores) => {
            if (error) {
                console.log("getAll key value fail !");
            } else {
                console.log("getAll key value success!");
            }
        });
        if (state === null) {
            _.map(data, (value, index) => {
                result[i - 1] = { key: index, Status: value, Name: "Device " + (index), GPIO: index }
                storage[i - 1] = [index, "Device " + (index)]
                i++
            })
            //      AsyncStorage.multiSet(storage, (error) => {
            //     if (error) {
            //         console.log("saved device fail !");
            //     } else {
            //         console.log("saved device success!");
            //     }
            // });
        } else {
            _.map(data, (value, index) => {
                result[i - 1] = { key: index, Status: value, Name: state, GPIO: index }
                i++
            })
        }
        // _.map(data, (value, index) => {
        //     if (state === null) {
        //         result[i - 1] = { key: index, Status: value, Name: "Device " + (index), GPIO: index }
        //         storage[i - 1] = [index, "Device " + (index)]
        //         bool
        //     } else {
        //         result[i - 1] = { key: index, Status: value, Name: state, GPIO: index }
        //     }
        //     i++
        // })
        // AsyncStorage.multiSet(storage, (error) => {
        //     if (error) {
        //         console.log("saved device fail !");
        //     } else {
        //         console.log("saved device success!");
        //     }
        // });
        return result
    },
    GetDataHomeContent(data) {
        let result = {}
        _.map(data, (value, index) => {
            result = { key: index, Status: value, Name: "Device " + (index), GPIO: index }
        })
        return result
    },
    GetUrl() {

    }

}
export default HomeModel