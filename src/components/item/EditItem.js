import React, { Component } from 'react';
import ItemForm from './ItemForm';

class EditItem extends Component {
  render() {
    return <ItemForm history={this.props.history} formType={'edit'} />;
  }
}

export default EditItem;
