import { Table } from "antd";
import { Container, Tab } from "react-bootstrap";
import BlockCommon from "~/components/Common/Block";
import { RecommendBlock } from "~/layout/styled";
import AdjustValue from "../../dashboard/Top/Adjust";

const Company = () => {
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
      </Tab.Container>
    </Container>
  );
};

export default Company;
