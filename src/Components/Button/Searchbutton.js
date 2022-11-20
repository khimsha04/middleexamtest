import axios from 'axios';
import {  useState } from 'react';
import '../Dropdown/Firstdropdown.css';
function Searchbutton(){

  const [posts,setPosts] = useState([])
  const handleSearch = ()=>{
  axios.get('https://dummyjson.com/products')
  .then(function (res) {
    // handle success
    setPosts(res.data.products);
    console.log(res.data);
  })
  .catch(function(error){
    console.log(error)
  }
  
  )}
 
 
return(
<div>
  <div className=' margin20px'>
    <button onClick={handleSearch}  className='button' > Search </button>
  </div>
  <div>

  </div>

  <div>
    <ul className='ulClass'>
      <span>Brand:</span>
    {posts.map(post=> (
      <li key={post.id} > {post.brand}  </li>
    ))
    }
    </ul>
  </div>
  <div>
    <ul className='ulClass1'>
      <span>Category:</span>
    {posts.map(post=> (
      <li key={post.id} > {post.category}  </li>
    ))
    }
    </ul>
  </div>
  <div>
    <ul className='ulClass2'>
      <span>Price:</span>
    {posts.map(post=> (
      <li key={post.id} >   {post.price} </li>
    ))
    }
    </ul>
  </div>
  <div>
    <ul className='ulClass3'>
      <span>Rating:</span>
    {posts.map(post=> (
      <li key={post.id} > {post.rating} </li>
    ))
    }
    </ul>
  </div>
  <div>
    <ul className='ulClass4'>
      <span>Title:</span>
    {posts.map(post=> (
      <li key={post.id} > {post.title} </li>
    ))
    }
    </ul>
  </div>

</div>
)
}

export default Searchbutton;