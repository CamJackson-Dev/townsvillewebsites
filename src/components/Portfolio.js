import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ImageContentHover from "react-image-hover";
import "./styles.css";

class Portfolio extends Component {
  render() {
    return (
      <>
        <section className="portfolio">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="portfolio-title text-white mb-5 mt-4">
                  <h1 className="title-font">Check out some of our work</h1>
                  <p className="mt-4 mb-4 title-font-2">
                    For every complex problem, there is an answer that is clear,
                    simple, and wrong.
                  </p>
                </div>
              </div>
              {this.props.items.map((image) => (
                <div className="col-lg-4 col-md-4 col-sm-6" key={image.id}>
                  <div className="portfolio-thumb">
                    <Link to={`/works/${image.id}`}>
                      <img src={image.src} alt={image.title} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.works,
  };
};

export default connect(mapStateToProps)(Portfolio);
