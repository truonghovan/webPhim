import React from "react";
/* eslint-disable @next/next/no-img-element */
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
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import { Col } from "antd";
import { Row } from "antd";
import { Dropdown } from "antd";
import { Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import FooterLayout from "../Footer";
import { useRouter } from "next/router";
import { getCategoryPaging } from "../../pages/api/category";
const { Header, Sider, Content } = Layout;
export default function LayoutPage({ children }) {
  const [keyIndex, setKeyIndex] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const [path, setPath] = useState(router.asPath.slice(1));
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategoryPaging().then((data) => {
      console.log(data, "data");
      setCategory(data);
    });
  }, []);
  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          backgroundColor: "rgb(25,26,29)",
          borderRight: "1px solid #383838",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
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
      <Layout
        className="site-layout"
        style={{
          marginLeft: !collapsed ? 200 : 80,
        }}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: "0 10%",
            backgroundColor: "rgb(25,26,29)",
            height: "auto",
            position: "fixed",
            top: 0,
            zIndex: "9999999999999999",
            width: "100%",
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
                      defaultValue=""
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
                          item.children.length === 0 ? (
                            <Menu items={[{ label: "Không có dữ liệu" }]} />
                          ) : (
                            <Menu
                              items={item.children}
                              onClick={(e) => router.push(`/${e.key}`)}
                              expandIcon={
                                <CaretRightOutlined className="icon-menu" />
                              }
                            />
                          )
                        }
                        key={index}
                        arrow={true}
                        className="category-dropdown"
                        autoFocus={true}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          <Link key={index} href={`/${item.key}`}>
                            <Space>
                              {item.label}
                              {item.children.length === 0 ? null : (
                                <CaretDownOutlined />
                              )}
                            </Space>
                          </Link>
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
            marginTop: "169px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(25,26,29)",
              height: "100%",
            }}
          >
            {children}
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
}