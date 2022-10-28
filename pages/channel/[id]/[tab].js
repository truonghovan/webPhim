import { Col } from "antd";
import { Tooltip } from "antd";
import { Button } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styles from "../../../styles/channelTab.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { AiFillCheckCircle, AiFillEye, AiFillHeart } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { FaFunnelDollar } from "react-icons/fa";
import { Pagination, Navigation } from "swiper";
import { Select } from "antd";
export default function ChannelTabPage() {
  const provinceData = ["Zhejiang", "Jiangsu"];
  const cityData = {
    Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
  };
  const [videoByTag, setVideoByTag] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  return (
    <div className={styles["container_channel"]}>
      <div style={{ margin: "30px 10%" }}>
        <div className={styles["container_author"]}>
          <div className={styles["container_video"]}>
            <Row className={styles["row_container"]}>
              <Col md={20} className={styles["info_author"]}>
                <div className={styles["img_info_author"]}>
                  <img src="https://secure.gravatar.com/avatar/119915a6b9fb9c5149b70ee96a7bc1a6?s=61&d=mm&r=g"></img>
                </div>
                <div className={styles["author_name"]}>
                  <div className={styles["author_name_name"]}>
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
                  <div className={styles["author_name_sub"]}>
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
              </Col>
              <Col className={styles["subscribe_container"]}>
                <Button
                  className={styles["button_sub"]}
                  icon={<AiOutlineHeart />}
                  size="large"
                  danger
                  type="primary"
                >
                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "1em",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Subscribe
                  </span>
                </Button>
              </Col>
              <Col className={styles["gift_container"]}>
                <Tooltip title={"Virtual Gifts"}>
                  <Button
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#3C3F46",
                      border: "0",
                    }}
                    size="large"
                    icon={<AiOutlineStar size={22} />}
                  />
                </Tooltip>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles["container_listtab"]}>
          <Swiper
            slidesPerView={6}
            spaceBetween={0}
            slidesPerGroup={1}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiperChannel"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <SwiperSlide key={item} className={styles["slider_tab"]}>
                <div className={styles["icon_tab"]}>
                  <FaFunnelDollar color="white" />
                </div>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Video
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles["container_listpost"]}>
          <div className={styles["container_filter"]}>
            <div className={styles["select_sort"]}>
              <Select
                className={styles["select_sort_video"]}
                style={{ color: "white" }}
                value={secondCity}
                onChange={onSecondCityChange}
              >
                {cities.map((city) => (
                  <Select.Option key={city}>{city}</Select.Option>
                ))}
              </Select>
            </div>
            <div className={styles["quantity_item_per_page"]}>
              {" "}
              There are 11 items in this tab
            </div>
          </div>
          <div className={styles["listpostbytag"]}>
            <Row gutter={[24, 24]}>
              {videoByTag.map((item) => (
                <Col md={6} key={item}>
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
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
