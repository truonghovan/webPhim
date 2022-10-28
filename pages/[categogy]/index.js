import { Col } from "antd";
import { Row } from "antd";
import React, { useState } from "react";
import EmblaCarousel from "../../component/EmblaCarouselCategory";
import styles from "../../styles/category.module.scss";
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
  PoweroffOutlined,
} from "@ant-design/icons";
import { Progress } from "antd";
import Link from "next/link";
import { AiFillCheckCircle, AiFillEye, AiFillHeart } from "react-icons/ai";
import { Button } from "antd";
export default function CategoryPage() {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [videoByCate, setVideoByCate] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className="container_detailPost">
      <div className={styles["container_banner"]}>
        <EmblaCarousel slides={slides} />
      </div>
      <div
        className={styles["container_listitem"]}
        style={{
          backgroundColor: "#010001",
          padding: "20px 10%",
        }}
      >
        <Row gutter={[24, 24]}>
          {videoByCate.map((item) => (
            <Col key={item} md={6}>
              {" "}
              <SwiperSlide
                key={item}
                style={{
                  maxHeight: "400px",
                  borderRadius: "10px",
                  height: "50vh",
                  minHeight: "350px",
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
                    height: "65%",
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
                    style={{
                      position: "absolute",
                      bottom: "70px",
                      left: "20px",
                    }}
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
                    style={{
                      position: "absolute",
                      bottom: "35px",
                      left: "20px",
                    }}
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
                      textAlign: "center",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <Link href={"/"}>
                      <a
                        style={{
                          color: "#0D8B08",
                          fontWeight: "bold",
                          fontSize: "13px",
                        }}
                      >
                        Gaming
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
                  <div className="author">
                    <div
                      className="name_author"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AiFillCheckCircle color="#6AC46D" />
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "12px",
                          marginRight: "5px",
                        }}
                      >
                        Nicolas
                      </span>{" "}
                      <span
                        style={{
                          color: "#818182",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        - 11 Months Ago
                      </span>
                    </div>
                  </div>
                  <div
                    className="icon_info_bottom"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                      padding: "0 20px",
                    }}
                  >
                    <div
                      className="icon_heart"
                      style={{ display: "flex", marginRight: "20px" }}
                    >
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
            </Col>
          ))}
          <Col md={24} style={{ justifyContent: "center", display: "flex" }}>
            <div className={styles["button_loadmore"]}>
              <Button
                className={styles["button_loadmore_butotn"]}
                // onClick={handleLoadMoreVideo}
                // loading={loadingButton}
              >
                Load More
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
