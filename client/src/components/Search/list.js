import React from 'react';
import { Link } from "react-router-dom";

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
            height: 150
        },
        padding:{
            marginRight: 900
        }
    }

    

    function display(){
        console.log(props.id)
    }
    
    return (
        <div className='container'>
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title" style={styles.padding}>{props.title}</h5>
                        <ul className="list-group"> 
                            <li className="list-group-item" id={props.id}>
                               <div className="row">
                                    <div className='col-lg-1'>
                                        <img src={props.img} style={styles.pic}></img>
                                    </div>

                                    <div className='col-lg-4' style={styles.margin}>
                                        <Link to={{pathname:'/details', prop:{title: 'game'}}} ><h3>{props.title}</h3></Link>
                                    </div>

                                    <div className='col-lg-4' style={styles.margin}>
                                        <h2>{props.developer}</h2>
                                    </div>

                                    <div className='col-lg-3' style={styles.margin}>
                                        <h1>{props.rating}</h1>
                                    </div>
                               </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  )
    
}

export default ItemContainer;