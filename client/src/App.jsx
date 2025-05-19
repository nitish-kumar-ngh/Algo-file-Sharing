
import {useState,useEffect,useRef} from 'react'
import './App.css'
import { uploadFile } from './service/api';
function App() {
  const [file,setFile]=useState(null);

console.log(file);
useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

 const fileInputRef = useRef();


 const onUploadClick=() => {
  fileInputRef.current.click();
 }

  return (
    <>
     <div className="main-wrapper"  style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
     <div className="container">
      <div className="wrapper">
        <h1> AlgoUFile Sharing App !</h1>
        <p>This is file sharing app that allow u to share files with others</p>
        <button onClick={()=>onUploadClick()}>Upload</button>
        <input ref= {fileInputRef} type="file" style = {{display: 'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
        
      </div>
     </div>




     </div>
    
    </>
  )
}

export default App
