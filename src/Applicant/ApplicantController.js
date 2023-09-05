import axios from "axios";
class ApplicantControllers{
      updateApplicantbyId(applicantId,applicant){
        return axios.put('http://localhost:8083/updatebyid/'+applicantId,applicant);
      }
      deleteApplicantbyId(applicantId){
        return axios.delete('http://localhost:8083/delete/'+applicantId);
      }
      fillApplicantjobid(){
        return axios.get('http://localhost:8083/filljobid');
      }
}
const ApplicantService=new ApplicantControllers();
export default ApplicantService;