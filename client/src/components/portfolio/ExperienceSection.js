import React from "react";

function ExperienceSection({ experiences }) {
  return (
    <section
      id="experience-section"
      className="experience-section"
      data-aos="fade-up"
    >
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="row justify-content-center">
          {experiences && experiences.length ? (
            experiences.map((exp, idx) => (
              <div
                key={idx}
                className="col-lg-6 col-md-8 col-sm-10 mb-4"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="experience-card">
                  <h5 className="card-title">
                    {exp.title} @ {exp.company}
                  </h5>
                  <p className="card-date">
                    {new Date(exp.startDate).toLocaleDateString()} -{" "}
                    {exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString()
                      : "Present"}
                  </p>
                  <p className="card-description">{exp.description}</p>
                  <p className="card-tech">
                    <small>Tech: {exp.technologies.join(", ")}</small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-light-subtle">
              <p>No Experiences Available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
