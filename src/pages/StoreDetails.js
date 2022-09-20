
import {useParams} from 'react-router-dom'
function StoreDetails(){
    let {storeId} = useParams()
    return (
        <div>
            <h1>Store # {storeId}</h1>
        </div>
    )
}

export default StoreDetails;