import React from "react";
import { Link } from "react-router-dom";
import StudentReg from "../studentRform";
import Home from "../homePage";

class InstituteSucessfulReg extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <div className='container conta'>
                        <div className='row'>
                            <div className="col-12">
                                <h1>NATIONAL SCHOLARSHIP PORTAL</h1>
                            </div>
                            <br/>
                            <div className="col-12 head">
                                <h6>YOU HAVE SUCESSFULLY REGISTERED!!</h6>
                                <br/>
                                <h6>YOU UID IS YOUR INSTITUTE ID</h6>
                            </div>
                            <div className="col-12">
                                <Link to='/homePage'>
                                <button className="head">GO TO LOGIN</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </center>
            </div>
        )
    }
}

export default InstituteSucessfulReg;