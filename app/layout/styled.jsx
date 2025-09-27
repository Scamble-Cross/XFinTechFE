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
export const SummaryAnalysis = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
  & > div {
    display: block;
    width: 270px;
    height: 150px;
    background: #daeeff;
  }
  & > p {
    color: #009;
    font-size: 20px;
    text-decoration: underline;
  }
`;
export const SummaryBottom = styled.div`
  h3 {
    font-size: 20px;
    color: #000;
    margin-bottom: 30px;
  }
`;
export const BlockPriceChart = styled.div`
  margin-bottom: 30px;
`;
export const PriceChartSelect = styled.div`
  margin-bottom: 30px;
  & > p {
    color: #009;
    font-size: 20px;
    margin-bottom: 10px;
  }
  & > div {
    border: 1px solid #a5d6ff;
    display: flex;
    padding: 10px 20px;
    align-items: center;
    gap: 20px;
    background: #daeeff;
    .ant-select {
      width: 130px;
    }
    p {
      font-size: 20px;
      color: #000;
    }
  }
`;
export const CompareTab = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    gap: 20px;
  }
`;
export const CompareBlock = styled.div`
  width: calc(100% - 272px);
  .trading-container {
    width: 100%;
    margin-top: 10px;
    height: calc(100% - 85px);
  }
`;
export const TagCommon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  padding: 8px 12px;
  background: #fff;
  color: #009;
  font-size: 16px;
  &.bold {
    font-weight: bold;
  }
  .anticon {
    position: absolute;
    right: -7px;
    top: -7px;
  }
`;
export const TagAdd = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 700;
  background: #999;
  cursor: pointer;
`;
export const FinancialTabs = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    background-color: #d9d9d9;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    clip-path: polygon(0% 0%, 95% 0, 100% 29%, 100% 100%, 0% 100%);
    transition: all 0.2s linear;
    &:hover,
    &.active {
      background-color: #daeeff;
    }
  }
`;
export const FinancialAnalysis = styled.div``;
export const FinancialHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  .financial-quarter {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-size: 16px;
      color: #000;
    }
  }
`;
export const FinancialBody = styled.div``;
export const ScaleContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  padding: 5px;
`;
export const ScaleList = styled.ul`
  display: flex;
  gap: 5px;
  padding: 0;
  margin: 0 0 5px;
  & > li {
    width: 33.33%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
  }
`;
export const PopoverScale = styled.div`
  p {
    position: relative;
    color: #009;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    width: max-content;
    &:hover {
      opacity: 0.85;
      &::before {
        width: 100%;
      }
    }
    &::before {
      content: "";
      position: absolute;
      width: 0;
      transform: translate(-50%, -50%);
      left: 50%;
      bottom: -2px;
      height: 1px;
      background-color: #009;
      transition: all 0.15s linear;
    }
  }
`;
export const FilterPrice = styled.div`
  position: relative;
  h3 {
    position: absolute;
    background-color: #fff;
    padding: 5px 10px;
    font-size: 16px;
    color: #009;
    font-weight: 400;
    top: -32px;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
    .ant-slider {
      width: 300px;
    }
  }
`;
export const MatchingContainer = styled.div`
  margin-top: 25px;
  thead {
    th {
      padding: 5px !important;
      background-color: transparent !important;
      color: #000099 !important;
      font-weight: bold !important;
    }
  }
  tbody {
    td {
      padding: 5px !important;
    }
  }
`;
export const ModalAddContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
export const AddActions = styled.ul`
  padding: 0;
  margin: 0;
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;
    min-width: 100px;
    height: 34px;
    background: #d9d9d9;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      opacity: 0.75;
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
