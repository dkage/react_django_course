import React, { Component } from "react";


class Footer extends Component {

    state = {
        name: '',
    }

    changed = event => {
        this.setState({name: event.target.value})
        console.log(this.state.name);
    }

    componentDidMount() {
        this.setState({name: 'MyName test'})
    }

    render() {
        return (
            <div>
                <h2 onClick={this.props.myAlert}>
                    {this.props.trademark}
                </h2>
                <input value={this.state.name} onChange={this.changed} type="text"/>
            </div>
        )
    }
}


export default Footer;