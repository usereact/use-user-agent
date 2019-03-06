import * as React from "react";
import * as UAParser from "ua-parser-js";
import Context from "./Context";

interface IProvider {
  children: React.ReactNode;
  userAgent: string;
}

function Provider({ children, userAgent }: IProvider) {
  const value = React.useMemo(() => {
    const uaParser = new UAParser();
    uaParser.setUA(userAgent);
    return {
      os: uaParser.getOS(),
      browser: uaParser.getBrowser(),
      cpu: uaParser.getCPU(),
      device: uaParser.getDevice(),
      engine: uaParser.getEngine()
    };
  }, [userAgent]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
