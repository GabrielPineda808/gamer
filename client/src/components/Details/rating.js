import React, {Component, useState} from 'react';
import Modal from 'react-modal';
import Review from './reviewCard';
import './modal.css'

function RatingContainer(props){
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const showModal = () => {
        this.setState({ show: true });
    }
    const hideModal = () => {
        this.setState({ show: false });
    }

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
        },
        modal:{
            
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
                                <button type='button' onClick={e=> setModalIsOpen(true)}> Add Review</button>
                            </div>
                        </div>
                        <Modal isOpen={modalIsOpen} onRequestClose={e=> setModalIsOpen(false)} class='Modal'>
                                <div>
                                    <h1>Hello</h1>
                                    <button onClick={e=> setModalIsOpen(false)}>Close</button>
                                </div>
                        </Modal>
                        <Review />
                    </div>
                </div>
        </div>
  )
    
    
}

export default RatingContainer;