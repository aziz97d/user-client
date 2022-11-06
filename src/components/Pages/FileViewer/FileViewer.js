import axios from "axios";
import React, { useEffect, useState } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { useParams } from "react-router-dom";

const FileViewer = () => {
    const {fileName} = useParams();
    const [file,setFile] = useState();
    useEffect(()=>{
        axios.get("https://localhost:7777/api/UserFile/FileRead?name="+fileName)
        .then((res)=>setFile(res))
    })
    const docs = [
        { uri: file }
      ];
     
      return <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />;
};

export default FileViewer;