import Heading from "components/layout/Heading";
import Layout from "components/layout/Layout";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import PostItem from "module/post/PostItem";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      const docRef = query(collection(db, "posts"));
      const queries = query(docRef, where("status", "==", 1));
      onSnapshot(queries, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(results);
      });
    }
    fetchData();
  }, [params.slug]);
  if (posts.length <= 0) return null;
  return (
    <Layout>
      <div className="container">
        <div className="pt-10"></div>
        <Heading>Tất Cả Bài Viết</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-10">
          {posts.map((item) => (
            <PostItem key={item.id} data={item}></PostItem>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
