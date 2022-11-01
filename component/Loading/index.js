import styles from "../../styles/Loading.module.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 50,
    }}
    spin
  />
);
const Loading = () => {
  return (
    <div className={styles.loading}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loading;
