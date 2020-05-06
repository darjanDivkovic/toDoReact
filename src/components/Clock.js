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
            <div className='clock'>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
