import React from 'react';
import './App.css';
import AvenengerList from "./List"
import AvengerComp from "./component/AvengerComp"



class App extends React.Component {

  constructor(){
    super();
    this.state = {
        avengerList: AvenengerList,
    }
  }


  render(){
    return (
      <div className="App">
          <div className="header">
          <h1>Avengers: By Joe Luna</h1>
          </div>
          <div className="list-wrapper">
          {
           this.state.avengerList.map(avenger => {
             return <AvengerComp avenger = {avenger} key={avenger} />
           })}
          </div>
      </div>
    );
  }

}

export default App;
