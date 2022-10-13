import React from "react";
import { Link } from "react-router-dom";
import StudentSucessfulReg from "../studentSucessfulReg";
import './index.css'

import {Form } from "react-router-dom";

class StudentReg extends React.Component{


    handler = e =>{
        e.preventDefault();
        console.log(e.target.aadhar.value);
    
        if (!e.target.aadhar.value) {
          alert("AADHAR is required");
       
        } else if (!e.target.password.value) {
          alert("PASSWORD is required");
        }else {
            
          window.location.assign('/studentSucessfulReg')
          }

        
    }

    render(){

        return(
            <div>
                <center>
                
                <div className="container">
                <form className="form" onSubmit={this.handler}>
                <fieldset>
                <br/><br/><br/>
                <legend> FRESH STUDENT REGISTRATION FORM</legend>
                <div className="row">
                    <div className="col-6">
                
                    <label>STATE </label>
                    <select>
                        <option value="" disabled selected>Select your option</option>
                        <option value='AndhraPradesh'> AndhraPradesh</option>
                        <option value='Telangana'> Telangana</option>
                        <option value='Tamilnadu'> tamilnadu</option>
                        <option value='Kerala'> Kerala</option>
                        <option value='Karnataka'> Karnataka</option>
                       
                    </select>
                    </div>
                    <div className="col-6">
                    <label>DISTRICT </label>
                    <select >
                        <option value="" disabled selected>Select your option</option>
                        <option value='Krishna'> Krishna</option>
                        <option value='East'> East</option>
                        <option value='West'> West</option>
                        <option value='Guntur'> Guntur</option>
                        <option value='Chittor'> Chittor</option>
                       
                    </select>
                    </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-6">
                    <label>Name(AS IN MARKS SHEETS)</label><input type="text"></input>
                        </div>
                        <div className="col-6">
                    <label>DOB</label><input type="date"></input>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-6">
                    <label>GENDER </label>
                    <select >
                        <option value="" disabled selected>Select your option</option>
                        <option value='Male'> Male</option>
                        <option value='Female'> Female</option>
                        <option value='other'> Others</option>
                        
                       
                    </select>
                        </div>
                        <div className="col-6">

                    <label>MOBILE NUMBER</label>
                    <input type='text' size='sm'></input>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-12">
                    <label>EMAIL ID</label>
                    <input type='email' size='sm'></input>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-6">
                    <label>INSTITUTE CODE</label>
                    <input type='text'></input>
                        </div>

                        <div className="col-6">
                    <label htmlFor="aadhar">AADHAR NUMBER</label>
                    <input type='text' name="aadhar"/>
                        </div>
                    </div>

                    <br/><br/>
                    <div className="row">
                        <div className="col-6">
                    <label>BANK IFSC CODE</label>
                    <input type='text'></input>
                        </div>
                        <div className="col-6">
                    <label>BANK ACCOUNT NUMBER</label>
                    <input type='text'></input>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-12">
                    <label>BANK NAME</label>
                    <input type='text'></input>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-6">
                    <label htmlFor="password">SET YOUR PASSWORD</label>
                    <input type='text' name="password"></input>

                        </div>
                        <div className="col-6">

                    <label>CONFIRM PASSWORD</label>
                    <input type='text'></input>
                        </div>

                    </div>
                    <br/>
                    
                    <input type='checkbox' name='confirm'></input>
                    <label htmlFor='confirm'><h6 className='H8'> ALL THE INFORMTION FURNISHED BY ME IS TRUE TO THE BEST OF MY KNOWLEDGE</h6></label>

                    <br/><br/>

                    <Link to='/studentSucessfulReg'></Link>
                    
                    <button type="submit" className="srf H8 ">REGISTER</button>
                    
                    
                    
                    <button className='H8 '>RESET</button>
                    
                    
                    
                    

                    


                </fieldset>

                </form>
                </div>
                </center>
            </div>
            
        )
    }
}


export default StudentReg;