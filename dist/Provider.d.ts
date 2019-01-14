import * as React from "react";
interface IProvider {
    children: React.ReactNode;
    userAgent: string;
}
declare function Provider({ children, userAgent }: IProvider): JSX.Element;
export default Provider;
