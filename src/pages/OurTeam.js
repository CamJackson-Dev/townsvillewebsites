import React, { Component } from "react";
import { connect } from "react-redux";
import ImageContentHover from "react-image-hover";

class OurTeam extends Component {
  render() {
    return (
      <>
        <section className="team section-title mt-5 text-white text-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 mx-auto">
                <div className="team-title mb-5 mt-5">
                  <h1 className="title-font title-font-size">Meet Cam</h1>
                  <div className="row justify-content-center align-items-center">
                    {this.props.persons.map((person) => (
                      <div
                        className="col-lg-6 col-md-8 col-sm-10"
                        key={person.id}
                      >
                        <div className="row justify-content-center align-items-center">
                          <ImageContentHover
                            className="d-block mx-auto portfolio-thumb"
                            image={person.image}
                            content={{
                              title: [person.name],
                              body: [person.position],
                            }}
                            // effect="fadeIn"
                          />
                        </div>
                        <div className="person-info mb-5 text-center">
                          <p className="person-name title-font-2">
                            {person.name}
                          </p>
                          <p className="person-position title-font-2">
                            {person.position}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="title-text mt-4 mb-4 title-font-2 text-justify">
                    Cam is a passionate and driven Software Developer who
                    thrives on creativity and innovation, dedicated to bringing
                    visions to life. Born and raised in Townsville, he has
                    witnessed the transformation of this vibrant community and
                    is deeply committed to its growth and development.
                  </p>
                  <p className="title-text mt-4 mb-4 title-font-2 text-justify">
                    With a strong entrepreneurial spirit, Cam is committed to
                    helping businesses and individuals turn their ideas into
                    reality through cutting-edge software solutions. He values
                    transparency, honesty, and respect for people's time,
                    ensuring a collaborative and efficient working relationship.
                  </p>
                  <p className="title-text mt-4 mb-4 title-font-2 text-justify">
                    Cam enjoys meeting new people and believes in the power of
                    connection—while he’s always up for a coffee, he prefers to
                    share ideas over a cold beer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.team,
  };
};

export default connect(mapStateToProps)(OurTeam);
