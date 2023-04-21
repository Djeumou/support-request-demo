import React from 'react';

function Header () {

    return (
        <section className="header">
        <section className="header-top">
          <section className="header-top_logo">

           <a href="/"className="header-top"> LOGO </a>

            </section>
            <section className="header-top_navbar">
              {/* <navbar /> */}
            </section>
        </section>
        <section className="header-bottom">
          <section className="header-bottom_phone">

          </section>
          <section className="header-bottom_email">

          </section>
        </section>
        </section>
    );

}

export default Header;
