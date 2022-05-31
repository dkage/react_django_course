import React, { Component } from "react";
import { cxtConsumer as CxtConsumer } from "../index";


class Footer extends Component {

    state = {
        name: '',
        age: 35
    }

    changed = event => {
        this.setState({name: event.target.value})
        console.log(this.state.name);
    }

    componentDidMount() {
        this.setState({name: 'MyName test'})
    }

    render() {

        // const animals = ['cat', 'dog', 'horse', 'elephant'];


            // Conditionals testing class
        // return (
        //     <div>
        //
        //         <input value={this.state.name} onChange={this.changed} type="text"/>
        //
        //         { this.state.age === 35 ?
        //                 <h2 onClick={this.props.myAlert}>
        //                     {this.props.trademark}
        //                 </h2>
        //             : "No"}
        //
        //     </div>
        // )

        return (
                <CxtConsumer>
                    { (context) => (
                        context.animals.map( animal => {
                            return <h1 key={animal}>{animal}</h1>
                        })
                    )}
                </CxtConsumer>
        )
    }
}


export default Footer;