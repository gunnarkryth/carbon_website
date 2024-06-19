import { getCO2Data } from "./getCO2Data.js";

export const searchCO2 = async () => {
  const searchBtn = document.getElementById("calculate-website");
  const searchbar = document.querySelector(".website-input");

  searchBtn.addEventListener("click", () => {
    getCO2Data(searchbar.value);
    //Random ip address from the api docs to test with
    //35.187.144.0
  });
};
