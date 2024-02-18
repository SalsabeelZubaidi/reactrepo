import logo from './logo.svg';
import './App.css';
import Car from './cars';


import merc from './merc.jpg';
import toy from './toyt.jpg';
import bmw from './bmw.jpg';
import ford from './ford.jpg';
import './style.css'

/*function App() { //always update-> return -> html  content
  const hi=<h1> hello from JSX</h1>
  const student={name :'salsabeel' , age:20 , birthday:'15/5'}
  return (
    <div className="App">
     <h1> Name: {student.name} </h1>
     <h2> Age: {student.age} </h2>
    <h3> Birthday: {student.birthday}</h3>
    </div>
  );
  }*/

  function App(){
    return (
    <div className="App">
    <div class="row1">
    <Car image={bmw} brand="bmw"  model= "1975" color="red"  gear="regular" > </Car>
    <Car image={ford} brand="ford"  model= "1988" color="black"  gear="regular"></Car>
    </div>
    <div class="row2">
    <Car image={merc} brand="mercedes"  model= "2023" color="grey"  gear="automatic"></Car>
    <Car image={toy} brand="toyota" model= "2018" color="blue"  gear="automatic"></Car>
    </div>
   </div>
    );
  }


export default App;
