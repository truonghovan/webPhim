import React, { useState } from "react";
import LayoutPage from "../component/Layout";
import { FaBolt } from "react-icons/fa";
import { getVideoByView } from "./api/video";
import { Row } from "antd";
import { Col } from "antd";
import {
  CrownOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Progress } from "antd";
import { Tag } from "antd";
import Link from "next/link";
import moment from "moment";
import "moment/locale/vi";
import {
  AiFillCheckCircle,
  AiFillEye,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import { convertToMinutes } from "../common/functions";
const TrendingPage = ({ videoByView }) => {
  return (
    <LayoutPage>
      <div
        className="container"
        style={{ padding: "20px 10%", backgroundColor: "#010001" }}
      >
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
            <FaBolt style={{ color: "white", fontSize: "20px" }} />
          </div>
          <div style={{ display: "grid" }}>
            <span style={{ color: "white" }}>Top Posts</span>
            <span
              style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
            >
              Trending
            </span>
          </div>
        </div>
        <div className="containerListVideo">
          <Row gutter={[24, 24]}>
            {videoByView.map((item, index) => (
              <Col key={index} md={6} sm={24} xs={24}>
                <Link href={`/${item.class}/${item.slug}`}>
                  <a>
                    <SwiperSlide
                      key={item}
                      style={{
                        maxHeight: "400px",
                        borderRadius: "10px",
                        height: "50vh",
                        minHeight: "520px",
                        display: "block",
                        backgroundColor: "#191A1D",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", padding: "20px 20px" }}>
                          <div
                            style={{
                              border: "2px solid ",
                              borderRadius: "50%",
                              overflow: "hidden",
                              marginRight: "10px",
                            }}
                          >
                            <img src="https://secure.gravatar.com/avatar/119915a6b9fb9c5149b70ee96a7bc1a6?s=50&d=mm&r=g"></img>
                          </div>
                          <div
                            style={{ display: "grid", alignItems: "center" }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <BsFillCheckCircleFill
                                size={15}
                                color={"#6AC46D"}
                              />
                              <Link href={`/${item.class}/${item.slug}`}>
                                <a
                                  style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "1.1rem",
                                    paddingLeft: "10px",
                                  }}
                                >
                                  {item?.user?.fullName}
                                </a>
                              </Link>
                            </div>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <AiOutlineHeart size={18} color={"white"} />
                              <Link href={`/${item.class}/${item.slug}`}>
                                <span
                                  style={{
                                    color: "white",
                                    fontWeight: "400",
                                    fontSize: "1rem",
                                    paddingLeft: "10px",
                                  }}
                                >
                                  {item?.user?.subscriber?.length} Subscribers
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundImage: `url(${item.thumb})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                          alignItems: "center",
                          backgroundSize: "cover",
                          position: "relative",
                          height: "40%",
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
                              <Tag
                                color="#108ee9"
                                icon={<ThunderboltOutlined />}
                              >
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
                            bottom: "30px",
                            left: "20px",
                          }}
                        >
                          <Progress
                            type="circle"
                            percent={
                              (item.rate?.total / (item.rate?.amount * 5)) * 100
                            }
                            width={35}
                            success={{
                              percent:
                                (item.rate?.total / (item.rate?.amount * 5)) *
                                100,
                            }}
                            style={{
                              backgroundColor: "black",
                              borderRadius: "50%",
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
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            marginLeft: "20px",
                          }}
                        >
                          <Link href={"/"}>
                            <div>
                              <a
                                style={{
                                  color: "#0D8B08",
                                  fontWeight: "bold",
                                  fontSize: "13px",
                                  marginRight: "5px",
                                }}
                              >
                                {item?.category?.cateName}
                              </a>
                              <span
                                style={{
                                  color: "#818182",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                }}
                              >
                                - {moment(item?.createdAt).fromNow()}
                              </span>
                            </div>
                          </Link>
                          <Link href={`/${item.class}/${item.slug}`}>
                            <a
                              style={{
                                color: "white",
                                fontSize: "1.1rem",
                                fontWeight: "bold",
                                maxHeight: "52px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {item.name}
                            </a>
                          </Link>
                        </div>
                        <div className="description_playlist">
                          <p
                            style={{
                              color: "white",
                              fontSize: "14px",
                              display: "block",
                              marginLeft: "20px",
                              textAlign: "start",
                            }}
                          >
                            {item.description}
                          </p>
                        </div>

                        <div
                          className="icon_info_bottom"
                          style={{
                            display: "flex",
                            justifyContent: "start",
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
                              {item.reactions}
                            </span>
                          </div>
                          <div
                            className="icon_view"
                            style={{ display: "flex" }}
                          >
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
                    </SwiperSlide>
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </LayoutPage>
  );
};
export async function getStaticProps() {
  const videoByView = await getVideoByView();
  console.log(videoByView);
  return {
    props: {
      videoByView: videoByView || [],
    }, // will be passed to the page component as props
  };
}
export default TrendingPage;
