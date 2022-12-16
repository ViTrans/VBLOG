import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import { db } from "firebase-app/firebase-config";
import { FirebaseError } from "firebase/app";
import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
];

const HeaderStyles = styled.header`
  padding: 10px 0;
  .header-main {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }
  .header-auth {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo {
    display: block;
    max-width: 70px;
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .menu {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
    font-weight: 500;
  }
  .search {
    margin-left: auto;
    padding: 15px 25px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
  }
  .search-input {
    flex: 1;
    padding-right: 45px;
    font-weight: 500;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
  }
  .menu-link.active {
    color: ${(props) => props.theme.primary};
  }
  .menu-icon {
    display: none;
  }
  @media screen and (max-width: 1023.98px) {
    padding: 10px 0;
    .logo {
      max-width: 52px;
    }
    .header-main {
      position: relative;
      justify-content: space-between;
      align-items: center;
    }
    /* .search,
    .header-button,
    .header-auth {
      display: none;
    } */
    .menu-item {
      display: flex;
      flex-direction: column;
    }
    .menu {
      display: none;
      position: absolute;
      top: 100%;
      background: #fff;
      width: 100%;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 1;
    }
    .menu.active {
      display: block;
      margin: 0 auto;
    }
  }
`;
// responsive menu
const MenuIconStyles = styled.div`
  display: none;
  @media screen and (max-width: 1023.98px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50px;
    margin-left: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
  }
`;
const Header = () => {
  const { userInfo } = useAuth();
  const handleToggleMenu = () => {
    document.querySelector(".menu").classList.toggle("active");
  };
  // get category form firebase and show in menu
  const [categories, setCategories] = useState([]);
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

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <NavLink to="/">
            <img srcSet="/logo.png 2x" alt="VBLOG" className="logo" />
          </NavLink>
          <ul className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <NavLink to={item.url} className="menu-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
            {categories.map((item) => (
              <li className="menu-item" key={item.id}>
                <NavLink to={`/category/${item.slug}`} className="menu-link">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <MenuIconStyles onClick={handleToggleMenu}>
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
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </MenuIconStyles>
          {/* <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search posts..."
            />
            <span className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div> */}
          {!userInfo ? (
            <Button
              type="button"
              height="56px"
              className="header-button"
              to="/sign-in"
            >
              Login
            </Button>
          ) : (
            <div className="header-auth">
              <Link
                to={`/profile?id=${userInfo.uid}`}
                className="header-avatar"
              >
                <img src={userInfo?.avatar} alt="" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
