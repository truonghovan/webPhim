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
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var galleryThumbs = new Swiper(".gallery-thumbs", {
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesPerView: 3,
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: 'vertical'
          });
          
          var galleryMain = new Swiper(".gallery-main", {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            preventInteractionOnTransition: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
              fadeEffect: {
              crossFade: true
            },
            thumbs: {
              swiper: galleryThumbs
            }
          });
          
          galleryMain.on('slideChangeTransitionStart', function() {
            galleryThumbs.slideTo(galleryMain.activeIndex);
          });
          
          galleryThumbs.on('transitionStart', function(){
            galleryMain.slideTo(galleryThumbs.activeIndex);
          });
        `,
        }}
      />
      <div className={styles["gallery-container"]}>
        <div className={styles["swiper-container gallery-main"]}>
          <div className={styles["swiper-wrapper"]}>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Vertical</div>
              <img
                src="https://picsum.photos/seed/slide1/600/300"
                alt="Slide 01"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 02</div>
              <img
                src="https://picsum.photos/seed/slide2/600/300"
                alt="Slide 02"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 03</div>
              <img
                src="https://picsum.photos/seed/slide3/600/300"
                alt="Slide 03"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 04</div>
              <img
                src="https://picsum.photos/seed/slide4/600/300"
                alt="Slide 04"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 04</div>
              <img
                src="https://picsum.photos/seed/slide5/600/300"
                alt="Slide 05"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 06</div>
              <img
                src="https://picsum.photos/seed/slide6/600/300"
                alt="Slide 06"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 07</div>
              <img
                src="https://picsum.photos/seed/slide7/600/300"
                alt="Slide 07"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 08</div>
              <img
                src="https://picsum.photos/seed/slide8/600/300"
                alt="Slide 08"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 09</div>
              <img
                src="https://picsum.photos/seed/slide9/600/300"
                alt="Slide 09"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <div className={styles["gallery-title"]}>Slide 10</div>
              <img
                src="https://picsum.photos/seed/slide10/600/300"
                alt="Slide 10"
              />
            </div>
          </div>
          <div className={styles["swiper-button-prev"]}></div>
          <div className={styles["swiper-button-next"]}></div>
        </div>
        <div className={styles["swiper-container gallery-thumbs"]}>
          <div className={styles["swiper-wrapper"]}>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide1/115/100"
                alt="Slide 01"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide2/115/100"
                alt="Slide 02"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide3/115/100"
                alt="Slide 03"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide4/115/100"
                alt="Slide 04"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide5/115/100"
                alt="Slide 05"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide6/115/100"
                alt="Slide 06"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide7/115/100"
                alt="Slide 07"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide8/115/100"
                alt="Slide 08"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide9/115/100"
                alt="Slide 09"
              />
            </div>
            <div className={styles["swiper-slide"]}>
              <img
                src="https://picsum.photos/seed/slide10/115/100"
                alt="Slide 10"
              />
            </div>
          </div>
        </div>
      </div> */}
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
