import React, { useState } from 'react';

function FileUpload() {
    const [selectedFiles, setSeleectedFiles] = useState([]);
    const [content, setContent] = useState('');
    const [ isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFiles(e.target.files[0]);

    }
     const handleSubmit  = () => {
        if(!selectedFiles){
            alert("Please select a file before submitting");
            return;
        }
        const reader = new FileReader();

        reader.onload = (e) => {
            setContent(event.target.result);
        }
        reader.readAsText(selectedFiles);
     }
    
    function onHover(event){
        event.preventDefault();
        setIsDragging(true);
    }
    function onLeave(event){
        event.preventDefault();
        setIsDragging(false);
    }
    function onDrop(e){
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
            setSelectedFiles(files[0]);
    }


       return (
        <div>
            <p>Drag and drop a file here or click to select a file</p>
            <div style={{marginBottom: "20px",border:"2px dashed #ccc",padding: "20px",textAlign: "center",backgroundColor: isDragging ? "#f0f0f0" : "#fff"}}
            onDragOver={onHover}
            onDragLeave={onLeave}
            onDrop={onDrop}
            >
                <h1>File Upload</h1>


                <input type="file" onChange={handleFileChange} />
                            </div>

                <button onClick={handleSubmit}>Submit</button>

                <div style={{border: "1px solid #ccc", padding: "10px", marginTop: "20px"}}>
                    <p>File Content:</p>
                    <pre>{content}</pre>
                </div>
            </div>
           
       )








    };
    export default FileUpload;