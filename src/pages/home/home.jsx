import React from "react";
import PostGrid from "../../components/posts-grid/post-grid.component";
import { useGetPosts } from "../../hooks/posts/usePosts";
function Home() {
  const myLocalTestPostList = [
    { id: 1, name: "Hatef", size: "XL" },
    { id: 2, name: "Afrand", size: "s" },
    { id: 3, name: "Amithis", size: "xs" },
    { id: 4, name: "Liam", size: "xs" },
  ];

  const realPosts = useGetPosts();

  return (
    <div>
      <div className="page-title">Home:</div>
      <PostGrid postList={realPosts || myLocalTestPostList} />
    </div>
  );
}

export default Home;
