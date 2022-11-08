import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { getCategoryPaging } from "../../pages/api/category";

const MenuMobile = () => {
  const [category, setCategory] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    getCategoryPaging().then((data) => {
      data?.map(
        (item) =>
          (item.label = (
            <Link href={`/${item?.cateSlug}`}>
              <a
                style={{ color: "black" }}
                onClick={() => {
                  setVisible(false);
                }}
              >
                {item?.cateName}
              </a>
            </Link>
          ))
      );
      setCategory(data);
    });
  }, []);
  const menu = <Menu items={category} onClick={() => setVisible(false)} />;
  return (
    <Dropdown
      placement="bottomLeft"
      overlay={menu}
      onOpenChange={(e) => setVisible(e)}
      open={visible}
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
