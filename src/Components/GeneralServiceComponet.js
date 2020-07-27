import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function GeneralServiceComponet(props) {
   return (
        <div>
           <div className="gernalSection" >
                <div className="title">
                  <div className="virtical" ></div>
                  <img className="img-fluid" src={props.settingicons} alt="settingicon" ></img>
                  <Container>
                    <Row className=" heading ">
                        <Col xs={10} md={10} lg={11}>
                          <h4> {props.title} </h4>
                        </Col>
                        <Col xs={2} md={2} lg={1} className=" p-0">
                        <p> {props.time} </p>
                        </Col>
                    </Row>
                  </Container>
                </div>
                <hr className="m-0 hr " />
                <Container>
                   <Row>
                        <Col xs={12} md={12} lg={8}>
                        <div className="row subtitle ">
                        <h5> {props.subtitle} </h5>
                        <h3> {props.subtitle2} </h3>
                        </div>
                           <ul>
                              <li>{props.featurelistone}</li>
                              <li>{props.featurelisttwo}</li>
                              <li>{props.featurelistthree}</li>
                              <li>{props.featurelistfour}</li>
                           </ul>
                        </Col>
                        <Col xs={12} md={12} lg={4} className="price">
                            <h1>{props.totalPrice}</h1>
                             <h5>{props.mainprice}</h5>
                        </Col>
                   </Row>
                </Container>
                <Container>
                   <Row>
                        <Col xs={12} md={12} lg={6} className=" small" >
                         <small>{props.foottitle}</small>
                        </Col>  
                        <Col xs={12} md={12} lg={6}v className=" p-0 button" >
                            <button className="btn1" ><img src={props.detailebtns} alt="settingicon" ></img>{props.button1}</button>
                            <button className="btn2 btn btn-outline-danger" ><strong>{props.buttonAddIcon}</strong> {props.button2} </button>
                        </Col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                           
                   </Row>
                </Container>
               
           </div> 
        </div>
    )
}

export default GeneralServiceComponet
