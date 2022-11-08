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
  SearchOutlined,
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
import ModalVideo from "../ModalCreateVideo";
import MenuMobile from "../MenuMobile";
import { logo } from "../../assets/img";
import Icon from "@ant-design/icons/lib/components/AntdIcon";
const { Header, Sider, Content } = Layout;
import { isMobile } from "react-device-detect";
export default function LayoutPage({ children }) {
  const [keyIndex, setKeyIndex] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const [path, setPath] = useState(router.asPath.substring(1));
  const [category, setCategory] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [showChild, setShowChild] = useState(false);
  // const [path, setPath] = useState("");
  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => {
    getCategoryPaging().then((data) => {
      setCategory(data);
    });
  }, []);
  useEffect(() => {
    const asPath = router.asPath.substring(1);
    setPath(asPath);
  }, [router]);
  // const getCate = async () => {
  //   let cateList = await getCategoryPaging();
  //   setCategory(cateList);
  // };
  // getCategoryPaging().then((data) => {
  //   setCategory(data);
  // });
  // getCate();
  useEffect(() => {
    setValueSearch(router?.query?.q);
  }, [router.query]);
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  if (!showChild) {
    return null;
  }
  return (
    <Layout hasSider>
      {!isMobile && (
        <Sider
          breakpoint={"lg"}
          onBreakpoint={(check) =>
            check === true ? setCollapsed(true) : setCollapsed(false)
          }
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={50}
          width={"150px"}
          style={{
            backgroundColor: "rgb(25,26,29)",
            borderRight: "1px solid #383838",
            overflow: "auto",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: "9999",
          }}
        >
          <Link href={"/"}>
            <div className="logo">
              {!collapsed && (
                // eslint-disable-next-line @next/next/no-img-element
                <Image
                  src={logo}
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
              // {
              //   key: "history",
              //   icon: <HistoryOutlined />,
              //   label: "History",
              // },
              // {
              //   key: "notifications",
              //   icon: <NotificationOutlined />,
              //   label: "Notifications",
              // },
            ]}
          />
        </Sider>
      )}

      <Layout
        className="site-layout"
        // style={{
        //   marginLeft: !collapsed ? 200 : 50,
        // }}
      >
        <Row>
          <Col
            md={24}
            sm={24}
            xs={24}
            style={{
              minHeight: "135px",
              backgroundColor: "#191A1D",
              zIndex: "999",
            }}
            className="col-header"
          >
            <Header
              className="site-layout-background"
              style={{
                padding: "0 10%",
                backgroundColor: "rgb(25,26,29)",
                height: "auto",
                position: "fixed",
                top: 0,
                zIndex: "3",
                width: "100%",
              }}
            >
              <Row>
                <Col
                  md={24}
                  sm={24}
                  xs={24}
                  style={{ maxHeight: "80px !important" }}
                >
                  <div className="header_top" style={{ paddingTop: "0" }}>
                    <Row style={{ width: "100%" }}>
                      <Col xs={6} md={0}>
                        {isMobile && window.screen.width <= 576 && (
                          <MenuMobile items={items} onClick={onClick} />
                        )}
                      </Col>
                      <Col
                        md={4}
                        sm={4}
                        xs={12}
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          alignContent: "center",
                        }}
                      >
                        <Link href={"/"}>
                          <Image
                            className="logo_header"
                            src={logo}
                            style={{ paddingRight: "30px" }}
                            alt=""
                          />
                        </Link>
                      </Col>
                      <Col
                        md={12}
                        sm={12}
                        xs={24}
                        className="header_top col-input-search"
                        style={{
                          paddingTop: "0",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <Input
                          // addonBefore={<SearchOutlined />}
                          prefix={<SearchOutlined />}
                          className="input_search"
                          allowClear
                          style={{
                            width: isMobile ? "100%" : "80%",
                            alignItems: "center",
                            borderRadius: "20px",
                            backgroundColor: "#010001",
                            color: "white",
                          }}
                          onPressEnter={(e) =>
                            router.push(`/search?q=${e.target.value}`)
                          }
                          // suffix={<Icon type="smile" />}
                          value={valueSearch}
                          placeholder="Nhập từ khóa cần tìm kiếm"
                          // onSearch={(e) => router.push(`/search?q=${e}`)}
                          onChange={(e) => setValueSearch(e.target.value)}
                        />
                      </Col>
                      {/* <Col md={0} sm={0} xs={0}>
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
                        <ModalVideo open={open} setOpen={setOpen} />
                        <Col style={{ paddingTop: "20px" }}>
                          <Tooltip
                            placement="bottom"
                            color="white"
                            title={<span className="span-tooltip">Create</span>}
                          >
                            <div
                              className="icon_header"
                              onClick={() => setOpen(true)}
                            >
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
                  </Col> */}
                    </Row>
                  </div>
                </Col>

                <Col md={24} sm={24} xs={24}>
                  <Row>
                    {!isMobile && window.screen.width > 1024 && (
                      <Col md={4} sm={24} xs={24}>
                        {React.createElement(
                          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                          {
                            className: "trigger",
                            onClick: () => {
                              if (!isMobile) setCollapsed(!collapsed);
                            },
                          }
                        )}
                      </Col>
                    )}
                    <Col xs={0} md={24} lg={0}>
                      {isMobile && window.screen.width <= 1024 && (
                        <MenuMobile items={items} onClick={onClick} />
                      )}
                    </Col>
                    <Col md={18} sm={0}>
                      {category?.map((item, index) => {
                        return (
                          <Dropdown
                            overlay={
                              item?.children.length === 0 ? (
                                <Menu items={[{ label: "Không có dữ liệu" }]} />
                              ) : (
                                <Menu
                                  items={item?.children}
                                  onClick={(e) => router.push(`/${e.key}`)}
                                  expandIcon={
                                    <CaretRightOutlined className="icon-menu" />
                                  }
                                />
                              )
                            }
                            key={item?._id}
                            arrow={true}
                            className="category-dropdown"
                            autoFocus={true}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              <Link key={index} href={`/${item?.key}`}>
                                <Space
                                  className={
                                    path === item.key ? "active-label" : ""
                                  }
                                >
                                  {item?.label}
                                  {item?.children.length === 0 ? null : (
                                    <CaretDownOutlined />
                                  )}
                                </Space>
                              </Link>
                            </a>
                          </Dropdown>
                        );
                      })}
                    </Col>
                    {/* <Col>
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
                </Col> */}
                  </Row>
                </Col>
              </Row>
            </Header>
          </Col>

          <Col md={24} sm={24} xs={24} style={{ backgroundColor: "#010001" }}>
            <Content
              className="site-layout-background-content"
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
                {children}
              </div>
            </Content>
          </Col>
        </Row>

        <FooterLayout />
      </Layout>
    </Layout>
  );
}
