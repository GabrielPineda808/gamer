import React, {Component, useState} from 'react';
import api from '../../utils/api'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        games:[]
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        api.getGames(this.state.value).then(res => console.log(res))
    }

    render() {return (
        <div className="container">
            <h3>Search a Game</h3>
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <button className="btn btn-outline-secondary mt-3 mb-3" onClick={this.handleSubmit} type="button" id="button-addon2">Search</button>
            {this.state.games.map(items => 
                <li>{items}</li>  
                )}           
        </div>
  )
    }
}

export default Search;