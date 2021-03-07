import Login from './components/login';
import Slider from './components/slider';


function App() {
  return (
   <div className="content"> 
  
    <div className="App container mx-6 ">
      <div>
       <div className="columns mt-6">
         
       <div className="column  login is-two-fifths ">
         <div >
            <div className="login">
                <Login/>
            </div>
         </div>
         
               
          </div>
          <div  className="column imgSlider px-6 is-two-thirds is-hidden-mobile">
            <div className="px-6 mr-5 dark">
                <Slider/>
            </div>
               
          </div>
         
       </div>
     
       </div>
       <p className="mt-5 ml-6 text-end">
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
               </p>
    </div>
       
   </div> 
  );
}

export default App;
