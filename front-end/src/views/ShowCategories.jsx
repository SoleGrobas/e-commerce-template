import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const endpoint = 'http://127.0.0.1:8000/api'

const ShowCategories = () => {
    const [ categories, setCategories ] = useState([])
    useEffect ( ()=> {
        getAllCategories()
    }, [])

    const getAllCategories = async() =>{
        const response = await axios.get(`${endpoint}/categories`)
        setCategories(response.data)
        console.log(response.data)
    }

    const deleteCategory = async (id) => {
        await axios.delete(`${endpoint}/category/${id}`)
        getAllCategories()

    }
  return (
    <div>
      <div className='d-grid gap-2'>
        <Link to="/category" className='btn btn-outline-success btn-lg mt-2 mb-2'>Create Category</Link>
      </div>

      <table className='table table-hover'>
        <thead className='bg-pimary text-white'>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>description</th>
                <th></th>
            </tr>

        </thead>
        <tbody>
           {categories.map((category)=>(
            <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                    <Link to={`/category/${category.id}`} className='btn btn-outline-secondary btn-sm'>Edit</Link>
                    <button onClick={ ()=>deleteCategory(category.id)} className='btn btn-outline-danger btn-sm'>Delete</button>
                </td>
            </tr>
           ))} 
        </tbody>
      </table>
    </div>
  )
}
export default ShowCategories;