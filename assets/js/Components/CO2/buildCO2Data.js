const CO2Container = document.getElementById("calculate-result");

export const buildCO2Data = async (CO2) => {
  console.log(CO2);
  clearContainer();
  let CO2Element = `
    <header>
        <span class="close-container">
          <button class="x-btn">X</button>
        </span>
        <h2>Country: ${CO2.country_name}</h2>
        <p>Address Checked: ${CO2.checked_ip}</p>
    </header>
    <span class="co2-results">
      <header>
        <h3>Carbon Information:</h3>
      </header>
      <p>Carbon Intensity: ${CO2.carbon_intensity}. grams per kilowatt-hour</p>
      <p>Carbon Intensity Type: ${CO2.carbon_intensity_type}</p>
    </span>
    <footer>
      <h4>Data from: ${CO2.year}</h4>
    </footer>`;

  CO2Container.innerHTML += CO2Element;
  console.log(CO2Element);

  const closeBtn = document.querySelector(".x-btn");
  closeBtn.addEventListener("click", () => {
    clearContainer();
  });
};

const clearContainer = () => {
  CO2Container.innerHTML = "";
};
