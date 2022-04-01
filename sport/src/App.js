import { useEffect, useState } from "react";
import CardList from "./CardList";
// import CardList from "./CardList";
// import Card from "./Card";
import SearchBox from './SearchBox';
// import images from "../public/player-images/63706.jpg"

export default function App() {
  const [data, setdata] = useState([]);
  const onInputChange = ""
  console.log(data);

  // onInputChange = async(val) => {
    // await this.setState({searchField : val})
    // console.log(this.state.searchField);
            //  }  

  useEffect(() => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c").then((result) => {
      result.json().then((res) => {
        setdata(res.playerList);
      });
    });
  }, []);
  return (
    <>
    <div className="tc"  >
      <h1>PlayerList</h1>
<SearchBox onInputChange={onInputChange}/> 
  <CardList />
      <div className=" bg-washed-blue { background-color: var(--washed-blue); }  br3 pa3 ma3  bw3 shadow-5">

    {/* <Card data={data}/> */}
    {/* <img src={"../src/player-images/63706.jpg"} alt="profile_img_roboproject"/> */}


      {data.map((item) => {
        return (
          <>

      <img src={`./player-images/${item.Id}.jpg`} alt="profile_img_roboproject"/>
             <h3>{item.TName}</h3>
             <h3>{item.PFName}</h3>
            {/* <h1> {item.Id}</h1> */}
          </>
        );
      })}
       </div>
      </div>
    </>
  );
}
