import React from "react";
import { Link } from "react-router-dom";
import InstituteSucessfulReg from "../instituteSucessfulReg";
import './index.css'
import { Form } from "react-router-dom";
class InstituteReg extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <div className="container">
                    <fieldset>
                    <legend>INSTITUTE REGISTRATION REQUEST FORM</legend>
                    <form>
                        <br/>
                        <h8 className='H8'>BASIC DETAILS</h8>

                        <div className="row">
                            <div className="col-12">
                        <label>INSTITUTE CATEGORY: </label>
                        <select >
                        <option value="" disabled selected>Select your option</option>
                        <option value='IIT'> IIT</option>
                        <option value='NIT'> NIT</option>
                        <option value='State University'>STATE UNIVERSITY</option>
                       
                    </select>
                    </div>
                    
                     <div className="col-12">
                    <label>NAME</label>
                    <input type='text'></input>
                    </div>
                    </div>
                    
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
                    <label>INSTITUTE CODE</label>
                    <input type='text'></input>
                        </div>

                        <div className="col-6">

                    <label>DISE CODE</label>
                    <input type='text'></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                    <label>LOCATION: </label>
                    <input type='radio' id='ru'></input>
                    <label for='ru'>RURAl</label>
                    <input type='radio' id='ur'></input>
                    <label for='ur'>URBAN</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-6">
                    <label>INSTITUTE TYPE: </label>
                    <select >
                    <option value="" disabled selected>Select your option</option>
                    <option value='Engineering'>ENGINEERING</option>
                    <option value='Medicine'>MEDICINE</option>
                    <option value='CA'>CA</option>
                    </select>
                        </div>

                        <div className="col-6">
                    <label>AFFILIATD UNIVERSITY STATE: </label>
                    <select >
                    <option value="" disabled selected>Select your option</option>
                    <option value='NTR'>NTR</option>
                    <option value='Chittor'>CHITTOR</option>
                    <option value='Kadapa'>KADAPA</option>
                    </select>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                    <label>AFFILIATD UNIVERSITY/BOARD NAME</label>
                    <input type='text'></input>
                        </div>

                        <div className="col-12">
                    <label>YEAR FROM WHICH ADIMISSION STARTED </label>
                    <select >
                    <option value="" disabled selected>Select your option</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    </select>
                        </div>

                    
                        <div className="col-12">
                    <label>SET YOUR PASSWORD</label>
                    <input type='text'></input>
                        </div>
                    
                        <div className="col-12">
                    <label>CONFIRM PASSWORD</label>
                    <input type='text'></input>
                        </div>
                    </div>

                    <br/>
                    <h8 className='H8'>PROOF OF EXISTANCE OF INSTITUTE</h8>

                    <div className="row">
                        <div className="col-12">
                            <label>INSTITUTE ESTABLISHMENT CERTIFICATE</label>
                            <button type='file'>UPLOAD</button>
                        </div>
                     </div>
                    
                    <br/>
                    <h8 className='H8'>AFFILIATD TO</h8>

                    <div className="row">
                        <div className="col-12">
                            <label>INSTITUTE AFFILIATD CERTIFICATE</label>
                            <button type='file'>UPLOAD</button>
                            
                        </div>
                     </div>
                
                    

                    <br/>
                    <h8 className='H8'>ADDRESS</h8>
                    <div className="row">
                        <div className="col-6">
                    <label>LINE 1</label>
                    <input type='text'></input>
                        </div>
                        <div className="col-6">
                    <label>LINE 2</label>
                    <input type='text'></input>
                        </div>
                        <div className="col-6">
                    <label>CITY</label>
                    <input type='text'></input>
                        </div>
                        <div className="col-6">
                    <label>STATE</label>
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
                    <label>DISTRICT</label>
                    <select >
                    <option value="" disabled selected>Select your option</option>
                    <option value='NTR'>NTR</option>
                    <option value='Chittor'>CHITTOR</option>
                    <option value='Kadapa'>KADAPA</option>
                    </select>
                        </div>

                        <div className="col-6">
                    <label>PINCODE</label>
                    <input type='text'></input>
                        </div>
                    </div>

                    <br/>
                    <h8 className='H8'>CONTACT DETAILS</h8>
                    <div className="row">
                        <div className="col-6">
                    
                    <label>PRINCIPAL NAME</label>
                    <input type="text"></input>
                        </div>
                        <div className="col-6">
                    <label>MOBILE NUMBER</label>
                    <input type="text"></input>
                        </div>
                        <div className="col-12">
                    <label>TELEPHONE</label>
                    <input type="text"></input>
                        </div>
                    </div>
                    
                    <input type='checkbox' name='confirm'></input>
                    <label for='confirm'><p className='H8'> ALL THE DETAILS AND DOCUMENTS SUBMITTED BY US ARE VALID AND TRUE. IF FOUND GUILTY , WE MAY BE RESPONSIBLE FOR THAT</p></label>

                    <br/>
                    <Link to='/instituteSucessfulReg'>
                    <button className='H8'>SUBMIT</button>
                    </Link>
                    <button className='H8'>RESET</button>
                    <br/><br/>



                    



                    </form>
                    </fieldset>
                    </div>
                </center>
            </div>
        )
    }
}

export default InstituteReg;