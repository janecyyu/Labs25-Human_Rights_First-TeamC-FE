import { Flag, People, Map as Mp } from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';
import ConsentForm from '../pages/Home/ConsentForm';
import Popup from 'reactjs-popup';
import Map from '../common/Map';

export const Loading = () => {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('consent') !== null) {
      setConsented(true);
    }
  });
  return (
    <div>
      <main>
        <div className="wrapper">
          <main className="page-main">
            <div className="title-content">
              <div className="banner-title">
                FIND
                <br />
                EXCESSIVE FORCE
                <br />
                INCIDENTS
              </div>
              <div className="banner-second-title">NEAR YOU</div>
              <div className="banner-subtitle">
                Explore the map from a human rights perspective
              </div>
              <a href="#map" class="hvr-icon-hang view-map">
                <span className="view-map-font">
                  View map <i class="fa fa-chevron-down hvr-icon"></i>
                </span>
              </a>
            </div>
            <a href="#map" className="next-page">
              <i class="fa fa-chevron-down next-page-btn"></i>
            </a>
          </main>
        </div>
        <div id="map">
          <Map />
        </div>
        <div className="last-section">
          <section className="intro" id="about">
            <h2>What is Human Rights Considered?</h2>
            <div className="icons">
              <div>
                <Flag />
              </div>
              <div>
                <People />
              </div>
              <div>
                <Mp />
              </div>
            </div>
            <p className="considered">
              Human Rights Considered is a public police brutality incident
              viewing application.
              <br />
              <br /> Our goal is to provide information regarding a variety of
              police brutality incidents in an accurate and timely manner to
              public. The incidents have been categorized and can be filtered by
              types of force and state.
            </p>
          </section>
          <section className="middle">
            <div className="middle-content">
              <h1 className="mid-title">How it works?</h1>
              <p className="mid-text">
                We collect relevant incidents data from Twitter, Reddit, and
                police agencies to display it on the map.
              </p>
            </div>
          </section>
          <section className="bottom-section">
            <h2>About Human Rights First</h2>
            <div className="bottom">
              <p className="organization">
                Human Rights First is an independent advocacy and action
                organization that challenges America to live up to its ideals.
                We believe American leadership is essential in the global
                struggle for human rights, so we press the U.S. government and
                private companies to respect human rights and the rule of law.
                When they fail, we step in to demand reform, accountability and
                justice. Around the world, we work where we can best harness
                American influence to secure core freedoms.
              </p>
            </div>
            <a href="#" className="back-to-top">
              back to top {'  '}
              <i class="fa fa-chevron-up"></i>
            </a>
          </section>
        </div>
      </main>
      <footer className="page-footer">
        <small>© Copyright 2020. All rights reserved.</small>
        <ul></ul>
      </footer>
    </div>
  );
};
