import { Button, Result } from "antd";
import Link from "next/link";
import React from "react";

const Page404 = () => (
  <>
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
  </>
);

export default Page404;
