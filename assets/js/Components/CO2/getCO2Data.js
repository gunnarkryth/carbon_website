import { fetchApiData } from "../../Utils/apiFetch.js";
import { receivedCO2Data } from "./receivedCO2Data.js";

export const getCO2Data = async (address) => {
  const endpoint = `https://api.thegreenwebfoundation.org/api/v3/ip-to-co2intensity/${address}`;
  const data = await fetchApiData(endpoint);
  receivedCO2Data(data);
};
