function Footer() {
  return (
    <>
      <div className="footer">
        <p>© 2024 Bruno Alves Aragão</p>
        <div className="footerIcons">
          <a
            href="https://github.com/baak93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/github.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-alves-aragao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/linkedin.svg" alt="" />
          </a>
          <a href="http://localhost:5173/">
            <img src="images/blog-icon.svg" alt="" />
          </a>
        </div>
        <p>
          All credits for the images used on this website belong to their
          original authors.
        </p>
      </div>
    </>
  );
}

export default Footer;
