import React from 'react';

function Review(props) {
    const styles ={
        fontSize:{
            fontSize: 18,
            fontWeight: 'bold'
        },
        margin:{
            paddingTop: 20,
            maxHeight: 600,
            overflowY: 'auto'
        },
        pic:{
            width: 250,
            height: 400
        },
        padding:{
            fontSize: 25,
            float: 'left'
        },
        float:{
            float: 'left',
            fontSize: 16
        },
        floats:{
            fontSize: 22,
            marginRight: 450
        },
        floaty:{
            fontSize: 22,
            marginRight: 495
        },
        scroll:{
            maxHeight: 100,
            overflowY: 'auto'
        }
    }
    
    
    return (
        <div className='container' style={styles.margin}>
            <div className="card" >
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h1 style={styles.padding}>Review Header</h1>
                                <p style={styles.float}>1/5 Rating</p>
                            </div>
                        </div>
                        
                        <div className='row'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut suscipit lacus, a lacinia nisl. Suspendisse quis velit sit amet diam faucibus sodales. Maecenas non dolor a ex porttitor finibus. Ut nec lobortis mauris. Nunc feugiat non tellus at ultricies. Mauris sit amet erat urna. Phasellus id vulputate turpis. Donec ultricies, nibh vitae maximus porta, urna sem viverra urna, quis aliquam tellus nulla non risus. Fusce sit amet vulputate arcu. Curabitur eros metus, tempus sed risus at, facilisis cursus odio. Phasellus vehicula lacus convallis neque aliquet gravida. Nulla finibus volutpat egestas. Nunc mattis dignissim enim, a mattis nulla placerat non. Nam gravida ligula velit, vel tincidunt neque vulputate vitae.</p>
                            <p style={styles.float}><strong>By: </strong> </p>
                        </div>
                    </div>
                </div>
                <br></br>
        </div>
  )
    
}

export default Review;