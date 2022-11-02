import { Col } from "antd";
import { Row } from "antd";
import React, { useEffect, useState } from "react";
import EmblaCarousel from "../../component/EmblaCarouselCategory";
import styles from "../../styles/category.module.scss";
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
import { Progress } from "antd";
import Link from "next/link";
import { AiFillCheckCircle, AiFillEye, AiFillHeart } from "react-icons/ai";
import { Button } from "antd";
import { convertToMinutes } from "../../common/functions";
import { getVideoByCateSlug } from "../api/video";
import moment from "moment";
import "moment/locale/vi";
import LayoutPage from "../../component/Layout";
import Head from "next/head";
import { getCategoryBySlug } from "../api/category";

export default function CategoryPage({ videoByCate, slug, categoryInfo }) {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [videoByCateData, setVideoByCateData] = useState(videoByCate);
  const [pageSize, setPageSize] = useState(6);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasMore, setHasMore] = useState(
    videoByCate.length < pageSize ? false : true
  );

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
    getVideoByCateSlug(slug, pageSize, pageIndex + 1).then((dataMore) => {
      setVideoByCateData((data) => [...data, ...dataMore]);
      setHasMore(dataMore.length < pageSize ? false : true);
      setLoadings(false);
    });
  };
  return (
    <LayoutPage>
      <Head>
        <title>{categoryInfo?.cateName}</title>
      </Head>
      <div className="container_detailPost">
        <div className={styles["container_banner"]}>
          <EmblaCarousel slides={videoByCate || []} />
        </div>
        <div
          className={styles["container_listitem"]}
          style={{
            backgroundColor: "#010001",
            padding: "20px 10%",
          }}
        >
          <Row gutter={[24, 24]}>
            {videoByCateData.map((item) => (
              <Col key={item._id} md={6}>
                {" "}
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
                  <Link href={`/${item?.class}/${item.slug}`}>
                    <a>
                      <div
                        style={{
                          backgroundImage: `url(${item.thumb})`,
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
                          <Link href={"/"}>
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
                          <Link href={"/"}>
                            <a
                              style={{
                                color: "white",
                                fontSize: "16px",
                                height: "25px",
                                fontWeight: "bold",
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
                    </a>
                  </Link>
                </SwiperSlide>
              </Col>
            ))}
            <Col md={24} style={{ justifyContent: "center", display: "flex" }}>
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
    </LayoutPage>
  );
}
export async function getServerSideProps({ params }) {
  const [videoByCate, categoryInfo] = await Promise.all([
    getVideoByCateSlug(params.category, 6, 1),
    getCategoryBySlug(params.category),
  ]);
  return {
    props: {
      videoByCate: videoByCate || [],
      slug: params.category || "",
      categoryInfo: categoryInfo || {},
    }, // will be passed to the page component as props
  };
}
