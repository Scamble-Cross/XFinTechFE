import { styled } from "styled-components";

export const BorderBlock = styled.div`
  border: 1px solid #d9d9d9;
  padding: 15px;
`;
export const TradingViewContainer = styled.div`
  width: calc(100% - 272px);
`;
export const BlockContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: #009;
    margin-bottom: 15px;
  }
`;
export const AnalyticsItem = styled.div`
  & > div {
    width: 100%;
    height: 150px;
    background: #daeeff;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    color: #000;
  }
`;
export const MarketContainer = styled.div`
  display: flex;
  gap: 10px;
  .market-left {
    width: calc(100% - 260px);
  }
  .market-right {
    width: 260px;
  }
  .swiper-verical {
    height: 465px;
  }
  .swiper-slide {
    height: 190px;
  }
  ${AnalyticsItem} {
    display: flex;
    flex-direction: column;
  }
  .swiper-button-prev,
  .swiper-button-next {
    transform: rotate(90deg);
  }
  .swiper-button-prev {
    left: 46%;
    top: 20px;
  }
  .swiper-button-next {
    right: 50%;
    left: 46%;
    top: calc(100% - 20px);
  }
  .tradingview-widget-container {
    height: 100%;
    overflow: hidden;
  }
`;
export const BlockListMeasure = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;
  padding: 15px;
  background: #e5e5e5;
  gap: 10px;
  margin-bottom: 30px;
`;
export const BlockPerCommon = styled.div`
  padding: 12px 25px;
  background-color: #fff;
  width: 33.33%;
  h3 {
    color: #009;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  table {
    .ant-table-cell {
      background-color: transparent !important;
      font-size: 16px;
      border-bottom: 0 !important;
      padding: 5px !important;
      &::before {
        content: none !important;
      }
    }
    .text-custom {
      color: #009;
      font-size: 20px;
      font-weight: 400;
      text-decoration-line: underline;
    }
  }
`;
export const BlockPerTab = styled.ul`
  margin: 0 0 15px;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  & > li {
    position: relative;
    color: #009;
    font-size: 20px;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 3px;
      background-color: #f48434;
      transition: all 0.2s linear;
    }
    &:hover,
    &.active {
      &::before {
        width: 100%;
      }
    }
  }
`;
export const ProductionPackage = styled.div`
  display: flex;
  gap: 30px;
  & > div {
    width: 33.33%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #009;
      font-size: 22px;
      font-weight: 700;
      text-align: center;
    }
    p {
      color: #000;
      font-size: 20px;
    }
    button {
      width: 150px;
      padding: 10px;
      background: #009;
      color: #fff;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
export const AdjustContainer = styled.div`
  position: relative;
  height: 27px;
  width: 100%;
  & > span {
    position: absolute;
    left: 0px;
    top: 0px;
    display: block;
    height: 100%;
    transition: 0.2s linear;
  }
  & > div {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    padding: 2px 10px;
    color: #000;
  }
`;
export const GoldChart = styled.div`
  & > div {
    width: 100%;
    height: 600px;
  }
`;
export const RecommendBlock = styled.div`
  .ant-table-container {
    table {
      thead {
        th {
          color: #009;
          font-size: 16px;
          font-weight: 700;
          background-color: transparent;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
      tbody {
        td {
          &.ant-table-cell {
            padding-top: 10px;
            padding-bottom: 10px;
            &:first-child {
              color: #009;
              font-size: 16px;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;
