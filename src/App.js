import { useState } from "react";
import "./App.css";
import Shapes from "./Shapes";

var nextId = 0;
function App() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  function addArtist() {
    // setArtists([
    //   ...artists,
    //   {
    //     id: ++nextId,
    //     name: name,
    //   },
    // ]);


    setArtists([
      {
        id: ++nextId,
        name: name,
      },
      ...artists
    ]);

    setName("");

  }

  function removeItem(a){
    setArtists(artists.filter(artist=>artist.id!==a.id));
  }


  return (
    <div className="App">
      {/* <h1>Our Artists</h1>
      <section>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={addArtist}>Add</button>
      </section>

      <ul>
        {artists.map((a) => 
        (  <li key={a.id}>
            <span>
              <b>{a.id}</b>
            </span>
            : {a.name}
            <button onClick={(f)=>{
              removeItem(a);
            }}>Delete</button>
          </li> )
        )}
      </ul> */}


      <Shapes></Shapes>
    </div>
  );
}

export default App;
