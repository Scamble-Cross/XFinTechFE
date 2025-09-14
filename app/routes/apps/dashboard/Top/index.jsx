import { Table } from "antd";
import { useState } from "react";
import AdjustValue from "./Adjust";
import { BlockPerCommon, BlockPerTab } from "~/layout/styled";

const Top = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "1D",
    },
    {
      id: 2,
      title: "1W",
    },
    {
      id: 3,
      title: "2W",
    },
    {
      id: 4,
      title: "1M",
    },
    {
      id: 5,
      title: "3M",
    },
    {
      id: 6,
      title: "1Y",
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "name",
      key: "name",
      render: (text) => <p className="text-custom">{text}</p>,
    },
    {
      title: "P/E",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "% tăng giá",
      dataIndex: "percent",
      key: "percent",
      render: (text) => <AdjustValue value={text} background="rgb(165, 255, 213)" />,
    },
  ];

  const data = [
    {
      key: 1,
      name: "ACC",
      value: 12.05,
      percent: 12.89,
    },
    {
      key: 2,
      name: "ACC",
      value: 11.98,
      percent: 11.9,
    },
    {
      key: 3,
      name: "ACC",
      value: 10.67,
      percent: 10.59,
    },
    {
      key: 4,
      name: "ACC",
      value: 10.03,
      percent: 10.23,
    },
    {
      key: 5,
      name: "ACC",
      value: 9.45,
      percent: 9.85,
    },
    {
      key: 6,
      name: "ACC",
      value: 9.3,
      percent: 9.05,
    },
    {
      key: 7,
      name: "ACC",
      value: 9.02,
      percent: 8.67,
    },
    {
      key: 8,
      name: "ACC",
      value: 8.65,
      percent: 7.99,
    },
    {
      key: 9,
      name: "ACC",
      value: 8.01,
      percent: 7.45,
    },
    {
      key: 10,
      name: "ACC",
      value: 7.34,
      percent: 6.99,
    },
  ];

  return (
    <BlockPerCommon>
      <h3>Top tăng giá</h3>
      <BlockPerTab>
        {tabs.map((item) => {
          return (
            <li
              key={item.id}
              className={item.id === activeTab ? "active" : ""}
              onClick={() => {
                setActiveTab(item.id);
              }}
            >
              {item.title}
            </li>
          );
        })}
      </BlockPerTab>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ hideOnSinglePage: true }}
      />
    </BlockPerCommon>
  );
};

export default Top;
