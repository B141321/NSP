import React from "react";
import './index.css'
import { Link} from "react-router-dom";

class MinistryHome extends React.Component{
    render(){
        return(
            <div>
                <div className="container ministrycontainer">
                    <div className="row mborder">
                        <div className="col-12 mimg">
                           
                           
                        </div>
                    </div>
                    <div className="row mborder ">
                        <div className="col-12 mph">
                            <h4 className="mph1">MINISTRY PORTAL</h4>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-3 fside mborder">
                            <br/><br/><br/>
                            <Link to='/homePage'>
                            <h6>HOME</h6>
                            </Link>
                            <br/><br/><br/>
                            <Link>
                            <h6>VIEW STUDENT APPLICATION FORM</h6>
                            </Link>
                            <br/><br/><br/>
                            <Link>
                            <h6>VIEW INSTITUTE REGRISTRATION</h6>
                            </Link>
                        </div>
                        <div className="col-6 midd mborder">
                        
                            <h5>FORMS</h5>
                            <p>FORM 1</p><button>VIEW</button>
                            <p>FORM 2</p><button>VIEW</button>
                            <p>FORM 3</p><button>VIEW</button>
                            <p>FORM 4</p><button>VIEW</button>
                        </div>
                        <div className="col-3 midd mborder">
                            <p>STUDENT APPLICATION FORMS</p>
                            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
                            <button>GRANT</button>
                            <br/><br/>
                            <button>REJECT</button>
                            <br/><br/>
                            <button>CANCEL</button>
                            <br/><br/>


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MinistryHome;