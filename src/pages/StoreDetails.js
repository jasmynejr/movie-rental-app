import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useState,useEffect} from "react"
function StoreDetails(){
    let {storeId} = useParams()
    const [store,setStore] = useState({
        manager:{email:""}
    })
    const [storeInventory,setStoreInventory] = useState([])
    const [loading,setLoading] = useState(false)
    const getStore = () => {
        setLoading(true)
        axios.get(`http://localhost:8080/api/stores/${storeId}`)
        .then(function(response){
            
            console.log(response.data)
            setStore(response.data)
            
        })
        .catch((err)=>console.log(err))
        setLoading(false)
    }

    const getStoreInventory = () => {
        setLoading(true)
        axios.get(`http://localhost:8080/api/stores/${storeId}/inventory`)
        .then(function(response){
            setStoreInventory(response.data)
        })
        .catch((err) => console.log(err))
        setLoading(false)
    }

    useEffect(() => {
        getStore()
        getStoreInventory()
    },[])

    if(loading){
        return (
            <h3>loading...</h3>
        )
    }
    return (
        <div>
          
            <h1>Store # {storeId}</h1>
            <h2>Manager: {store.manager.email}</h2>

            <h4>Current Inventory ({storeInventory.length})</h4>
        </div>
    )
}

export default StoreDetails;