
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from "./homePage";
import Register from './Register';
import StudentReg from './studentRform';
import InstituteReg from './instituteRform';
import StudentSucessfulReg from './studentSucessfulReg';
import InstituteSucessfulReg from './instituteSucessfulReg';
import StudentLogedinHome from './studentLogedinHome';
import InstituteLogedinHome from './instituteLogedinHome';
import ScholarshipApplicationForm from './scholarshipApplicationForm';
import StateNodalOfficerHome from './stateNodalOfficerHome';
import MinistryHome from './ministryHome';
function App() {
  return (
  
  
    <Router>
      
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/studentRform' element={<StudentReg/>}/>
      <Route exact path='/instituteRform' element={<InstituteReg/>}/>
      <Route exact path='/studentSucessfulReg' element={<StudentSucessfulReg/>}/>
      <Route exact path='/homePage' element={<Home/>}/>
      <Route exact path='/instituteSucessfulReg' element={<InstituteSucessfulReg/>}/>
      <Route exact path='/homePage' element={<Home/>}/>
      <Route exact path='/studentLogedinHome' element={<StudentLogedinHome />}/>
      <Route exact path='/instituteLogedinHome' element={<InstituteLogedinHome />}/>
      <Route exact path='/scholarshipApplicationForm' element={<ScholarshipApplicationForm />}/>
      <Route exact path='/stateNodalOfficerHome' element={<StateNodalOfficerHome />}/>
      <Route exact path='/ministryHome' element={<MinistryHome />}/>
      
      </Routes>
      
    </Router>
    
    
    
    
  

  );
}

export default App;
