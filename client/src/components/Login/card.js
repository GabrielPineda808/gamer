import React from 'react';
import Form from './form'

function Card() {
    const styles ={
        fontSize:{
            fontSize: 54,
            fontWeight: 'bold'
        },
        color:{
            backgroundColor: '#535d5e'
        }
    }
    
    
    return (
        <div className="container" style={styles.color}>
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