import { useContext } from "react";
import Context from "./Context";

function useUserAgent() {
  return useContext(Context);
}

export default useUserAgent;
