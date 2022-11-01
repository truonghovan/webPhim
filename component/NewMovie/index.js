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
          {data.map((item) => (
            <SwiperSlide
              // onClick={router.push(`/${item.category}/${item.slug}`)}
              key={item._id}
              style={{
                maxHeight: "350px",
                minHeight: "300px",
                borderRadius: "10px",
                height: quantity ? "30vh" : "40vh",
                alignItems: "center",
                position: "relative",
                objectFit: "contain",
              }}
            >
              <Link key={item._id} href={`/${item?.class}/${item.slug}`}>
                <a style={{ height: "100%", width: "100%" }}>
                  {" "}
                  <div
                    style={{
                      backgroundImage: `url("${item.thumb}")`,
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
                        bottom: "80px",
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
                          fontSize: "17px",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {item.name}
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
