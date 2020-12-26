import { _ } from 'lodash';
let HomeModel = {
    GetDataHome(data) {
        let result = []
        let i = 1
        _.map(data,(value,index) => {
            result[i -1] = {key : index , Status : value, Name : "Device "+(index), GPIO : index}
            i++
        })
        return result
    },
    GetDataHomeContent(data) {
        let result = {}
        _.map(data,(value,index) => {
             result = {key : index , Status : value, Name : "Device "+(index), GPIO : index}
        })
        return result
    }
}
export default HomeModel