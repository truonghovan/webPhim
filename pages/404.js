import { Button, Result } from "antd";
import Link from "next/link";
import React from "react";
import LayoutPage from "../component/Layout";

const Page404 = () => (
  <LayoutPage>
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, trang bạn truy cập không tồn tại."
      extra={
        <Link href={"/"}>
          <Button type="primary">Trang chủ</Button>
        </Link>
      }
    />
  </LayoutPage>
);

export default Page404;
