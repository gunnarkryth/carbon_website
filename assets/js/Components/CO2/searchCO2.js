import { getCO2Data } from "./getCO2Data.js";

export const searchCO2 = async () => {
  const searchBtn = document.getElementById("calculate-website");
  const searchbar = document.querySelector(".website-input");

  searchBtn.addEventListener("click", () => {
    //Fjerner http:// & https:// fra den string der bliver sendt videre
    let fixedAddress = searchbar.value.replace(/https?:\/\//g, "");
    getCO2Data(fixedAddress);
  });
};
