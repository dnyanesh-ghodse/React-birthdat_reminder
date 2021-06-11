import React from 'react';
import "./Header.css";

function Header(props) {
    return (
      <>
        <div className="header">
          <h3>{props.people.length} birthdays today</h3>
          <h2>{props.date}</h2>
        </div>
      </>
    );
}

export default Header
