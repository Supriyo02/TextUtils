import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import React, {useState} from 'react';
import Alert from "./Components/Alert";
//import {
//  BrowserRouter as Router,
//  Routes, 
//Route,
//} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const[mode,setMode]=useState('light');
  const toggleMode= ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Enabled light mode","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#0b1422';
      showAlert("Enabled dark mode","success");
    }
  }
  
  return (
    <>
    
    {/*<Router>*/}
        <Navbar title="TextUtils" mode={mode} heading={"Enter text to analyze below"} toggleMode={toggleMode}  />
        <Alert alert={alert} />
        <div className="container mt-3">
         {/*} <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}></Route>
  </Routes>*/}
      <Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
        </div>
      {/*</Router>*/}

    </>
  );
}

export default App;
