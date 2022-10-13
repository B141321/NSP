import React from "react";
import { Link } from "react-router-dom";
import './index.css'

class ScholarshipApplicationForm extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <div className="container">
                    <form>
                        <fieldset>
                        <legend>APPLICATION FORM</legend>
                        <br/><br/>
                        <h8 className='H8'>BASIC DETAILS</h8>
                        <br/><br/><br/><br/>
                        <label>AADHAR NUMBER</label>
                        <input type='text'></input>
                        
                        <label>RELIGION</label>
                        <select >
                        <option value="" disabled selected>Select your option</option>
                        <option value='HINDU'>HINDU</option>
                        <option value='MUSILIM'>MUSILI</option>
                        <option value='CHRISTIAN'>CHRISTIAN</option>
                        </select>
                        <br/><br/><br/><br/><br/>
                        <label>COMMUNITY/CATEGORY</label>
                        <input type='text'></input>
                        <br/><br/><br/><br/><br/>
                        <label>FATHER NAME</label>
                        <input type='text'></input>
                        <label>MOTHER NAME</label>
                        <input type='text'></input>
                        <br/><br/><br/><br/><br/>
                        <label>FAMILY ANNUAL INCOME</label>
                        <input type='text'></input>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <h8 className='H8'>ACADEMIC DETAILS</h8>
                        <br/><br/><br/><br/>
                        <label>INSTITITE NAME</label>
                        <select >
                        <option value="" disabled selected>Select your option</option>
                        <option value='IIIT'>IIIT</option>
                        <option value='NIT'>NIT</option>
                        <option value='IIT'>IIT</option>
                        </select>
                        <label>PRESENT CLASS/COURSE</label>
                        <input type='text'></input>
                        <br/><br/><br/><br/><br/>
                        <label>PRESENT CLASS/COURSE YEAR</label>
                        <input type='text'></input>
                        
                        <label>MODE OF STUDY</label>
                        <select >
                        <option value="" disabled selected>Select your option</option>
                        <option value='B.TECh'>B.TECH</option>
                        <option value='M.TECH'>M.TECH</option>
                        
                        </select>
                        <br/><br/><br/><br/><br/>

                        <label>CLASS START DATE</label>
                        <input type='date'></input>
                        <label>UNIVERSITY/BOARD NAME</label>
                        <input type='text'></input>
                        <br/><br/><br/><br/><br/>
                        <label>PREVIOUS COURSE</label>
                        <input type='text'></input>
                        <label>PREVIOUS PASSING YEAR</label>
                        <input type='text'></input>
                        <label>PREVIOUS CLASS % </label>
                        <input type='text'></input>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <h8 className='H8'>10TH CLASS</h8>
                        <br/><br/><br/>
                        <label>ROOL NUMBER</label>
                        <input type='text'></input>
                        <label>BOARD NAME</label>
                        <input type='text'></input>
                        <br/><br/><br/><br/><br/>
                        <label>PASSING YEAR</label>
                        <input type='text'></input>
                        <label>% OBTAINED</label>
                        <input type='text'></input>

                        <br/><br/><br/><br/><br/>
                        <h8 className='H8'>12TH CLASS</h8>
                        <br/><br/><br/>
                        <label>ROOL NUMBER</label>
                        <input type='text'></input>
                        <label>BOARD NAME</label>
                        <input type='text'></input>
                        <br/><br/><br/><br/><br/>
                        <label>PASSING YEAR</label>
                        <input type='text'></input>
                        <label>% OBTAINED</label>
                        <input type='text'></input>

                        <br/><br/><br/><br/><br/>
                        <h8 className='H8'>FEE DETAILS</h8>
                        <br/><br/><br/>
                        <label>ADMISSION FEE</label>
                        <input type='text'></input>
                        <label>TUTION FEE</label>
                        <input type='text'></input>
                        <label>OTHER FEE</label>
                        <input type='text'></input>

                        <br/><br/><br/><br/><br/><br/><br/>
                        <h8 className='H8'>CONTACT DETAILS</h8>
                        <br/><br/><br/><br/><br/>

                        <label>STATE </label>
                    <select>
                        <option value="" disabled selected>Select your option</option>
                        <option value='AndhraPradesh'> AndhraPradesh</option>
                        <option value='Telangana'> Telangana</option>
                        <option value='Tamilnadu'> tamilnadu</option>
                        <option value='Kerala'> Kerala</option>
                        <option value='Karnataka'> Karnataka</option>
                       
                    </select>

                    <label>DISTRICT </label>
                    <select >
                        <option value="" disabled selected>Select your option</option>
                        <option value='Krishna'> Krishna</option>
                        <option value='East'> East</option>
                        <option value='West'> West</option>
                        <option value='Guntur'> Guntur</option>
                        <option value='Chittor'> Chittor</option>
                       
                    </select>
                    <br/><br/><br/><br/><br/><br/><br/>
                        <label>HOUSE NUMBER</label>
                        <input type='date'></input>
                        <label>STREET NUMBER</label>
                        <input type='text'></input>
                        <label>PINCODE</label>
                        <input type='date'></input>
                    <br/><br/><br/><br/><br/>

                    <label>CHOOSE STREEM APPLYING FOR</label>
                    <select >
                        <option value="" disabled selected>Select your option</option>
                        <option value='B>TECH'>B.TECH</option>
                        <option value='M.TECH'>M.TECH</option>
                        
                    </select>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <h8 className='H8'>DOCUMENTS UPLOAD SECTION</h8>
                <br/><br/><br/><br/><br/>

                <label>DOMICILE CERTIFICATE</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>STUDENT PHOTOGRAPH</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>INSTITUTE ID CARD</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>CASTE CERTIFICATE</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>PREVIOUS YEAR MARKS SHEET</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>FEE RECEIPT OF CURRENT YEAR</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>BANK PASSBOOK</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>AADHAR</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>10TH CERTIFICATE</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>
                <label>12TH CERTIFICATE</label>
                <button type='file'>UPLOAD</button>
                <br/><br/><br/>

                
                <input type='checkbox' name='confirm'></input>
                <label for='confirm'><p className='H8'> ALL THE DETAILS FURNISHED ME ARE TRUE TO THE BEST OF MY KNOWLEDGE</p></label>
                <br/><br/><br/>
                <Link to='/homePage'>
                <input type='submit' className='H8'></input>
                </Link>
                <input type='reset' className='H8'></input>

                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>






                    



                        






                        </fieldset>

                    </form>
                    </div>
                </center>
            </div>
        )
    }
}

export default ScholarshipApplicationForm;