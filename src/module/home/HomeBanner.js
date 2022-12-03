import { Button } from "components/button";
import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  min-height: 500px;
  padding: 40px 0;
  /* background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  ); */
  background-image: url("./banner.jpg");
  background-position: center;
  background-size: cover;
  margin-bottom: 60px;
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    &-content {
      max-width: 800px;
      color: black;
      font-weight: 500;
      text-align: center;
      background-color: rgba(250, 250, 250, 0.5);
      padding: 20px;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
    .banner-button {
      background-color: black;
      color: white;
    }
  }
  @media screen and (max-width: 1023.98px) {
    .banner {
      flex-direction: column;
      &-heading {
        font-size: 30px;
        margin-bottom: 10px;
      }
      &-desc {
        font-size: 14px;
        margin-bottom: 20px;
      }
      &-image {
        margin-top: 25px;
      }
      &-button {
        font-size: 14px;
        height: auto;
        padding: 15px;
      }
    }
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">VBLOG</h1>
            <p className="banner-desc">
              VBLOG LÀ MỘT NỀN TẢNG ĐỂ CÁC BẠN CÓ THỂ CHIA SẼ NHỮNG CÂU CHUYỆN
              VÀ KINH NGHIỆM CỦA MÌNH VỚI MỌI NGƯỜI, GIÚP MỌI NGƯỜI CÓ THỂ TÌM
              HIỂU VÀ HỌC HỎI THÊM NHIỀU THỨ MỚI MỖI NGÀY.
            </p>
            <Button to="/sign-up" kind="secondary" className="banner-button">
              Bắt Đầu
            </Button>
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
