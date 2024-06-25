import { useDispatch, } from "react-redux";
import { loading } from "../redux/StateSlice";

export function useCreateLoading() {

  const dispatch = useDispatch();
  const setLoading = () => {
    dispatch(loading());
  };

  return setLoading;
}
