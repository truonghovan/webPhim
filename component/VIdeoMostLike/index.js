import {
  CrownOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { Col } from "antd";
import { Progress } from "antd";
import { Divider } from "antd";
import { Button } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { SwiperSlide } from "swiper/react";
import { convertToMinutes } from "../../common/functions";
import styles from "../../styles/detailsPost.module.scss";
import ButtonLoadMore from "../ButtonLoadMore";
export default function VideoMostLike({
  videoMostLike,
  hasMoreMostLike,
  loadingButtonMostLike,
  handleLoadMoreVideoLike,
}) {
  return (
    <div className={styles["container_listvideo_mostlike"]}>
      <Row>
        {videoMostLike?.map((item) => (
          <Col md={24} key={item?._id}>
            <Link href={`/${item?.class}/${item?.slug}`}>
              <a>
                <SwiperSlide
                  key={item?._id}
                  style={{
                    maxHeight: "500px",
                    borderRadius: "10px",
                    height: "30vh",
                    display: "block",
                    backgroundColor: "#191A1D",
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${item?.thumb})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      alignItems: "center",
                      backgroundSize: "cover",
                      position: "relative",
                      height: "80%",
                      width: "100%",
                      borderRadius: "10px",
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
                              {convertToMinutes(item?.duration)}
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
                  </div>
                  <div className="info_bottom">
                    <div
                      style={{
                        display: "grid",
                        textAlign: "start",
                        paddingTop: "10px",
                      }}
                    >
                      <Link href={"/"}>
                        <a
                          style={{
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "700",
                            height: "20px",
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

                        marginTop: "10px",
                      }}
                    >
                      <Row style={{ width: "100%" }}>
                        <Col lg={12} md={24} sm={24}>
                          <div
                            className="icon_heart"
                            style={{
                              display: "flex",
                              marginRight: "20px",
                            }}
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
                              {item?.reactions} Reactions
                            </span>
                          </div>
                        </Col>
                        <Col lg={12} md={24} sm={24}>
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
                              {item?.views} Views
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </SwiperSlide>
              </a>
            </Link>
            <Divider style={{ backgroundColor: "#282828" }} />
          </Col>
        ))}
        <Col md={24}>
          <ButtonLoadMore
            hasMore={hasMoreMostLike}
            loading={loadingButtonMostLike}
            onClick={handleLoadMoreVideoLike}
          />
        </Col>
      </Row>
    </div>
  );
}
