import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getBooks = async () => {
  try {
    console.log(`GET request to: ${API_BASE_URL}/books`);
    const response = await axios.get(`${API_BASE_URL}/books`);
    console.log('GET books response:', response);
    return response;
  } catch (error) {
    console.error('Error in GET books:', error);
    throw error;
  }
};

export const searchBooks = async (query) => {
  try {
    console.log(`GET request to: ${API_BASE_URL}/books/search?query=${query}`);
    const response = await axios.get(`${API_BASE_URL}/books/search`, { params: { query: query } });
    console.log('GET search books response:', response);
    return response;
  } catch (error) {
    console.error('Error in GET search books:', error);
    throw error;
  }
};

export const purchaseBook = async (id) => {
  try {
    console.log(`POST request to: ${API_BASE_URL}/books/purchase/${id}`);
    const response = await axios.post(`${API_BASE_URL}/books/purchase/${id}`);
    console.log('POST purchase book response:', response);
    return response;
  } catch (error) {
    console.error('Error in POST purchase book:', error);
    throw error;
  }
};
