import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserFile = () => {
  const { userId } = useParams();
  const [selectedFile, setSelectedFile] = useState();
  const [files, setFiles] = useState(Array);
  const [fileType, setFileType] = useState("");

  const [isRender, setIsRender] = useState(false)
  useEffect(() => {
    axios.get('https://localhost:7777/api/UserFile/' + userId)
      .then(res => setFiles(res.data))
  }, [isRender])



  const saveFileAndGetFileName = async (callback) =>{
    const formData = new FormData();
    formData.append('file', selectedFile)
    
    const result = await axios.post("https://localhost:7777/api/UserFile/FileUpload", formData);

      setSelectedFile("")

    callback(result.data)
  }

  const saveFileData = async (fileNameAfterUpload) =>{
    
    await axios.post("https://localhost:7777/api/UserFile/", {
      "Type": fileType,
      "Name": fileNameAfterUpload,
      "UserId": userId
    }).then((res) => {
      const data = res.data;
      setIsRender(!isRender)
      console.log(data)
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      saveFileAndGetFileName(saveFileData);
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async (userFileId) => {

    console.log(userFileId)
    try {
      await axios.delete("https://localhost:7777/api/userfile/" + userFileId)
      setIsRender(!isRender)
    } catch (error) {
      console.log(error)
    }
    
    // setCategories(
    //   categories.filter(a => a.categoryId !== categoryId)
    // );

  }

  const saveFile = (e) => {  
    setSelectedFile(e.target.files[0])
  }



  return (
    <div className="col-md-12 flex-column d-flex align-items-center">

      <form class="row g-3 col-md-8" onSubmit={handleSubmit}>
        <h3>Files</h3>
        <div class="col-md-12">
          <label for="type" class="form-label">
            Type
          </label>

          <input value={fileType}
            onChange={(e) => setFileType(e.target.value)} class="form-control" id="name" />
        </div>
        <div class="col-md-12">
          <label for="userFile" class="form-label">
            File
          </label>

          <input type="file"
            onChange={saveFile} class="form-control" id="userFile" />
        </div>

        <div class="col-12 m-3">
          <button type="submit" class="btn btn-success">
            <i class="bi bi-plus-square pe-2"></i>
            Add File
          </button>
        </div>
      </form>
      <div className="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              files.map((a) =>
                (
                  <tr>
                    <td>{a.type}</td>
                    <td><a href={"https://localhost:7777/api/UserFile/FileRead?name="+a.name} >Download</a></td>
                    {/* <td><Link to={"/fileViewer/"+a.name}  >View</Link></td> */}
                    <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(a.userFileId)}><i class="bi bi-trash"></i> Delete</button></td>
                  </tr>
                )
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFile;

