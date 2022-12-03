import { useAuth } from "contexts/auth-context";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { userRole } from "utils/constants";
const DashboardPageStyles = styled.div`
  .statistical {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    .statistical__item {
      width: 100%;
      background: #ffffff;
      box-shadow: 10px 10px 20px rgba(218, 213, 213, 0.15);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
      .statistical__item__title {
        flex: 1;
        font-size: 18px;
        font-weight: 500;
        color: ${(props) => props.theme.gray80};
      }
      .statistical__item__number {
        font-size: 24px;
        font-weight: 500;
        color: ${(props) => props.theme.primary};
      }
    }
  }
  .statistical__item:nth-child(1) {
    background: #f1fbf7;
  }
  .statistical__item:nth-child(2) {
    background: #f1f8ff;
  }
  .statistical__item:nth-child(3) {
    background: #fff5f5;
  }
  .statistical__item:nth-child(4) {
    background: #f1f8ff;
  }
  .statistical__item__icon {
    font-size: 24px;
  }
  .statistical__item:nth-child(1) .statistical__item__icon {
    color: #1dc071;
  }
  .statistical__item:nth-child(2) .statistical__item__icon {
    color: ${(props) => props.theme.gray80};
  }
  .statistical__item:nth-child(3) .statistical__item__icon {
    color: #ff0000;
  }
  .statistical__item:nth-child(4) .statistical__item__icon {
    color: ${(props) => props.theme.gray80};
  }
  .statistical__item:nth-child(1) .statistical__item__number {
    color: #1dc071;
  }
  .statistical__item:nth-child(2) .statistical__item__number {
    color: ${(props) => props.theme.gray80};
  }
  .statistical__item:nth-child(3) .statistical__item__number {
    color: #ff0000;
  }
  .statistical__item:nth-child(4) .statistical__item__number {
    color: ${(props) => props.theme.gray80};
  }
  @media screen and (max-width: 1023.98px) {
    .statistical {
      .statistical__item {
        align-items: center;
        .statistical__item__title {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const DashboardPage = () => {
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [postPending, setPostPending] = React.useState([]);
  const { userInfo } = useAuth();
  // get posts from firebase
  React.useEffect(() => {
    async function fetchPosts() {
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
    fetchPosts();
  }, []);
  // get post pending from firebase
  React.useEffect(() => {
    async function fetchPosts() {
      const docRef = query(collection(db, "posts"));
      const queries = query(docRef, where("status", "==", 2));
      onSnapshot(queries, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPostPending(results);
      });
    }
    fetchPosts();
  }, []);
  // get users from firebase
  React.useEffect(() => {
    async function fetchUsers() {
      const docRef = query(collection(db, "users"));
      const queries = query(docRef, where("status", "==", 1));
      onSnapshot(queries, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUsers(results);
      });
    }
    fetchUsers();
  }, []);
  // get categories from firebase
  React.useEffect(() => {
    async function fetchCategories() {
      const docRef = query(collection(db, "categories"));
      const queries = query(docRef);
      onSnapshot(queries, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCategories(results);
      });
    }
    fetchCategories();
  }, []);
  if (userInfo.role !== userRole.ADMIN && userInfo.role !== userRole.MOD)
    return null;
  return (
    <DashboardPageStyles>
      <DashboardHeading
        title="Dashboard"
        desc="Overview dashboard monitor"
      ></DashboardHeading>
      <div
        className="statistical
"
      >
        <div className="statistical__item">
          <NavLink to={"/manage/posts"} className="statistical__item__title">
            Bài Viết
          </NavLink>
          <div className="statistical__item__number">{posts.length}</div>
          <div className="statistical__item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </div>
        </div>
        <div className="statistical__item">
          <NavLink to={"/manage/user"} className="statistical__item__title">
            Người Dùng
          </NavLink>
          <div className="statistical__item__number">{users.length}</div>
          <div className="statistical__item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </div>
        </div>
        <div className="statistical__item">
          <NavLink to={"/manage/posts"} className="statistical__item__title">
            Bài Viết Chưa Duyệt
          </NavLink>
          <div className="statistical__item__number">{postPending.length}</div>
          <div className="statistical__item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>
        <div className="statistical__item">
          <NavLink to={"/manage/category"} className="statistical__item__title">
            Danh Mục
          </NavLink>
          <div className="statistical__item__number">{categories.length}</div>
          <div className="statistical__item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </div>
        </div>
      </div>
    </DashboardPageStyles>
  );
};

export default DashboardPage;
