
import React, { useState } from 'react';

function UploadProfileImage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:8080/api/students/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
     <div className="upload-container">
        {preview && <img src={preview} alt="Preview" />}
    <input type="file" accept="image/*" onChange={handleFileChange} />
    <button  className='btn-upload' onClick={handleUpload}>Upload</button>
    
  </div>
  
  );
}

export default UploadProfileImage;
