import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../styles/components.scss';

config.autoAddCss = false;
library.add(fab);

const projects = [
  {
    id: 1,
    img: '/img/grid.jpg',
    desc: 'Built a custom grid-based framework (similar to bootstrap) with basic functionality necessary to build a website.',
    stack: ' (HTML + CSS)',
    live: 'https://rawcdn.githack.com/davitomix/CustomGridFrameWork/b5320d1646cea5bc2e0e9bdbcfe881e37083e70f/index.html',
    github: 'https://github.com/davitomix/CustomGridFrameWork',
  },
  {
    id: 2,
    img: '/img/entracker.jpg',
    desc: 'Built a form based React/Redux site with Rails Backend API to Create and Read data.',
    stack: ' (React + Rails + API + Heroku)',
    live: 'https://energy-track.herokuapp.com/',
    github: 'https://github.com/geraldgsh/energy-tracker',
  },
  {
    id: 3,
    img: '/img/social.jpg',
    desc: 'A Facebook-like social network application. Features – users, profiles, “friending”, posts, newsfeed, and likes.',
    stack: ' (Ruby on Rails + Heroku)',
    live: 'https://societalbook.herokuapp.com/',
    github: 'https://github.com/geraldgsh/societalbook',
  },
  {
    id: 4,
    img: '/img/todo.jpg',
    desc: 'An Objected Oriented Javascript To Do List app that uses local storage on browser.',
    stack: ' (HTML + CSS + JS + Bulma)',
    live: 'https://rawcdn.githack.com/geraldgsh/todo-list/10b5955ab59a3ca8048f348bf3ed253ffd558b90/dist/index.html',
    github: 'https://github.com/geraldgsh/todo-list',
  },
  {
    id: 5,
    img: '/img/weather.jpg',
    desc: 'A weather application that shows weather info on queried location(s) via API from openweathermap.',
    stack: ' (HTML + CSS + JS + API)',
    live: 'https://raw.githack.com/geraldgsh/weather-app/master/dist/index.html',
    github: 'https://github.com/geraldgsh/weather-app',
  },
  {
    id: 6,
    img: '/img/calculator.jpg',
    desc: 'A simple calculator app built with React. It uses Stateful component which are defined using a class.',
    stack: ' (React + Heroku)',
    live: 'https://react-calculate.herokuapp.com/',
    github: 'https://github.com/geraldgsh/react-calculator',
  },
  {
    id: 7,
    img: '/img/calculator.jpg',
    desc: 'A simple calculator app built with React. It uses Stateful component which are defined using a class.',
    stack: ' (React + Heroku)',
    live: 'https://react-calculate.herokuapp.com/',
    github: 'https://github.com/geraldgsh/react-calculator',
  },
];

function Followers() {
  return (
    <div id="list" className="card-container">
      {projects.map(project => (
        <div className="card" key={project.id}>
          <div className="card-image">
            <div className="avatar-header">
              <div className="container has-text-centered">
                <div className="column pale">
                  <br />
                  <div className="boxster">
                    <figure className="avatar">
                      <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="GH logo" />
                    </figure>
                    <form>
                      <div className="user-meta has-text-centered">
                        <a href={project.github} target={project.live}>
                          <i>
                            <FontAwesomeIcon icon={['fab', 'github-square']} width="18" />
                          </i>
                        </a>
                        <h3 className="username">Helen Miller</h3>
                        <h5 className="position">Followers</h5>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="desc is-capitalized">
              {project.desc}
              {project.stack}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Followers;
