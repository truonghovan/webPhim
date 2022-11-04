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
import { convertToMinutes } from "../../common/functions";
import styles from "../../styles/detailsPost.module.scss";
import "moment/locale/vi";
import moment from "moment";
export default function RelativePost({ videoRelative }) {
  return (
    <div className={styles["list_post"]}>
      <Row gutter={[24, 24]}>
        {videoRelative.map((item) => (
          <Col lg={8} md={12} sm={24} xs={24} key={item}>
            <Link href={`/${item.class}/${item.slug}`}>
              <a>
                <SwiperSlide
                  key={item}
                  style={{
                    maxHeight: "400px",
                    borderRadius: "10px",
                    height: "40vh",
                    minHeight: "370px",
                    display: "block",
                    backgroundColor: "#191A1D",
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url("${item.thumb}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      alignItems: "center",
                      backgroundSize: "cover",
                      position: "relative",
                      height: "60%",
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
                        percent={Math.round(
                          (item.rate.total / (item.rate.amount * 5)) * 100
                        )}
                        width={35}
                        success={{
                          percent: Math.round(
                            (item.rate.total / (item.rate.amount * 5)) * 100
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
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <Link href={`/${item?.category?.cateSlug}`}>
                        <a
                          style={{
                            color: "#0D8B08",
                            fontWeight: "bold",
                            fontSize: "13px",
                          }}
                        >
                          {item?.category?.cateName}
                        </a>
                      </Link>
                      <Link href={`/${item?.category?.cateSlug}/${item?.slug}`}>
                        <a
                          style={{
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "bold",
                            height: "50px",
                            overflow: "hidden",
                          }}
                        >
                          {item.name}
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
                          {item?.user?.fullName}
                        </span>{" "}
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
                </SwiperSlide>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
