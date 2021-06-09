import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

// const useAxios = (url) => {
//   const [dataList, setDataList] = useState([]);

//   const addData = async () => {
//     const resp = await axios.get(`${url}`);
//     setDataList([...dataList, { ...resp.data, id: uuid() }]);
//   };

//   return [dataList, addData];
// };

// export default useAxios;

function useAxios(URL) {
    const [cards, setCards] = useState([]);
    const addCard = async (restofURL = "") => {
      const response = await axios.get(`${URL}${restofURL}`);
      setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
    };
    const removeAll = () => {
      setCards([]);
    };
    return [cards, addCard, removeAll];
  }
    
export default useAxios;

