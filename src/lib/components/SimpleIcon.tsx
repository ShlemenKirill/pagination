import React from "react";
export const simpleIconTypes = {
  chevronRight: "M9 18L15 12L9 6",
  chevronLeft: "M14 6L8 12L14 18",
};

type Props = {
  style?: React.CSSProperties;
  svgPath: string;
  height?: string;
  width?: string;
  margin?: string;
};

const SimpleIcon = (props: Props) => {
  const { style, svgPath, height, width, margin } = props;

  return (
    <svg
      width={width || "24px"}
      height={height || "24px"}
      style={{
        margin: margin || "0px",
        ...style,
      }}
      viewBox="0 0 24 24"
      fillRule="evenodd"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={svgPath}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SimpleIcon;
