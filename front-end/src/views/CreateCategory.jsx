import React, {useState} from 'react';
import './createProduct.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api/category'

const CreateCategory = () => {
   
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    
    const navigate = useNavigate()
    
    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name: name, description: description})
        navigate('/categories')
    }
  return (
    <div>
        
        <form id="create_product" onSubmit={store}>
            <h3>Create Category</h3>
            <div className="container">
                <div className="mb">
                    <label className="form-label">Name</label>
                    <input value={name} onChange={ (e)=> setName(e.target.value)} type='text' className="form-control"></input>
                </div>
                <div className="mb">
                    <label className="form-label">Description</label>
                    <input value={description} onChange={ (e)=> setDescription(e.target.value)} type='text' className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                </div>
                
            </div>
            <button type='submit' id="buttonStore" className='btn btn-outline-success'>Store</button>
        </form>
           
    </div>
    
  )
}

export default CreateCategory;