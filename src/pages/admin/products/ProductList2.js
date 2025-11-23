import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export function ProductList2() {

    const [products, setProducts] = useState([])

    function getProducts(){
        fetch("http://localhost:4000/products")
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw new Error()
        })
        .then(data => {
            setProducts(data)
        })
        .catch(error => {
            alert("unable to get the data")
        })
    }

         useEffect(getProducts, [])
    return (
        <div className="container my-4">
            <h2 className="text-center md-4">Prosucts</h2>

            <div className="row md-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/admin/products/create" role="button">Create Product</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={ getProducts} >Refresh</button>
                </div>
                <div className="col">

                </div>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            products.map((product, index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}$</td>
                                        <td>{product.category}</td>
                                        <td><img src={product.image} alt={product.name} width={60} height={60} /></td>
                                        <td></td>
                                        <td>{product.description}</td>
                                        <td style={{width: "10px", whiteSpace:"nowrap "}}>
                                            <Link className="btn btn-primary btn-sm me-1" to={"/admin/products/edit/" + product.id}>Edit</Link>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}