import { Col } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsStarHalf, BsLightbulb, BsFillCheckCircleFill } from "react-icons/bs";
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
  rateVideo,
} from "../api/video";
import { convertToMinutes } from "../../common/functions";
import { getCommentVideo } from "../api/comment";
import LayoutPage from "../../component/Layout";
import Head from "next/head";
import { notification } from "antd";
import { message } from "antd";
import { useRouter } from "next/router";
import VideoMostLike from "../../component/VIdeoMostLike";
import NewPlayList from "../../component/NewPlayList";
import CommentVideo from "../../component/CommentVideo";
import RelativePost from "../../component/RelativePost";
import ButtonLoadMore from "../../component/ButtonLoadMore";
import HighestUser from "../../component/HighestUser";
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
  const router = useRouter();
  const [videoData, setVideoData] = useState(videoBySlug);
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
  const [commentData, setCommentData] = useState(commentVideo);
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
  const [rate, setRate] = useState(null);
  useEffect(() => {
    setShowChild(true);
    setRate(localStorage.getItem(`rate${videoBySlug._id}`));
  }, []);
  useEffect(() => {
    const renewData = async () => {
      const videoBySlug = await getVideoBySlug(router.query.slug);
      setVideoData(videoBySlug);
      const [relativeVideo, commentVideo, videoReaction] = await Promise.all([
        getRelativeVideos(videoBySlug._id, 6, 1),
        getCommentVideo(videoBySlug._id),
        getVideoByReaction(3, 1),
      ]);
      setVideoRelative(relativeVideo);
      setCommentData(commentVideo);
      setVideoMostLike(videoReaction);
    };
    renewData();
  }, [router.query]);
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
        setHasMoreMostLike(dataNew.length < pageSizeMostLike ? false : true);
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
  const handleRateVideo = (value) => {
    rateVideo(videoBySlug._id, value).then((data) => {
      notification.success({
        message: "Rate this video",
        description: "Thanks so much",
      });
      getVideoBySlug(videoBySlug.slug).then((data) => setVideoData(data));
      localStorage.setItem(`rate${videoBySlug._id}`, value);
      setRate(value);
    });
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
          <title>{videoData.name}</title>
        </Head>
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
                playerId="4fv6q6z7"
                playerScript="https://content.jwplatform.com/libraries/j9BLvpMc.js"
                playlist={`https://cdn.jwplayer.com/v2/media/${videoData.videoId}`}
                // onReady={onReady}
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
                        {videoData?.category?.cateName || "Trường"}
                      </a>
                      <span
                        style={{
                          color: "#818182",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        - {moment(videoData?.createdAt).fromNow()}
                      </span>
                    </div>
                    <div
                      className="title_video"
                      style={{ marginBottom: "10px", marginRight: "10px" }}
                    >
                      <h1
                        style={{
                          color: "white",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {videoData.name}
                      </h1>
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
                          {commentData.length}
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
                          {videoData.views}
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
                          {commentData.length}
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
                      <Link
                        href={`/${relativeVideo[0]?.class}/${relativeVideo[0]?.slug}`}
                      >
                        <a className={styles["icon_video_icon"]}>
                          <FaAngleDoubleLeft size={20} color={"white"} />
                        </a>
                      </Link>
                    </Tooltip>
                    <Tooltip placement="top" title={"Next Video"}>
                      <Link
                        href={`/${relativeVideo[1]?.class}/${relativeVideo[1]?.slug}`}
                      >
                        <a className={styles["icon_video_icon"]}>
                          <FaAngleDoubleRight size={20} color={"white"} />
                        </a>
                      </Link>
                    </Tooltip>
                    <Tooltip placement="top" title={"Share"}>
                      <Link
                        href="https://www.facebook.com/sharer/sharer.php?u=webphimcuatruong.vn"
                        passHref
                      >
                        <a
                          className={styles["icon_video_icon"]}
                          target="_blank"
                        >
                          <FaShare size={20} color={"white"} />
                        </a>
                      </Link>
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
                            {videoData?.user?.fullName}
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
                            {videoData?.user?.subscriber.length || 0}{" "}
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
                        percent={Math.round(
                          (videoData.rate.total / (videoData.rate.amount * 5)) *
                            100
                        )}
                        success={{
                          percent: Math.round(
                            (videoData.rate.total /
                              (videoData.rate.amount * 5)) *
                              100
                          ),
                        }}
                        type="circle"
                        width={"70px"}
                      />
                    </div>
                    <div className={styles["author_name"]}>
                      <div className={styles["author_name_name"]}>
                        <FaUsers size={20} color={"white"} />
                        <span
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            paddingLeft: "10px",
                          }}
                        >
                          User Score
                        </span>
                      </div>
                      <div className={styles["author_name_sub"]}>
                        <FaComments size={18} color={"white"} />
                        <span
                          style={{
                            color: "white",
                            fontWeight: "400",
                            fontSize: "1rem",
                            paddingLeft: "10px",
                          }}
                        >
                          {videoData?.rate?.amount} Rating
                        </span>
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
                      onChange={(e) => handleRateVideo(e)}
                      disabled={rate ? true : false}
                      value={rate}
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
                <span style={{ color: "white" }}>{videoData?.description}</span>
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
              {/* <div className={styles["casts_review"]}>
                <div className={styles["container_logo_title"]}>
                  <div className={styles["icon_review"]}>
                    <FaPersonBooth color="white" size={20} />
                  </div>
                  <div className={styles["icon_title"]}>
                    <p style={{ color: "white" }}>
                      {videoData.people.casts.length} Items
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
                      {videoData.people.crews.length} Items
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
              </div> */}
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
              <Row>
                <Col md={12}>
                  <div className={styles["pre_video"]}>
                    <Link
                      href={`/${relativeVideo[0]?.class}/${relativeVideo[0]?.slug}`}
                    >
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
                        <img
                          src={relativeVideo[0].thumb}
                          style={{ height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <Link
                        href={`/${relativeVideo[0]?.class}/${relativeVideo[0]?.slug}`}
                      >
                        <a style={{ maxHeight: "55px", overflow: "hidden" }}>
                          <h3 className={styles["title_video"]}>
                            {relativeVideo[0].name}
                          </h3>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className={styles["next_video"]}>
                    <Link
                      href={`/${relativeVideo[1]?.class}/${relativeVideo[1]?.slug}`}
                    >
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
                      <Link
                        href={`/${relativeVideo[1]?.class}/${relativeVideo[1]?.slug}`}
                      >
                        <a style={{ maxHeight: "55px", overflow: "hidden" }}>
                          <h3 className={styles["title_video"]}>
                            {relativeVideo[1].name}
                          </h3>
                        </a>
                      </Link>
                      <div className={styles["thumb_video_next"]}>
                        <img
                          src={relativeVideo[1].thumb}
                          style={{ height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
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
              <RelativePost videoRelative={videoRelative} />
              <ButtonLoadMore
                hasMore={hasMoreRelative}
                loading={loadingButtonRelative}
                onClick={handleLoadMoreRelative}
              />
            </div>
            <CommentVideo onFinish={onFinish} onFinishFailed={onFinishFailed} />
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
