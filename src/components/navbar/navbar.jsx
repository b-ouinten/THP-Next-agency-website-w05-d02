import './navbar.scss';
import React, { useContext } from 'react';
import {
  Link,
} from 'react-router-dom';
import LanguageContext from '../../context';

import englishIcon from '../../assets/images/english.png';
import frenchIcon from '../../assets/images/french.png';

const langs = [
  {
    langCode: 'en',
    langIcon: englishIcon,
  },
  {
    langCode: 'fr',
    langIcon: frenchIcon,
  },
];

const Navbar = () => {
  const context = useContext(LanguageContext);
  const { currentLanguage, setCurrentLanguage } = context;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li className="lang">
          {
            langs.map(({ langCode, langIcon }) => ((langCode === currentLanguage)
              ? null
              : (
                <div
                  key={langCode}
                  onClick={() => setCurrentLanguage(langCode)}
                  onKeyDown={() => setCurrentLanguage(langCode)}
                  role="presentation"
                >
                  <img src={langIcon} alt="language" width="25" heigth="25" />
                </div>
              )))
          }
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
