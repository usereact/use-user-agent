/// <reference types="ua-parser-js" />
/// <reference types="react" />
export interface IContext {
    os?: IUAParser.IOS;
    device?: IUAParser.IDevice;
    engine?: IUAParser.IEngine;
    browser?: IUAParser.IBrowser;
    cpu?: IUAParser.ICPU;
}
declare const Context: import("react").Context<IContext>;
export default Context;
