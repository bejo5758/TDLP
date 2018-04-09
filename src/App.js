import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import List from './List'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: [],
            isOn: true
        };
        }

        toggle = () => {
        this.setState ({isOn: !this.state.isOn})
        }

           onChange = (event) => {
               this.setState ({term:event.target.value});
           }

            onSubmit = (event) => {
               event.preventDefault();
                this.setState({
                    term:'',
                    items:[...this.state.items, this.state.term]
                });
            }

            render(){
                return (
                    <div className ="App">
                        <div className = "App-header">
                            <img src = {logo} className="App-logo" alt="logo"/>
                            <h2> Welcome to React </h2>
                            <MyComponent name = "Lala"/>
                        </div>

                        <p className ="App-intro"> blablabla </p>

                        <button onClick = {this.toggle}>
                            {this.state.isOn ? 'on' : 'off'}
                        </button>

                        <h3 className="App-box"> To Do List </h3>

                    <form className="App-box" onSubmit={this.onSubmit}>
                        <input value = {this.state.term} onChange = {this.onChange}/>
                        <button className="App-box"> Submit </button>
                    </form>

                    <List className= "App-list" items={this.state.items} />

                </div>
            );
    }
}