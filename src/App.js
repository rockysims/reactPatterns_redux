import React, { Component } from 'react';
import List from './List';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <h3>Items</h3>
          <List />
        </section>
      </div>
    );
  }
}
