import "./sass/customers.scss"
function Customer({customer}){
    return (
        <div className="customer">
            <h3 className="customer-name">{customer.firstName} {customer.lastName}</h3>
            <h4 className="customer-email">{customer.email}</h4>
        </div>
    )
}

export default Customer;