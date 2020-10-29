/* eslint-disable react/prop-types */
import './case-study.scss';
import React from 'react';
import { injectIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

const CaseStudy = ({ intl }) => {
  const { caseStudy } = useParams();

  return (
    <div className="caseStudy">
      <h2>{intl.formatMessage({ id: `${caseStudy.replace(/-case-study/, '')}.title` })}</h2>
      <p>{intl.formatMessage({ id: `${caseStudy.replace(/-case-study/, '')}.text` })}</p>
    </div>
  );
};

export default injectIntl(CaseStudy);
