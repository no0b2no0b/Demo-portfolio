import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Nothing",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/5823235/file/original-cb645580a32fdb832ac71181d7078e29.png?compress=1&resize=752x",
  },

  {
    id: 2,
    image: IMG2,
    title: "Nothing",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/5823236/file/original-28a84b2992ad6375bc3e4cdd0d162df8.png?compress=1&resize=752x",
  },

  {
    id: 3,
    image: IMG3,
    title: "Nothing",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/5823239/file/original-77e2aa307d30a8a8950660ac545b7122.png?compress=1&resize=752x",
  },

  {
    id: 4,
    image: IMG4,
    title: "Nothing",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/5823240/file/original-976b57cfb52f687e4fe03225f0b4c75f.png?compress=1&resize=752x",
  },

  {
    id: 5,
    image: IMG5,
    title: "Nothing",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/5823241/file/original-ed17ed8d33231a76d0d44a7b8e6d015d.png?compress=1&resize=752x",
  },

  {
    id: 6,
    image: IMG6,
    title: "Nothing",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/5823238/file/original-d3d863d739f84435f66e2c0638d8add4.png?compress=1&resize=752x",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn">Github</a>
                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
        {/* <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn">Github</a>
        <a href="https://dribbble.com" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn">Github</a>
        <a href="https://dribbble.com" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn">Github</a>
        <a href="https://dribbble.com" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn">Github</a>
        <a href="https://dribbble.com" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn">Github</a>
        <a href="https://dribbble.com" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
