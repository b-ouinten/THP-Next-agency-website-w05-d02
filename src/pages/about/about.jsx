/* eslint-disable react/prop-types */
import './about.scss';
import React from 'react';
import { injectIntl } from 'react-intl';

const About = ({ intl }) => {
  const title = intl.formatMessage({ id: 'about.title' });
  const text = intl.formatMessage({ id: 'about.text' });

  return (
    <div className="about">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default injectIntl(About);
