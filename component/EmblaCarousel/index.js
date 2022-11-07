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
import { Button } from "antd";
import Link from "next/link";
import { convertToMinutes } from "../../common/functions";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const { Title } = Typography;
const EmblaCarousel = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel(
    {
      axis: "y",
      selectedClass: "",
      dragFree: false,
    }
    // [WheelGesturesPlugin({ forceWheelAxis: "y" })]
  );

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );
  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);
  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);
  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    onSelect();
  }, [embla, onSelect, onScroll]);
  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);
  return (
    <div style={{ position: "relative" }}>
      <div className="embla" style={{ minHeight: "400px" }}>
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {slides &&
              slides?.map((item, index) => (
                <div className="embla__slide" key={index}>
                  <Link href={`/${item?.class}/${item?.slug}`}>
                    <a>
                      <div className="embla__slide__inner">
                        <div
                          className="embla__slide__img"
                          style={{
                            backgroundImage: `url(${item?.thumb})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            alignItems: "center",
                            backgroundSize: "cover",
                            alignItems: "center",
                            display: "flex",
                          }}
                          alt="A cool cat."
                        >
                          <div className="container-content-image">
                            <Title level={3}>
                              <a style={{ fontSize: "2em", color: "white" }}>
                                {item?.name}
                              </a>
                            </Title>
                            <div className="embla__slide__img__button">
                              <Link href={`/${item?.class}/${item?.slug}`}>
                                <Button
                                  icon={<PlayCircleOutlined />}
                                  style={{
                                    fontWeight: "bold",
                                    backgroundColor: "#DE0404",
                                    border: "unset",
                                  }}
                                  className="button__watch__now"
                                >
                                  WATCH NOW | {convertToMinutes(item?.duration)}
                                </Button>
                              </Link>
                              <Button
                                icon={<EyeOutlined />}
                                style={{ fontWeight: "bold" }}
                              >
                                PREVIEW
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        className="embla--thumb"
        style={{ position: "absolute", top: 0, right: "50px", width: "13%" }}
      >
        <div
          className="embla__viewport"
          ref={thumbViewportRef}
          style={{ marginTop: "-20vh", height: "75vh" }}
        >
          <div
            className="embla__container embla__container--thumb"
            style={{
              margin: "0 5px",
            }}
          >
            {slides?.map((item, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={item?.thumb}
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div
        className="embla embla--thumb"
        style={{ height: "20vh", minHeight: "100px" }}
      >
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {slides.map((item, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={item?.thumb}
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EmblaCarousel;
