import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // robots : robots,
      robots: [],
      searchField: "",
    };

    console.log("Constructor is running...");
  }

  onInputChange = async (val) => {
    await this.setState({ searchField: val });
    console.log(this.state.searchField);
  };

  componentDidMount = () => {
    // console.log("Component did mount is running...")
    // await this.setState({robots : robots})
    console.log("Component Did Mount is running");
    fetch("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((response) => response.json())
      .then((users) => {
        // console.log(users.playerList[0].Id);
        this.setState({ robots: users.playerList });
      });
  };

  render() {
    console.log("Render is running...");

    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return (
        robot.PFName.toLowerCase().includes(searchField.toLowerCase()) ||
        robot.TName.toLowerCase().includes(searchField.toLowerCase()) ||
        robot.SkillDesc.toLowerCase().includes(searchField.toLowerCase())
      );
    });

    if (!robots.length) {
      // robots.length === 0  means we want to run
      return <h1>Loading....</h1>;
    }

    return (
      <div className="tc">
        <h1>Player List</h1>
        <SearchBox onInputChange={this.onInputChange} />

        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
