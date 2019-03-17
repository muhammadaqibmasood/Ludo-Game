
import React, { Component } from 'react'
import FourPlayer from './fourPlayers';
import TwoPlayer from './twoPlayers';


class mainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { playervalue:Number(this.props.match.params.id),
    }}
    render() {
        return ( 
<div>
{ this.state.playervalue===44456&&<FourPlayer  />}
{ this.state.playervalue===22264&&<TwoPlayer />}
</div> 
);
    }
}
 
export default mainPage;