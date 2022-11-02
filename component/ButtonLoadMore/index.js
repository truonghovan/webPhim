import { Button } from "antd";
import React from "react";
import styles from "../../styles/detailsPost.module.scss";
export default function ButtonLoadMore({ hasMore, loading, onClick }) {
  return (
    <div className={styles["button_loadmore"]}>
      {hasMore ? (
        <Button
          type="primary"
          loading={loading}
          className="buttonColor"
          onClick={onClick}
        >
          Hiển thị thêm
        </Button>
      ) : (
        <Button
          type="primary"
          className="buttonColor"
          onClick={(e) => e.preventDefault()}
          color={"#DE0404"}
        >
          Không còn dữ liệu để hiển thị
        </Button>
      )}
    </div>
  );
}
