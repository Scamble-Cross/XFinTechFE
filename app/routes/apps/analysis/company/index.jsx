import { DatePicker, Select, Table } from "antd";
import { Container, Tab } from "react-bootstrap";
import BlockCommon from "~/components/Common/Block";
import {
  AnalyticsItem,
  BlockPriceChart,
  BorderBlock,
  CompareBlock,
  CompareTab,
  FinancialAnalysis,
  FinancialBody,
  FinancialHeader,
  FinancialTabs,
  MarketContainer,
  PriceChartSelect,
  RecommendBlock,
  SummaryAnalysis,
  SummaryBottom,
  TagAdd,
  TagCommon,
} from "~/layout/styled";
import AdjustValue from "../../dashboard/Top/Adjust";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import TradingViewWidget from "~/components/Common/Chart";
import { CloseOutlined } from "@ant-design/icons";
import BvpsChart from "~/components/Financial/Chart";
import RankingChart from "~/components/Financial/SubChart";

const Company = () => {
  const [selected, setSelected] = useState("Ngân hàng TMCP Á Châu");

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
      title: "Ngành",
      dataIndex: "major",
      key: "major",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "P/E",
      dataIndex: "pe",
      key: "pe",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "% tăng giá",
      dataIndex: "percent",
      key: "percent",
      render: (text) => <AdjustValue value={text} background="#C0E3FF" />,
    },
    {
      title: "ROE",
      dataIndex: "roe",
      key: "roe",
      render: (text) => <AdjustValue value={text} background="#A5FFD5" />,
    },
    {
      title: "ROA",
      dataIndex: "roa",
      key: "roa",
      render: (text) => <AdjustValue value={text} background="#FFF39B" />,
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
      roa: 11.87,
      percent: 10.13,
    },
    {
      key: 2,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 8.45,
      roa: 8.45,
      percent: 13.46,
    },
    {
      key: 3,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 7,
      roa: 9.22,
      percent: 12.04,
    },
    {
      key: 4,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 6.12,
      roa: 10.54,
      percent: 6.12,
    },
    {
      key: 5,
      code: "ACB",
      company: "Ngân hàng TMCP Á Châu",
      major: "Tài chính",
      pe: 4.58,
      roe: 5.97,
      roa: 5.97,
      percent: 5.97,
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

  const priceChartData = [
    { value: "Ngân hàng TMCP Á Châu", label: "ACB" },
    { value: "Ngân hàng Techcombank", label: "TCB" },
    { value: "Ngân hàng BIDV", label: "BIDV" },
    { value: "Ngân hàng số Lio", label: "Lio" },
  ];

  const dataAdd = [
    { id: 1, tag: "BIDV" },
    { id: 2, tag: "TCB" },
    { id: 3, tag: "Lio" },
  ];

  const financialTabs = [
    {
      id: 1,
      text: "Chỉ số định giá",
    },
    {
      id: 2,
      text: "Khả năng sinh lời",
    },
    {
      id: 3,
      text: "Chỉ số thanh khoản",
    },
    {
      id: 4,
      text: "Hiệu quả hoạt động",
    },
    {
      id: 5,
      text: "Cơ cấu nguồn vốn",
    },
  ];

  const handleChange = (value) => {
    setSelected(value);
  };

  const handleConvertData = () => {
    switch (selected) {
      case "Ngân hàng TMCP Á Châu":
        return "ACB";
      case "Ngân hàng Techcombank":
        return "Techcombank";
      case "Ngân hàng BIDV":
        return "BIDV";
      case "Ngân hàng số Lio":
        return "Lio";
    }
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Container fluid="xxl" className="pt-4">
      <Tab.Container activeKey="overview">
        <BlockCommon
          title="Danh sách VSMI khuyến nghị"
          component={
            <RecommendBlock>
              <Table
                bordered
                columns={columns}
                dataSource={data}
                pagination={{ hideOnSinglePage: true, pageSize: 20 }}
              />
            </RecommendBlock>
          }
        />
        <BlockPriceChart>
          <PriceChartSelect>
            <p>Chọn Mã chứng khoán</p>
            <div>
              <Select
                defaultValue="ACB"
                onChange={handleChange}
                options={priceChartData}
              />
              <p>{selected}</p>
            </div>
          </PriceChartSelect>
          <BlockCommon
            title="Biểu đồ giá"
            component={
              <MarketContainer>
                <CompareBlock>
                  <BorderBlock>
                    <CompareTab>
                      <TagCommon className="bold">
                        {handleConvertData()}
                      </TagCommon>
                      <TagAdd>Thêm mã so sánh</TagAdd>
                      <ul>
                        {dataAdd.map((item) => {
                          return (
                            <TagCommon key={item.id}>
                              <CloseOutlined
                                style={{
                                  color: "#C00000",
                                }}
                              />
                              {item.tag}
                            </TagCommon>
                          );
                        })}
                      </ul>
                    </CompareTab>
                  </BorderBlock>
                  <TradingViewWidget />
                </CompareBlock>
                <BorderBlock className="market-right">
                  <div className="swiper-verical">
                    <Swiper
                      loop={true}
                      direction="vertical"
                      slidesPerView={"auto"}
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
                  </div>
                </BorderBlock>
              </MarketContainer>
            }
          />
        </BlockPriceChart>
        <BlockCommon
          title="Phân tích tài chính"
          component={
            <div>
              <FinancialTabs>
                {financialTabs.map((item) => {
                  return <li key={item.id}>{item.text}</li>;
                })}
              </FinancialTabs>
              <BorderBlock>
                <FinancialAnalysis>
                  <FinancialHeader>
                    <CompareTab>
                      <TagCommon className="bold">
                        {handleConvertData()}
                      </TagCommon>
                      <TagAdd>Thêm mã so sánh</TagAdd>
                      <ul>
                        {dataAdd.map((item) => {
                          return (
                            <TagCommon key={item.id}>
                              <CloseOutlined
                                style={{
                                  color: "#C00000",
                                }}
                              />
                              {item.tag}
                            </TagCommon>
                          );
                        })}
                      </ul>
                    </CompareTab>
                    <div className="financial-quarter">
                      <p>Kỳ BCTC</p>
                      <DatePicker onChange={onChange} picker="quarter" placeholder="Chọn quý" />
                      <DatePicker onChange={onChange} picker="quarter" placeholder="Chọn quý" />
                    </div>
                  </FinancialHeader>
                  <FinancialBody>
                    <BvpsChart />
                    <RankingChart />
                  </FinancialBody>
                </FinancialAnalysis>
              </BorderBlock>
            </div>
          }
        />
        <BlockCommon
          title="Báo cáo phân tích công ty"
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
      </Tab.Container>
    </Container>
  );
};

export default Company;
