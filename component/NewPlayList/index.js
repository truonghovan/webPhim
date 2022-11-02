import {
  CrownOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Col } from "antd";
import { Progress } from "antd";
import { Tag } from "antd";
import { Button } from "antd";
import { Divider } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { SwiperSlide } from "swiper/react";
import { convertToMinutes } from "../../common/functions";
import styles from "../../styles/detailsPost.module.scss";
export default function NewPlayList({
  playList,
  handleLoadMorePlayList,
  loadingButton,
}) {
  return (
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
                      <Tag color="#108ee9" icon={<ThunderboltOutlined />}>
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
                    percent={Math.round(
                      (item.rate?.total / (item.rate?.amount * 5)) * 100
                    )}
                    width={35}
                    success={{
                      percent: Math.round(
                        (item.rate?.total / (item.rate?.amount * 5)) * 100
                      ),
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
  );
}
