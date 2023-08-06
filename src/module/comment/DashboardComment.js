import { ActionDelete, ActionEdit, ActionView } from "components/action";
import { Button } from "components/button";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { useAuth } from "contexts/auth-context";
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
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postStatus, userRole } from "utils/constants";

const DashboardComment = () => {
  const [comments, setComments] = useState([]);
  console.log(comments);
  useEffect(() => {
    const getData = async () => {
      const colRef = collection(db, "comments");

      onSnapshot(colRef, (querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setComments(results);
      });
    };
    getData();
  }, []);

  const handleDeleteComment = async (id) => {
    try {
      const docRef = doc(db, "comments", id);
      await deleteDoc(docRef);
      Swal.fire({
        icon: "success",
        title: "Xóa bình luận thành công",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Xóa bình luận thất bại",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <DashboardHeading title="Quản lý bình luận" />

      <Table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên bài viết</th>
            <th>Tên người bình luận</th>
            <th>Nội dung</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.postName}</td>
              <td>{item.username}</td>
              <td>{item.comment}</td>
              <td>
                <ActionDelete
                  onClick={() => {
                    handleDeleteComment(item.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardComment;
