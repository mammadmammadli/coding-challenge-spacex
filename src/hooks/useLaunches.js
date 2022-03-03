import { useState } from "react";
import axiosInstance from "../axiosInstance";
import { filterLaunches } from "../utils/filterLaunches";

const useLaunches = () => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const getLaunches = async () => {
    setState({ ...state, loading: true });

    try {
      const response = await axiosInstance.get("launches");

      setState({
        ...state,
        data: filterLaunches(response.data),
        loading: false,
      });
    } catch (error) {
      console.error(`useLaunches - getLaunches error`, error);

      setState({ ...state, error, loading: false });
    }
  };

  return [{ getLaunches }, state];
};

export default useLaunches;
