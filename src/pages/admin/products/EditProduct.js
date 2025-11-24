import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {

    const params = useParams();
    const [initialData, setInitialData] = useState(null);
    const navigate = useNavigate();

    function getProduct() {
        fetch("http://localhost:4000/products/" + params.id)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error();
            })
            .then(data => {
                setInitialData(data);
            })
            .catch(error => {
                alert("Unable to read the product details");
            });
    }

    useEffect(getProduct, []);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const product = Object.fromEntries(formData.entries());

        if (!product.name || !product.price || !product.category || !product.description) {
            alert("Please fill all the fields");
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/products/${params.id}`, {
                method: "PATCH",
                body: formData
            });

            if (response.ok) {
                navigate("/admin/products");
            }
            else if (response.status === 400) {
                alert("Validation error");
            }
            else {
                alert("Unable to update the product!");
            }
        }
        catch (error) {
            alert("Unable to connect to the server!");
        }
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5">Edit Product</h2>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">ID</label>
                        <div className="col-sm-8">
                            <input
                                readOnly
                                className="form-control-plaintext"
                                defaultValue={params.id}
                            />
                        </div>
                    </div>

                    {
                        initialData &&
                        <form onSubmit={handleSubmit}>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        defaultValue={initialData.name}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Price</label>
                                <div className="col-sm-8">
                                    <input type="number" className="form-control" name="price" step="0.01" min="1" defaultValue={initialData.price}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Category</label>
                                <div className="col-sm-8">
                                    <select className="form-select" name="category" defaultValue={initialData.category}>
                                        <option value="Other">Other</option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Wearable">Wearable</option>
                                        <option value="Television">Television</option>
                                        <option value="Camera">Camera</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Headphones">Headphones</option>
                                        <option value="Earbuds">Earbuds</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="offset-sm-4 col-sm-8">
                                    <img
                                        src={`http://localhost:4000/images/${initialData.image}`}
                                        width="150"
                                        alt="..."
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Image</label>
                                <div className="col-sm-8">
                                    <input type="file" className="form-control" name="image" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Created At</label>
                                <div className="col-sm-8">
                                    <input
                                        readOnly
                                        className="form-control-plaintext"
                                        defaultValue={initialData.createdAt || ""}
                                    />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        rows="4"
                                        defaultValue={initialData.description}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="offset-sm-4 col-sm-4 d-grid">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                <div className="col-sm-4 d-grid">
                                    <Link className="btn btn-secondary" to="/admin/products" role="button">
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    );
}
