////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - Render a tab for each country with its name in the tab
// - When you click on a tab, make it appear to be active while the others
//   appear inactive
// - Render the correct content for the selected tab in the panel
//
// Got extra time?
//
// - Make <Tabs> generic so that it doesn't know anything about
//   country data (Hint: good propTypes help)
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

const styles = {};

styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
};

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: "#000"
};

styles.panel = {
  padding: 10
};

const Tab = (props) => {

  return (
    <div className="Tab" style={props.style} onClick={props.onClick}>
        {props.title}
    </div>
  )
}

class Tabs extends React.Component {
  state = {
    activeIndex: 0
  }

  selectIndex = index => {
    this.setState({activeIndex: index})
  }

  render() {
    // Array of countries
    const data = this.props.data;
    const activeIndex = this.state.activeIndex;

    return (
      <div className="Tabs">
        {data.map((country, index) => (
          <Tab className="Tab" 
            style={
              activeIndex === index ? styles.activeTab : styles.tab
            }
            onClick={() => this.selectIndex(index)}
            title={country.name}
        />
        ))}
       
        <div className="TabPanel" style={styles.panel}>
          <p>{data[activeIndex].description}</p>
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Countries</h1>
        <Tabs data={this.props.countries} />
      </div>
    );
  }
}

const DATA = [
  {
    id: 1,
    name: "USA",
    description: "Land of the Free, Home of the brave"
  },
  {
    id: 2,
    name: "Brazil",
    description: "Sunshine, beaches, and Carnival"
  },
  { id: 3, name: "Russia", description: "World Cup 2018!" }
];

ReactDOM.render(
  <App countries={DATA} />,
  document.getElementById("app"),
  function() {
    require("./tests").run(this);
  }
);

