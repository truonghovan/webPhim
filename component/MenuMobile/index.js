import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import React from "react";

const MenuMobile = ({ items, onClick }) => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default MenuMobile;
