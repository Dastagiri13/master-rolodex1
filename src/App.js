import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from '../src/components/search-box/search-box-component';
import './App.css';


class App extends Component{
  constructor(){
    super ();
    // this.state = {
    //   string: 'Hello Dastagiri, How are you man ?',
    //   string2: 'Hello Giri'
    // };
    this.state={
      master:[
        {
          name:"Giri1",
          email:"giri1@gmail.com",
          id: '1'
        },
        {
          name:"Giri2",
          email:"giri2@gmail.com",
          id: '2'
        },
        {
          name:"Giri3",
          email:"giri3@gmail.com",
          id: '3'
        },
        {
          name:"Giri4",
          email:"giri4@gmail.com",
          id: '4'
        },
        {
          name:"Giri5",
          email:"giri5@gmail.com",
          id: '5'
        },
        {
          name:"Giri6",
          email:"giri6@gmail.com",
          id: '6'
        },
        {
          name:"Giri7",
          email:"giri7@gmail.com",
          id: '7'
        },
        {
          name:"reshma8",
          email:"giri8@gmail.com",
          id: '8'
        }
      ],
      searchFeild:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({searchFeild: e.target.value});
  }

  render() {
    const {master, searchFeild} = this.state;
    const filterMaster = master.filter(master => master.name.toLowerCase().includes(searchFeild.toLocaleLowerCase()))
    return(
    <div className="App">
      <h1>React Master Rolodex APP</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    <h3>{this.state.string}{this.state.string2}</h3>
         <button onClick={() => this.setState({string: 'I am Good man, How about you ?', string2: 'This is Giri'})}>Change Text</button>
      </header> */}
      <SearchBox 
      placeholder='search master'
      handleChange={this.handleChange}
      />
      <br /> <hr />
  <CardList master={filterMaster} />
      
  
    {/* <div>
      {this.state.master.map(master => (
        <h1 key={master.id}>{master.name}</h1>
      ))}
      
    </div> */}
    </div>)
  }
}

export default App;
