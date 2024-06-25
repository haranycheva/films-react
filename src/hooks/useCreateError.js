
import { useDispatch } from "react-redux";
import { makeError } from "../redux/StateSlice";

export function useCreateError() {
  const dispatch = useDispatch();
  const setError = (err) => {
    dispatch(makeError(err));
  };

  return  setError;
}
