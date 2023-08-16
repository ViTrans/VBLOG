import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const HomeBannerStyles = styled.div`
  .banner-blog {
    display: flex;
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
      <div className="flex items-center h-screen">
        <div className="relative w-full h-full">
          <img
            src="banner2.png"
            alt="banner"
            className="md:object-cover h-full w-full banner-img"
            style={{
              objectPosition: "80%",
              objectFit: "cover",
            }}
          />
          <h1
            className="text-6xl font-bold text-black absolute top-1/4 w-full h-screen container flex flex-col"
            style={{
              maxWidth: "600px",
            }}
          >
            <span className="text-8xl">Hello</span>
            <Typewriter
              words={[
                "Chào mừng bạn đến với blog của tôi",
                "blog này được tạo ra để chia sẻ những kiến thức của tôi về lập trình web",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={() => console.log(`Done after 5 loops!`)}
            />
          </h1>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
