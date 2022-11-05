import {
  CrownOutlined,
  LineChartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { Col } from "antd";
import { Progress } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillEye, AiFillHeart } from "react-icons/ai";
import { SwiperSlide } from "swiper/react";
import { convertToMinutes } from "../../../common/functions";
import { getVideoByChannel } from "../../../pages/api/video";
import ButtonLoadMore from "../../ButtonLoadMore";
import "moment/locale/vi";
import moment from "moment";
import { useRouter } from "next/router";
export default function VideosChannel({ data, id, sortBy }) {
  useEffect(() => {
    setDataVideo(data.docs);
    setHasMore(data.hasNextPage);
    setPageIndex(1);
  }, [data]);
  const [dataVideo, setDataVideo] = useState(data.docs || []);
  const [total, setTotal] = useState(data.totalDocs);
  const [pageSize, setPageSize] = useState(6);
  const [pageIndex, setPageIndex] = useState(1);
  const [hasMore, setHasMore] = useState(data.hasNextPage);
  const [loadingButton, setLoadingButton] = useState(false);
  const handleLoadMore = () => {
    setLoadingButton(true);
    setPageIndex(pageIndex + 1);
    getVideoByChannel({ id: id, sortBy: sortBy }, pageSize, pageIndex + 1).then(
      (dataNew) => {
        setDataVideo((data) => [...data, ...dataNew.docs]);
        setLoadingButton(false);
        setHasMore(dataNew.hasNextPage);
      }
    );
  };
  return (
    <div>
      <Row gutter={[24, 24]}>
        {dataVideo &&
          dataVideo?.map((item, index) => (
            <Col lg={8} md={12} sm={24} xs={24} key={item?._id}>
              <SwiperSlide
                key={item?._id}
                style={{
                  maxHeight: "400px",
                  borderRadius: "10px",
                  height: "30vh",
                  minHeight: "300px",
                  display: "block",
                  backgroundColor: "#191A1D",
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${item?.thumb})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    alignItems: "center",
                    backgroundSize: "cover",
                    position: "relative",
                    height: "85%",
                    width: "100%",
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
                            {convertToMinutes(item?.duration)}
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
                      bottom: "70px",
                      left: "20px",
                    }}
                  >
                    <Progress
                      type="circle"
                      percent={Math.round(
                        (item?.rate?.total / (item?.rate?.amount * 5)) * 100
                      )}
                      width={35}
                      success={{
                        percent: Math.round(
                          (item?.rate?.total / (item?.rate?.amount * 5)) * 100
                        ),
                      }}
                      style={{ backgroundColor: "black", borderRadius: "50%" }}
                    />
                    <Tag
                      color="#0E0806"
                      icon={<LineChartOutlined />}
                      style={{ marginLeft: "10px" }}
                    >
                      1
                    </Tag>
                  </div>
                  <div
                    className="name_movie"
                    style={{
                      position: "absolute",
                      bottom: "35px",
                      left: "20px",
                      maxHeight: "30px",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {item?.name}
                    </span>
                  </div>
                </div>
                <div className="info_bottom">
                  <div
                    style={{
                      display: "grid",
                      textAlign: "center",
                      paddingTop: "10px",
                    }}
                  ></div>
                  <div className="author">
                    <div
                      className="name_author"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#818182",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {moment(item?.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Col>
          ))}
        <Col md={24}>
          <ButtonLoadMore
            hasMore={hasMore}
            loading={loadingButton}
            onClick={handleLoadMore}
          />
        </Col>
      </Row>
    </div>
  );
}
