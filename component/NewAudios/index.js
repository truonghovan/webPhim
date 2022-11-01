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
          {data.map((item) => (
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
              <Link href={`/${item.class}/${item.slug}`}>
                <a>
                  <div
                    style={{
                      backgroundImage: `url("${item.thumb}")`,
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
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "20px",
                      }}
                    >
                      <Row>
                        <Col>
                          <Tag color="#108ee9" icon={<ThunderboltOutlined />}>
                            #1
                          </Tag>
                        </Col>
                        <Col>
                          <Tag color="#FEDC56">
                            <span style={{ color: "black" }}>
                              {convertToMinutes(item.duration)}
                            </span>
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
                        bottom: "40px",
                        left: "20px",
                      }}
                    >
                      <Progress
                        type="circle"
                        percent={
                          (item.rate.total / (item.rate.amount * 5)) * 100
                        }
                        width={35}
                        success={{
                          percent:
                            (item.rate.total / (item.rate.amount * 5)) * 100,
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
                      <Link href={`/${item.class}/${item.slug}`}>
                        <a
                          style={{
                            color: "#ff9f0a",
                            fontWeight: "bold",
                            fontSize: "13px",
                          }}
                        >
                          {item?.category?.cateName}
                        </a>
                      </Link>
                      <Link href={`/${item.class}/${item.slug}`}>
                        <a
                          style={{
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                            height: "45px",
                            overflow: "hidden",
                          }}
                        >
                          {item.name}
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
                          {item.reactions}
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
                          {item.views}
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
