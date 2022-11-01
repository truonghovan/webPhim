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
import {
  FaFunnelDollar,
  FaVideo,
  FaMusic,
  FaList,
  FaBlog,
  FaHeart,
  FaClock,
  FaBell,
  FaHistory,
  FaStarHalfAlt,
  FaThumbsUp,
  FaScroll,
  FaComments,
} from "react-icons/fa";
import { Pagination, Navigation } from "swiper";
import { Select } from "antd";
import { useRouter } from "next/router";
import VideosChannel from "../../../component/ChannelTab/Videos";
import AudiosChannel from "../../../component/ChannelTab/Audios";
import PlaylistsChannel from "../../../component/ChannelTab/Playlists";
import TransferHistory from "../../../component/ChannelTab/TransferHistory";
import WatchLater from "../../../component/ChannelTab/WatchLater";
import LayoutPage from "../../../component/Layout";
import { getVideoByChannel } from "../../api/video";
const listTab = [
  { link: "videos", title: "Videos", icon: <FaVideo color="white" /> },
  { link: "audios", title: "Audios", icon: <FaMusic color="white" /> },
  { link: "playlists", title: "Playlists", icon: <FaList color="white" /> },
  { link: "posts", title: "Posts", icon: <FaBlog color="white" /> },
  {
    link: "transferhistory",
    title: "Transfer History",
    icon: <FaFunnelDollar color="white" />,
  },
  {
    link: "subscriptions",
    title: "Subscriptions",
    icon: <FaHeart color="white" />,
  },
  { link: "watchlater", title: "Watch Later", icon: <FaClock color="white" /> },
  {
    link: "notifications",
    title: "Notifications",
    icon: <FaBell color="white" />,
  },
  { link: "history", title: "History", icon: <FaHistory color="white" /> },
  { link: "rated", title: "Rated", icon: <FaStarHalfAlt color="white" /> },
  { link: "reacted", title: "Reacted", icon: <FaThumbsUp color="white" /> },
  { link: "about", title: "About", icon: <FaScroll color="white" /> },
  {
    link: "discussion",
    title: "Discussion",
    icon: <FaComments color="white" />,
  },
];
export default function ChannelTabPage({ tab }) {
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
  const router = useRouter();
  return (
    <LayoutPage>
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
              {listTab.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={
                    tab === item.link
                      ? styles["slider_tab-active"]
                      : styles["slider_tab"]
                  }
                  onClick={() => router.push(`/channel/1/${item.link}`)}
                >
                  <Link href={`/channel/1/${item.link}`}>
                    <div className={styles["container_slider_tab"]}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div className={styles["icon_tab"]}>{item.icon}</div>
                      </div>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </Link>
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
              {tab === "videos" && <VideosChannel data={videoByTag} />}
              {tab === "audios" && <AudiosChannel data={videoByTag} />}
              {tab === "playlists" && <PlaylistsChannel data={videoByTag} />}
              {tab === "posts" && <PlaylistsChannel data={videoByTag} />}
              {tab === "transferhistory" && (
                <TransferHistory data={videoByTag} />
              )}
              {tab === "watchlater" && <WatchLater data={videoByTag} />}
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
export async function getServerSideProps({ params }) {
  const [videoByChannel] = await Promise.all([getVideoByChannel(params.id)]);
  return {
    props: {
      tab: params.tab,
      id: params.id || "",
      videoByChannel: videoByChannel || [],
    }, // will be passed to the page component as props
  };
}
