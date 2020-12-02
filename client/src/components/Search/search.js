import React, {Component, useState} from 'react';
import api from '../../utils/api'
import ItemContainer from './list';

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
        this.setState({value: event.target.value.toLowerCase().replace(" ", '-')}, 
        () => event.target.setSelectionRange(event.target.selectionStart, event.target.selectionEnd))
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state.value)
        api.getGames(this.state.value).then(res => this.setState(state => {
            console.log(res.data)
            return {games: [res.data]}
        }))
        
    }


    render() {return (
        <div className="container">
            <h3>Search a Game</h3>
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <button className="btn btn-outline-secondary mt-3 mb-3" onClick={this.handleSubmit} type="button" id="button-addon2">Search</button>
            {this.state.games.map(items => 
                <ItemContainer key={items.id} id={items.id} developer={items.developers[0].name} search={this.state.value} img={items.background_image} title={items.name} />  
                )}           
        </div>
  )
    }
}

export default Search;