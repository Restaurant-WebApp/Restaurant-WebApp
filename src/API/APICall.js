import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get("https://localhost:44379/products");
    if (response.data.isSuccess) {
      return response.data.result;
    } else {
      throw new Error(response.data.displayMessage);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data");
  }
};
