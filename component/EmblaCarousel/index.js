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
const { Title } = Typography;
const EmblaCarousel = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
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
      <div className="embla">
        <div className="embla__viewport">
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <div
                    className="embla__slide__img"
                    style={{
                      backgroundImage: `url(${"https://vm.beeteam368.net/wp-content/uploads/2021/11/cosplay-5344250_1920-1.jpg"})`,
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
                        <a style={{ fontSize: "4.3em", color: "white" }}>
                          Con mèo con
                        </a>
                      </Title>
                      <div className="embla__slide__img__button">
                        <Link href="/">
                          <Button
                            icon={<PlayCircleOutlined />}
                            style={{ fontWeight: "bold" }}
                          >
                            WATCH NOW | 01:42
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb" style={{ height: "20vh" }}>
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={mediaByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
