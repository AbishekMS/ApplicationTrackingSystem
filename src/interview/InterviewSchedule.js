import axios from "axios";
class InterviewSchedule{
    getInterviews(){
        return axios.get('http://localhost:8083/getinterviewschedule');
    }
    deleteInterview(id){
        return axios.delete('http://localhost:8083/deleteinterview/'+id);
    }
    addInterview(){
        return axios.get('http://localhost:8083/getInterviews');
    }
    
}
const InterviewController=new InterviewSchedule();
export default InterviewController;