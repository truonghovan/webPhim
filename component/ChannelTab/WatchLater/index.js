import {
  CrownOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Col } from "antd";
import { Progress } from "antd";
import { Tag } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React from "react";
import {
  AiFillCheckCircle,
  AiFillEye,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";

export default function WatchLater({ data }) {
  return (
    <div>
      {" "}
      <Row gutter={[24, 24]}>
        {data.map((item) => (
          <Col md={8} key={item}>
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
                  <div style={{ display: "grid", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <BsFillCheckCircleFill size={15} color={"#6AC46D"} />
                      <Link href={"/"}>
                        <a
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            paddingLeft: "10px",
                          }}
                        >
                          Nicolas
                        </a>
                      </Link>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <AiOutlineHeart size={18} color={"white"} />
                      <Link href={"/"}>
                        <span
                          style={{
                            color: "white",
                            fontWeight: "400",
                            fontSize: "1rem",
                            paddingLeft: "10px",
                          }}
                        >
                          87 Subscribers
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url("https://vm.beeteam368.net/wp-content/uploads/2021/12/tamara-bellis-68csPWTnafo-unsplash-1-420x237.jpg")`,
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
                    bottom: "30px",
                    left: "20px",
                  }}
                >
                  <Progress
                    type="circle"
                    percent={70}
                    width={35}
                    success={{ percent: 70 }}
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
                        Gaming
                      </a>
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
                  </Link>
                  <Link href={"/"}>
                    <a
                      style={{
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      Ở đây có nhạc hay
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
                    Officiis repudiandae nulla similique iste quas possimus.
                    officia aspernatur adipisci autem facere occaecati.
                    Voluptatem aperiam perfe...
                  </p>
                </div>
                {/* <div className="author">
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
                  </div> */}
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
      </Row>
    </div>
  );
}
