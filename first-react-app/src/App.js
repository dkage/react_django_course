import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Numbers from "./components/numbers";
import './App.css';
import styled from 'styled-components';


function createAlert() {
    alert('Test alert');
}

function ShowMessage (props) {
    if (props.toShow) {
        return <h2>Message test from function - props=true</h2>
    }
    else {
        return <h2>no message</h2>
    }
}

const pStyle = {
    fontSize: '2em',
    color: 'red'
}

const ParagraphStyled = styled.p`
    font-size: 4em;
    color: blue;
`;


function App() {

    return (
        <div className="App">
            {/*<Header info={'Header receiving parameter props'} number_test={6}/>*/}

            {/*<p style={pStyle}>Main</p>*/}
            {/*<p style={{color: 'green', backgroundColor: "red"}}>Second</p>*/}
            {/*<ParagraphStyled>Third</ParagraphStyled>*/}

            {/*<Footer myAlert={createAlert} trademark={'copyright'}/>*/}

            {/*<ShowMessage toShow={true}/>*/}

            <Numbers/>
        </div>
    );

}

export default App;
