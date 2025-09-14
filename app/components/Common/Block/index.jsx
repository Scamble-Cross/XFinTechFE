import { BlockContainer } from "~/layout/styled";

const BlockCommon = ({ title, component }) => {
  return (
    <BlockContainer>
      <h2>{title}</h2>
      <div>{component}</div>
    </BlockContainer>
  );
};

export default BlockCommon;
