import React from "react";
import { Link} from "react-router-dom";
import './index.css'

class InstituteLogedinHome extends React.Component{
    render(){
        return(
            <div>
                <div className="container container3">
                    <div className="row">
                        <div className="col-12 rows3 nspHead" >
                            <img src="https://1.bp.blogspot.com/-4k4YXOnEAqQ/XzooiQNzG6I/AAAAAAAAAo4/6bfs3uUXCSsu82963S4jZHsOtxlutMvjACNcBGAsYHQ/s810/gplus-1.jpg" className="headimage"></img>
                            <h1>NATIONAL SCHOLARSHIP PORTAL</h1>
                        </div>
                        <div className="col-12 rows3 nspHome">
                            <h5>INSTITUTE HOME PAGE</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3  viewside">
                            <br/>
                            <h6>INSTITUTE DETAILS</h6>
                            <br/>
                            <h6>IIT DELHI</h6>
                            <br/>
                            <h6>VERIFY STUDENT APPLICATION</h6>
                            <br/>
                            <img src="https://www.educationnews.shiksha/wp-content/uploads/2021/05/iit-delhi.png"></img>
                        </div>
                        <div className="col-6 viewside">
                            <div>
                                <h8>APPLICATION FORMS</h8>
                                <br/>
                                <br/>
                                <h8>Form 1</h8>
                                <br/>
                                <button>VIEW</button>
                                <br/>
                                <h8>Form 2</h8>
                                <br/>
                                <button>VIEW</button>
                                <br/>
                                <h8>Form 3</h8>
                                <br/>
                                <button>VIEW</button>
                                <br/>
                                <h8>Form 4</h8>
                                <br/>
                                <button>VIEW</button>
                                <br/>
                                
                                <h8>Form 4</h8>
                                <br/>
                                <button>VIEW</button>
                                <br/>
                                <h8>Form 5</h8>
                                <br/>
                                <button>VIEW</button>
                                <br/>
                                <br/>
                                
                            </div>
                            
                            <div> <h8>ATTACH BONAFIED CERTIFICATE</h8></div>
                        </div>
                        <div className="col-3 viewside">
                            <br/>
                            <Link to='/homePage'>
                            <button className="btn btn-primary">LOGOUT</button>
                            </Link>
                            <br/><br/><br/>
                            <h8>STUDENT APPLICATION</h8>
                            <br/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <button>VERIFY</button>
                            <br/><br/>
                            <button>REJECT</button>
                            <br/><br/>
                            <button>UPLOAD</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InstituteLogedinHome;