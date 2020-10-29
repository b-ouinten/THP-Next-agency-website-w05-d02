import './app.scss';
import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import LanguageContext from './context';

import frContent from './assets/translation/fr';
import enContent from './assets/translation/en';
import CaseStudy from './components/case-study';

const contents = {
  en: enContent,
  fr: frContent,
};

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(
    () => ((!localStorage.lang)
      ? setCurrentLanguage('en')
      : setCurrentLanguage(JSON.parse(localStorage.lang))),
    [],
  );

  useEffect(
    () => { localStorage.lang = JSON.stringify(currentLanguage); },
    [currentLanguage],
  );

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setCurrentLanguage,
    }}
    >
      <IntlProvider locale={currentLanguage} messages={contents[currentLanguage]}>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/works">
            <Works />
          </Route>
          <Route path="/works/:caseStudy">
            <CaseStudy />
          </Route>
        </Switch>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default App;
