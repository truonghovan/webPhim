import { Col } from "antd";
import { Row } from "antd";
import Link from "next/link";
import React from "react";
import { BsFillCheckCircleFill, BsStarHalf } from "react-icons/bs";
import { FaHandHoldingWater } from "react-icons/fa";
import styles from "../../styles/detailsPost.module.scss";
export default function HighestUser({ listUserScore }) {
  return (
    <div className={styles["container_highest"]}>
      <div className={styles["highest_title"]}>
        <BsStarHalf color="red" size={30} style={{ marginRight: "20px" }} />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginRight: "5px",
            color: "white",
          }}
        >
          Highest Reaction Score
        </span>
      </div>
      <div className={styles["listUserScore"]}>
        <Row>
          {listUserScore.map((item) => (
            <Col md={24} className={styles["info_author_user"]} key={item}>
              <div className={styles["img_info_author_user"]}>
                <img src="https://secure.gravatar.com/avatar/119915a6b9fb9c5149b70ee96a7bc1a6?s=61&d=mm&r=g"></img>
              </div>
              <div className={styles["user_score_author_name"]}>
                <div className={styles["user_score_author_name_name"]}>
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
                      Nicolas
                    </a>
                  </Link>
                </div>
                <div className={styles["author_name_sub"]}>
                  <FaHandHoldingWater size={18} color={"white"} />
                  <Link href={"/"}>
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1rem",
                        paddingLeft: "10px",
                      }}
                    >
                      Reaction score: 100.9K
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
