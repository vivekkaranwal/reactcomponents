import React, { useState } from 'react'
import SideBar from './SideBar';
import $ from 'jquery';
import Input from './InputComponent'
import profileicon from '../asset/profileicon.png';
import emailicon from '../asset/emailicon.png';
import phoneicon from '../asset/phonicon.png'
import righttick from '../asset/righttick.png'
import ligthtick from '../asset/lighttick.png'
import pinicon from '../asset/pinicon.png'
function ProfileCompontent() {
    const[show, setShow] = useState(true);
     $(document).ready(()=>{
        $("button").click(function(){
               if(show){
                $(".profile").addClass("show");
                $(".profile").removeClass("hide");

                 setShow(false);
               }
               if(show===false){
                $(".profile").addClass("hide"); 
                $(".profile").removeClass("show"); 
                 setShow(true)
               }
          });
     })
    return ( 
        <div>
           <button className="toogle-button" ><strong> ☰ </strong></button>     
           <div className="profileCompontent" >
           <div  className="profile"><SideBar className="displaynone"></SideBar></div>
           <div className='inputsection'>
           <div className="firstInput">
               <Input 
                 profileicon = {profileicon}
                 tick ={righttick}
                 toptitle={'Name'}
                 title={'Mr. MekVahan'}
               ></Input>
               <Input
                 profileicon = {emailicon}
                 tick ={ligthtick}
                 toptitle={'e-mail Id'}
                 title={'mymail@123id.com'}
               ></Input>
               <Input
                 profileicon = {phoneicon}
               tick ={ligthtick}
               toptitle={'Mobile Number'}
               title={'+91-8089347734'}
               ></Input>
            </div>
            <p>Valid to</p>
           <div className="secondInput">
            <Input     toptitle={'Mobile Number'}
               title={'+91-8089347734'} tick ={ligthtick} pinicon ={pinicon} pinsshow={true} ></Input>
            <Input    toptitle={'Mobile Number'}
               title={'+91-8089347734'} pinicon ={pinicon}  tick ={ligthtick} pinsshow={true} >
             </Input>
           </div>  
           </div>
          </div>
        </div>
    )
}

export default ProfileCompontent
