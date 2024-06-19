const CO2Container = document.getElementById("calculate-result");

export const buildCO2Data = async (CO2) => {
  console.log(CO2);
  clearContainer();
  let CO2Element = `
    <header>
        <h3>${CO2.country_name}</h3>
    </header>`;

  CO2Container.innerHTML += CO2Element;
  console.log(CO2Element);
};

const clearContainer = () => {
  CO2Container.innerHTML = "";
};
