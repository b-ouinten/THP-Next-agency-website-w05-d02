/* eslint-disable react/prop-types */
import './works.scss';
import React from 'react';
import { injectIntl } from 'react-intl';
import {
  useRouteMatch,
} from 'react-router-dom';

import Navbar from './navbar';

const Works = ({ intl }) => {
  const title = intl.formatMessage({ id: 'works.title' });
  const text = intl.formatMessage({ id: 'works.text' });

  const { url } = useRouteMatch();

  return (
    <div className="works">
      <h2>{title}</h2>
      <p>{text}</p>

      <Navbar url={url} />
    </div>
  );
};

export default injectIntl(Works);
