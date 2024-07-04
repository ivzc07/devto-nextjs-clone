import { useRouter } from 'next/router';
import NavBar from '@/components/indexComponents/NavBar';
import { getPostById, getPost } from '@/api/api';
import { useState, useEffect } from 'react';
import DetailPostCard from '@/components/DetailPostCard';
import DetailPostUserCard from '@/components/DetailPostUserCard';
import SocialSidebar from '@/components/SocialSideBar';


export default function DetailPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getAllPosts(id);
    }
  }, [id]);

  async function getAllPosts(postId) {
    try {
      const response = await getPost();
      const json = (await response.json()).data;
      const data = json.filter(item => item._id === postId);
      if (data.length > 0) {
        setPost(data[0]);
      } else {
        console.error('Post not found');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="flex flex-col">
        <NavBar />
      </main>
    );
  }

  if (!post) {
    return (
      <main className="flex flex-col">
        <NavBar />
        <div>Post not found</div>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
        <NavBar />
        <div className="w-full h-dvh bg-[#f5f5f5] grid grid-cols-[1fr,7.5fr,1fr] p-4">
            <div></div>
            <div className="flex flex-row gap-[15px]">
                <div className="w-[20%] flex justify-end mt-16">
                    <SocialSidebar/>
                </div>
                <div className="w-[60%] flex flex-col">
                    <DetailPostCard
                        key ={`post-${post._id}`}   
                        title={post.title}
                        image={post.image}
                        body={post.body}
                        user={post.user}
                        createdAt = {post.createdAt}
                    />
                </div>
            
                <div className="w-[20%] flex flex-col">
                    <DetailPostUserCard
                        key ={`user-card-${post.user._id}`}   
                        title={post.title}
                        image={post.image}
                        body={post.body}
                        user={post.user}
                        createdAt = {post.createdAt}
                    />
                </div>
            </div>
            <div></div>
        </div>
        
      
    </main>
  );
}
