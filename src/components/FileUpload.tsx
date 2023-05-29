import React, { ChangeEvent, useState } from 'react';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        console.log("tryblock1");
        const response = await fetch('http://10.247.102.169:8080/csm/license/api/v1/addlicense', {
          method: 'POST',
          body: formData,
          credentials:'include',
          headers: {
            'Content-Type': 'application/json',
            
          }

        });

        console.log("tryblock2");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
            console.log('Got Error');
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.log('Got Error');
        console.error('Error:', error);
        
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileUpload;
