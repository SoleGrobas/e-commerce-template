import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const endpoint = 'http://127.0.0.1:8000/api/category/'

const EditCategory = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {name: name, description: description})
        navigate('/categories')
    }

    useEffect( () =>{
        const getProductById = async () => {
        const response = await axios.get(`${endpoint}${id}`)
        setName(response.data.name)
        setDescription(response.data.description)
        }
        getProductById()
    }, [])

    return (
        <div>
        
        <form id="create_product" onSubmit={update}>
            <h3>Edit Category</h3>
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
            <button type='submit' id="buttonStore" className='btn btn-outline-success'>Update</button>
        </form>
        
            
    </div>
    )
}

export default EditCategory;