import React from 'react';
import SocialsCard from './socials-card';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  const { pathname } = props;
  return (
    <footer>
      { pathname !== '/contact' ? (
        <SocialsCard
          facebook="https://www.facebook.com/Queer-Family-Tea-638643326624464"
          instagram="https://www.instagram.com/queerfamilytea/"
          email="mailto:info@queerfamilytea.com"
        />
      ) : (
        null
      )
      }
      { pathname !== '/privacy' ? (
        <div className="link-list">
          <Link className="link" to="/privacy">Our Privacy Policy</Link>
        </div>
      ) : (
        null
      )
      }
    </footer>
  );
};

export default Footer;
