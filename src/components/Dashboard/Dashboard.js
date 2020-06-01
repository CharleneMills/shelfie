import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';


class Dashboard extends Component {
   constructor(){
      super()
  
      this.state = {
        inventory: []
      }
  
  }
  
  componentDidMount(){
    this.resetProducts()
    console.log(this.props)
  }
  
  resetProducts = () =>{
    axios.get('/api/inventory')
    .then(res => {
      console.log(res.data)  
      this.setState({
            inventory: res.data
        })
    }).catch(error => {
        console.log(error)
    })
  }
  
  deleteProduct = (id) =>{
    axios.delete(`/api/product/${id}`)
    .then(res => {
      this.resetProducts()
    })
  }
  
    render(){
   
    const products = this.state.inventory.map(thisProduct => {
        
        return (
       
             <Product key={thisProduct.id} numProducts={this.state.inventory.length} thisProduct={thisProduct} deleteProduct={this.deleteProduct}/>
        
        )
      })    

        return(
           <div className="dash">
        {products}
           </div>//Returns like to return one item, so wrap multiple items in a div
        )
    
   } 
} 
   
export default Dashboard;