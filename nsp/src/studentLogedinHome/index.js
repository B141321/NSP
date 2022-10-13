import React from "react";
import Home from "../homePage";
import './index.css'
import { Link} from "react-router-dom";
import ScholarshipApplicationForm from "../scholarshipApplicationForm";


class StudentLogedinHome extends React.Component{
    render(){
        return(
           
            <div className="container container1">
            
            <div className="row borders">
                <div className="col-12 header1">
                    <h6>NATIONAL SCHOLARSHIP PORTAL</h6>
                    <p>Government of India</p>
                </div>
            </div>
        
            <div className="row content borders" >
                <div className="col-3"><Link to='/'><p>HOME</p></Link></div>
                <div className="col-3"><p>ABOUT US</p></div>
                <div className="col-3"><p>CONTACT US</p></div>
                
            </div>
            
            <div className="row borders">
                    
                    <div className="col-3 ">
                        <div className="icons">
                        <ul>
                        <br/>
                            <li>MY PROFILE</li>
                            <Link to='/studentSucessfulReg'>
                            <li>CHECK STATUS</li>
                            </Link>
                            <li>UPDATE</li>
                            <Link to='/homePage'>
                            <li>LOGOUT</li>
                            </Link>
                        </ul>
                        </div>
                        <div className="apply"><p className="applydata">After checking the eligibility, student will click on the Apply option and apply for the scheme by filling the form associated with the Scholarship. Information that needs to be filled</p>
                        <Link to='/scholarshipApplicationForm'>
                        <button className="buttonA btn btn-primary">Apply</button>
                        </Link>
                        </div>
                    </div>
                    <div className="col-5 data">
                        <p>Various Schemes under our Scholarship Portal includes</p>
                        <ul>
                            <li>POST MATRIC SCHOLARSHIP</li>
                            <li>NATIONAL MATRIC SCHOLARSHIP</li>
                            <li>CENTERAL SCHOLARSHIP SCHEME</li>
                        </ul>
                        <p>Various Modules to be integrated</p>
                        <ul>
                            <li>STUDENT</li>
                            <li>INSTITUTE</li>
                            <li>MINISTRY</li>
                        </ul>
                    </div>
                    <div className="col-4 ">
                    


                        <div className="App">
                        <ul>
                            <li>The candidates applying for the Maharashtra Merit cum Means Scholarship 2017-2018 must have completed 10th and 12th from a recognized board with a minimum of 60% marks in aggregate.</li>
                            <li>Maximum two members of a family belonging to the minority category can apply for the scholarship.</li>
                            <li>Students applying for the Maharashtra Merit cum Means Scholarship 2017-2018 must have Aadhaar Card enrolled in the State.</li>
                            <li>The applicant must produce all the documents prescribed by the state.</li>
                        </ul>
                        
                        

                        </div>

                    </div>
            </div>
        </div>
                        
          
        )
    }
}

export default StudentLogedinHome;