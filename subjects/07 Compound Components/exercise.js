////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// Implement a radio group form control with the API found in <App>.
//
// - Clicking a <RadioOption> should update the value of <RadioGroup>
// - The selected <RadioOption> should pass the correct value to its <RadioIcon>
// - The `defaultValue` should be set on first render
//
// Hints to get started:
//
// - <RadioGroup> will need some state
// - It then needs to pass that state to the <RadioOption>s so they know
//   whether or not they are active
//
// Got extra time?
//
// - Implement an `onChange` prop that communicates the <RadioGroup>'s state
//   back to the parent so it can use it to render.
// - Implement keyboard controls on the <RadioGroup> (you'll need tabIndex="0" on
//   the <RadioOption>s so the keyboard will work)
//   - Enter and space bar should select the option
//   - Arrow right, arrow down should select the next option
//   - Arrow left, arrow up should select the previous option
////////////////////////////////////////////////////////////////////////////////
/*
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class RadioGroup extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string
    onChange: PropTypes.func
  };

  state = {
    value: this.props.defaultValue
  }

  _setActiveState(index) {
    this.setState({
       value
    }, () -> {
      if (this.props.onChange) {
        this.props.onChange(this.state.value)
      }
    })
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
          _isSelected: this.state.value === child.props.value,
          _onSelect: () => this.setState({ value: child.props.value })
        });
    })

    return <div>{children}</div>;
  }
}

class RadioOption extends React.Component {
  static propTypes = {
    _isSelected: PropTypes.bool.isRequired,
    value: PropTypes.string
  };

  render() {
     console.log(this.props._activeIndex);

    return (
      <div onClick={this.props._onSelect}>
        <RadioIcon 
          isSelected={this.props._isSelected} />{" "}
          {this.props.children}
      </div>
    );
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div
        style={{
          borderColor: "#ccc",
          borderWidth: 3,
          borderStyle: this.props.isSelected ? "inset" : "outset",
          height: 16,
          width: 16,
          display: "inline-block",
          cursor: "pointer",
          background: this.props.isSelected ? "rgba(0, 0, 0, 0.05)" : ""
        }}
      />
    );
  }
}

class App extends React.Component {
  state = { radioVlue: "fm" };


  render() {
    return (
      <div>
        <h1>♬ It's about time that we all turned off the{" "}{this.state.radioValue} ♫</h1>

        <RadioGroup 
          defaultValue={this.state.radioValue"
          onChange={value: >
          <RadioOption value="am">AM</RadioOption>
          <RadioOption value="fm">FM</RadioOption>
          <RadioOption value="tape">Tape</RadioOption>
          <RadioOption value="aux">Aux</RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));*/
