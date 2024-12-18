import axiosInstance from "./axiosInstance";
import { getAuthToken } from "./getAuthToken";

export const fetchData = async (endpoint, queryParams = {}) => {
  const token = await getAuthToken();

  const response = await axiosInstance
    .get(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
      params: queryParams,
    })
    .catch((error) => {
      console.log(`Error fetching data from ${endpoint}`, error);
      return null;
    });

  if (response && response.status === 200) {
    return response.data;
  }

  console.error(`Failed to fetch data from ${endpoint}:`, response);
  return null;
};
