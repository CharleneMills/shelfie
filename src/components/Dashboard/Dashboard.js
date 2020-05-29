import React, { Component } from 'react'
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {

    constructor(){
        super()

        this.state = {
            products: []
        }
        this.resetProduct = this.resetProduct.bind(this)
    }

componentDidMount(){
    this.resetProducts()
}

resetProduct(){
    axios.get('/api/inventory').then(res => {
        console.log(res.data)
        this.setState({
            products: res.data
        })
    }).catch(error => {
        console.log(error)
    })
}

   render() {
    
   //no idea how to connect this map to the datebase table
   
    const products = this.state.products.map(thisProduct => {
        console.log({thisProduct})
        return (
       
             <Product key={thisProduct.id} numProducts={this.state.products.length} thisProduct={thisProduct}/>
        
        )
      })    

        return(
           <div>
        {products}
           </div>//Returns like to return one item, so wrap multiple items in a div
        )
    
   } 
   
}

export default Dashboard;