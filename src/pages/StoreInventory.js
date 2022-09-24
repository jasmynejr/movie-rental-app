import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useState,useEffect} from "react"
import Movie from "../components/Movie"
function StoreInventory(){
    let {storeId} = useParams()
    const [storeInventory,setStoreInventory] = useState([])
    let inventoryMap = new Map()
    const [loading,setLoading] = useState(false)
    const getStoreInventory = () => {
        setLoading(true)
        axios.get(`http://localhost:8080/api/stores/${storeId}/inventory`)
        .then(function(response){
            let fullInventory = response.data
            for(let i = 0; i< fullInventory.length;i++){
                if(inventoryMap.has(fullInventory[i].film)){
                    console.log("has film")
                    let count = inventoryMap.get(fullInventory[i].film)
                    inventoryMap.set(fullInventory[i].film,count++)
                    
                }
                else {
                    inventoryMap.set(fullInventory[i].film,1)
                }
            }
            console.log(inventoryMap)
            setStoreInventory(response.data)
        })
        .catch((err) => console.log(err))
        setLoading(false)
    }

    useEffect(() => {
        getStoreInventory()
    },[])

    return (
        <div class="store-inventory">
            
        </div>
    )
}

export default StoreInventory;