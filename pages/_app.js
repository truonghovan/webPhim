/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import {
  CaretDownOutlined,
  CaretRightOutlined,
  HistoryOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../styles/reset.css";
import "../styles/newmovie.css";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "antd";
import { useRouter } from "next/router";
import { Input } from "antd";
import { Col } from "antd";
import { Row } from "antd";
import { Dropdown } from "antd";
import { Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import "../styles/embla.css";
import FooterLayout from "../component/Footer";
const { Header, Sider, Content } = Layout;
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Group title",
        children: [
          {
            key: "1-1",
            label: "1st menu item",
          },
          {
            key: "1-2",
            label: "2nd menu item",
          },
        ],
      },
      {
        key: "2",
        label: "sub menu",
        children: [
          {
            key: "21",
            label: "3rd menu item",
          },
          {
            key: "22",
            label: "4th menu item",
          },
        ],
      },
      {
        key: "3",
        label: "disabled sub menu",
        disabled: true,
        children: [
          {
            key: "3-1",
            label: "5d menu item",
          },
          {
            key: "3-2",
            label: "6th menu item",
          },
        ],
      },
    ]}
  />
);
function MyApp({ Component, pageProps }) {
  const [keyIndex, setKeyIndex] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const [path, setPath] = useState(router.asPath.slice(1));
  const category = [
    { key: "cate1", label: "Home" },
    {
      key: "cate2",
      label: "Video",
      children: [
        {
          key: "21",
          label: "Playlist",
          children: [
            { key: "cate-3-1", label: "HTML" },
            { key: "cate-4-1", label: "CSS" },
            { key: "cate-5-1", label: "Javascript" },
          ],
        },
        { key: "22", label: "Nodejs" },
      ],
    },
    { key: "cate-3", label: "Music" },
    { key: "cate-4", label: "Workout" },
    { key: "cate-5", label: "Yoga" },
  ];
  useEffect(() => {
    setPath(router.asPath.slice(1));
  }, [router.asPath]);
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          backgroundColor: "rgb(25,26,29)",
          borderRight: "1px solid #383838",
        }}
      >
        <Link href={"/"}>
          <div className="logo">
            {!collapsed && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="https://vm.beeteam368.net/wp-content/uploads/2021/11/side-logo-dark.png"
                alt="logo"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
              />
            )}
          </div>
        </Link>
        <Menu
          style={{ backgroundColor: "rgb(25,26,29)", fontWeight: "bold" }}
          theme="dark"
          selectedKeys={[path]}
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ item, key, keyPath, domEvent }) => {
            router.push(`/${key}`);
          }}
          items={[
            {
              key: "",
              icon: <UserOutlined />,
              label: "Home",
            },
            {
              key: "trending",
              icon: <ThunderboltOutlined />,
              label: "Trending",
            },
            {
              key: "history",
              icon: <HistoryOutlined />,
              label: "History",
            },
            {
              key: "notifications",
              icon: <NotificationOutlined />,
              label: "Notifications",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: "0 10%",
            backgroundColor: "rgb(25,26,29)",
            height: "auto",
          }}
        >
          <Row>
            <Col md={24}>
              <div className="header_top">
                <Row style={{ width: "100%" }}>
                  <Col md={4}>
                    <Link href={"/"}>
                      <img
                        className="logo_header"
                        src="https://vm.beeteam368.net/wp-content/uploads/2021/11/main-logo-dark.png"
                        style={{ paddingRight: "30px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={12} className="header_top">
                    <Input.Search
                      allowClear
                      style={{
                        width: "80%",
                        alignItems: "center",
                        backgroundColor: "rgb(1,0,1)",
                      }}
                      defaultValue="26888888"
                      placeholder="Nhập từ khóa cần tìm kiếm"
                      // loading
                    />
                  </Col>
                  <Col md={8}>
                    <div className="header_icon">
                      <Row gutter={[16, 16]}>
                        <Col style={{ paddingTop: "20px" }}>
                          <Tooltip
                            placement="bottom"
                            color="white"
                            title={
                              <span className="span-tooltip">Go Live</span>
                            }
                          >
                            <div className="icon_header">
                              <WifiOutlined className="icon" />
                            </div>
                          </Tooltip>
                        </Col>
                        <Col style={{ paddingTop: "20px" }}>
                          <Tooltip
                            placement="bottom"
                            color="white"
                            title={<span className="span-tooltip">Create</span>}
                          >
                            <div className="icon_header">
                              <PlusOutlined className="icon" />
                            </div>
                          </Tooltip>
                        </Col>
                        <Col style={{ paddingTop: "20px" }}>
                          <Tooltip
                            placement="bottom"
                            color="white"
                            title={
                              <span className="span-tooltip">
                                Notifications
                              </span>
                            }
                          >
                            <div className="icon_header">
                              <NotificationOutlined className="icon" />
                            </div>
                          </Tooltip>
                        </Col>
                        <Col style={{ paddingTop: "20px" }}>
                          <Tooltip
                            placement="bottom"
                            color="white"
                            title={
                              <span className="span-tooltip">Watch Later</span>
                            }
                          >
                            <div className="icon_header">
                              <HistoryOutlined className="icon" />
                            </div>
                          </Tooltip>
                        </Col>
                        <Col style={{ paddingTop: "20px" }}>
                          <Tooltip
                            placement="bottom"
                            color="white"
                            title={<span className="span-tooltip">Cart</span>}
                          >
                            <div className="icon_header">
                              <ShoppingCartOutlined className="icon" />
                            </div>
                          </Tooltip>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={24}>
              <Row>
                <Col md={4}>
                  {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: () => setCollapsed(!collapsed),
                    }
                  )}
                </Col>
                <Col md={18}>
                  {category.map((item, index) => {
                    return (
                      <Dropdown
                        overlay={
                          <Menu
                            items={item.children}
                            expandIcon={
                              <CaretRightOutlined className="icon-menu" />
                            }
                          />
                        }
                        trigger={
                          item.children === undefined ? ["click"] : ["hover"]
                        }
                        key={index}
                        arrow={true}
                        className="category-dropdown"
                        autoFocus={true}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            {item.label}
                            {item.children === undefined ? null : (
                              <CaretDownOutlined />
                            )}
                          </Space>
                        </a>
                      </Dropdown>
                    );
                  })}
                </Col>
                <Col>
                  <Col style={{ paddingTop: "20px" }}>
                    <Tooltip
                      placement="bottom"
                      color="white"
                      title={
                        <span className="span-tooltip">
                          Click to login or register
                        </span>
                      }
                    >
                      <div className="icon_header">
                        <UserOutlined className="icon" />
                      </div>
                    </Tooltip>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            minHeight: 280,
            backgroundColor: "#010001",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(25,26,29)",
              height: "100%",
            }}
          >
            <Component {...pageProps} />
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
  // return <Component {...pageProps} />
}

export default MyApp;
