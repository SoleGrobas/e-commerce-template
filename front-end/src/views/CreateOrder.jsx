import React, {useState} from 'react';
import './createProduct.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api/order'

const CreateOrder = () => {
    const [user_id, setUser_id] = useState('')
    const [total_ammount, setTotal_ammount] = useState('')
    const [shipping_address, setShipping_address] = useState('')
    const [order_status, setOrder_status] = useState('')
    const [payment, setPayment] = useState('')
    const [delivery, setDelivery] = useState('')
    const [comments, setComments] = useState('')
    const navigate = useNavigate()
    
    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {user_id: user_id, total_ammount: total_ammount, shipping_address: shipping_address, order_status: order_status, payment: payment, delivery: delivery, comments: comments})
        navigate('/orders')
    }
  return (
    <div>
        
        <form id="create_product" onSubmit={store}>
           
            <h3>Create Order</h3>
            <div className="container">
                <div className="mb">
                    <label className="form-label">user_id</label>
                    <input value={user_id} onChange={ (e)=> setUser_id(e.target.value)}  className="form-control"></input>
                </div>
                <div className="mb">
                    <label className="form-label">total_ammount</label>
                    <input value={total_ammount} onChange={ (e)=> setTotal_ammount(e.target.value)} type='number' className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                </div>
                <div className="mb">
                    <label className="form-label">shipping_address</label>
                    <input value={shipping_address} onChange={ (e)=> setShipping_address(e.target.value)} type='text' className="form-control"/>
                </div>
                <div className="mb">
                <label className="form-label">Status</label>
                    <select className="form-select form-select-sm" value={order_status} onChange={ (e)=> setOrder_status(e.target.value)}>
            
                        <option selected>incomming</option>
                        <option value="incomming">incomming</option>
                        <option value="doing">doing</option>
                        <option value="ready">ready</option>
                        <option value="close">close</option>
                    </select>
                 
                </div>
                <div className="mb">
                    <label className="form-label">Payment</label>
                    <select className="form-select form-select-sm" value={payment} onChange={ (e)=> setPayment(e.target.value)}>
                        <option selected>Payment</option>
                        <option value="creditCard">CreditCard</option>
                        <option value="cash">Cash</option>
                    </select>
                 
                </div>
                <div className="mb">
                <label className="form-label">Delivery</label>
                    <select className="form-select form-select-sm" value={delivery} onChange={ (e)=> setDelivery(e.target.value)}>
                        <option selected>Delivery</option>
                        <option value="delivery">Delivery</option>
                        <option value="pickUp">PickUp</option>
                    </select>
                 
                </div>
                <div className="mb">
                    <label className="form-label">Comments</label>
                    <input  value={comments} onChange={ (e)=> setComments(e.target.value)} className="form-control form-control-sm" id="formFileSm" type="text"/>
                </div>
            </div>
            <button type='submit' id="buttonStore" className='btn btn-outline-success'>Store</button>
        </form>
        
            
    </div>
    
  )
}

export default CreateOrder;
