import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8280/inventory';

class ApiService {
  fetchItems() {
    return axios.get(USER_API_BASE_URL + '/list');
  }

  fetchItemById(itemId) {
    return axios.get(USER_API_BASE_URL + '/single/' + itemId);
  }

  deleteItem(itemId) {
    return axios.delete(USER_API_BASE_URL + '/delete/' + itemId);
  }

  addItem(inventoryItem) {
    return axios.post(USER_API_BASE_URL + '/create', inventoryItem);
  }

  editItem(item) {
    return axios.put(USER_API_BASE_URL + '/update/' + item.id, item);
  }
}

export default new ApiService();
