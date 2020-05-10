import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount(){
        this.tickID = setInterval(()=> {
            this.tick();
        },1000);
    }

    tick(){
        this.setState({date : new Date()});
    }
    render() {
        return (
            
                <h2 className='clock'>{this.state.date.toLocaleTimeString()}</h2>
            
        )
    }
}
