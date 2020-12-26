import { _ } from 'lodash';
let HomeModel = {
    GetDataHome(data) {
        let result = []
        let i = 1
        _.map(data,(value,index) => {
            result[i -1] = {key : index , Status : value, Name : "Device "+(i), GPIO : index}
            i++
        })
        return result
    }
}
export default HomeModel