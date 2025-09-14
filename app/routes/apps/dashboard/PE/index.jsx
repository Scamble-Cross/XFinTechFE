import { useState } from "react";
import AdjustValue from "../Top/Adjust";
import { Table } from "antd";
import { BlockPerCommon, BlockPerTab } from "~/layout/styled";

const PE = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "TAB 1",
    },
    {
      id: 2,
      title: "TAB 2",
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
      render: (text) => <AdjustValue value={text} background="#FFF39B" />,
    },
  ];

  const data = [
    {
      key: 1,
      name: "Bất động sản",
      percent: 12.89,
    },
    {
      key: 2,
      name: "Chăm sóc sức khỏe",
      percent: 11.9,
    },
    {
      key: 3,
      name: "Công nghệ thông tin",
      percent: 10.59,
    },
    {
      key: 4,
      name: "Công nghiệp",
      percent: 10.23,
    },
    {
      key: 5,
      name: "Dịch vụ tiện tích",
      percent: 9.85,
    },
    {
      key: 6,
      name: "Dịch vụ viễn thông",
      percent: 9.05,
    },
    {
      key: 7,
      name: "Năng lượng",
      percent: 8.67,
    },
    {
      key: 8,
      name: "Nguyên vật liệu",
      percent: 7.99,
    },
    {
      key: 9,
      name: "Tài chính",
      percent: 7.45,
    },
    {
      key: 10,
      name: "Tiêu dùng không thiết yếu",
      percent: 6.99,
    },
    {
      key: 11,
      name: "Tiêu dùng thiết yếu",
      percent: 6.20,
    },
  ];
  return (
    <BlockPerCommon>
      <h3>P/E ngành</h3>
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
        pagination={{ hideOnSinglePage: true, pageSize: 20 }}
      />
    </BlockPerCommon>
  );
};

export default PE;
