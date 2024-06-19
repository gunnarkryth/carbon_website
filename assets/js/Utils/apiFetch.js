export const fetchApiData = async (endpoint, options = null) => {
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
