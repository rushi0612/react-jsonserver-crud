import { use } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateProduct() {

    const navigate = useNavigate()

    async function handelSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const product = Object.fromEntries(formData.entries())
        
        if (!product.name  || !product.price || !product.category || !product.description || !product.image.name) {
            alert("Please fill all the fields")
            return
        }
        try{
            const response = await fetch("http://localhost:4000/products", {
                method:"POST",
                body: formData
        })
        const data = await response.json()
        if (response.ok){
            navigate("/admin/products")
        }
        else if(response.status === 400){
            alert("Validation error")
        }
        else{
            alert("Unable to create the product!")
        }
    }
    catch(error){
        alert("Unable to connect to the server!")

    }
}
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5">Create Product</h2>

                    <form onSubmit={handelSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="name" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Price</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control" name="price" step="0.01" min="1" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Category</label>
                            <div className="col-sm-8">
                                <select className="form-select" name="category">
                                    <option value="Other">Other</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Wearable">Wearable</option>
                                    <option value="Television">Television</option>
                                    <option value="Camera">Camera</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Headphones">Headphones</option>
                                    <option value="Earbuds">Earbuds</option>
                                </select>
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Image</label>
                            <div className="col-sm-8">
                                <input type="file" className="form-control" name="image" />
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <label className="col-sm-4 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" rows="4"></textarea>
                                <span className="text-danger"></span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to="/admin/products" role="button">Cancel</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
