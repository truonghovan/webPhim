import { Card } from "antd";
import React, { useState } from "react";
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
  Icon,
  HeartOutlined,
  EyeOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { Progress } from "antd";
import { Row } from "antd";
import { Col } from "antd";
import Link from "next/link";
import { AiFillCheckCircle, AiFillEye, AiFillHeart } from "react-icons/ai";
import { Button } from "antd";
import { convertToMinutes } from "../../common/functions";
import { getVideoHighestRate } from "../../pages/api/video";
import { isMobile } from "react-device-detect";
const { Meta } = Card;
export default function HighestRated({ data, title, category, icon }) {
  const [dataVideo, setDataVideo] = useState(data);
  const [pageSize, setPageSize] = useState(8);
  const [pageIndex, setPageIndex] = useState(1);
  const [loadings, setLoadings] = useState(false);
  const [hasMore, setHasMore] = useState(data.length < pageSize ? false : true);
  const handleLoadMoreData = () => {
    setLoadings(true);
    setPageIndex(pageIndex + 1);
    getVideoHighestRate(pageSize, pageIndex + 1).then((dataMore) => {
      setDataVideo((data) => [...data, ...dataMore]);
      setHasMore(dataMore.length < pageSize ? false : true);
      setLoadings(false);
    });
  };
  return (
    <div style={{ padding: !isMobile ? "0 160px" : "0px 10px" }}>
      <div
        className="top_title"
        style={{
          display: "flex",
          paddingTop: isMobile ? "0" : "30px",
          paddingBottom: isMobile ? "0px" : "30px",
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
        <Link href={`/highestrate`}>
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
        {/* <Swiper
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        > */}
        <Row gutter={[10, 16]}>
          {dataVideo?.map((item) => (
            <Col key={item?._id} lg={6} md={8} sm={8} xs={8}>
              <Link href={`/${item?.class}/${item?.slug}`}>
                <a>
                  <SwiperSlide
                    key={item?._id}
                    style={{
                      maxHeight: "400px",
                      borderRadius: "10px",
                      height: isMobile ? "27vh" : "50vh",
                      minHeight: isMobile ? "200px" : "350px",
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
                        height: isMobile ? "60%" : "65%",
                        width: "100%",
                      }}
                    >
                      <div
                        className="icon_top"
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: isMobile ? "10px" : "20px",
                        }}
                      >
                        <Row>
                          {!isMobile && (
                            <Col>
                              <Tag
                                color="#108ee9"
                                icon={<ThunderboltOutlined />}
                              >
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
                            bottom: isMobile ? "10px" : "40px",
                            left: isMobile ? "10px" : "20px",
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
                                (item?.rate.total / (item?.rate.amount * 5)) *
                                  100
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
                          textAlign: "center",
                          paddingTop: "10px",
                          paddingBottom: isMobile ? "0" : "10px",
                        }}
                      >
                        <Link href={`/${item?.category?.cateSlug}`}>
                          <a
                            style={{
                              color: "#0D8B08",
                              fontWeight: "bold",
                              fontSize: isMobile ? "9px" : "13px",
                            }}
                          >
                            {item?.category?.cateName}
                          </a>
                        </Link>
                        <Link href={`/${item?.class}/${item?.slug}`}>
                          <a
                            style={{
                              color: "white",
                              fontSize: isMobile ? "13px" : "16px",
                              fontWeight: "bold",
                              height: isMobile ? "23px" : "30px",
                              overflow: "hidden",
                            }}
                          >
                            {item?.name}
                          </a>
                        </Link>
                      </div>
                      {!isMobile && (
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
                            <Link href={`/channel/${item?.user?.userName}`}>
                              <a
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
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
                              </a>
                            </Link>
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
                      )}
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
                            alignItems: "center",
                          }}
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
                  </SwiperSlide>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
        <div
          className="button__loadmore"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {hasMore ? (
            <Button
              type="primary"
              loading={loadings}
              className="buttonColor"
              onClick={() => handleLoadMoreData()}
            >
              Hi???n th??? th??m
            </Button>
          ) : (
            <Button
              type="primary"
              className="buttonColor"
              onClick={(e) => e.preventDefault()}
              color={"#DE0404"}
            >
              Kh??ng c??n d??? li???u ????? hi???n th???
            </Button>
          )}
        </div>
        {/* </Swiper> */}
      </div>
    </div>
  );
}
