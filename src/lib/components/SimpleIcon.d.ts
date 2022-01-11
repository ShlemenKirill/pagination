import React from "react";
export declare const simpleIconTypes: {
    chevronRight: string;
    chevronLeft: string;
};
declare type Props = {
    style?: React.CSSProperties;
    svgPath: string;
    height?: string;
    width?: string;
    margin?: string;
};
declare const SimpleIcon: (props: Props) => JSX.Element;
export default SimpleIcon;
