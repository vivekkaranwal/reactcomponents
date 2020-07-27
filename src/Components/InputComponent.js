import React from 'react'
function InputComponent(props) {
    return (
        <>
               <small>{props.toptitle}</small>
                <div  className="mekvhanname">
                  <span><img src={props.profileicon}></img></span>
                  <div className="profilename container">
                   <div className="row">
                  <div className="col-9 col-md-9 col-lg-9">
                    <p>{props.title}</p>
                  </div>
                  <div className="col-3 col-md-3 col-lg-3">
                    <p className="tickicon"> {props.pinsshow?(<img className="pinicon" src={props.pinicon} alt="" />):('')} <img src={props.tick} alt="fdf" /> </p>
                  </div>
                 </div>
                 </div>
                </div>
                <hr ></hr>
        </>
    )
}

export default InputComponent
