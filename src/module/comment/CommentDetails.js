import React from "react";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { Table } from "components/table";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
const CommentDetails = () => {
  const [comments, setComments] = useState([]);

  const handleDeleteComment = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoc(doc(db, "comments", id));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(comments);

  useEffect(() => {
    const q = query(collection(db, "comments"), limit(10));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push({ ...doc.data(), id: doc.id });
      });
      setComments(comments);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Comment</th>
            <th>Commented By</th>
            <th>Post Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.comment}</td>
              <td>{comment.username}</td>
              <td>{comment.postName}</td>
              <td>
                <button onClick={() => handleDeleteComment(comment.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CommentDetails;
