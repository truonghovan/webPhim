import { Col } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsStarHalf, BsLightbulb, BsFillCheckCircleFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import "moment/locale/vi";
import moment from "moment";
import {
  FaHandHoldingWater,
  FaHeadphonesAlt,
  FaTv,
  FaBolt,
  FaChartBar,
} from "react-icons/fa";
import {
  ThunderboltOutlined,
  CrownOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { FcLike } from "react-icons/fc";
import {
  AiOutlineComment,
  AiOutlineEye,
  AiFillFastForward,
  AiOutlineHeart,
  AiOutlineStar,
  AiFillDislike,
  AiFillEye,
  AiFillCheckCircle,
  AiFillHeart,
  AiFillLike,
} from "react-icons/ai";
import styles from "../styles/detailsPost.module.scss";
import { Button } from "antd";
import { Progress } from "antd";
import { Rate } from "antd";
import { Divider } from "antd";
import { Tag } from "antd";
import { Form } from "antd";
import { Input } from "antd";
import { Checkbox } from "antd";
import { Select } from "antd";
import { getVideoByReaction, seacrhVideo } from "./api/video";
import { convertToMinutes } from "../common/functions";
import LayoutPage from "../component/Layout";
import Head from "next/head";
import { notification } from "antd";
import { message } from "antd";
import { useRouter } from "next/router";
import HighestUser from "../component/HighestUser";
import VideoMostLike from "../component/VIdeoMostLike";
import NewPlayList from "../component/NewPlayList";
import ButtonLoadMore from "../component/ButtonLoadMore";
import SwiperSearch from "../component/SwiperSearch";
export default function SearchPage() {
  const router = useRouter();
  const [videoData, setVideoData] = useState([]);
  const [listUserScore, setListUserScore] = useState([1, 2, 3, 4, 5, 6]);
  const [pageSize, setPageSize] = useState(6);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSizeMostLike, setPageSizeMostLike] = useState(3);
  const [pageIndexMostLike, setPageIndexMostLike] = useState(1);
  const [videoMostLike, setVideoMostLike] = useState([]);
  const [hasMoreMostLike, setHasMoreMostLike] = useState(
    videoMostLike.length < pageSizeMostLike ? false : true
  );
  const [hasMoreSearch, setHasMoreSearch] = useState(
    videoData?.length < pageSize ? false : true
  );

  const [totalItem, setTotalItem] = useState(0);
  const [loadingButtonMostLike, setLoadingButtonMostLike] = useState(false);
  const [loadingButtonSearch, setLoadingButtonSearch] = useState(false);
  const [playList, setPlayList] = useState([1, 2, 3]);
  const [loadingButton, setLoadingButton] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const [searchObject, setSearchObject] = useState({});
  useEffect(() => {
    setShowChild(true);
    getVideoByReaction(3, 1).then((data) => {
      setVideoMostLike(data);
      setHasMoreMostLike(data.length < pageSizeMostLike ? false : true);
    });
  }, []);
  useEffect(() => {
    const renewData = async () => {
      setPageIndex(1);
      seacrhVideo(router.query, 6, 1).then((data) => {
        setVideoData(data.docs);
        setTotalItem(data.totalDocs);
        setHasMoreSearch(data.hasNextPage);
      });
    };
    renewData();
    console.log("chạy lần");
  }, [router.query]);
  if (!showChild) {
    return null;
  }
  const handleLoadMoreSearch = () => {
    const searchModel =
      Object.keys(searchObject).length === 0 ? router.query : searchObject;
    setLoadingButtonSearch(true);
    setPageIndex(pageIndex + 1);
    seacrhVideo(searchModel, pageSize, pageIndex + 1).then((dataNew) => {
      setVideoData((data) => [...data, ...dataNew.docs]);
      setHasMoreSearch(dataNew.hasNextPage);
      setLoadingButtonSearch(false);
    });
  };
  const handleLoadMoreVideoLike = () => {
    setLoadingButtonMostLike(true);
    setPageIndexMostLike(pageIndexMostLike + 1);
    getVideoByReaction(pageSizeMostLike, pageIndexMostLike + 1).then(
      (dataNew) => {
        setVideoMostLike((data) => [...data, ...dataNew]);
        setLoadingButtonMostLike(false);
        setHasMoreMostLike(dataNew.length < pageSizeMostLike ? false : true);
      }
    );
  };

  const handleLoadMorePlayList = () => {
    setLoadingButton(true);
    setTimeout(() => {
      setPlayList((data) => [...data, ...data]);
      setLoadingButton(false);
    }, 2000);
  };
  const handleChangeSort = (value) => {
    router.query.sortBy = value;
    router.push(router);
    setSearchObject(router.query);
  };
  return (
    <LayoutPage>
      <div
        className="container_detailPost"
        style={{
          backgroundColor: "#010001",
          padding: "20px 10%",
        }}
      >
        <Head>
          <title>{videoData?.name}</title>
        </Head>
        <Row>
          <Col md={14} style={{ marginRight: "20px" }}>
            <Row>
              <Col md={24}>
                <div
                  className="container"
                  //   style={{ padding: "20px 10%", backgroundColor: "#010001" }}
                >
                  <div
                    className="top_title"
                    style={{
                      display: "flex",
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
                      <span style={{ color: "white" }}>Search Page</span>
                      <span
                        style={{
                          fontSize: "22px",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Search Results For: {router.query.q}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={24}>
                <Row>
                  <Col md={12} sm={24} xs={24}>
                    <Select
                      showSearch
                      style={{ width: 200, color: "white" }}
                      placeholder="Sắp xếp theo"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      onSelect={(value) => handleChangeSort(value)}
                      options={[
                        {
                          value: "title_a_z",
                          label: "Từ A-Z",
                        },
                        {
                          value: "title_z_a",
                          label: "Từ Z-A",
                        },
                        {
                          value: "reaction_highest",
                          label: "Theo Like (từ cao đến thấp)",
                        },
                        {
                          value: "reaction_lowest",
                          label: "Theo Like (từ thấp đến cao)",
                        },
                        {
                          value: "view_highest",
                          label: "Theo Views (từ cao đến thấp)",
                        },
                        {
                          value: "view_lowest",
                          label: "Theo Views (từ thấp đến cao)",
                        },
                        {
                          value: "time_lowest",
                          label: "Theo Thời Gian (từ thấp đến cao)",
                        },
                        {
                          value: "time_highest",
                          label: "Theo Thời Gian (từ cao đến thấp)",
                        },
                      ]}
                    />
                  </Col>
                  <Col
                    md={12}
                    sm={0}
                    xs={0}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      overflow: "hidden",
                    }}
                  >
                    <FaChartBar color="white" />
                    <span style={{ color: "white" }}>
                      There are {totalItem} items in this page
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col md={24}>
                <div
                  className="containerListVideo"
                  style={{ paddingTop: "20px" }}
                >
                  <Row gutter={[24, 24]}>
                    {videoData &&
                      videoData?.map((item, index) => (
                        <Col key={index} md={12} sm={24} xs={24}>
                          <Link href={`/${item.class}/${item.slug}`}>
                            <a>
                              <SwiperSearch item={item} />
                            </a>
                          </Link>
                        </Col>
                      ))}
                    <Col md={24}>
                      <ButtonLoadMore
                        hasMore={hasMoreSearch}
                        loading={loadingButtonSearch}
                        onClick={handleLoadMoreSearch}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            {/* <HighestUser listUserScore={listUserScore} /> */}

            <div className={styles["container_most_like_video"]}>
              <div className={styles["highest_title"]}>
                <AiFillLike
                  color="red"
                  size={30}
                  style={{ marginRight: "20px" }}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginRight: "5px",
                    color: "white",
                  }}
                >
                  Most Liked Videos
                </span>
              </div>
              <VideoMostLike
                hasMoreMostLike={hasMoreMostLike}
                videoMostLike={videoMostLike}
                loadingButtonMostLike={loadingButtonMostLike}
                handleLoadMoreVideoLike={handleLoadMoreVideoLike}
              />
            </div>
            {/* <div className={styles["container_new_playlist"]}>
              <div className={styles["highest_title"]}>
                <FaHeadphonesAlt
                  color="red"
                  size={30}
                  style={{ marginRight: "20px" }}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginRight: "5px",
                    color: "white",
                  }}
                >
                  New Playlists
                </span>
              </div>
              <NewPlayList
                playList={playList}
                handleLoadMorePlayList={handleLoadMorePlayList}
                loadingButton={loadingButton}
              />
            </div> */}
          </Col>
        </Row>
      </div>
    </LayoutPage>
  );
}
