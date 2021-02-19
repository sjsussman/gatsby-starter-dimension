import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <a
              href="https://my-dev-chat.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pic01} alt="" />
            </a>
          </span>
          <p style={{ marginBottom: '5px' }}>
            Dev Chat is a messaging app to connect software engineers, of all
            technical backgrounds, accross the world. <br /> Tech Stack:
          </p>
          <ul>
            <li>React.js</li>
            <li>Google Firebase</li>
            <li>Material UI</li>
            <li>Context State Management</li>
            <li>Yup Validation</li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="social">
            <a
              href="http://github.com/sjsussman"
              target="_blank"
              rel="noreferrer"
              className="icon fa-github"
            >
              <span className="label">Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/steven-sussman/"
              target="_blank"
              rel="noreferrer"
              className="icon fa-linkedin"
            >
              <span className="label">Linkedin</span>
            </a>

            <a
              href="http://twitter.com/namssus"
              target="_blank"
              rel="noreferrer"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>

            <a
              href="mailto:hello@sjsussman.com"
              target="_blank"
              rel="noreferrer"
              className="icon fa-at"
            >
              <span className="label">GitHub</span>
            </a>
          </div>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
