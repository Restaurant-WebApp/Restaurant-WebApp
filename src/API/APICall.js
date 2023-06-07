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

export const CheckoutCart = async (CheckoutHeader) =>{
  try{
    //console.log(CheckoutHeader);
    // Make a POST request to your API endpoint with the cart items
    const response = await axios.post("https://localhost:44393/checkout", {
      CheckoutHeader,
    },{headers: {
      'Content-Type': 'application/json',
    },});

    // Handle the response as needed
    console.log(response.data);
  }
  catch(error){
    console.error(error);
  }
}
