import React from 'react';
import Card from './Card';
import CardList from './CardList';
// import robots from './data';
import SearchBox from './SearchBox';



// function App() {
//   return (
//     <div className="tc">
//       <h1>RoboProject</h1>
//       <CardList robots={robots}/>
//     </div>
//   );
// }

//method 1

//method 2

//method 3

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // robots : robots,
      robots: [],
      searchField: '',
    }

    console.log('Constructor is running...')
  }


  // onInputChange = async(val) => {
  // await this.setState({searchField : val})
  // console.log(this.state.searchField);
  // }

  // 54 < 65 < 78
  // 65 > 45 > 34

  // static getDerivedStateFromProps(){
  //   console.log("getDerivedStateFromProps is running..")
  // }

  componentDidMount = () => {
    console.log("Component did mount is running...")
    // await this.setState({robots : robots})
    console.log("Component Did Mount is running");
    fetch('https://api.npoint.io/20c1afef1661881ddc9c')
      .then(response => response.json())
      .then(users => {
        console.log(users);
        console.log(users.playerList[0].Id);
        this.setState({ robots: users })
      })
  }


  render() {

    return(
      <div className="tc">
  <h1>RoboProject</h1>
  <SearchBox onInputChange={this.onInputChange}/> 
  {/* <CardList/> robots={filteredRobots}*/}
  {/* <img src=`../src/player-images${users.playerList[0].Id}.jpg`  alt="images" /> */}

  {
    this.state.robots.map((item)=>{
    return(
      <p>{item.playerList[0].Id}</p>
    )
    })
  }
  
</div>
      )




    // console.log('Render is running...');
    // 
    // const {robots, searchField} = this.state;
    // 
    // const filteredRobots = robots.filter((robot) => {
    // return robot.name.toLowerCase().includes(searchField.toLowerCase())
    // })
    // 
    // if (!robots.length) {    // robots.length === 0  means we want to run
    // return <h1>Loading....</h1>
    // }

    
    }
  }
     

 
