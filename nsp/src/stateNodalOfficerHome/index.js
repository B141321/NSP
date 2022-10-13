import React from "react";
import './index.css'
import { Link} from "react-router-dom";

class StateNodalOfficerHome extends React.Component{
    render(){
        return(
            <div>
                <div className="container nodalcontainer">
                    <div className="row">
                        <div className="col-12 bor con fnH">
                            <img src="https://static.wixstatic.com/media/da2d17_b01f9690f621445fb0ba4358e4ecf4a5~mv2.png/v1/crop/x_56,y_0,w_440,h_440/fill/w_312,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202022-05-05%20at%201_19_59%20PM.png" className="iz"></img>
                            <h1>NATIONAL SCHOLARSHIP PORTAL</h1>
                        </div>
                        <div className="col-12 bor con fnH">
                            <h3>STATE NODAL OFFICER HOME PAGE</h3>
                            <Link to='/homePage'>
                            <button className="but btn btn-primary">LOGOUT</button>
                            </Link>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-4 bor fonSide">
                            <br/><br/>
                            
                            <h6>VIEW LIST OF INSTITUTES REGISTER</h6>
                            <br/><br/><br/><br/><br/>
                            <h6>VIEW STUDENT APPLICATION FORM</h6>
                            <br/><br/><br/><br/><br/><br/>
                            <h6>VERIFY INSTITUTE REQUEST</h6>
                        </div>
                        <div className="col-8 bor con bg fonSide">
                            <div className="row">
                                <div className="col-8 bor mar con">
                                    <br/><br/><br/>
                                    <ol>
                                    <br/>
                                        <li>IIT DELHI</li>
                                        <li>IIT BOMBAY</li>
                                        <li>IIT CHENNAI</li>
                                        <li>IIT HYDERABAD</li>
                                    </ol>
                                </div>
                                <div className="col-8 bor mar">
                                    <br/>
                                    <div className="con">
                                    <button>VIEW</button><br/><br/>
                                    <button>VIEW</button><br/><br/>
                                    <button>VIEW</button><br/>
                                    <br/>
                                    </div>
                                </div>
                                <div className="col-6 bor mar">
                                    <h6>INSTITUTE APPLICATION</h6>
                                    <hr/>
                                    <p className="con">VERIFY</p>
                                    <div className="con">
                                    <button>REJECT</button>
                                    <button>CANCEL</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateNodalOfficerHome;