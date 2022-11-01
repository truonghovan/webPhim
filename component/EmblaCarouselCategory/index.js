import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./thumb";
import { mediaByIndex } from "./image";
import { Typography } from "antd";
import {
  CommentOutlined,
  EyeOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import styles from "../../styles/detailsPost.module.scss";
import { Button } from "antd";
import Link from "next/link";
import { convertToMinutes } from "../../common/functions";
const { Title } = Typography;
const EmblaCarousel = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [hover, setHover] = useState(false);
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);
  return (
    <div>
      <div className="embla" style={{ height: "70vh", minHeight: "540px" }}>
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {slides?.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <div
                    className="embla__slide__img"
                    style={{
                      backgroundImage: `url(${item.thumb})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      alignItems: "center",
                      backgroundSize: "cover",
                      alignItems: "center",
                      display: "flex",
                    }}
                    // bac={mediaByIndex(index).src}
                    alt="A cool cat."
                  >
                    <div
                      className="container-content-image"
                      style={{ width: "100%" }}
                    >
                      <Title
                        level={3}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <a style={{ fontSize: "2em", color: "white" }}>
                          {item.name}
                        </a>
                      </Title>
                      <div
                        className="embla__slide__img__button"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Link href="/">
                          {/* <Button
                            icon={<PlayCircleOutlined />}
                            style={{ fontWeight: "bold" }}
                          >
                            <span>WATCH NOW | {convertToMinutes(item.duration)}</span>
                          </Button> */}
                          <div
                            className={styles["button_loadmore"]}
                            style={{ margin: "0 30px" }}
                          >
                            <Link href={`/${item.class}/${item.slug}`}>
                              <Button
                                icon={<PlayCircleOutlined />}
                                className={styles["button_loadmore_butotn"]}
                                // onClick={handleLoadMoreVideo}
                                // loading={loadingButton}
                              >
                                WATCH NOW | {convertToMinutes(item.duration)}
                              </Button>
                            </Link>
                          </div>
                        </Link>
                        <Button
                          icon={<EyeOutlined />}
                          style={{ fontWeight: "bold" }}
                          onMouseEnter={() => setHover(true)}
                          // onMouseLeave={() => setHover(false)}
                        >
                          PREVIEW
                        </Button>
                      </div>
                    </div>
                    {/* {hover === true ? (
                      <video
                        autoPlay={true}
                        style={{ zIndex: "999999999999" }}
                        controls
                        src="https://cdn.jwplayer.com/v2/media/TAITbudl"
                        type="video/mp4"
                      />
                    ) : null} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: "40px",
            top: "auto",
            zIndex: "2",
            transform: "50%",
            padding: "0 10%",
          }}
        >
          <div
            className="embla .embla--thumb--cate"
            style={{
              height: "130px",
              minHeight: "120px",
              backgroundColor: "unset",
            }}
          >
            <div className="embla__viewport" ref={thumbViewportRef}>
              <div className="embla__container embla__container--thumb--cate">
                {slides?.map((item, index) => (
                  <Thumb
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    imgSrc={item.thumb}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
