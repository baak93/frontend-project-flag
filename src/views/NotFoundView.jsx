function NotFoundView() {
  return (
    <>
      <div className="headerBackground"></div>
      <div className="spacer"></div>
      <h1 id="error">!!!404!!!</h1>
      <div className="errorMessage">
        <h2>PAGE NOT FOUND</h2>
        <p>The page you are looking for is not available.</p>
        <p>Some reasons why this page has shown up might be:</p>
        <ul>
          <li>The page was removed and other pages still link to it</li>
          <li>Our server may be experiencing technical difficulties</li>
          <li>You typed an incorrect address in your browser's address bar</li>
        </ul>
      </div>
    </>
  );
}

export default NotFoundView;
