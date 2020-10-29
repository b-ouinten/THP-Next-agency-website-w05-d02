/* eslint-disable react/prop-types */
import './home.scss';
import React from 'react';
import { injectIntl } from 'react-intl';

const Home = ({ intl }) => {
  const title = intl.formatMessage({ id: 'home.title' });
  const text = intl.formatMessage({ id: 'home.text' });

  return (
    <div className="home">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default injectIntl(Home);
