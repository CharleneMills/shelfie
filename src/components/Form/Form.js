import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {

    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0,
            isEditing: false
        }
    }


componentDidMount(){
    if(this.props.match.params.id){
        this.setState({
            isEditing: true
        })
    }
}

componentDidUpdate(previousprops){
    if(!this.props.match.params.id && previousprops.match.params.id){
        this.setState({
            img: '',
            name: '',
            price: 0,
            isEditing: false
        })
    }
}

handleChange = (e) => {
    const {name, value} = e.target
    
    this.setState({
        [name]: value
    }) 
    
} 

editProduct(){
    axios.put(`/api/product/${this.props.match.params.id}`, this.state)
    .then(res => {
        this.props.history.push('/');
      }).catch(error => {
        console.log(error)
      })
}

cancelNewProduct(){
    this.props.history.push('/');
}

newProduct = () => {
    console.log(this.state)
    axios.post('/api/product/', this.state).then(res => {
      this.props.history.push('/');
    }).catch(error => {
      console.log(error)
    })
}

   render() {
    const {img, name, price} = this.state;
// possible .map goes here. Remember outmost element on a .map must have a key    

        return(
            <div className="form">

                <p>Image URL:</p>
                <input name="img" value={img} onChange={(e) => this.handleChange(e)}/>
                
                <p>Product Name:</p>
                <input name="name" value={name} onChange={(e) => this.handleChange(e)}/>
                
                <p>Price:</p>
                <input name="price" value={price} onChange={(e) => this.handleChange(e)}/>

                <div className="buttondiv">
                    <button className="canadd" onClick={() => this.cancelNewProduct()}>Cancel</button>
                    {this.state.isEditing ? <button className="canadd" onClick={() => this.editProduct()}>Edit</button> : <button className="canadd" onClick={() => this.newProduct()}>Add</button>}
                </div>

            </div> //Returns like to return one item, so wrap multiple items in a div
        )
    
   } 
   
}

export default Form;