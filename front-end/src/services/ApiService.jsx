import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export async function APIService(url, method, requestData) {
  try {
    let response;
    switch (method) {
      case 'GET':
        response = await axiosInstance.get(url);
        break;
      case 'POST':
        response = await axiosInstance.post(url, requestData);
        break;
      case 'PUT':
        response = await axiosInstance.put(url, requestData);
        break;
      case 'DELETE':
        response = await axiosInstance.delete(url);
        break;
      case 'PATCH':
        response = await axiosInstance.patch(url, requestData);
        break;
      default:
        break;
    }

    console.log('Response Data:', response.data);

    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}