import "./App.css";
import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
    };
  }

  clickHandler = () => {
    console.log("click");
  };

  render() {
    const { firstname, lastName, age } = this.props;
    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt-2">
          Hello {firstname} {lastName} {age}
        </div>
        <div>
          <button onClick={this.clickHandler} className="btn btn-primary">
            Click
          </button>
        </div>
        <div>
          <p className="text-center">{this.state.counter}</p>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Hello firstname="Aziz" lastName="Kuchkarov" age={25} />
      <Hello firstname="Aziz" lastName="Kuchkarov" age={35} />
    </div>
  );
}

export default App;
