import React, { Component } from 'react';
import ApiService from '../../api/ApiService';

class ItemForm extends Component {
  state = {
    item: {
      id: '',
      name: '',
      amount: '',
      code: ''
    },
    formType: ''
  };

  componentDidMount() {
    this.setState({ formType: this.props.formType });
    if (this.props.formType === 'edit') {
      this.loadItem();
    }
  }

  loadItem() {
    ApiService.fetchItemById(window.localStorage.getItem('itemId')).then(
      res => {
        let item = res.data;
        this.setState({
          item: {
            id: item.id,
            name: item.name,
            amount: item.amount,
            code: item.code
          }
        });
      }
    );
  }

  onChange = e =>
    this.setState({
      item: { ...this.state.item, [e.target.name]: e.target.value }
    });

  submitItem = e => {
    e.preventDefault();
    let { item } = this.state;
    switch (this.state.formType) {
      case 'add':
        ApiService.addItem(item).then(res => {
          this.props.history.push('/');
        });
        break;
      case 'edit':
        ApiService.editItem(item).then(res => {
          this.props.history.push('/');
        });
        break;
      default:
        console.log('Form type Error');
    }
  };

  render() {
    return (
      <div>
        <h2 className='text-center'>Edit Item</h2>
        <form>
          <div className='form-group'>
            <label>Item Name:</label>
            <input
              type='text'
              placeholder='item name'
              name='name'
              className='form-control'
              value={this.state.item.name}
              onChange={this.onChange}
            />
          </div>

          <div className='form-group'>
            <label>Item Code:</label>
            <input
              placeholder='item code'
              name='code'
              className='form-control'
              value={this.state.item.code}
              onChange={this.onChange}
            />
          </div>

          <div className='form-group'>
            <label>Amount:</label>
            <input
              type='number'
              placeholder='amount'
              name='amount'
              className='form-control'
              value={this.state.item.amount}
              onChange={this.onChange}
            />
          </div>

          <button className='btn btn-success' onClick={this.submitItem}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
