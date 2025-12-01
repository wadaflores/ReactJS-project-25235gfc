import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import Swal from 'sweetalert2'

const API_URL="https://68fffe00e02b16d1753fd185.mockapi.io/Products";


const CRUDproducts = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate:"",
      count: "",
    },
    stock: "",
  });

  const [editId, setEditId] = useState(null);

//fetch --> get products
  const getProducts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error getting products:", error));
  };

//close modal 
  const handleClose = () => {
    setShow(false);
    setForm({ title: "", price: "", description: "", category: "", image: "", stock: "", });
    setEditId(null);
  };

//open modal
  const handleShow = (product) => {
    setShow(true);
    if (product) {
      setForm({
        ...product,
      });
      setEditId(product.id);
    }
  };

//create or edit
  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...form,
      price: Math.max(0, Number(form.price)),
      stock: Math.max(0, Number(form.stock)),
    };

    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
    .then((res) => {
      if (!res.ok) throw new Error("Error saving product");
      return res.json();
    })
    .then(() => {
      handleClose();
      getProducts();
      {editId ? 
        Swal.fire({
          position: "top",
          width: "450",
          icon: "success",
          title: "Product edited!",
          showConfirmButton: false,
          timer: 1000
        }) : Swal.fire({
              position: "top",
              width: "450",
              icon: "success",
              title: "Product added!",
              showConfirmButton: false,
              timer: 1000
            })
      } 
    })
    .catch((error) => console.error("Error:", error));
  };

//Delete:
  const deleteProduct = (product) => {
    Swal.fire({
      position: "top",
      title: `Are you sure you want to delete "${product.title}"?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#78c2ad",
      cancelButtonColor: "#777",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_URL}/${product.id}`, { method: "DELETE" })
          .then((res) => {
            if (!res.ok) throw new Error("Error deleting product");
            getProducts();
          })
          .then(() => {
            Swal.fire({
              position: "top",
              title: "Deleted!",
              text: `"${product.title}" has been deleted.`,
              icon: "error",
              timer: 1500,
              showConfirmButton: false
            });
          })
          .catch((error) => console.error("Error:", error));
      }
    });
   // if (!window.confirm("Do you want to delete this product?")) return; 
  };

//load products
  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div className="container mt-4">
      <h2>Products CRUD</h2>
      <p>Disclaimer: To preserve the look and feel, CRUD will only reflect on "Must have" products at /home page.</p>
      <Button className="mb-3" onClick={() => handleShow()}>
        Add Product
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td>{prod.description}</td>
              <td>{prod.category}</td>
              <td>${Number(prod.price).toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
                {prod.image?.startsWith("http") ? (
                  <img
                    src={prod.image}
                    alt={prod.title}
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span>{prod.image}</span>
                )}
              </td>
              <td>
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => handleShow(prod)}
                >
                  Edit
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteProduct(prod)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal to add / edit */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Edit" : "Add"} Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                min="0"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Image (URL)</Form.Label>
              <Form.Control
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-2">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CRUDproducts;