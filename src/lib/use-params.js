import {useContext, useMemo} from "react";
import RouterContext from "./router-context.js";

const useParams = () => {
  const {location} = useContext(RouterContext);
  
  if (location && location.state && location.state.params) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMemo(() => location.state.params, [location.state.params]);
  }
  
  return {};
}

export default useParams;
