import { _ } from 'lodash';
let HomeModel = {
    GetDataHome(data) {
        let result = []
        _.map(data,(value,index) => {
            result[index] = {key : index , Status : value, Name : "Device "+(index + 1)}
        })
        return result
    }
}
export default HomeModel