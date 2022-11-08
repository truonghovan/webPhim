import { VideoCameraAddOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import EmblaCarousel from "../component/EmblaCarousel";
import NewAudios from "../component/NewAudios";
import NewMovie from "../component/NewMovie";
import styles from "../styles/emble.module.scss";
import HighestRated from "../component/Rated";
import { BsFilm, BsMusicNoteBeamed } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Script from "next/script";
import {
  getPremiumVideo,
  getVideoHighestRate,
  getVideoPaging,
  getVideoPagingByClass,
} from "./api/video";
import { useRouter } from "next/router";
import Head from "next/head";
import { isMobile } from "react-device-detect";
const HomePage = ({ videoNew, audioList, videoRating, premiumVideo }) => {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <div
        className="body"
        style={{
          backgroundColor: "#010001",
          marginBottom: "20px",
        }}
      >
        <Head>
          <title>Phim gì cũng có</title>
        </Head>
        {!isMobile && <EmblaCarousel slides={videoNew || []} />}
        <NewMovie
          data={videoNew}
          title="All Movies"
          category="New Movies"
          router={router}
          icon={
            <VideoCameraAddOutlined
              style={{ color: "white", fontSize: "20px" }}
            />
          }
        />
        <NewAudios
          data={audioList}
          router={router}
          title="All Audios"
          category="New Audios"
          icon={
            <BsMusicNoteBeamed style={{ color: "white", fontSize: "20px" }} />
          }
        />
        <NewMovie
          data={premiumVideo}
          router={router}
          title="All Videos"
          category="Premium Videos"
          quantity={4}
          icon={<FaPlay style={{ color: "white", fontSize: "20px" }} />}
        />
        <HighestRated
          data={videoRating}
          icon={<BsFilm style={{ color: "white", fontSize: "20px" }} />}
          title="Do Not Miss ^^"
          category="Highest Rated"
        />
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const [videoNew, audioList, videoRating, premiumVideo] = await Promise.all([
    getVideoPagingByClass("video", 10, 1),
    getVideoPagingByClass("audio", 10, 1),
    getVideoHighestRate(8, 1),
    getPremiumVideo(6, 1),
  ]);
  return {
    props: {
      videoNew: videoNew || [],
      audioList: audioList || [],
      videoRating: videoRating || [],
      premiumVideo: premiumVideo || [],
    }, // will be passed to the page component as props
  };
}
export default HomePage;
