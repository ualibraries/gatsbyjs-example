import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import branding from './placeholder-logo.png'

class Template extends React.Component {
  render () {
    return (
      <div>
        <Helmet>
          <link rel='stylesheet' href='https://cdn.uadigital.arizona.edu/lib/ua-brand-icons/latest/ua-brand-icons.css' />
          <link rel='stylesheet' href='https://cdn.uadigital.arizona.edu/lib/ua-bootstrap/v1.0.0-beta.17/ua-bootstrap.min.css' />
        </Helmet>
        <header className='l-arizona-header bg-red' id='region_header_ua'>
          <section className='container l-container'>
            <div className='row'><a className='arizona-logo' href='http://www.arizona.edu' title='The University of Arizona homepage'>
              <img className='arizona-line-logo' alt='The University of Arizona Wordmark Line Logo White' src='https://cdn.uadigital.arizona.edu/logos/v1.0.0/ua_wordmark_line_logo_white_rgb.min.svg' />
            </a>
            </div>
          </section>
        </header>
        <div className='container'>
          <div id='site_identifier'>
            <Link
              to='/'
              style={{
                display: 'block',
                margin: '2.5rem 0'
              }}
            >
              <img
                src={branding}
                style={{
                  maxWidth: '400px',
                  height: 'auto'
                }}
              />
            </Link>
          </div>
          <nav className='navbar navbar-default'>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='text'>MAIN MENU</span>
                </button>
              </div>
              <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/'>
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Template
