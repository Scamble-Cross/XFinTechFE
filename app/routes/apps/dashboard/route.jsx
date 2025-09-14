import { Container, Tab } from "react-bootstrap";
import BlockCommon from "~/components/Common/Block";
import TradingViewWidget from "~/components/Common/Chart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Effeciency from "./Effeciency";
import Top from "./Top";
import PE from "./PE";
import { AnalyticsItem, BlockListMeasure, BorderBlock, MarketContainer, ProductionPackage } from "~/layout/styled";

const Dashboard = () => {
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

  return (
    <>
      <Container fluid="xxl" className="pt-4">
        <Tab.Container activeKey="overview">
          <BlockCommon
            title="Báo cáo phân tích"
            component={
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
            }
          />
          <BlockCommon
            title="Thị trường"
            component={
              <MarketContainer>
                <TradingViewWidget />
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
          <BlockListMeasure>
            <Top />
            <Effeciency />
            <PE />
          </BlockListMeasure>
          <BlockCommon
            title="Vàng và Ngoại tệ"
            component={
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
            }
          />
          <BlockCommon
            title="Gói Sản phẩm VSMI"
            component={
              <ProductionPackage>
                <BorderBlock>Vùng thông tin để mời KH đăng ký</BorderBlock>
                <BorderBlock>
                  <h3>Basic</h3>
                  <p>Thông tin gói Basic</p>
                  <button>Đăng ký</button>
                </BorderBlock>
                <BorderBlock>
                  <h3>Premium</h3>
                  <p>Thông tin gói Premium</p>
                  <button>Đăng ký</button>
                </BorderBlock>
              </ProductionPackage>
            }
          />
        </Tab.Container>
      </Container>
    </>
  );
};

export default Dashboard;
