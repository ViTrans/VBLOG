import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  padding: 100px 0;
  .banner-blog {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    .banner-blog__content {
      flex: 1;
      .banner-blog__title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .banner-blog__desc {
        font-size: 1.5rem;
        margin-bottom: 20px;
      }
    }
    .banner-blog__img {
      flex: 1;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
      .banner-blog__img__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
      }
    }
  }
  @media screen and (max-width: 1023.98px) {
    .banner-blog {
      flex-direction: column;
      .banner-blog__content {
        margin-bottom: 20px;
        .banner-blog__title {
          font-size: 2rem;
          margin-bottom: 20px;
          text-align: center;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .banner-blog__desc {
          font-size: 1.2rem;
          text-align: center;
          margin-bottom: 20px;
        }
        .banner-blog-btn {
          display: none;
        }
      }
    }
    .banner-blog__img {
      display: none;
    }
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        {/* banner blog */}
        <div className="banner-blog">
          <div className="banner-blog__content">
            <h1 className="banner-blog__title">
              Chào mừng đến với blog của tôi
            </h1>
            <p className="banner-blog__desc">
              Blog này được tạo ra với mục đích chia sẻ những kiến thức về lập
              trình và các kỹ năng mềm khác. Bạn có thể đọc những bài viết của
              mình để có thêm kiến thức. Nếu bạn thấy bài viết hay, hãy chia sẻ
              cho mọi người biết nhé. Cảm ơn bạn đã ghé thăm blog của mình. Chúc
              bạn có những giây phút vui vẻ.
            </p>
            <Button className="banner-blog-btn">
              <Link to="/blog">Read more</Link>
            </Button>
          </div>
          {/* banner blog__img */}
          <div className="banner-blog__img">
            <img
              src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
              alt=""
            />
            <div className="banner-blog__img__overlay"></div>
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
