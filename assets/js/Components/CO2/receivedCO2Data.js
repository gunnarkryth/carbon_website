import { buildCO2Data, showDataError } from "./buildCO2Data.js";

export const receivedCO2Data = async (CO2) => {
  if (CO2) {
    buildCO2Data(CO2);
  } else {
    console.log("Fuck");
    showDataError();
  }
};
