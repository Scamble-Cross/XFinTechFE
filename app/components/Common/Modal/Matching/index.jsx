import { Table } from "antd";
import { MatchingContainer } from "~/layout/styled";

const ModalMatching = () => {
  const data = [
    {
      key: 1,
      major: "Bất động sản",
    },
    {
      key: 2,
      major: "Chăm sóc sức khỏe",
    },
    {
      key: 3,
      major: "Công nghệ thông tin",
    },
    {
      key: 4,
      major: "Công nghiệp",
    },
    {
      key: 5,
      major: "Dịch vụ tiện tích",
    },
    {
      key: 6,
      major: "Dịch vụ viễn thông",
    },
    {
      key: 7,
      major: "Năng lượng",
    },
    {
      key: 8,
      major: "Nguyên vật liệu",
    },
    {
      key: 9,
      major: "Tài chính",
    },
    {
      key: 10,
      major: "Tiêu dùng không thiết yếu",
    },
    {
      key: 11,
      major: "Tiêu dùng thiết yếu",
    },
  ];

  const columns = [
    {
      title: "Ngành",
      dataIndex: "major",
      key: "major",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Giá khớp lệnh",
      dataIndex: "price",
      key: "price",
      render: () => <p>12,000,000</p>,
    },
  ];
  return (
    <MatchingContainer>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        pagination={{ hideOnSinglePage: true, pageSize: 20 }}
      />
    </MatchingContainer>
  );
};

export default ModalMatching;
