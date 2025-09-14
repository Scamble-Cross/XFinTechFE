import { useState } from "react";
import { Table } from "antd";
import AdjustValue from "../Top/Adjust";
import { BlockPerCommon, BlockPerTab } from "~/layout/styled";

const Effeciency = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "ROE",
    },
    {
      id: 2,
      title: "ROA",
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
      title: "",
      dataIndex: "percent",
      key: "percent",
      render: (text) => <AdjustValue value={text} background="#C0E3FF" />,
    },
  ];

  const data = [
    {
      key: 1,
      name: "ACC",
      percent: 12.89,
    },
    {
      key: 2,
      name: "ACC",
      percent: 11.9,
    },
    {
      key: 3,
      name: "ACC",
      percent: 10.59,
    },
    {
      key: 4,
      name: "ACC",
      percent: 10.23,
    },
    {
      key: 5,
      name: "ACC",
      percent: 9.85,
    },
    {
      key: 6,
      name: "ACC",
      percent: 9.05,
    },
    {
      key: 7,
      name: "ACC",
      percent: 8.67,
    },
    {
      key: 8,
      name: "ACC",
      percent: 7.99,
    },
    {
      key: 9,
      name: "ACC",
      percent: 7.45,
    },
    {
      key: 10,
      name: "ACC",
      percent: 6.99,
    },
  ];

  return (
    <BlockPerCommon>
      <h3>Top hiệu quả hoạt động</h3>
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

export default Effeciency;
