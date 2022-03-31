import React from 'react';
// import CardList from './CardList';
// import robots from './data';
// import SearchBox from './SearchBox';
// import photo from "../src/player-images"
// F:/Sportz-Interactive_-By-Anand/sport/src/player-images
// import photo from "./images/1.jpg";





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

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      // robots : robots,
      robots : [],
      searchField : '',
      // const [data,setsatat]
    }

    console.log('Constructor is running...')
  }
  

  onInputChange = async(val) => {
      await this.setState({searchField : val})
      console.log(this.state.searchField);
  }

  // 54 < 65 < 78
  // 65 > 45 > 34

  // static getDerivedStateFromProps(){
  //   console.log("getDerivedStateFromProps is running..")
  // }

  componentDidMount = () => {
    // console.log("Component did mount is running...")
    // await this.setState({robots : robots})
    console.log("Component Did Mount is running");
    fetch('https://api.npoint.io/20c1afef1661881ddc9c')
        .then(response => response.json())
        .then(users => {
          console.log(users.playerList);
          this.setState({robots : users})
        })
  }


  render(){

// 
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
     
    return (
     
      this.users.map((img)=>{
        <div>{img.teamList.TID}</div>
      })   
    );
  }
}

// class compoenntName extends React.Component{
//   render(){
//     return (

//     )
//   }
// }


export default App;
