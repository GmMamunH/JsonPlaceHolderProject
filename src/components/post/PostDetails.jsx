import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Post } from "./Post";

export const PostDetails = () => {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-32 md:my-20">
      {post && <Post post={post} />} {/* Render the Post component */}
    </div>
  );
};
