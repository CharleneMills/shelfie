import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {

    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0
        }
    }

handleChange = (e) => {
    const {name, value} = e.target
    
    this.setState({
        [name]: value
    }) 
    
} 

cancelNewProduct(){
    this.setState({
        img: '',
        name: '',
        price: 0
        })
}

newProduct = () => {
    console.log(this.state)
    axios.post('/api/product/', this.state).then(res => {
      this.props.resetProducts();
      this.setState({
        img: '',
        name: '',
        price: 0
      })
    }).catch(error => {
      console.log(error)
    })
}

   render() {
    const {img, name, price} = this.state;
// possible .map goes here. Remember outmost element on a .map must have a key    

        return(
            <div>

                <p>Image URL:</p>
                <input name="img" value={img} onChange={(e) => this.handleChange(e)}/>
                
                <p>Product Name:</p>
                <input name="name" value={name} onChange={(e) => this.handleChange(e)}/>
                
                <p>Price:</p>
                <input name="price" value={price} onChange={(e) => this.handleChange(e)}/>

                <button className="canadd" onClick={() => this.cancelNewProduct()}>Cancel</button>
                <button className="canadd" onClick={() => this.newProduct()}>Add</button>

            </div> //Returns like to return one item, so wrap multiple items in a div
        )
    
   } 
   
}

export default Form;