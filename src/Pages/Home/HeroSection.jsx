export default function HeroSection() {
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/soufyane-rahhal-3534121ba/', '_blank');
      };
    return (
        <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Soufyane</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Computer engineer passionate about software development and constantly on the lookout for new technologies to innovate and solve complex challenges.
            <br />  Curious to know more ?
          </p>
        </div>
        <button className="btn btn-primary" onClick={openLinkedIn}>Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
    )
}