import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './main.css';

class Startgame extends Component {
    state = { 
        playervalue:22264
     }
     ScoreHandler = (e) => {
         const playervalue = e.target.value;
         this.setState({playervalue});
     }
    render() { 
        console.log(this.state.playervalue);
        return ( 
            <div className='frontpage'>
           
            <form>
                <h1>Select Players</h1>
            <select id="inputState" class="form-control" onChange={this.ScoreHandler}>
            <option value='22264'>Two Players</option>
            <option value='44456'>Four Players</option>
            </select>
            </form>
            <button id='button' type="button" class="btn btn-outline-success"><Link to={`/game/${this.state.playervalue}`}>Start Game</Link></button>
            
       
        </div>
         );
    }
}
 
export default Startgame;