import React, { Component } from 'react';
import ItemForm from './ItemForm';

class AddItem extends Component {
  render() {
    return <ItemForm history={this.props.history} formType={'add'} />;
  }
}

export default AddItem;
