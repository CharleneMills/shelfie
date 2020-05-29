import React, { Component } from 'react'

class Product extends Component {

    constructor(){
        super()

        this.state = {
            
        }
    }

//Modules go here

   render() {
    
    const {img, name, price} = this.props.thisProduct;

    return (

      <div className="productCard">

          <div className="cardImg">
            <img src={img}/>
          </div>
          <div>
                <p>{name}</p>
                <p>{price}</p>
          </div>
      </div>
    )
}
}

export default Product;