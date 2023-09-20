import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const endpoint = 'http://127.0.0.1:8000/api'

const ShowOrders = () => {
    const [ orders, SetOrders ] = useState([])
    useEffect ( ()=> {
        getAllOrders()
    }, [])

    const getAllOrders = async() =>{
        const response = await axios.get(`${endpoint}/orders`)
     SetOrders(response.data)
        console.log(response.data)
    }

    const deleteOrder = async (id) => {
        await axios.delete(`${endpoint}/order/${id}`)
        getAllOrders()

    }
  return (
    <div>
      <div className='d-grid gap-2'>
        <Link to="/order" className='btn btn-outline-success btn-lg mt-2 mb-2'>Create Order</Link>
      </div>

      <table className='table table-hover'>
        <thead className='bg-pimary text-white'>
            <tr>
                <th>id</th>
                <th>User_id</th>
                <th>Total Ammount</th>
                <th>Shipping Address</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Delivery</th>
                <th>Comments</th>
                <th></th>
            </tr>

        </thead>
        <tbody>
           {orders.map((order)=>(
            <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user_id}</td>
                <td>{order.total_ammount}</td>
                <td>{order.shipping_address}</td>
                <td>{order.order_status}</td>
                <td>{order.payment}</td>
                <td>{order.delivery}</td>
                <td>{order.comments}</td>
                <td>
                    <Link to={`/order/edit/${order.id}`} className='btn btn-outline-secondary btn-sm'>Edit</Link>
                    <button onClick={ ()=>deleteOrder(order.id)} className='btn btn-outline-danger btn-sm'>Delete</button>
                </td>
            </tr>
           ))} 
        </tbody>
      </table>
    </div>
  )
}

export default ShowOrders;
