
import React, { Component } from "react";
import { Link} from "react-router-dom";
import './index.css'
import StudentLogedinHome from "../studentLogedinHome";
import InstituteLogedinHome from "../instituteLogedinHome";
import StateNodalOfficerHome from "../stateNodalOfficerHome";
import MinistryHome from "../ministryHome";
import StudentReg from "../studentRform";


class Home extends React.Component{


   

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.UID.value);
    
        if (!e.target.UID.value) {
          alert("UID is required");
        } else if (!e.target.password.value) {
          alert("Password is required");
        } else if (
          e.target.UID.value === "505115084156" &&
          e.target.password.value === "123456"
        ) {
          alert('Student Login Sucessful')
          window.location.assign('/studentLogedinHome') 
          e.target.UID.value = "";
          e.target.password.value = "";
        }else if (
          e.target.UID.value === "B141321" &&
          e.target.password.value === "123456"
        ){
          alert('Institute Login Sucessful')
          window.location.assign('/instituteLogedinHome') 
          e.target.UID.value = "";
          e.target.password.value = "";
          
        }else if (
          e.target.UID.value === "B141954" &&
          e.target.password.value === "123456"
        ){
          alert('StateNodal Login Sucessful')
          window.location.assign('/stateNodalOfficerHome') 
          e.target.UID.value = "";
          e.target.password.value = "";
          
        }else if (
          e.target.UID.value === "B141701" &&
          e.target.password.value === "123456"
        ){
          alert('Ministry Login Sucessful')
          window.location.assign('/ministryHome') 
          e.target.UID.value = "";
          e.target.password.value = "";
          
        }
        else {
          alert("Wrong UID or password combination");
        }
      };
    
     

    render(){
      const {UID,password} = this.props
      
      console.log(UID)
      console.log(password)
        return(

        <div className="container container0">
            
            <div className="row borders">
                <div className="col-12 header">
                  
                    <h6>NATIONAL SCHOLARSHIP PORTAL</h6>
                    <p>Government of India</p>
                </div>
            </div>
        
            <div className="row content borders" >
                <div className="col-3"><Link to='/'><p>HOME</p></Link></div>
                <div className="col-3"><Link><p>ABOUT US</p></Link></div>
                <div className="col-3"><Link><p>CONTACT US</p></Link></div>
                <div className="col-3"><Link to='/Register'><p>NEW REGISTRATION</p></Link></div>
            </div>
            
            <div className="row borders">
                    
                    <div className="col-3 ">
                        <div className="updates">
                          <p className="para0">UPDATES</p>
                        <marquee behaviour='scroll' direction='up' scrollamount="4" height="180px" >
                          <p className="para0">The Maharashtra DTE Scholarship gives the opportunity to the students belonging to the backwards categories to study in the government and private colleges after completion of their Class 12th.<br/>
                           This scheme not only provides the scholarship to study in technical courses but also gives the chance to apply for undergraduate and postgraduate courses in India.</p>
                           </marquee>
                           </div>
                        <div className="help"><p>Help Desk</p>
                        <p>National Scholarship Portal</p>
                        </div>
                    </div>
                    <div className="col-5 data">
                      
                    <p className="para">Supporting education through scholarships to students of higher learning 
                    is an important aspect of government’s effort to assist students at all levels of learning to allow them to afford the basic needs
                    that accrue during their studies.<br/>
                    The cost of education has risen drastically over the past few years hindering the families of low-income earners to send their children to school as they can barely afford the cost.<br/>
                    Scholarship as defined is a grant or payment made to support a student's education, 
                    awarded based on academic or other achievement. There is a lack of awareness amongst the students about the various scholarships that can benefit them tremendously.<br/>
                    </p>
                    
                    </div>
                    <div className="col-4 logimg">
                    


                        <div className="App">
                        <br/><br/><br/>
                        <form className="form " onSubmit={this.handleSubmit}>
                        <br/><br/><br/>
                        <div className="input-group1">
                        <label htmlFor="UID">UNIQUE -ID</label>
                        <input type="text" size='14' name="UID" placeholder="UID" />
                        </div>
                        <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" size='14' name="password" placeholder="PASSWORD" />
                        
                        
                        </div>
                        <p className="homepara">Forgot Password?</p>
                        
                        <div className="butlg">
                        <button className="btn btn-primary" >Login</button>
                        </div>
                        
                        
                       
                        <p className="homepara">Institute/State/Ministry Login</p>
                        </form>
                        

                        </div>

                    </div>
            </div>
        </div>
    
                
    
        )
    }

}

export default Home;