import React from 'react';
import SocialsCard from './socials-card';
import { Link } from 'react-router-dom';
import sponsors from '../utils/sponsors';

const Footer = (props) => {
  const { pathname } = props;
  console.log(sponsors)
  return (
    <footer>
      { pathname !== '/contact' ? (
        <React.Fragment>
          <SocialsCard
            facebook="https://www.facebook.com/Queer-Family-Tea-638643326624464"
            instagram="https://www.instagram.com/queerfamilytea/"
            email="mailto:info@queerfamilytea.com"
          />
          <div style={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between', margin: '10px', flexWrap: 'wrap' }}>
          {
            sponsors.map(sponsor => (
              <div key={sponsor}>
                <img style={{ maxWidth: '10vw' }} src={sponsor}></img>
              </div>
            ))
          }
        </div>
        </React.Fragment>
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
