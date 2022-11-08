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
} from "@ant-design/icons";
import { Progress } from "antd";
import { Row } from "antd";
import { Col } from "antd";
import Link from "next/link";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { convertToMinutes } from "../../common/functions";
import { isMobile } from "react-device-detect";
export default function NewAudios({ data, title, category, icon }) {
  return (
    <div style={{ padding: !isMobile ? "0 160px" : "10px 10px" }}>
      <div
        className="top_title"
        style={{
          display: "flex",
          paddingTop: isMobile ? "0px" : "30px",
          paddingBottom: isMobile ? "0" : "30px",
        }}
      >
        <div
          className="icon_top_title"
          style={{
            marginRight: isMobile ? "10px" : "20px",
            width: isMobile ? "40px" : "50px",
            display: "flex",
            height: isMobile ? "40px" : "50px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            borderRadius: "15px",
          }}
        >
          {icon}
        </div>
        <Link href={`/newaudios`}>
          <a>
            <div style={{ display: "grid" }}>
              <span style={{ color: "white" }}>{title}</span>
              <span
                style={{
                  fontSize: isMobile ? "15px" : "22px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {category}
              </span>
            </div>
          </a>
        </Link>
      </div>
      <div className="list_card_movie">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is <= 499px
            10: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is <= 999px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide
              key={item?._id}
              style={{
                maxHeight: "500px",
                borderRadius: "10px",
                height: isMobile ? "25vh" : "50vh",
                minHeight: isMobile ? "200px" : "400px",
                display: "block",
                backgroundColor: "#191A1D",
              }}
            >
              <Link href={`/${item?.class}/${item?.slug}`}>
                <a>
                  <div
                    style={{
                      backgroundImage: `url("${item?.thumb}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      alignItems: "center",
                      backgroundSize: "cover",
                      position: "relative",
                      height: isMobile ? "60%" : "70%",
                      width: "100%",
                    }}
                  >
                    <div
                      className="icon_top"
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "20px",
                      }}
                    >
                      <Row>
                        {!isMobile && (
                          <Col>
                            <Tag color="#108ee9" icon={<ThunderboltOutlined />}>
                              #1
                            </Tag>
                          </Col>
                        )}
                        <Col>
                          <Tag color="#FEDC56">
                            <span style={{ color: "black" }}>
                              {convertToMinutes(item?.duration)}
                            </span>
                          </Tag>
                        </Col>
                        {!isMobile && (
                          <Col>
                            <Tag color="#FEDC56">
                              <span style={{ color: "black" }}>HD</span>
                            </Tag>
                          </Col>
                        )}
                        {!isMobile && (
                          <Col>
                            <Tag color="#8C36E0" icon={<CrownOutlined />}>
                              Platinum Elite
                            </Tag>
                          </Col>
                        )}
                      </Row>
                    </div>
                    {!isMobile && (
                      <div
                        className="icon_center"
                        style={{
                          position: "absolute",
                          bottom: "40px",
                          left: "20px",
                        }}
                      >
                        <Progress
                          type="circle"
                          percent={Math.round(
                            (item?.rate.total / (item?.rate.amount * 5)) * 100
                          )}
                          width={35}
                          success={{
                            percent: Math.round(
                              (item?.rate.total / (item?.rate.amount * 5)) * 100
                            ),
                          }}
                          style={{
                            backgroundColor: "black",
                            borderRadius: "100%",
                          }}
                        />
                        <Tag
                          color="#0E0806"
                          icon={<LineChartOutlined />}
                          style={{ marginLeft: "10px" }}
                        >
                          1
                        </Tag>
                      </div>
                    )}
                  </div>
                  <div className="info_bottom">
                    <div
                      style={{
                        display: "grid",
                        textAlign: "start",
                        paddingLeft: isMobile ? "5px" : "20px",
                        paddingTop: "10px",
                      }}
                    >
                      <Link href={`/${item?.class}/${item?.slug}`}>
                        <a
                          style={{
                            color: "#ff9f0a",
                            fontWeight: "bold",
                            fontSize: isMobile ? "8px" : "13px",
                          }}
                        >
                          {item?.category?.cateName}
                        </a>
                      </Link>
                      <Link href={`/${item?.class}/${item?.slug}`}>
                        <a
                          style={{
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                            height: isMobile ? "20px" : "45px",
                            overflow: "hidden",
                          }}
                        >
                          {item?.name}
                        </a>
                      </Link>
                    </div>
                    <div
                      className="icon_info_bottom"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                        padding: isMobile ? "0 5px" : "0 20px",
                      }}
                    >
                      <div
                        className="icon_heart"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {/* <HeartIcon /> */}
                        <AiFillHeart
                          size={isMobile ? 15 : 25}
                          style={{
                            color: "#FF375F",
                            marginRight: "5px",
                          }}
                        />
                        <span
                          style={{
                            color: "white",
                            fontSize: isMobile ? "10px" : "15px",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          {item?.reactions}
                        </span>
                      </div>
                      <div
                        className="icon_view"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <AiFillEye
                          size={isMobile ? 15 : 25}
                          style={{
                            marginRight: "5px",
                            color: "white",
                          }}
                        />
                        <span
                          style={{
                            color: "white",
                            fontSize: isMobile ? "10px" : "15px",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          {item?.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
