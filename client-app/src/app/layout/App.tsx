import React from 'react';
import { Container } from 'semantic-ui-react';;
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/homePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetail from '../../features/activities/details/ActivityDetail';

function App() {
  const location = useLocation();
  return (
    <>
    <Route exact path='/' component={HomePage}/>
    <Route 
      path={'/(.+)'}
      render={() => (
        <>
          <NavBar />
          <Container style={{marginTop: '7em'}}>
            <Route exact path='/activities' component={ActivityDashboard}/>
            <Route path='/activities/:id' component={ActivityDetail}/>
            <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}/>
          </Container>
        </>
      )}    
    />
    </>
  );
}

export default observer(App);