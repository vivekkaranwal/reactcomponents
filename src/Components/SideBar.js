import React from 'react'
import {Container, Row, Col, Navbar} from 'react-bootstrap'
import profileIcon from '../asset/proicon.png'
function SideBar() {
    
    return (
    <>
         <div className="sidebar">
          <div className="profileName">
           <Container>
               <Row>
                   <Col xs={3} md={3} lg={3} className="my-1">
                        <img src={profileIcon}></img>
                   </Col>
                   <Col xs={6} md={7} lg={7}>
                       <p>Hi<br></br> Mekvahan</p>
                   </Col>
               </Row>
           </Container>
          </div>
          <div className="secondprofile" >  
          <div className="myProfile"><p>MY PROFILE</p></div>  
          <div className="myProfile"><p>Manage Address </p></div>  
          <div className="myProfile"><p>Change Password</p></div>
          </div>
          </div>
    </>  
    )
}

export default SideBar
