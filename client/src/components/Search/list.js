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
                        <ul className="list-group"> 
                            <li className="list-group-item">
                               <div className="row">
                                    <div className='col-lg-1'>
                                        <img src='https://www.linkpicture.com/q/mordecai.png' style={styles.pic}></img>
                                    </div>

                                    <div className='col-lg-4' style={styles.margin}>
                                        <h3>mordecai</h3>
                                    </div>

                                    <div className='col-lg-4' style={styles.margin}>
                                        <h2>Developer</h2>
                                    </div>

                                    <div className='col-lg-3' style={styles.margin}>
                                        <h1>Rating</h1>
                                    </div>

                               </div>
                            </li>

                            <li className="list-group-item">
                               <div className="row">
                                    <div className='col-lg-1'>
                                        <img src='https://www.linkpicture.com/q/mordecai.png' style={styles.pic}></img>
                                    </div>

                                    <div className='col-lg-4' style={styles.margin}>
                                        <h3>mordecai</h3>
                                    </div>

                                    <div className='col-lg-4' style={styles.margin}>
                                        <h2>Developer</h2>
                                    </div>

                                    <div className='col-lg-3' style={styles.margin}>
                                        <h1>Rating</h1>
                                    </div>

                               </div>
                            </li>
                            <br></br>

                        </ul>
                    </div>
                </div>
            </div>
  )
    
}

export default ItemContainer;