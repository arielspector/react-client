import React, { Component } from 'react';
import ApiService from '../../api/ApiService';

class ListItem extends Component {
  state = {
    items: [],
    message: null
  };

  componentDidMount() {
    this.reloadItemList();
  }

  async reloadItemList() {
    const res = await ApiService.fetchItems();
    this.setState({ items: res.data });
  }

  deleteItem(itemId) {
    ApiService.deleteItem(itemId).then(res => {
      this.setState({ message: 'Item deleted successfully.' });
      this.setState({
        items: this.state.items.filter(item => item.id !== itemId)
      });
    });
  }

  editItem(id) {
    window.localStorage.setItem('itemId', id);
    this.props.history.push(`/edit-item/${id}`);
  }

  addItem() {
    window.localStorage.removeItem('itemId');
    this.props.history.push('/add-Item');
  }

  render() {
    return (
      <div className='container p-2'>
        <button
          type='button'
          className='btn btn-primary btn-lg btn-block mb-3'
          onClick={() => this.addItem()}
        >
          {' '}
          Add
        </button>
        <table className='table table-bordered table-striped table-hover'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Inventory Code</th>
              <th scope='col'>Delete</th>
              <th scope='col'>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.code}</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => this.deleteItem(item.id)}
                  >
                    {' '}
                    Delete
                  </button>{' '}
                </td>
                <td>
                  <button
                    className='btn btn-success'
                    onClick={() => this.editItem(item.id)}
                  >
                    {' '}
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListItem;
