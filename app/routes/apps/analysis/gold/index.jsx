import { Container, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import BlockCommon from "~/components/Common/Block";
import {
  AnalyticsItem,
  BorderBlock,
  GoldChart,
} from "~/layout/styled";
import TradingViewWidget from "~/components/Common/Chart";

const Gold = () => {
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
    <Container fluid="xxl" className="pt-4">
      <Tab.Container activeKey="overview">
        <BlockCommon
          title="Tin tức"
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
          title="Biểu đồ giá"
          component={
            <GoldChart>
              <TradingViewWidget />
            </GoldChart>
          }
        />
      </Tab.Container>
    </Container>
  );
};

export default Gold;
