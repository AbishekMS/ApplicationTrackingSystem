import axios from "axios";

class HrController{
    getAllHr(){
        return axios.get('http://localhost:8083/gethrinfo');
    }
    updatehrbyid(hrid,hr){
        return axios.put('http://localhost:8083/updatehrbyid/'+hrid,hr);
    }
    deletehrbyid(hrid){
        return axios.delete('http://localhost:8083/deletebyhr/'+hrid);
    }
    fillhrjobid(){
        return axios.get('http://localhost:8083/gethrjobid');
    }
}
const hrControllerInstance = new HrController();

export default hrControllerInstance;
//export default new HrController();