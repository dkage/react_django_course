import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';


function createAlert() {
    alert('Test alert');
}

function ShowMessage () {
    return <h2>Message test from function</h2>
}


function App() {

    return (
        <div className="App">
            <Header info={'Header receiving parameter props'} number_test={6}/>

            <p>main</p>

            <Footer myAlert={createAlert} trademark={'copyright'}/>

            <ShowMessage toShow={true}/>
        </div>
    );

}

export default App;
