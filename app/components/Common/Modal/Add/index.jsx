import { Checkbox, Table } from "antd";
import { AddActions, ModalAddContainer } from "~/layout/styled";

const ModalAdd = ({ handleCancelAdd }) => {
  const data = [
    {
      key: 1,
      major: "Công nghiệp",
    },
    {
      key: 2,
      major: "Nguyên vật liệu",
    },
    {
      key: 3,
      major: "Tiêu dùng không thiết yếu",
    },
    {
      key: 4,
      major: "Tiêu dùng thiết yếu",
    },
    {
      key: 5,
      major: "Dịch vụ tiện ích",
    },
    {
      key: 6,
      major: "Bất động sản",
    },
    {
      key: 7,
      major: "Tài chính",
    },
    {
      key: 8,
      major: "Chăm sóc sức khỏe",
    },
    {
      key: 9,
      major: "Năng lượng",
    },
    {
      key: 10,
      major: "Dịch vụ viễn thông",
    },
    {
      key: 11,
      major: "Công nghệ thông tin",
    },
    {
      key: 12,
      major: "Toàn thị trường",
    },
  ];

  const columns = [
    {
      title: "Ngành",
      dataIndex: "major",
      key: "major",
      render: (text) => (
        <div>
          <Checkbox onChange={() => {}}>{text}</Checkbox>
        </div>
      ),
    },
    {
      title: "Phạm vi tính toán của chỉ số",
      dataIndex: "",
      key: "",
      render: () => (
        <div>
          <Checkbox onChange={() => {}}>Tất cả DN trong ngành</Checkbox>
          <Checkbox onChange={() => {}}>{"DN có Doanh thu > 0"}</Checkbox>
        </div>
      ),
    },
  ];

  const actions = [
    {
      id: 1,
      text: "Thêm",
      func: () => {},
    },
    {
      id: 2,
      text: "Hủy",
      func: () => {},
    },
    {
      id: 3,
      text: "Làm mới",
      func: () => {},
    },
    {
      id: 4,
      text: "Đóng",
      func: () => {
        handleCancelAdd();
      },
    },
  ];

  return (
    <ModalAddContainer>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        pagination={{ hideOnSinglePage: true, pageSize: 20 }}
      />
      <AddActions>
        {actions.map((item) => {
          return (
            <li key={item.id} onClick={item.func}>
              {item.text}
            </li>
          );
        })}
      </AddActions>
    </ModalAddContainer>
  );
};

export default ModalAdd;
