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
import Link from "next/link";
import { convertToMinutes } from "../../common/functions";
import { isMobile } from "react-device-detect";
export default function NewMovie({ data, title, category, icon, quantity }) {
  return (
    <div
      style={{
        padding: !isMobile
          ? "0 160px"
          : quantity
          ? "0px 10px 10px 10px"
          : "50px 10px 10px 10px",
      }}
    >
      <div
        className="top_title"
        style={{
          display: "flex",
          paddingTop: isMobile && quantity ? "0px" : "30px",
          paddingBottom: isMobile ? "5px" : "30px",
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
        <Link
          href={category !== "Premium Videos" ? `/newmovie` : `premiumvideo`}
        >
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
          slidesPerView={quantity || 5}
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
              spaceBetween: 20,
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
              // onClick={router.push(`/${item?.category}/${item?.slug}`)}
              key={item?._id}
              style={{
                maxHeight: "350px",
                // height: isMobile ? "40vh" : "50vh",
                minHeight: isMobile ? "180px" : "400px",
                borderRadius: "10px",
                height: quantity
                  ? isMobile
                    ? "20vh"
                    : "30vh"
                  : isMobile
                  ? "20vh"
                  : "40vh",
                alignItems: "center",
                position: "relative",
                objectFit: "contain",
              }}
            >
              <Link key={item?._id} href={`/${item?.class}/${item?.slug}`}>
                <a style={{ height: "100%", width: "100%" }}>
                  {" "}
                  <div
                    style={{
                      backgroundImage: `url("${item?.thumb}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
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
                          bottom: "80px",
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
                    <div
                      className="name_movie"
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "20px",
                        height: "55px",
                        overflow: "hidden",
                        marginRight: "10px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: isMobile ? "14px" : "17px",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {item?.name}
                      </span>
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
