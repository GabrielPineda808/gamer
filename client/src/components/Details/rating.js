import React from 'react';
import Review from './reviewCard';

function RatingContainer(props) {
    const styles ={
        fontSize:{
            fontSize: 18,
            fontWeight: 'bold'
        },
        margin:{
            paddingTop: 20
        },
        pic:{
            width: 250,
            height: 400
        },
        padding:{
            fontSize: 40,
            marginRight: 700
        },
        float:{
            fontSize: 22,
            marginRight: 350
        },
        floats:{
            fontSize: 22,
            marginRight: 450
        },
        floaty:{
            fontSize: 22,
            marginRight: 495
        }
    }
    
    
    return (
        <div className='container' style={styles.margin}>
            <div className="card" >
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-lg-10'>
                                <h1 style={styles.padding}>Reviews</h1>
                            </div>
                            <div className='col-lg-2'>
                                <button type='button' > Add Review</button>
                            </div>
                        </div>
                        <Review />
                    </div>
                </div>
        </div>
  )
    
}

export default RatingContainer;