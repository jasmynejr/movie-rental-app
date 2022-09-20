import './App.scss';
import {useState,useEffect} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
function App() {
  const [stores,setStores] = useState([])
  let nav = useNavigate()
  const getStores = () => {
    axios.get("http://localhost:8080/api/stores")
    .then(function(response){
      console.log(response.data)
      setStores(response.data)
    })
    .catch((err) => console.log(err))
  }

  useEffect(()=> {
    getStores();
  },[])
  return (
    <div className="App">
      <h1>movie rental store app</h1>
      {
        stores.map((store)=> {
          return (
            <div className="store-card" key={store.id} onClick={() => {nav(`/stores/${store.id}`)}}>
              <h3>Store # {store.id}</h3>
            </div>
          )
         

        })
      }
    </div>
  );
}

export default App;
