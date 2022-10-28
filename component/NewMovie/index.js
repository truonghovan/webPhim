import { Card } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const { Meta } = Card;
import { FreeMode, Pagination } from "swiper";
import { Tag } from "antd";
import {
  CrownOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Progress } from "antd";
import { Row } from "antd";
import { Col } from "antd";
export default function NewMovie({ data, title, category, icon, quantity }) {
  return (
    <div style={{ margin: "0 40px" }}>
      <div
        className="top_title"
        style={{
          display: "flex",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <div
          className="icon_top_title"
          style={{
            marginRight: "20px",
            width: "50px",
            display: "flex",
            height: "50px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            borderRadius: "15px",
          }}
        >
          {icon}
        </div>
        <div style={{ display: "grid" }}>
          <span style={{ color: "white" }}>{title}</span>
          <span
            style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
          >
            {category}
          </span>
        </div>
      </div>
      <div className="list_card_movie">
        <Swiper
          slidesPerView={quantity || 6}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <SwiperSlide
              key={item}
              style={{
                maxHeight: "350px",
                minHeight: "300px",
                borderRadius: "10px",
                height: quantity ? "30vh" : "40vh",
                backgroundImage: `url("https://vm.beeteam368.net/wp-content/uploads/2021/11/bruno-aguirre-EHAbTS3lnr4-unsplash-234x351.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                alignItems: "center",
                backgroundSize: "cover",
                position: "relative",
                objectFit: "contain",
              }}
            >
              <div
                className="icon_top"
                style={{ position: "absolute", top: "10px", left: "20px" }}
              >
                <Row>
                  <Col>
                    <Tag color="#108ee9" icon={<ThunderboltOutlined />}>
                      #1
                    </Tag>
                  </Col>
                  <Col>
                    <Tag color="#FEDC56">
                      <span style={{ color: "black" }}>02:45</span>
                    </Tag>
                  </Col>
                  <Col>
                    <Tag color="#FEDC56">
                      <span style={{ color: "black" }}>HD</span>
                    </Tag>
                  </Col>
                  <Col>
                    <Tag color="#8C36E0" icon={<CrownOutlined />}>
                      Platinum Elite
                    </Tag>
                  </Col>
                </Row>
              </div>
              <div
                className="icon_center"
                style={{ position: "absolute", bottom: "70px", left: "20px" }}
              >
                <Progress
                  type="circle"
                  percent={70}
                  width={35}
                  success={{ percent: 70 }}
                />
                <Tag
                  color="#0E0806"
                  icon={<LineChartOutlined />}
                  style={{ marginLeft: "10px" }}
                >
                  1
                </Tag>
              </div>
              <div
                className="name_movie"
                style={{ position: "absolute", bottom: "35px", left: "20px" }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Có phim hay nè
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
