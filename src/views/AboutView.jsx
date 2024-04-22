function AboutView() {
  return (
    <>
      <div className="headerBackground"></div>
      <div className="spacer"></div>
      <div className="travelerContainer">
        <div className="travelerPhoto">
          <img
            src="https://plus.unsplash.com/premium_photo-1664303725372-8da2ce6d98e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Traveler Photo"
          />
        </div>
        <div className="travelerDescription">
          <h1>Welcome to my universe of discoveries and wonders!</h1>
          <p>
            I'm Bruno,
            <br />
            <br />
            the adventurer behind this travel blog, eager to share the
            fascinating stories that each destination has to offer.
          </p>
          <br />

          <p>
            Facing challenges during my adventures is an integral part of my
            journey. I believe it's in these moments that we find the most
            authentic and valuable stories. Every linguistic barrier overcome
            and every logistical obstacle faced are opportunities for growth and
            learning.
          </p>
          <br />

          <p>
            The message I aim to convey to readers of this blog is simple yet
            powerful: travel goes beyond the places we visit. It's about the
            connections we make, the experiences that transform us, and the
            valuable lessons that each destination offers. Join me on this
            exciting journey of discovery, where adventure is always on the
            horizon, and the world awaits to be explored.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutView;
