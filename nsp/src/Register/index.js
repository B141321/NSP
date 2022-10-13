import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import StudentReg from "../studentRform";
import InstituteReg from "../instituteRform";

class Register extends React.Component{
    render(){
        return(
            <div>
                
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div>
                                    <center>
                                    <br/><br/>
                                    <Link to='/studentRform'>
                                    <img src="https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990__340.jpg" alt="student" className="image"></img>
                                    <br/><br/>
                                    
                                    <h6>STUDENT REGISTRATION</h6>
                                    </Link>
                                    </center>
                                </div>
                                <div className="student">

                                </div>
                            </div>

                            <div className="col-6">
                                <div>
                                    <center>
                                    <br/><br/>
                                    <Link to='/instituteRform'>
                                    <img src='https://images.news18.com/ibnlive/uploads/2020/06/1591879179_indian-institute-of-science-bengaluru.jpg' alt="institute" className="image"></img>
                                    <br/><br/>
                                    
                                    <h6>INSTITUTE REGISTRATION</h6>
                                    </Link>
                                    </center>
                                </div>
                                <div className="institute"></div>
                            </div>
                        </div>

                    </div>
                    
            
            </div>
        )
    }
}

export default Register;