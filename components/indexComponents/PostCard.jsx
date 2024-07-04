import { getPost, getUser } from "@/api/api";
import clsx from "clsx";
import React, { useState, useEffect } from 'react';

export default function PostCard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  function formatDate(rawDate) {
    const date = new Date(rawDate);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  }

  async function getAllPosts() {
    try {
      const response = await getPost(); 
      const json = (await response.json()).data; 
      console.log(json);
      setPosts(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
}
  useEffect(() => {
    getAllPosts();
    
  }, []);
  
  if (loading) {
    return <div className="p-4"></div>; 
  }

  if (!posts || posts.length === 0) {
    return <div>No posts found</div>; 
  }

  return (
    <>
      {posts.map((post, idx) => {
       
        return(
          <a href={`/${post._id}`} key={`post-card-${idx}`}>
            <div  className="w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden mb-4">
              <div className={clsx('relative',{'hidden': (idx !=0)})}>
                <img
                  key={`post-card-img-${idx}`}
                  src={post.image} 
                  alt="Post Image"
                  className="w-full"
                /> 
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img
                    key={`post-card-img-avatar-${idx}`}
                    src={post.user.profilePic} 
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                <div>
                  <h3 key={`post-card-date-${idx}`} className="text-sm font-medium">{formatDate(post.createdAt)} </h3>
                  <p className="text-xs text-gray-500">{post.user.name}</p>
                </div>
              </div>
              <h2 key={`post-card-title-${idx}`} className="text-xl font-bold mb-2">{post.title}</h2>
            
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-4">❤️🤣👏🔥 reactions</span>
                <span className="mr-4">💬  comments</span>
                <span></span>
               </div>
              </div>
            </div>
          </a>
        )
        
      })}
    </>
  );
}
