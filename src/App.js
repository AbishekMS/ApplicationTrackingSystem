
import './App.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
//import ApplicantRegister from './Applicant/Applicant';
import HRRegister from './hr/HrRegister';
import Hrlogin from './hr/Hrlogin';
import Navbar from './Navbar';
//import GetData from './Get';
import Home from './Home';
//import Appl from './Appl';
import Applicantlogin from './Applicant/Applicantlogin';
import ApplicantRegister from './Applicant/Applicant';
import HrList from './hr/HrList';
import ApplicantList from './Applicant/ApplicantList';
import InterviewTable from './interview/InterviewTable';

function App() {
  return (
   <div>
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route exact path='/home' element={<Home/>}/>
   <Route exact path='/applicantlogin' element={<Applicantlogin/>}/>
   <Route exact path='/hrlogin' element={<Hrlogin/>}/>
   <Route exact path='hrregister' element={<HRRegister/>}/>
   <Route exact path='applicantregister' element={<ApplicantRegister/>}/>
   <Route exact path='/hrlist' element={<HrList/>}/>
   <Route exact path='/applicantList' element={<ApplicantList/>}/>
   <Route exact path='/edit-hr/:id' element={<HRRegister/>}/>
   <Route exact path='/edit-applicant/:Appid' element={<ApplicantRegister/>}/>
   <Route exact path='/interview' element={<InterviewTable/>}/>
   
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
