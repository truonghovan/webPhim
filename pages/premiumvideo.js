import { Col } from "antd";
import { Row } from "antd";
import React, { useEffect, useState } from "react";
import EmblaCarousel from "../component/EmblaCarouselCategory";
import styles from "../styles/category.module.scss";
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
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { Progress } from "antd";
import Link from "next/link";
import { AiFillCheckCircle, AiFillEye, AiFillHeart } from "react-icons/ai";
import { Button } from "antd";
import { convertToMinutes } from "../common/functions";
import { getPremiumVideo, getVideoByCateSlug } from "./api/video";
import moment from "moment";
import "moment/locale/vi";
import Head from "next/head";
import { getCategoryBySlug } from "./api/category";
import { isMobile } from "react-device-detect";
import { getVideoPagingByClass } from "./api/video";
export default function CategoryPage({ videoByCate, slug, categoryInfo }) {
  const [videoByCateData, setVideoByCateData] = useState(videoByCate);
  const [pageSize, setPageSize] = useState(6);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasMore, setHasMore] = useState(
    videoByCate.length < pageSize ? false : true
  );
  useEffect(() => {
    setVideoByCateData(videoByCate);
    setHasMore(videoByCate.length < pageSize ? false : true);
  }, [videoByCate]);
  const [loadings, setLoadings] = useState(false);
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  const handleLoadMoreData = () => {
    setLoadings(true);
    setPageIndex(pageIndex + 1);
    getPremiumVideo(pageSize, pageIndex + 1).then((dataMore) => {
      setVideoByCateData((data) => [...data, ...dataMore]);
      setHasMore(dataMore.length < pageSize ? false : true);
      setLoadings(false);
    });
  };
  return (
    <>
      <Head>
        <title>Premium Videos</title>
      </Head>

      <div
        className="container_detailPost_2"
        style={{ padding: isMobile && "80px 10px" }}
      >
        <div
          className="top_title"
          style={{
            display: "flex",
            paddingTop: "30px",
            paddingBottom: "30px",
            padding: !isMobile ? "20px 10%" : "",
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
            <VideoCameraAddOutlined
              style={{ color: "white", fontSize: "20px" }}
            />
          </div>

          <div style={{ display: "grid" }}>
            <span style={{ color: "white" }}>All Videos</span>
            <span
              style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
            >
              Premium Videos
            </span>
          </div>
        </div>

        <div
          className={styles["container_listitem"]}
          style={{
            backgroundColor: "#010001",
            padding: isMobile ? "20px 10px" : "20px 10%",
          }}
        >
          <Row gutter={[12, 24]}>
            {videoByCateData?.map((item) => (
              <Col key={item?._id} lg={6} md={8} sm={8} xs={8}>
                {" "}
                <SwiperSlide
                  key={item?._id}
                  style={{
                    maxHeight: "400px",
                    borderRadius: "10px",
                    height: isMobile ? "26vh" : "50vh",
                    minHeight: isMobile ? "200px" : "350px",
                    display: "block",
                    backgroundColor: "#191A1D",
                  }}
                >
                  <Link href={`/${item?.class}/${item?.slug}`}>
                    <a>
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
                              bottom: "40px",
                              left: isMobile ? "10px" : "20px",
                            }}
                          >
                            <Progress
                              type="circle"
                              percent={Math.round(
                                (item?.rate.total / (item?.rate.amount * 5)) *
                                  100
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
                          <Link href={"/"}>
                            <a
                              style={{
                                color: "white",
                                fontSize: isMobile ? "10px" : "16px",
                                height: isMobile ? "28px" : "25px",
                                fontWeight: "bold",
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
                                  </span>
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
                              alignItems: "center",
                              marginRight: isMobile ? "5px" : "20px",
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
                    </a>
                  </Link>
                </SwiperSlide>
              </Col>
            ))}
            <Col
              md={24}
              sm={24}
              xs={24}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <div className={styles["button_loadmore"]}>
                {hasMore ? (
                  <Button
                    type="primary"
                    loading={loadings}
                    className="buttonColor"
                    onClick={() => handleLoadMoreData()}
                  >
                    Hiển thị thêm
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="buttonColor"
                    onClick={(e) => e.preventDefault()}
                    color={"#DE0404"}
                  >
                    Không còn dữ liệu để hiển thị
                  </Button>
                )}
                {/* <Button
                  className={styles["button_loadmore_butotn"]}
                  // onClick={handleLoadMoreVideo}
                  // loading={loadingButton}
                >
                  Load More
                </Button> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* //{" "} */}
    </>
  );
}
export async function getServerSideProps({ params }) {
  const [videoByCate] = await Promise.all([
    getPremiumVideo(6, 1),
    // getCategoryBySlug(params.category),
  ]);
  return {
    props: {
      videoByCate: videoByCate || [],
      slug: "premium" || "",
      categoryInfo: {},
    }, // will be passed to the page component as props
  };
}
