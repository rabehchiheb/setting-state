import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      fact:0,
      res: 0
      
    };
    this.onElementClick = this.onElementClick.bind(this);
};
 factorial(factoriel) {
  let f= 1
  while (factoriel > 0) {
    f *= factoriel 
    factoriel = factoriel - 1 
  }
  return f 
}
  
onElementClick(f, d) {
    this.setState({
      fact:f,res:this.factorial(d)
    });
  }

  render() {
    var det = [0,1,2,3,4,5,6,7,8,9];

  return (
    <div className="App">
      <header className="App-header">
        
      {Array.from(det, x =>  
        <button className="button"
        onClick={() => {
          this.onElementClick(x,x);
        }}>{x}</button>
        
        
        )}
 

 
 

      </header>
      <section className="App-header">
      <p><h1>the factoriel of   {this.state.fact}   is   {this.state.res}</h1></p>
      </section>
    


    </div>
  );
}



}
export default App;
