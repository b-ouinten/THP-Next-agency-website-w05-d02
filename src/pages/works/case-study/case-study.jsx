/* eslint-disable react/prop-types */
import React from 'react';
import { injectIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

const CaseStudy = ({ intl }) => {
  const { caseStudy } = useParams();

  console.log(caseStudy);

  return (
    <div>
      <p>{intl.formatMessage({ id: `${caseStudy.replace(/-case-study/, '')}.title` })}</p>
      <p>{intl.formatMessage({ id: `${caseStudy.replace(/-case-study/, '')}.text` })}</p>
    </div>
  );
};

export default injectIntl(CaseStudy);
