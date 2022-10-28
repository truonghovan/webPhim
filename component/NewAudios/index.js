import { Card } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Tag } from "antd";
import {
  CrownOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
  Icon,
  HeartOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Progress } from "antd";
import { Row } from "antd";
import { Col } from "antd";
import Link from "next/link";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
const { Meta } = Card;
const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);
const HeartIcon = (props) => {
  return <Icon component={HeartSvg} {...props} />;
};
export default function NewAudios({ data, title, category, icon }) {
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
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <SwiperSlide
              key={item}
              style={{
                maxHeight: "500px",
                borderRadius: "10px",
                height: "50vh",
                minHeight: "400px",
                display: "block",
                backgroundColor: "#191A1D",
              }}
            >
              <div
                style={{
                  backgroundImage: `url("https://vm.beeteam368.net/wp-content/uploads/2021/11/bruno-aguirre-EHAbTS3lnr4-unsplash-234x351.jpg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  alignItems: "center",
                  backgroundSize: "cover",
                  position: "relative",
                  height: "70%",
                  width: "100%",
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
              </div>
              <div className="info_bottom">
                <div
                  style={{
                    display: "grid",
                    textAlign: "start",
                    paddingLeft: "20px",
                    paddingTop: "10px",
                  }}
                >
                  <Link href={"/"}>
                    <a
                      style={{
                        color: "#ff9f0a",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Music
                    </a>
                  </Link>
                  <Link href={"/"}>
                    <a
                      style={{
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Ở đây có nhạc hay
                    </a>
                  </Link>
                </div>
                <div
                  className="icon_info_bottom"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    padding: "0 20px",
                  }}
                >
                  <div className="icon_heart" style={{ display: "flex" }}>
                    {/* <HeartIcon /> */}
                    <AiFillHeart
                      size={25}
                      style={{
                        color: "#FF375F",
                        marginRight: "5px",
                      }}
                    />
                    <span
                      style={{
                        color: "white",
                        fontSize: "15px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      46
                    </span>
                  </div>
                  <div className="icon_view" style={{ display: "flex" }}>
                    <AiFillEye
                      size={25}
                      style={{
                        marginRight: "5px",
                        color: "white",
                      }}
                    />
                    <span
                      style={{
                        color: "white",
                        fontSize: "15px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      46
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
