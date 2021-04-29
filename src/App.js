import './firebase';
import firebase from 'firebase';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState,useEffect } from 'react';
function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogposts, setBlogposts] = useState([]);
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    firebase
    .firestore()
    .collection('blog')
    .add({
      title:title,
      content: content
    })
    .then(()=>{
      alert("Post Has Been Submitted")
      setTitle("");
      setContent("");
    })
  }
  const deletePost=(id)=>
  {
    firebase
    .firestore()
    .collection('blog')
    .doc(id)
    .delete()
    .then(()=>{
      alert("data has been deleted")
    })
  }
  useEffect(()=>{
    firebase
    .firestore()
    .collection('blog')
    .onSnapshot((snapshot)=>{
      const data = snapshot.docs.map((doc)=>(
        {
          id: doc.id,
          ...doc.data()
        }
      ))
      setBlogposts(data)
    })
  },[])
  return (
    <div className="container mt-2 p-4">
      
      <div className="row">
        <div className="col-md-7 p-5">
          {
           blogposts.map(blogpost=>
            <div key={blogpost.id} className="container my-3  bg-light p-5 rounded">
            <h3>{blogpost.title}</h3>
            <p style={{wordBreak:'break-all'}}>{blogpost.content}</p>
            <button onClick={()=>deletePost(blogpost.id)} className="btn btn-sm btn-danger">Delete</button>
          </div>
            ) 
          }
        </div>
        <div className="col-md-5 bg-secondary p-5">
          <h4>Post Blog Content</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                  <input required value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" type="text" placeholder="Enter title"/>
            </div>
            <div className="form-group">
                  <textarea required value={content} onChange={(e)=>{setContent(e.target.value)}} className="form-control" placeholder="Enter content"></textarea>
            </div>
            <button className="btn btn-primary">Post</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
