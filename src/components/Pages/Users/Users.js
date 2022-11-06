import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [users, setUsers] = useState(Array);
  const [userName, setUserName] = useState("");
  const [isRender, setIsRender] = useState(false)
  const baseURL = "https://localhost:7777/api/";


  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios("https://localhost:7777/api/Users", {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        }).then((data) => setUsers(data.data));
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, [isRender])

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post("https://localhost:7777/api/Users", {
        "name": userName
      }).then((res) => {
        const data = res.data;
        setUsers([...users, data])
        setUserName("")
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {

    try {
      await axios.delete("https://localhost:7777/api/Users/" + id)
    } catch (error) {
      console.log(error)
    }

    setUsers(
      users.filter(a => a.userId !== id)
    );

  }

  return (
    <div className="col-md-12 flex-column d-flex align-items-center">

      <form class="row g-3 col-md-6" onSubmit={handleSubmit}>
        <h3>Brand</h3>
        <div class="col-md-12">
          <label for="userName" class="form-label">
            Name
          </label>

          <input value={userName}
            onChange={(e) => setUserName(e.target.value)} class="form-control" id="userName" />
        </div>

        <div class="col-12 m-3">
          <button type="submit" class="btn btn-success">
            <i class="bi bi-plus-square pe-2"></i>
            Add User
          </button>
        </div>
      </form>
      <div className="col-md-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((b) => (<tr>

                <td>{b.name}</td>

                <td>
                  <Link className="btn btn-info btn-sm me-1" to={`/UserFile/${b.userId}`} ><i class="bi bi-pencil-square"></i> Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(b.userId)}><i class="bi bi-trash"></i> Delete</button>
                </td>

              </tr>))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
