import React from 'react';
import GeneralServiceComponet from "../src/Components/GeneralServiceComponet"
import Content from './Components/Content'
import ProfileCompontent from './Components/ProfileCompontent'
import './style/App.scss'
function App() {
  return (
    <div className="App">
       <ProfileCompontent></ProfileCompontent>
        <GeneralServiceComponet
                    settingicons= {Content[0].settingicons}
                    title={Content[0].title}
                    time= {Content[0].time}
                    subtitle={Content[0].subtitle}
                    subtitletwo= {Content[0].subtitletwo}
                    featurelistone={Content[0].featurelist.one}
                    featurelisttwo={Content[0].featurelist.two} 
                    featurelistthree={Content[0].featurelist.three}
                    featurelistfour={Content[0].featurelist.four}
                    totalPrice={Content[0].totalPrice} 
                    mainprice={Content[0].mainprice}
                    foottitle={Content[0].foottitle}
                    button1={Content[0].buttons.button1}
                    button2={Content[0].buttons.button2} 
                    buttonAddIcon={Content[0].buttons.buttonAddIcon} 
                    detailebtns={Content[0].buttons.detailebtns}
        />
     </div>
  );
}

export default App;
