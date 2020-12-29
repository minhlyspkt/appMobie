import { _ } from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
let HomeModel = {
    async GetDataHome(datat) {
        let data = {"2":"0", "4":"0", "33":"0"}
        let result = []
        let storage = []
        let i = 1
        let j = 1
        let keys = []
        _.map(data, (value, index) => {
            keys[j - 1] = index
            j++
        })
        await AsyncStorage.multiGet(keys,(err, stores) => {
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
    GetUrl() {

    }

}
export default HomeModel