import { useContext } from "react";
import Context, { IContext } from "./Context";
import Provider from "./Provider";

function useUserAgent(): IContext {
  return useContext<IContext>(Context);
}

export const UserAgentProvider = Provider;
export default useUserAgent;
