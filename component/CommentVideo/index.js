import { Form } from "antd";
import { Col } from "antd";
import { Checkbox } from "antd";
import { Button } from "antd";
import { Input } from "antd";
import { Row } from "antd";
import { Divider } from "antd";
import React from "react";
import styles from "../../styles/detailsPost.module.scss";
export default function CommentVideo({ onFinish, onFinishFailed }) {
  return (
    <div className={styles["comment"]}>
      <div className={styles["title"]}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Leave your comment
        </h2>
      </div>
      {/* <div className={styles["title"]}>Leave your comment</div> */}
      <Divider style={{ backgroundColor: "#282828" }} />
      <div className={styles["form_comment"]}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[32, 8]}>
            <Col md={24} sm={24} xs={24}>
              {" "}
              <Form.Item
                name="comment"
                rules={[
                  {
                    required: true,
                    message: "Please input your comment!",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Your Comment"
                  maxLength={6}
                />
              </Form.Item>
            </Col>
            <Col md={8} sm={24} xs={24}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
            </Col>
            <Col md={8} sm={24} xs={24}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
            </Col>
            <Col md={8} sm={24} xs={24}>
              <Form.Item
                name="website"
                rules={[
                  {
                    required: true,
                    message: "Please input your website!",
                  },
                ]}
              >
                <Input placeholder="Your Website" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox style={{ color: "white" }}>
              Save my name, email, and website in this browser for the next time
              I comment.
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles["button_loadmore_butotn"]}
            >
              POST COMMENT
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
