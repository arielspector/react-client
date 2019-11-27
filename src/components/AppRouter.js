import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListItem from './item/ListItem';
import AddItem from './item/AddItem';
import EditItem from './item/EditItem';
import React from 'react';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <div className='container p-3'>
          <h1 className='text-center display-2'>React-Spring-CRUD</h1>
          <Switch>
            <Route path='/' exact component={ListItem} />
            <Route path='/add-item' component={AddItem} />
            <Route path='/edit-item/:id' component={EditItem} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
