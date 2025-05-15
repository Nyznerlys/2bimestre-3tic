import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data));
  }, []);

  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
}
