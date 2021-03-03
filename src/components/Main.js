import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.png'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.png'

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
          <h3 className="projectTitle">Dev Chat</h3>
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
            technical backgrounds, across the world. <br /> Tech Stack:
          </p>
          <ul>
            <li>React.js</li>
            <li>Google Firebase</li>
            <li>Material UI</li>
            <li>Context State Management</li>
            <li>Yup Validation</li>
          </ul>
          <h3 className="projectTitle">Data Visualization: Chess</h3>
          <span className="image main">
            <a
              href="https://public.tableau.com/profile/steven.sussman#!/vizhome/ChessWinPercentagesbyOpenings/Dashboard1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pic03} alt="" />
            </a>
          </span>
          <p style={{ marginBottom: '5px' }}>
            Chess data visualization with a focus on openers and win percentage
            by color. <br /> Information:
          </p>
          <ul>
            <li>Created on Tableau</li>
            <li>Uses aggregated data from approximately 20,000 chess games</li>
            <li>
              Details game information information by color and / or opener name
            </li>
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
            <img
              style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}
              src={pic02}
              alt=""
            />
          </span>
          <p>
            I am a Web Developer currently living in New York City. My preferred
            languages are React and Node.js. Other proficiencies include
            Typescript, Git, Python, Vanilla JavaScript, HTML, CSS, End-To-End
            Testing, LESS, Postgres, Redux, Relational Databases, RESTful
            Architecture, SQL and Agile Project Management. I am currently open
            to work so feel free to contact me with any inquiries.
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
