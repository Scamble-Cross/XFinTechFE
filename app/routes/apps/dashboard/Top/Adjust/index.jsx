import { useEffect, useState } from "react";
import { AdjustContainer } from "~/layout/styled";

const AdjustValue = ({ value, background }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(() => {
        const randomPercent = Math.random() * 100;
        return randomPercent;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <AdjustContainer>
      <span
        style={{
          background: background,
          width: `${percent}%`,
        }}
      ></span>
      <div>{value}%</div>
    </AdjustContainer>
  );
};

export default AdjustValue;
