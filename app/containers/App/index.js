/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import HomePage from 'containers/HomePage/Loadable';
import EventsPage from 'containers/EventsPage/Loadable';
import FormPage from 'containers/FormPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import reducer from './reducer';
import saga from './saga';

import GlobalStyle from '../../global-styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Hola Saigon" defaultTitle="Hola Saigon">
        <meta
          name="description"
          content="Events in Ho Chi Minh city - Saigon"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={EventsPage} />
        <Route exact path="/form" component={FormPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
)(App);
