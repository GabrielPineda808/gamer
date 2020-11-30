import React from 'react';
import Form from './form'

function Card() {
    const styles ={
        fontSize:{
            fontSize: 54,
            fontWeight: 'bold'
        }
    }
    
    
    return (
        <div className="container">
            <div class="card mt-5" >
                <div class="card-body">
                    <h5 class="card-title">Login</h5>
                    <hr></hr>
                    <Form />
                </div>
            </div>
        </div>
  )
    
}

export default Card;