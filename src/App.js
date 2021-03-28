import './App.css';
import React, { Component } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import MainContent from './component/MainContent';
import Footer from './component/Footer';
import LoginForm from './component/LoginForm'
import StudentForm from './component/StudentForm'
// import Test from './component/test'
class App extends Component {
    render() {
        return ( 
            <div className = "App" >
            <Header/>
            <Content/>
            <MainContent/>
            <StudentForm/>
            <Footer/>
            </div>
        );
    }
}


export default App;