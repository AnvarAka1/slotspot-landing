import axios from "axios";
import axiosInstance from "./instance";
import {BASE_URL, COMPANIES} from "./endpoints";

export const getCompanyData = async (): Promise<DataParams[]> => {
  const result = await axios.get(
    `${BASE_URL}/${COMPANIES}`
  );
  return result.data;
};

export interface DataParams {
  image: string;
  logo: string;
  title: string;
  description: string;
  rating: {
    rating_avg: number;
    rating_count: number
  };
}

export const testReq = async () =>{
  const result = await axiosInstance.get("companies/list")

  return result.data
}