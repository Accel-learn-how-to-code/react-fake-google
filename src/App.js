import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // constructor(){
  //   super();
  //   this.
  // }
  thisRef = React.createRef();
  componentDidMount() {
    this.thisRef.current.focus();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 class="title">Google</h1>
          <input
            class="searchBar"
            placeholder="Type something...."
            ref={this.thisRef}
          />
        </div>
      </div>
    );
  }
}

export default App;
