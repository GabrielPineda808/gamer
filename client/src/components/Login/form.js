import React from 'react';
import API from '../../utils/api'

class Form extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event){
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        API.login(this.state.email, this.state.password)
    }
    
    render (){return (
        <div className="container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address: </label>
                    <input type="username" class="form-control" onChange={this.handleChange} value={this.state.email} id="exampleInputEmail1" name='email' aria-describedby="emailHelp"></input>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password: </label>
                    <input type="password" class="form-control" onChange={this.handleChange} value={this.state.password} name='password' id="exampleInputPassword1"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your password with anyone else.</small>
                </div>
                <button type="submit" onSubmit={this.handleSubmit} class="btn btn-primary">Login</button>
            </form>
        </div>
  )
    }
    
}

export default Form;