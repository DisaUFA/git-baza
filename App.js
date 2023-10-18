import logo from './logo.svg';
import './css/dashboard.css';
//import './App.css';
import MenuComp from './MenuComp';
import HaderKomp from './HaderKomp';
import MenuComp2 from './MenuComp2';
import Invertar from './InvertarComp';

function App() {

  

  return (
    <div className="App">

   <MenuComp />

      {/* -> header */}
      <HaderKomp/>

      

      
      <div class="container-fluid">
        <div class="row">
          
        
        <MenuComp2 />

        <Invertar />



        
        </div>
      </div>



    </div>
  );
}

export default App;
