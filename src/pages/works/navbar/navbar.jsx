/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import enCaseStudies from '../../../assets/translation/en/case-studies.json';
import frCaseStudies from '../../../assets/translation/fr/case-studies.json';
import LanguageContext from '../../../context';

const caseStudies = {
  en: { ...enCaseStudies },
  fr: { ...frCaseStudies },
};

const Navbar = ({ url }) => {
  const context = useContext(LanguageContext);
  const { currentLanguage } = context;

  return (
    <nav>
      <ul>
        {
          Object.entries(caseStudies[currentLanguage]).map(([client, { title, text }]) => (
            <li key={client}>
              <Link to={`${url}/${client}-case-study`}>{client}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
