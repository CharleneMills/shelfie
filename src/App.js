import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';


class App extends Component {
  
  constructor(){
    super()

    this.state = {
      products: []
    }
}

componentDidMount(){
  this.resetProducts()
}

resetProducts(){
  axios.get('/api/products').then(res => {
      this.setState({
          products: res.data
      })
  }).catch(error => {
      console.log(error)
  })
}


  render(){


    return (
      <div className="App">
        <Header />
        <Dashboard Products={this.state.products}/>
        <Form />
      </div>
    );

  }
  
 
}

export default App;
