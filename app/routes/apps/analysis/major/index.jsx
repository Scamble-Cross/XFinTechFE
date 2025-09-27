import { DatePicker, Modal, Popover, Select, Slider, Table } from "antd";
import { useState } from "react";
import { Container, Tab } from "react-bootstrap";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockCommon from "~/components/Common/Block";
import PieChart from "~/components/Common/Chart/Pie";
import SectorChart from "~/components/Common/Chart/Sector";
import BvpsChart from "~/components/Financial/Chart";
import ModalChart from "~/components/Common/Modal/Chart";
import ModalAdd from "~/components/Common/Modal/Add";
import ModalMatching from "~/components/Common/Modal/Matching";

import {
  AnalyticsItem,
  BorderBlock,
  CompareTab,
  FilterPrice,
  FinancialHeader,
  PopoverScale,
  RecommendBlock,
  ScaleContainer,
  ScaleList,
  SummaryAnalysis,
  SummaryBottom,
  TagAdd,
  TagCommon,
} from "~/layout/styled";

const Major = () => {
  const [selected, setSelected] = useState(1);
  const [isModalMatching, setIsModalMatching] = useState(false);
  const [isModalChart, setIsModalChart] = useState(false);
  const [isModalAdd, setIsModalAdd] = useState(false);

  const selectData = [
    { value: 1, label: "Bất động sản" },
    { value: 2, label: "Ngân hàng" },
    { value: 3, label: "Tài chính" },
    { value: 4, label: "Kinh tế" },
  ];

  const scaleData = [
    {
      id: 1,
      title: "Giá trị khớp lệnh",
    },
    {
      id: 2,
      title: "Số công ty niêm yết, 2025 - Q1",
    },
    {
      id: 3,
      title: "Tổng tài sản, 2025 - Q1",
    },
  ];

  const analyticsData = [
    {
      id: 1,
      title: "Tiêu đề",
    },
    {
      id: 2,
      title: "Tiêu đề",
    },
    {
      id: 3,
      title: "Tiêu đề",
    },
    {
      id: 4,
      title: "Tiêu đề",
    },
    {
      id: 5,
      title: "Tiêu đề",
    },
    {
      id: 6,
      title: "Tiêu đề",
    },
    {
      id: 7,
      title: "Tiêu đề",
    },
    {
      id: 8,
      title: "Tiêu đề",
    },
    {
      id: 9,
      title: "Tiêu đề",
    },
    {
      id: 10,
      title: "Tiêu đề",
    },
  ];

  const data = [
    {
      key: 1,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 12.04,
      exchange: "UPCOM",
      percent: 10.13,
    },
    {
      key: 2,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 8.45,
      exchange: "HOSE",
      percent: 13.46,
    },
    {
      key: 3,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 7,
      exchange: "HNX",
      percent: 12.04,
    },
    {
      key: 4,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 6.12,
      exchange: "HOSE",
      percent: 6.12,
    },
    {
      key: 5,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 5.97,
      exchange: "HOSE",
      percent: 5.97,
    },
  ];

  const columns = [
    {
      title: "Mã CK",
      dataIndex: "code",
      key: "code",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Tên công ty",
      dataIndex: "company",
      key: "company",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ngành chi tiết",
      dataIndex: "major",
      key: "major",
      render: (text) => <p>--</p>,
    },
    {
      title: "Sàn GD",
      dataIndex: "exchange",
      key: "exchange",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "% tăng giá",
      dataIndex: "percent",
      key: "percent",
      render: (text) => <p>{text}%</p>,
    },
    {
      title: "Hạng % tăng giá",
      dataIndex: "key",
      key: "key",
      render: (text) => (
        <p
          style={{
            textAlign: "center",
          }}
        >
          {text}
        </p>
      ),
    },
    {
      title: "ROE",
      dataIndex: "roe",
      key: "roe",
      render: (text) => <p>{text}%</p>,
    },
    {
      title: "P/E",
      dataIndex: "pe",
      key: "pe",
      render: (text) => <p>{text}</p>,
    },
  ];

  const handleChange = (value) => {
    setSelected(value);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleOk = () => {
    setIsModalMatching(false);
  };

  const handleCancel = () => {
    setIsModalMatching(false);
  };

  const handleOkChart = () => {
    setIsModalChart(false);
  };

  const handleCancelChart = () => {
    setIsModalChart(false);
  };

  const handleOkAdd = () => {
    setIsModalAdd(false);
  };

  const handleCancelAdd = () => {
    setIsModalAdd(false);
  };

  return (
    <>
      <Container fluid="xxl" className="pt-4">
        <Tab.Container activeKey="overview">
          <Select
            style={{
              marginBottom: "30px",
              minWidth: "200px",
            }}
            defaultValue="Bất động sản"
            onChange={handleChange}
            options={selectData}
          />
          <BlockCommon
            title="Quy mô ngành"
            component={
              <ScaleContainer>
                <ScaleList>
                  {scaleData.map((item) => {
                    return (
                      <li key={item.id}>
                        <Popover
                          content={
                            <PopoverScale>
                              <p
                                onClick={() => {
                                  setIsModalMatching(true);
                                }}
                              >
                                Chi tiết Giá trị khớp lệnh
                              </p>
                              <p
                                onClick={() => {
                                  setIsModalChart(true);
                                }}
                              >
                                Giá trị khớp lệnh theo thời gian
                              </p>
                            </PopoverScale>
                          }
                        >
                          <div
                            style={{
                              width: "100%",
                            }}
                          >
                            <PieChart title={item.title} />
                          </div>
                        </Popover>
                      </li>
                    );
                  })}
                </ScaleList>
                <SectorChart />
              </ScaleContainer>
            }
          />
          <BlockCommon
            title="Phân tích tài chính ngành"
            component={
              <>
                <BorderBlock
                  style={{
                    padding: "5px",
                  }}
                >
                  <FinancialHeader>
                    <CompareTab>
                      <TagCommon className="bold">Bất động sản</TagCommon>
                      <TagAdd
                        onClick={() => {
                          setIsModalAdd(true);
                        }}
                      >
                        Thêm ngành so sánh
                      </TagAdd>
                    </CompareTab>
                    <div className="financial-quarter">
                      <DatePicker
                        onChange={onChange}
                        picker="quarter"
                        placeholder="Chọn quý"
                      />
                      <DatePicker
                        onChange={onChange}
                        picker="quarter"
                        placeholder="Chọn quý"
                      />
                    </div>
                  </FinancialHeader>
                </BorderBlock>
                <BorderBlock
                  style={{
                    padding: "5px",
                    marginTop: "5px",
                  }}
                >
                  <BvpsChart type={2} />
                </BorderBlock>
              </>
            }
          />
          <BlockCommon
            title="Báo cáo phân tích ngành"
            component={
              <>
                <SummaryAnalysis>
                  <div></div>
                  <p>Báo cáo phân tích - ACB - 2025 - Q1.pdf</p>
                </SummaryAnalysis>
                <SummaryBottom>
                  <h3>Báo cáo phân tích khác</h3>
                  <BorderBlock>
                    <Swiper
                      loop={true}
                      slidesPerView={5}
                      spaceBetween={15}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                    >
                      {analyticsData.map((item) => (
                        <SwiperSlide key={item.id}>
                          <AnalyticsItem>
                            <div></div>
                            <p>{item.title}</p>
                          </AnalyticsItem>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </BorderBlock>
                </SummaryBottom>
              </>
            }
          />
          <BlockCommon
            title="Danh sách công ty trong ngành"
            component={
              <RecommendBlock>
                <BorderBlock
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <FilterPrice>
                    <h3>% tăng giá</h3>
                    <div>
                      <p>Thời gian</p>
                      <DatePicker onChange={onChange} />
                      <DatePicker onChange={onChange} />
                      <Slider range defaultValue={[20, 50]} />
                    </div>
                  </FilterPrice>
                </BorderBlock>
                <Table
                  bordered
                  columns={columns}
                  dataSource={data}
                  pagination={{ hideOnSinglePage: true, pageSize: 20 }}
                />
              </RecommendBlock>
            }
          />
        </Tab.Container>
      </Container>
      <Modal
        closable={false}
        open={isModalAdd}
        onOk={handleOkAdd}
        onCancel={handleCancelAdd}
        footer={false}
        width={700}
      >
        <ModalAdd handleCancelAdd={handleCancelAdd} />
      </Modal>
      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalMatching}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ModalMatching />
      </Modal>
      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalChart}
        width={1000}
        onOk={handleOkChart}
        onCancel={handleCancelChart}
        footer={false}
      >
        <ModalChart />
      </Modal>
    </>
  );
};

export default Major;
