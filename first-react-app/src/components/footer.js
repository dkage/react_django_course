import React, { Component } from "react";


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

        const animals = ['cat', 'dog', 'horse', 'elephant'];


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
            <div>
                { animals.map(animal => {return <div id={animal} key={animal}>
                                                    <h2>{animal}</h2>
                                                </div>})}

            </div>
        )
    }
}


export default Footer;