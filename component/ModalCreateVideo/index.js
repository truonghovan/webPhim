import { Button, Modal } from "antd";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
const ModalVideo = ({ open, setOpen }) => {
  return (
    <>
      <Modal
        title={
          <div
            className="top_title"
            style={{
              display: "flex",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <div
              className="icon_top_title"
              style={{
                marginRight: "20px",
                width: "50px",
                display: "flex",
                height: "50px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                borderRadius: "15px",
              }}
            >
              <FaCloudUploadAlt style={{ color: "white", fontSize: "20px" }} />
            </div>
            <div style={{ display: "grid" }}>
              <span style={{ color: "white" }}>For Creators</span>
              <span
                style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
              >
                Submit Post
              </span>
            </div>
          </div>
        }
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        headStyle={{ backgroundColor: "#191A1D" }}
        bodyStyle={{
          backgroundColor: "#191A1D",
        }}
        style={{ background: "#191A1D" }}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default ModalVideo;
