import React from "react";


function Header(props) {

    // return (
    //     <div>
    //         <h1>Info: {props.info}</h1>
    //         <h2>Number passed: {props.number_test}</h2>
    //     </div>
    // )
    return (
        <React.Fragment>
            <h1>Info: {props.info}</h1>
            <h2>Number passed: {props.number_test}</h2>
        </React.Fragment>
    )
}

export default Header;