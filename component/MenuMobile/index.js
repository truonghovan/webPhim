import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { getCategoryPaging } from "../../pages/api/category";

const MenuMobile = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategoryPaging().then((data) => {
      data?.map(
        (item) =>
          (item.label = (
            <Link href={`/${item?.cateSlug}`}>
              <a style={{ color: "black" }}>{item?.cateName}</a>
            </Link>
          ))
      );
      console.log(data);
      setCategory(data);
    });
  }, []);
  const menu = <Menu items={category} />;
  return (
    <Dropdown
      placement="bottomLeft"
      overlay={menu}
      trigger={["click"]}
      overlayStyle={{ color: "black" }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <FaList />
        </Space>
      </a>
    </Dropdown>
  );
};
export default MenuMobile;
