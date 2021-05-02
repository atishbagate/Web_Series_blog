
import './App.css';
import Card from './Card'; 
import Data from "./Data";
import Data2 from "./Data2";
function trace(val){
  return(
    <Card 
      imgsrc = {val.imgsrc}
      catagory = {val.catagory}
      sname = {val.sname}
      link = {val.link}
    />
  );
}

function App() {
  return (
    <>
    <h2 className='heading'>MOST POPULAR SERIES</h2>
    <div  className="container">
    {Data.map(trace)}
    </div>
    <div className="container">
    {/* using arrow function  */}
    {Data2.map((val)=>
      <Card 
      imgsrc = {val.imgsrc}
      catagory = {val.catagory}
      sname = {val.sname}
      link = {val.link}
    />
    )
    }
    </div>
    </>
  );
}

export default App;
