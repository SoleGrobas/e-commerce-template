import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const endpoint = 'http://127.0.0.1:8000/api'

const ShowProducts = () => {
    const [ products, setProducts ] = useState([])
    useEffect ( ()=> {
        getAllProducts()
    }, [])

    const getAllProducts = async() =>{
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
        console.log(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()

    }
  return (
    <div>
      <div className='d-grid gap-2'>
        <Link to="/create" className='btn btn-outline-success btn-lg mt-2 mb-2'>Create Product</Link>
      </div>

      <table className='table table-hover'>
        <thead className='bg-pimary text-white'>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
                <th>discount</th>
                <th>stock</th>
                <th>image</th>
                <th>size</th>
                <th></th>
            </tr>

        </thead>
        <tbody>
           {products.map((product)=>(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.discount}</td>
                <td>{product.stock}</td>
                <td>{product.image}</td>
                <td>{product.size}</td>
                <td>
                    <Link to={`/edit/${product.id}`} className='btn btn-outline-secondary btn-sm'>Edit</Link>
                    <button onClick={ ()=>deleteProduct(product.id)} className='btn btn-outline-danger btn-sm'>Delete</button>
                </td>
            </tr>
           ))} 
        </tbody>
      </table>
    </div>
  )
}

export default ShowProducts;
