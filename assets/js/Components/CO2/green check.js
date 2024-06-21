const dataContainer = document.querySelector(".green-data-container");

const fetchApiData = async (endpoint, options = null) => {
  let res = "";

  try {
    res = await fetch(endpoint, options);
    console.log(res);

    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.error(`Error i fetch: ${error.meesage}`);
  }
};

const getGreenData = async (address) => {
  const endpoint = `
  https://admin.thegreenwebfoundation.org/api/v3/greencheck/
  ${address}`;
  const data = await fetchApiData(endpoint);
  receivedGreenData(data);
};

const receivedGreenData = async (data) => {
  console.log(data);

  if (data.data === false || data.green == false) {
    buildErrorMessage();
  } else {
    buildGreenData(data);
  }
};

const buildErrorMessage = async () => {
  console.log("lol");
  clearContainer();

  let errorMessage = `<p>Sorry We can't confirm that the provided URL is hosted Green.</p>`;

  dataContainer.innerHTML += errorMessage;
};

const buildGreenData = async (greenData) => {
  console.log(greenData);
  clearContainer();

  let greenMessage = `
    <span>
      <h4>The URL: ${greenData.url} is hosted Green 🥳</h4>
      <p>The site is hosted by: ${greenData.hosted_by_website}</p>
    </span>`;

  dataContainer.innerHTML += greenMessage;
};

const clearContainer = () => {
  dataContainer.innerHTML = "";
};

const scearchbutton = document.querySelector(".check-button");
const input = document.querySelector(".url-input");

scearchbutton.addEventListener("click", () => {
  let inputtekst = input.value;
  let fixedAddress = input.value.replace(/https?:\/\//g, "");
  getGreenData(fixedAddress);
});
