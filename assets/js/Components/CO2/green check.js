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


  const getCO2Data = async (address) => {
    const endpoint = `
  https://api.thegreenwebfoundation.org/api/v3/greencheck/
  ${address}`;
    const data = await fetchApiData(endpoint);
    console.log(data);
  };


  const scearchbutton = document.querySelector(".check-button")
  const input = document.querySelector(".url-input")

  scearchbutton.addEventListener("click", () => {let inputtekst = input.value
    let fixedAddress = input.value.replace(/https?:\/\//g, "");
    getCO2Data(fixedAddress)
   } )