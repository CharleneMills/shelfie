import React from 'react';
import {withRouter} from 'react-router-dom';

function Product(props) {

    const {name, price, img, id} = props.thisProduct;

    return (

      <div className="productCard">

        <div className="cardImg left">
            <img src={img}/>
        </div>
        <div className="left">
            <div>
                  <p>{name}</p>
                  <p>${price}</p>
            </div>
            <div className="buttondiv">
              <button onClick={() => props.history.push(`/form/${id}`)}>Edit</button>
              <button onClick={() => props.deleteProduct(id)}>Delete</button>
            </div>
        </div> 
         <div className="clearfix">&nbsp;</div>  
      </div>
    )

}

export default withRouter (Product);