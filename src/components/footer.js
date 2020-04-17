import React from 'react';
import * as Icon from 'react-feather';

function Footer(props) {
  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>We stand with everyone fighting on the frontlines</h5>
      <div className="link">
        <a href="https://github.com/covid19Nepal">covid19Nepal</a>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/covid19nepal/covid19nepal-react"
        className="button github"
      >
        <Icon.GitHub />
        <span>Open Sourced on GitHub</span>
      </a>
    </footer>
  );
}

export default Footer;
