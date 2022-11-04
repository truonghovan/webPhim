import { Col } from "antd";
import { Tooltip } from "antd";
import { Button } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import { getUserByUserName } from "../../api/user";
const listTab = [
  { link: "video", title: "Videos", icon: <FaVideo color="white" /> },
  { link: "audio", title: "Audios", icon: <FaMusic color="white" /> },
  { link: "playlist", title: "Playlists", icon: <FaList color="white" /> },
  { link: "post", title: "Posts", icon: <FaBlog color="white" /> },
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
export default function ChannelTabPage({
  tab,
  id,
  videoByChannel,
  sortBy,
  userInfo,
}) {
  const [dataVideo, setDataVideo] = useState(videoByChannel);
  const router = useRouter();
  const handleChangeSort = (value) => {
    router.query.sortBy = value;
    router.push(router);
    getVideoByChannel({ id: id, sortBy: value }, 6, 1).then((data) =>
      setDataVideo(data)
    );
  };

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
                          {userInfo.fullName}
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
                          {userInfo.subscriber.length} Subscribers
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
                    "video" === item.link
                      ? styles["slider_tab-active"]
                      : styles["slider_tab"]
                  }
                  onClick={() => router.push(`/channel/${id}/${item.link}`)}
                >
                  <Link href={`/channel/${id}/${item.link}`}>
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
              <Row style={{ width: "100%" }}>
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
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div className={styles["quantity_item_per_page"]}>
                    There are {dataVideo.totalDocs} items in this tab
                  </div>
                </Col>
              </Row>
            </div>
            <div className={styles["listpostbytag"]}>
              <VideosChannel data={dataVideo} id={id} sortBy={sortBy} />
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
export async function getServerSideProps(context) {
  const [videoByChannel, userInfo] = await Promise.all([
    getVideoByChannel(context.query, 6, 1),
    getUserByUserName(context.params.id),
  ]);
  console.log(userInfo, "userInfo");
  return {
    props: {
      tab: context?.params?.tab || "",
      id: context?.params?.id || "",
      videoByChannel: videoByChannel || [],
      sortBy: context?.query?.sortBy || {},
      userInfo: userInfo || {},
    }, // will be passed to the page component as props
  };
}
