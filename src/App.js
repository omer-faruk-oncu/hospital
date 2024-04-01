import Home from "./pages/Home";
import { doctorData } from "./helpers/Data";
import "./App.css"



function App() {
  console.log(doctorData)
  return (
    <div className="App">

      <Home doctorData={doctorData}/>
     
      
    </div>
  );
}

export default App;
