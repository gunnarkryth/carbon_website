const resultContainer = document.getElementById("calculate");
let CO2Container;

export const buildCO2Data = async (CO2) => {
  CO2Container = document.createElement("div");
  CO2Container.id = "calculate-result";
  console.log(CO2);
  resultContainer.appendChild(CO2Container);
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
      <h4>Data from: ${CO2.year}</h4>
    </span>`;

  CO2Container.innerHTML += CO2Element;

  const closeBtn = document.querySelector(".x-btn");
  closeBtn.addEventListener("click", () => {
    clearContainer();
  });
};

export const showDataError = async () => {
  clearContainer();
  const errorMessage = `
    <header>
      <span class="close-container">
        <button class="x-btn">X</button>
      </span>
      <h2>Invalid address!.</h2>
      <h2>Try again</h2>
    </header>`;
  CO2Container.innerHTML += errorMessage;

  const closeBtn = document.querySelector(".x-btn");
  closeBtn.addEventListener("click", () => {
    clearContainer();
  });
};

const clearContainer = () => {
  resultContainer.removeChild(CO2Container);
};
