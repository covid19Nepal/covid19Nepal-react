import React from 'react';

function Links(props) {
  return (
    <div className="Links">
      <div className="link fadeInUp" style={{animationDelay: '0.2s'}}>
        <h3>HELPLINE NUMBERS</h3>
        <ul className="list-group">
          <li className="list-group-item">
            Dr. Shrawan K. Mishra : 9851168220
          </li>
          <li className="list-group-item">Dr. Ranjit Shah : 9872701465</li>
          <li className="list-group-item">Mr. Rajesh K. Gupta : 9851239988</li>
          <li className="list-group-item">
            Mr. Dinesh Thapa Magar : 9823168540 (Nights only)
          </li>
        </ul>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.3s'}}>
        <h3>Ministry of Health and Family Welfare, Gov. of Nepal</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mohp.gov.np/eng/"
        >
          https://www.mohp.gov.np/eng/
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.4s'}}>
        <h3>WHO : COVID-19 Home Page</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        >
          https://www.who.int/emergencies/diseases/novel-coronavirus-2019
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.5s'}}>
        <h3>CDC</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
        >
          https://www.cdc.gov/coronavirus/2019-ncov/faq.html
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.6s'}}>
        <h3>COVID-19 Global Tracker</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://coronavirus.thebaselab.com/"
        >
          https://coronavirus.thebaselab.com/
        </a>
      </div>
    </div>
  );
}

export default Links;
