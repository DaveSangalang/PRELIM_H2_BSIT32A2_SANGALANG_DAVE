import React from "react";

function CV() {
  return (
    <div>
      <header className="bg-dark text-white text-center p-4">
        <h1>My Portfolio</h1>
        <h5>BSIT-32A2</h5>
      </header>

      <section id="home" className="container py-5 text-center">
        <h2>Home</h2>
        <p>
          Hello! My name is Dave Sangalang, and I'm a 3rd year college student.
        </p>
      </section>

      <section id="about" className="container py-5">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Education</h3>
            <ul>
              <p>Kinder - Parkhomes Daycare</p>
              <p>Elementary - Infant Jesus Montessori Center</p>
              <p>Highschool - Southernside Montessori School</p>
              <p>Senior Highschool - Lyceum of Alabang</p>
              <p>College - Lyceum of Alabang</p>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h3>School Activities</h3>
            <ul>
              <li>CSS Week Mobile Legends Champion SY 2022-2023</li>
              <li>CSS Week Basketball SY 2022-2023</li>
              <li>CSS Week Mobile Legends Champion SY 2023-2024</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="container py-5 bg-light">
        <h2>Contact Me</h2>
        <form
          id="contact-form"
          action="submit_form.php"
          method="POST"
          onSubmit="return validateForm(event)"
        >
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label for="subject">Subject:</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

      <footer className="bg-dark text-white text-center p-4"></footer>
    </div>
  );
}

export default CV;
