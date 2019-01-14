import { createContext } from "react";

interface IContext {
  os?: IUAParser.IOS;
  device?: IUAParser.IDevice;
  engine?: IUAParser.IEngine;
  browser?: IUAParser.IBrowser;
  cpu?: IUAParser.ICPU;
}

const Context = createContext<IContext>({});

export default Context;
