import { VideoCameraAddOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import EmblaCarousel from "../component/EmblaCarousel";
import NewAudios from "../component/NewAudios";
import NewMovie from "../component/NewMovie";
import styles from "../styles/emble.module.scss";
import HighestRated from "../component/Rated";
import { BsFilm, BsMusicNoteBeamed } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Script from "next/script";
const HomePage = () => {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className="body"
      style={{ backgroundColor: "#010001", marginBottom: "20px" }}
    >
      
      <EmblaCarousel slides={slides} />
      <NewMovie
        data={[]}
        title="New Audios"
        category="All Audios"
        icon={
          <VideoCameraAddOutlined
            style={{ color: "white", fontSize: "20px" }}
          />
        }
      />
      <NewAudios
        data={[]}
        title="All Audios"
        category="New Audios"
        icon={
          <BsMusicNoteBeamed style={{ color: "white", fontSize: "20px" }} />
        }
      />
      <NewMovie
        data={[]}
        title="All Videos"
        category="Premium Videos"
        quantity={4}
        icon={<FaPlay style={{ color: "white", fontSize: "20px" }} />}
      />
      <HighestRated
        icon={<BsFilm style={{ color: "white", fontSize: "20px" }} />}
        title="Do Not Miss ^^"
        category="Highest Rated"
      />
    </div>
  );
};
export default HomePage;
