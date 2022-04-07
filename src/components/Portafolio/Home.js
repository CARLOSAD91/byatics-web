import React from 'react'

const Home = () => {
  return (
    <div>
      <section className="home active section" id="home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my names is<span className="name"> Alimi Mousaad</span>
              </h3>
              <h3 className="my-profession">
                I' m a<span className="typing">web designer</span>
              </h3>
              <p>
                I'm a web Designer with extensive experience for over 10
                years.My expertise is to create and website desing, graphic
                design, and many more...
              </p>
              <a href="#contact" className="btn hire-me">
                Hire Me
              </a>
            </div>
            <div className="home-img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home