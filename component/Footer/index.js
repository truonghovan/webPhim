import React, { useState } from "react";
import { Layout } from "antd";
import { Col, Row } from "antd";
import {
  AiFillPlayCircle,
  AiOutlinePlaySquare,
  AiOutlineInfo,
  AiFillInfoCircle,
  AiFillMobile,
} from "react-icons/ai";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { Button } from "antd";
import Link from "next/link";
import { Divider } from "antd";
import Image from "next/image";
import { logoAppStore, logoGooglePlay } from "../../assets/img";
const { Footer } = Layout;
export default function FooterLayout() {
  const [category, setListCategory] = useState([
    "Gaming",
    "Movies",
    "Sports",
    "Entertainment",
    "Music",
    "TV Shows",
  ]);
  return (
    <div>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "rgb(25,26,29)",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <Row gutter={[32, 8]}>
          <Col md={6}>
            <div>
              <div
                className="about"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <AiFillPlayCircle
                  color="red"
                  size={30}
                  style={{ marginRight: "20px" }}
                />
                <span>About VidMov</span>
              </div>
              <div
                className="content__footer__about"
                style={{
                  textAlign: "start",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                <p>
                  VidMov is a Responsive WordPress Theme best suitable for
                  VIDEO, MOVIE, PODCAST, NEWS, MAGAZINE, BLOG or REVIEW SITES.
                </p>
                <p style={{ margin: "10px 0" }}>
                  Each and every element has been tested to ensure it adapts to
                  modern smartphones and tablets.
                </p>
              </div>
              <div>
                <Button
                  type="primary"
                  danger
                  style={{ display: "flex", alignItems: "center" }}
                  //   icon={<FaAngleDoubleRight />}
                  size={30}
                >
                  FIND OUT MORE
                  <FaAngleDoubleRight />
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <div
                className="about"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <BsMenuButtonWideFill
                  color="red"
                  size={30}
                  style={{ marginRight: "20px" }}
                />
                <span>Categories</span>
              </div>
              <div
                className="list_category"
                style={{
                  textAlign: "start",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                {category?.map((item, index) => (
                  <div key={index}>
                    <Link href={`/${index}`}>
                      <a
                        style={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <AiOutlinePlaySquare />
                        <span style={{ marginLeft: "20px" }}>{item}</span>
                      </a>
                    </Link>
                    <Divider />
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <div
                className="about"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <AiFillInfoCircle
                  color="red"
                  size={30}
                  style={{ marginRight: "20px" }}
                />
                <span>Infomations</span>
              </div>
              <div
                className="list_category"
                style={{
                  textAlign: "start",
                  fontSize: "15px",
                  fontWeight: "600",
                  marginLeft: "5px",
                }}
              >
                {category?.map((item, index) => (
                  <div key={index}>
                    <Link href={`/${index}`}>
                      <a
                        style={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <AiOutlinePlaySquare />
                        <span style={{ marginLeft: "20px" }}>{item}</span>
                      </a>
                    </Link>
                    <Divider />
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <div
                className="about"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <AiFillMobile
                  color="red"
                  size={30}
                  style={{ marginRight: "20px" }}
                />
                <span>Mobile Apps</span>
              </div>
              <div
                className="list_category"
                style={{
                  textAlign: "start",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                <p>
                  Download Now Mobile and enjoy it on your iPhone, iPad, and
                  iPod touch... all from a modern mobile app powered by the
                  VidMov Platform.
                </p>
              </div>
              <div
                className="qrcode"
                style={{ display: "flex", marginTop: "20px" }}
              >
                <Link href={"/"}>
                  <a style={{ marginRight: "20px" }}>
                    <Image
                      src={logoAppStore}
                      alt="logo"
                      width={180}
                      height={60}
                    />
                  </a>
                </Link>
                <Link href={"/"}>
                  <a>
                    <Image
                      src={logoGooglePlay}
                      alt="logo"
                      width={180}
                      height={60}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}
