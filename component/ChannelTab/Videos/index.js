import {
  CrownOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { Col } from "antd";
import { Progress } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React from "react";
import { AiFillCheckCircle, AiFillEye, AiFillHeart } from "react-icons/ai";
import { SwiperSlide } from "swiper/react";
import { convertToMinutes } from "../../../common/functions";

export default function VideosChannel({ data }) {
  return (
    <div>
      <Row gutter={[24, 24]}>
        {data.map((item, index) => (
          <Col md={8} key={index}>
            <SwiperSlide
              key={item}
              style={{
                maxHeight: "400px",
                borderRadius: "10px",
                height: "30vh",
                minHeight: "300px",
                display: "block",
                backgroundColor: "#191A1D",
              }}
            >
              <div
                style={{
                  backgroundImage: `url("https://vm.beeteam368.net/wp-content/uploads/2021/12/call-of-duty-8-420x237.jpg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  alignItems: "center",
                  backgroundSize: "cover",
                  position: "relative",
                  height: "85%",
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
                    bottom: "70px",
                    left: "20px",
                  }}
                >
                  <Progress
                    type="circle"
                    percent={Math.round(
                      (item.rate.total / (item.rate.amount * 5)) * 100
                    )}
                    width={35}
                    success={{
                      percent: Math.round(
                        (item.rate.total / (item.rate.amount * 5)) * 100
                      ),
                    }}
                    style={{ backgroundColor: "black", borderRadius: "50%" }}
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
                ></div>
                <div className="author">
                  <div
                    className="name_author"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#818182",
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      11 Months Ago
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Col>
        ))}
      </Row>
    </div>
  );
}
