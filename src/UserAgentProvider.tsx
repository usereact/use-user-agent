import UAParser from "ua-parser-js";
import Context from "./Context";

interface IUserAgentProvider {
  children: React.ReactNode;
  userAgent: string;
}

function UserAgentProvider({ children, userAgent }: IUserAgentProvider) {
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

export default UserAgentProvider;
