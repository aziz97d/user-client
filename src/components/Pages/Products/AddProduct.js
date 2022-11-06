import axios from "axios";
import React, { useEffect, useState } from "react";

const AddProduct = () => {

  const [brands, setBrands] = useState(Array);
  const [categories, setCategories] = useState(Array);
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios("https://localhost:7777/api/Brand", {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        }).then((data) => setBrands(data.data));
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios("https://localhost:7777/api/Category", {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        }).then((data) => setCategories(data.data));
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, [])

  return (
    <div className="col-md-12 d-flex justify-content-center mt-3">
      <form class="row g-3 col-md-8">
        <h3>Add Product</h3>
        <div class="col-md-12">
          <label for="productName" class="form-label">
            Name
          </label>
          <input value={productName} class="form-control" id="productName" />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Category
          </label>
          <select id="categoryId" class="form-select">
            <option selected>Choose...</option>
            {
              categories.map(b=>(<option value={b.categoryId}>{b.name}</option>))
            }
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Brand
          </label>
          <select id="brandId" class="form-select">
          <option selected>Choose...</option>
            {
              brands.map(b=>(<option value={b.brandId}>{b.name}</option>))
            }
          </select>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Code
          </label>
          <input
            type="text"
            class="form-control"
            id="productCode"
            value={productCode}
          />
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Image
          </label>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
           
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-success">
           Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
