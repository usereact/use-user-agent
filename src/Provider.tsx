import * as React from "react";
import * as UAParser from "ua-parser-js";
import Context from "./Context";

interface IProvider {
  children: React.ReactNode;
  userAgent: string;
}

function Provider({ children, userAgent }: IProvider) {
  const uaParser = new UAParser();
  uaParser.setUA(userAgent);

  const value = {
    os: uaParser.getOS(),
    browser: uaParser.getBrowser(),
    cpu: uaParser.getCPU(),
    device: uaParser.getDevice(),
    engine: uaParser.getEngine()
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
