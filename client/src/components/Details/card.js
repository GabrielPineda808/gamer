import React from 'react';

function ItemContainer(props) {
    const styles ={
        fontSize:{
            fontSize: 54,
            fontWeight: 'bold'
        },
        margin:{
            paddingTop: 20
        },
        pic:{
            width: 100,
            height: 100
        },
        padding:{
            marginRight: 900
        }
    }
    
    
    return (
        <div className='container'>
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title" style={styles.padding}>Game Name Here</h5>
                        
                    </div>
                </div>
            </div>
  )
    
}

export default ItemContainer;