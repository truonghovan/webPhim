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
  }, [router.query]);
  if (!showChild) {
    return null;
  }
  const handleLoadMoreSearch = () => {
    console.log(Object.keys(searchObject).length);
    const searchModel =
      Object.keys(searchObject).length === 0 ? router.query : searchObject;
    setLoadingButtonSearch(true);
    setPageIndex(pageIndex + 1);
    console.log(searchModel);
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
                  <Col md={12}>
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
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
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
                                  <div
                                    style={{
                                      display: "flex",
                                      padding: "20px 20px",
                                    }}
                                  >
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
                                      style={{
                                        display: "grid",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <BsFillCheckCircleFill
                                          size={15}
                                          color={"#6AC46D"}
                                        />
                                        <Link
                                          href={`/${item.class}/${item.slug}`}
                                        >
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
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <AiOutlineHeart
                                          size={18}
                                          color={"white"}
                                        />
                                        <Link
                                          href={`/${item.class}/${item.slug}`}
                                        >
                                          <span
                                            style={{
                                              color: "white",
                                              fontWeight: "400",
                                              fontSize: "1rem",
                                              paddingLeft: "10px",
                                            }}
                                          >
                                            {item?.user?.subscriber?.length}{" "}
                                            Subscribers
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
                                          <span style={{ color: "black" }}>
                                            HD
                                          </span>
                                        </Tag>
                                      </Col>
                                      <Col>
                                        <Tag
                                          color="#8C36E0"
                                          icon={<CrownOutlined />}
                                        >
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
                                      percent={Math.round(
                                        (item.rate.total /
                                          (item.rate.amount * 5)) *
                                          100
                                      )}
                                      width={35}
                                      success={{
                                        percent: Math.round(
                                          (item.rate.total /
                                            (item.rate.amount * 5)) *
                                            100
                                        ),
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
            <HighestUser listUserScore={listUserScore} />

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
            <div className={styles["container_new_playlist"]}>
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
            </div>
          </Col>
        </Row>
      </div>
    </LayoutPage>
  );
}
