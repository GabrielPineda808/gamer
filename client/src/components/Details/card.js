import React, { useState } from 'react';
import api from '../../utils/api';
import RatingContainer from './rating';

function ItemContainer(props) {
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
            fontSize: 54,
            marginRight: 500
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

    const state ={
        game: []
    }
    console.log(props.prop)

    return (
        <div className='container' style={styles.margin}>
                <div className="card" >
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h1 style={styles.padding}>{props.prop}</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <img src={props.img} style={styles.pic}></img>
                            </div>
                            <div className='col-lg-8'>
                                <p style={styles.fontSize}>{props.description}</p>
                                <br></br>
                                <p style={styles.float}><strong>Game'R'View Rating:</strong></p>
                                <p style={styles.floats}><strong>Developer: </strong></p>
                                <p style={styles.floaty}><strong>Genre: </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <RatingContainer />
            </div>
  )
    
}

export default ItemContainer;