import { Col } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsStarHalf, BsLightbulb, BsFillCheckCircleFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import "moment/locale/vi";
import moment from "moment";
import {
  FaChartLine,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaShare,
  FaEllipsisH,
  FaUsers,
  FaComments,
  FaAngleDoubleDown,
  FaPersonBooth,
  FaSadCry,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaNewspaper,
  FaHandHoldingWater,
  FaHeadphonesAlt,
  FaTv,
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
import ReactJWPlayer from "react-jw-player";
import styles from "../../styles/detailsPost.module.scss";
import { Tooltip } from "antd";
import { Button } from "antd";
import { Progress } from "antd";
import { Rate } from "antd";
import { Divider } from "antd";
import { Tag } from "antd";
import { Form } from "antd";
import { Input } from "antd";
import { Checkbox } from "antd";
import { Select } from "antd";
import {
  getRelativeVideos,
  getVideoByReaction,
  getVideoBySlug,
} from "../api/video";
import { convertToMinutes } from "../../common/functions";
import { getCommentVideo } from "../api/comment";
import LayoutPage from "../../component/Layout";
export default function DetailPost({
  quantity,
  category,
  slug,
  videoBySlug,
  relativeVideo,
  commentVideo,
  videoReaction,
}) {
  const provinceData = ["Zhejiang", "Jiangsu"];
  const cityData = {
    Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
  };
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const [listTag, setListTag] = useState(["2012", "2022", "Chines"]);
  const [listVideo, setListVideo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [listUserScore, setListUserScore] = useState([1, 2, 3, 4, 5, 6]);
  const [pageSizeMostLike, setPageSizeMostLike] = useState(3);
  const [pageIndexMostLike, setPageIndexMostLike] = useState(1);
  const [pageSizeRelative, setPageSizeRelative] = useState(6);
  const [pageIndexRelative, setPageIndexRelative] = useState(1);
  const [hasMoreMostLike, setHasMoreMostLike] = useState(
    videoReaction.length < pageSizeMostLike ? false : true
  );
  const [hasMoreRelative, setHasMoreRelative] = useState(
    relativeVideo.length < pageSizeRelative ? false : true
  );
  const [loadingButtonMostLike, setLoadingButtonMostLike] = useState(false);
  const [loadingButtonRelative, setLoadingButtonRelative] = useState(false);
  const [videoMostLike, setVideoMostLike] = useState(videoReaction);
  const [videoRelative, setVideoRelative] = useState(relativeVideo);
  const [playList, setPlayList] = useState([1, 2, 3]);
  const [listBestTV, setListBestTV] = useState([1, 2, 3]);

  const [loadingButton, setLoadingButton] = useState(false);
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const handleLoadMoreVideo = () => {
    setLoadingButton(true);
    setTimeout(() => {
      setListVideo((data) => [...data, ...data]);
      setLoadingButton(false);
    }, 2000);
  };
  const handleLoadMoreVideoLike = () => {
    setLoadingButtonMostLike(true);
    setPageIndexMostLike(pageIndexMostLike + 1);
    getVideoByReaction(pageSizeMostLike, pageIndexMostLike + 1).then(
      (dataNew) => {
        setVideoMostLike((data) => [...data, ...dataNew]);
        setLoadingButtonMostLike(false);
        setHasMoreRelative(dataNew.length < pageSizeMostLike ? false : true);
      }
    );
  };
  const handleLoadMoreRelative = () => {
    setLoadingButtonRelative(true);
    setPageIndexRelative(pageIndexRelative + 1);
    getRelativeVideos(
      videoBySlug._id,
      pageSizeRelative,
      pageIndexRelative + 1
    ).then((dataNew) => {
      setVideoRelative((data) => [...data, ...dataNew]);
      setLoadingButtonRelative(false);
      setHasMoreRelative(dataNew.length < pageSizeRelative ? false : true);
    });
  };
  const handleLoadMorePlayList = () => {
    setLoadingButton(true);
    setTimeout(() => {
      setPlayList((data) => [...data, ...data]);
      setLoadingButton(false);
    }, 2000);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        <Row>
          <Col md={14} style={{ marginRight: "20px" }}>
            <div
              className="jw-video-container"
              data-mediaid="TAITbudl"
              style={{
                width: "100%",
                backgroundColor: "#191A1D",
                borderRadius: "5px",
              }}
            >
              <ReactJWPlayer
                playerId="nDXU1Zv8"
                playerScript="https://content.jwplatform.com/libraries/j9BLvpMc.js"
                playlist={videoBySlug.videoURL}
                // onReady={onReady}
                onPic
              />
              <div className={styles["container_video"]}>
                <Row>
                  <Col md={14}>
                    <div>
                      <a
                        style={{
                          color: "#0D8B08",
                          fontWeight: "bold",
                          fontSize: "13px",
                          marginRight: "5px",
                        }}
                      >
                        {videoBySlug?.category?.cateName || "Trường"}
                      </a>
                      <span
                        style={{
                          color: "#818182",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        - {moment(videoBySlug?.createdAt).fromNow()}
                      </span>
                    </div>
                    <div
                      className="title_video"
                      style={{ marginBottom: "10px", marginRight: "10px" }}
                    >
                      <Link href={"/"}>
                        <h1
                          style={{
                            color: "white",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          {videoBySlug.name}
                        </h1>
                      </Link>
                    </div>
                    <div
                      className="list_icon_reaction"
                      style={{ display: "flex" }}
                    >
                      <div className={styles["icon_element"]}>
                        <a className={styles["icon_element_icon"]}>
                          <AiOutlineComment size={25} color={"white"} />
                        </a>
                        <span
                          className="quantity_comment"
                          style={{ fontSize: "20px", color: "white" }}
                        >
                          {commentVideo.length}
                        </span>
                      </div>
                      <div className={styles["icon_element"]}>
                        <a className={styles["icon_element_icon"]}>
                          <AiOutlineEye size={25} color={"white"} />
                        </a>
                        <span
                          className="quantity_comment"
                          style={{ fontSize: "20px", color: "white" }}
                        >
                          {videoBySlug.views}
                        </span>
                      </div>
                      <div className={styles["icon_element"]}>
                        <a className={styles["icon_element_icon"]}>
                          <FaChartLine size={25} color={"white"} />
                        </a>
                        <span
                          className="quantity_comment"
                          style={{ fontSize: "20px", color: "white" }}
                        >
                          {commentVideo.length}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col className={styles["icon_video"]}>
                    <Tooltip placement="top" title={"Turn Of Light"}>
                      <a className={styles["icon_video_icon"]}>
                        <BsLightbulb size={20} color={"white"} />
                      </a>
                    </Tooltip>
                    <Tooltip placement="top" title={"Auto Next"}>
                      <a className={styles["icon_video_icon"]}>
                        <AiFillFastForward size={20} color={"white"} />
                      </a>
                    </Tooltip>
                    <Tooltip placement="top" title={"Previos Video"}>
                      <a className={styles["icon_video_icon"]}>
                        <FaAngleDoubleLeft size={20} color={"white"} />
                      </a>
                    </Tooltip>
                    <Tooltip placement="top" title={"Next Video"}>
                      <a className={styles["icon_video_icon"]}>
                        <FaAngleDoubleRight size={20} color={"white"} />
                      </a>
                    </Tooltip>
                    <Tooltip placement="top" title={"Share"}>
                      <a className={styles["icon_video_icon"]}>
                        <FaShare size={20} color={"white"} />
                      </a>
                    </Tooltip>
                    <Tooltip placement="top" title={"More"}>
                      <a className={styles["icon_video_icon"]}>
                        <FaEllipsisH size={20} color={"white"} />
                      </a>
                    </Tooltip>
                  </Col>
                </Row>
              </div>
              <div className={styles["container_video"]}>
                <Row>
                  <Col md={16} className={styles["info_author"]}>
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
                            {videoBySlug?.user?.fullName}
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
                            {videoBySlug?.user?.subscriber.length || 0}{" "}
                            Subscribers
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
            <div className={styles["container_review"]}>
              <div className={styles["title"]}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Reviews
                </h2>
              </div>
              <div className={styles["overview_review"]}>
                <Row>
                  <Col md={16} className={styles["info_author"]}>
                    <div className={styles[""]}>
                      <Progress
                        percent={
                          (videoBySlug.rate.total /
                            (videoBySlug.rate.amount * 5)) *
                          100
                        }
                        success={{
                          percent:
                            (videoBySlug.rate.total /
                              (videoBySlug.rate.amount * 5)) *
                            100,
                        }}
                        type="circle"
                        width={"70px"}
                      />
                    </div>
                    <div className={styles["author_name"]}>
                      <div className={styles["author_name_name"]}>
                        <FaUsers size={20} color={"white"} />
                        <Link href={"/"}>
                          <a
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1.1rem",
                              paddingLeft: "10px",
                            }}
                          >
                            User Score
                          </a>
                        </Link>
                      </div>
                      <div className={styles["author_name_sub"]}>
                        <FaComments size={18} color={"white"} />
                        <Link href={"/"}>
                          <span
                            style={{
                              color: "white",
                              fontWeight: "400",
                              fontSize: "1rem",
                              paddingLeft: "10px",
                            }}
                          >
                            {videoBySlug?.rate?.amount} Rating
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col className={styles["rate_container"]}>
                    <h3
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                      }}
                    >
                      Rate This
                    </h3>
                    <Rate
                      style={{ fontSize: "30px" }}
                      onChange={(e) => console.log(e)}
                    />
                  </Col>
                </Row>
              </div>
              <Divider style={{ backgroundColor: "#282828" }} />
              <div className={styles["description_review"]}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Descriptions:
                </h2>
                <span style={{ color: "white" }}>
                  {videoBySlug?.description}
                </span>
                {/* Button Show More Descriptions */}
                {/* <div style={{ marginTop: "20px" }}>
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor: "#3C3F46",
                    borderColor: "unset",
                  }}
                  icon={<FaAngleDoubleDown color="white" />}
                >
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    Show More
                  </span>
                </Button>
              </div> */}
              </div>
              <div className={styles["casts_review"]}>
                <div className={styles["container_logo_title"]}>
                  <div className={styles["icon_review"]}>
                    <FaPersonBooth color="white" size={20} />
                  </div>
                  <div className={styles["icon_title"]}>
                    <p style={{ color: "white" }}>
                      {videoBySlug.people.casts.length} Items
                    </p>
                    <span
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                      }}
                    >
                      Casts
                    </span>
                  </div>
                </div>
                <div className={styles["container_casts"]}>
                  <Row gutter={[8, 24]}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <Col
                        md={8}
                        key={item}
                        className={styles["container_casts_item"]}
                      >
                        <div className={styles["image_casts"]}>
                          <img src="https://vm.beeteam368.net/wp-content/uploads/2021/12/jenny-marvin-HYvcYh-BNo0-unsplash-200x300.jpg" />
                        </div>
                        <div className={styles["cast-variant-content"]}>
                          <h3 className={styles["name_casts"]}>Jack Rapke</h3>
                          <div className={styles["reaction_casts"]}>
                            <div className={styles["reaction_casts_listicon"]}>
                              <FcLike size={20} />
                              <AiFillDislike size={20} color={"#0A84FF"} />
                              <FaSadCry size={20} color={"#FF9F0A"} />
                            </div>
                            <span className={styles["quantity_reaction"]}>
                              8
                            </span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        backgroundColor: "#3C3F46",
                        borderColor: "unset",
                      }}
                      icon={<FaAngleDoubleDown color="white" />}
                    >
                      <span style={{ color: "white", fontWeight: "bold" }}>
                        Show More
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className={styles["crews_review"]}>
                <div className={styles["container_logo_title"]}>
                  <div className={styles["icon_review"]}>
                    <FaUsers color="white" size={20} />
                  </div>
                  <div className={styles["icon_title"]}>
                    <p style={{ color: "white" }}>
                      {videoBySlug.people.crews.length} Items
                    </p>
                    <span
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                      }}
                    >
                      Crews
                    </span>
                  </div>
                </div>
                <div className={styles["container_casts"]}>
                  <Row gutter={[8, 24]}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <Col
                        md={8}
                        key={item}
                        className={styles["container_casts_item"]}
                      >
                        <div className={styles["image_casts"]}>
                          <img src="https://vm.beeteam368.net/wp-content/uploads/2021/12/medicalert-uk-uXB-7la5vqA-unsplash-88x132.jpg" />
                        </div>
                        <div className={styles["cast-variant-content"]}>
                          <h3 className={styles["name_casts"]}>Jack Rapke</h3>
                          <div className={styles["reaction_casts"]}>
                            <div className={styles["reaction_casts_listicon"]}>
                              <FcLike size={20} />
                              <AiFillDislike size={20} color={"#0A84FF"} />
                              <FaSadCry size={20} color={"#FF9F0A"} />
                            </div>
                            <span className={styles["quantity_reaction"]}>
                              8
                            </span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        backgroundColor: "#3C3F46",
                        borderColor: "unset",
                      }}
                      icon={<FaAngleDoubleDown color="white" />}
                    >
                      <span style={{ color: "white", fontWeight: "bold" }}>
                        Show More
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <Divider style={{ backgroundColor: "#282828" }} />
              <div className={styles["tags_review"]}>
                <div className={styles["title"]}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Tags
                  </h2>
                </div>
                <div className={styles["list_tag"]}>
                  {listTag.map((item, index) => (
                    <Link key={index} href={`/${item}`}>
                      <a>
                        <Tag color="#3C3F46">{item}</Tag>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles["container_nextvideo"]}>
              <div className={styles["pre_video"]}>
                <Link href={"/1/2"}>
                  <a className={styles["container_pre_video"]}>
                    <FaLongArrowAltLeft
                      color="white"
                      className={styles["icon_prev"]}
                    />
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        color: "white",
                        marginLeft: "15px",
                      }}
                      className={styles["titlePrev"]}
                    >
                      Prev
                    </span>
                  </a>
                </Link>
                <div className={styles["content_prev_video"]}>
                  <div className={styles["thumb_video_prev"]}>
                    <img src="https://vm.beeteam368.net/wp-content/uploads/2021/11/car-g103967bd0_1920-150x150.jpg" />
                  </div>
                  <Link href={"/"}>
                    <a>
                      <h3 className={styles["title_video"]}>
                        Self-Hosted Video
                      </h3>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles["next_video"]}>
                <Link href={"/1/2"}>
                  <a className={styles["container_next_video"]}>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        color: "white",
                      }}
                      className={styles["titlePrev"]}
                    >
                      Next
                    </span>
                    <FaLongArrowAltRight
                      color="white"
                      className={styles["icon_next"]}
                    />
                  </a>
                </Link>
                <div className={styles["content_next_video"]}>
                  <Link href={"/"}>
                    <a>
                      <h3 className={styles["title_video"]}>
                        Self-Hosted Video
                      </h3>
                    </a>
                  </Link>
                  <div className={styles["thumb_video_next"]}>
                    <img src="https://vm.beeteam368.net/wp-content/uploads/2021/11/car-g103967bd0_1920-150x150.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["container_relatedpost"]}>
              <div className={styles["container_logo_title"]}>
                <div className={styles["icon_review"]}>
                  <FaNewspaper color="white" size={20} />
                </div>
                <div className={styles["icon_title"]}>
                  <p style={{ color: "white" }}>
                    {videoRelative.length} Related Posts
                  </p>
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                    }}
                  >
                    Related Posts
                  </span>
                </div>
              </div>
              <div className={styles["list_post"]}>
                <Row gutter={[24, 24]}>
                  {videoRelative.map((item) => (
                    <Col md={8} key={item}>
                      <Link href={"/1/2"}>
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
                                  bottom: "40px",
                                  left: "20px",
                                }}
                              >
                                <Progress
                                  type="circle"
                                  percent={
                                    (item.rate.total / (item.rate.amount * 5)) *
                                    100
                                  }
                                  width={35}
                                  success={{
                                    percent:
                                      (item.rate.total /
                                        (item.rate.amount * 5)) *
                                      100,
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
                                <Link
                                  href={`/${item?.category?.cateSlug}/${item?.slug}`}
                                >
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
                                    46
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
                                    46
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
              <div className={styles["button_loadmore"]}>
                {hasMoreRelative ? (
                  <Button
                    type="primary"
                    loading={loadingButtonRelative}
                    className="buttonColor"
                    onClick={handleLoadMoreRelative}
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
                  onClick={handleLoadMoreVideo}
                  loading={loadingButton}
                >
                  Load More
                </Button> */}
              </div>
            </div>
            <div className={styles["comment"]}>
              <div className={styles["title"]}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Leave your comment
                </h2>
              </div>
              {/* <div className={styles["title"]}>Leave your comment</div> */}
              <Divider style={{ backgroundColor: "#282828" }} />
              <div className={styles["form_comment"]}>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Row gutter={[32, 8]}>
                    <Col md={24}>
                      {" "}
                      <Form.Item
                        name="comment"
                        rules={[
                          {
                            required: true,
                            message: "Please input your comment!",
                          },
                        ]}
                      >
                        <Input.TextArea
                          rows={4}
                          placeholder="Your Comment"
                          maxLength={6}
                        />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input placeholder="Your Name" />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input placeholder="Your Email" />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item
                        name="website"
                        rules={[
                          {
                            required: true,
                            message: "Please input your website!",
                          },
                        ]}
                      >
                        <Input placeholder="Your Website" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox style={{ color: "white" }}>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className={styles["button_loadmore_butotn"]}
                    >
                      POST COMMENT
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className={styles["container_highest"]}>
              <div className={styles["highest_title"]}>
                <BsStarHalf
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
                  Highest Reaction Score
                </span>
              </div>
              <div className={styles["listUserScore"]}>
                <Row>
                  {listUserScore.map((item) => (
                    <Col
                      md={24}
                      className={styles["info_author_user"]}
                      key={item}
                    >
                      <div className={styles["img_info_author_user"]}>
                        <img src="https://secure.gravatar.com/avatar/119915a6b9fb9c5149b70ee96a7bc1a6?s=61&d=mm&r=g"></img>
                      </div>
                      <div className={styles["user_score_author_name"]}>
                        <div className={styles["user_score_author_name_name"]}>
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
                          <FaHandHoldingWater size={18} color={"white"} />
                          <Link href={"/"}>
                            <span
                              style={{
                                color: "white",
                                fontWeight: "400",
                                fontSize: "1rem",
                                paddingLeft: "10px",
                              }}
                            >
                              Reaction score: 100.9K
                            </span>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
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

              <div className={styles["container_listvideo_mostlike"]}>
                <Row>
                  {/* <Col md={24} style={{ marginBottom: "30px" }}>
                    {" "}
                    <Select
                      className={styles["select_sort_video"]}
                      style={{ width: "100%", color: "white" }}
                      value={secondCity}
                      onChange={onSecondCityChange}
                    >
                      {cities.map((city) => (
                        <Select.Option key={city}>{city}</Select.Option>
                      ))}
                    </Select>
                  </Col> */}
                  {videoMostLike.map((item) => (
                    <Col md={24} key={item._id}>
                      <SwiperSlide
                        key={item}
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
                            backgroundImage: `url(${item.thumb})`,
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
                              percent={
                                (item.rate.total / (item.rate.amount * 5)) * 100
                              }
                              width={35}
                              success={{
                                percent:
                                  (item.rate.total / (item.rate.amount * 5)) *
                                  100,
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
                                {item.name}
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
                                {item.reactions} Reactions
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
                                {item.views} Views
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <Divider style={{ backgroundColor: "#282828" }} />
                    </Col>
                  ))}
                  <Col md={24}>
                    <div className={styles["button_loadmore"]}>
                      {hasMoreMostLike ? (
                        <Button
                          type="primary"
                          loading={loadingButtonMostLike}
                          className="buttonColor"
                          onClick={handleLoadMoreVideoLike}
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
                        onClick={handleLoadMoreVideoLike}
                        loading={loadingButton}
                      >
                        Load More
                      </Button> */}
                    </div>
                  </Col>
                </Row>
              </div>
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
              <div className={styles["container_listvideo_mostlike"]}>
                <Row>
                  {playList.map((item) => (
                    <Col md={24} key={item}>
                      <SwiperSlide
                        key={item}
                        style={{
                          maxHeight: "400px",
                          borderRadius: "10px",
                          height: "30vh",
                          display: "block",
                          backgroundColor: "#191A1D",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url("https://vm.beeteam368.net/wp-content/uploads/2021/12/hacker-6741676_1920-420x237.jpg")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            alignItems: "center",
                            backgroundSize: "cover",
                            position: "relative",
                            height: "70%",
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
                              percent={
                                (item.rate?.total / (item.rate?.amount * 5)) *
                                100
                              }
                              width={35}
                              success={{
                                percent:
                                  (item.rate?.total / (item.rate?.amount * 5)) *
                                  100,
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
                        <div className={styles["info_bottom"]}>
                          <div
                            style={{
                              display: "grid",
                              textAlign: "start",
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
                                  fontSize: "1.2rem",
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
                                alignItems: "start",
                                justifyContent: "start",
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
                        </div>
                      </SwiperSlide>
                      <Divider style={{ backgroundColor: "#282828" }} />
                    </Col>
                  ))}
                  <Col md={24}>
                    <div className={styles["button_loadmore"]}>
                      <Button
                        className={styles["button_loadmore_butotn"]}
                        onClick={handleLoadMorePlayList}
                        loading={loadingButton}
                      >
                        Load More
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className={styles["container_best_tvshow"]}>
              <div className={styles["highest_title"]}>
                <FaTv color="red" size={30} style={{ marginRight: "20px" }} />
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginRight: "5px",
                    color: "white",
                  }}
                >
                  Best TV Shows
                </span>
              </div>
              <div className={styles["container_listvideo_mostlike"]}>
                <Row>
                  {listBestTV.map((item) => (
                    <Col md={24} key={item}>
                      <SwiperSlide
                        key={item}
                        style={{
                          maxHeight: "400px",
                          borderRadius: "10px",
                          height: "25vh",
                          minHeight: "150px",
                          display: "flex",
                          backgroundColor: "#191A1D",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url("https://vm.beeteam368.net/wp-content/uploads/2021/12/hacker-6741676_1920-420x237.jpg")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            alignItems: "center",
                            backgroundSize: "cover",
                            position: "relative",
                            height: "90%",
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
                              bottom: "70px",
                              left: "20px",
                            }}
                          >
                            <Progress
                              type="circle"
                              percent={
                                (item.rate?.total / (item.rate?.amount * 5)) *
                                100
                              }
                              width={35}
                              success={{
                                percent:
                                  (item.rate?.total / (item.rate?.amount * 5)) *
                                  100,
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
                      </SwiperSlide>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </LayoutPage>
  );
}
export async function getServerSideProps({ params }) {
  const { category, slug } = params;
  const videoBySlug = await getVideoBySlug(slug);
  const [relativeVideo, commentVideo, videoReaction] = await Promise.all([
    getRelativeVideos(videoBySlug._id, 6, 1),
    getCommentVideo(videoBySlug._id),
    getVideoByReaction(3, 1),
  ]);
  return {
    props: {
      category: category || "",
      slug: slug || "",
      videoBySlug: videoBySlug || {},
      relativeVideo: relativeVideo || [],
      commentVideo: commentVideo || [],
      videoReaction: videoReaction || [],
    }, // will be passed to the page component as props
  };
}
