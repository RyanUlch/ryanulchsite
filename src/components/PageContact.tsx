import Card from "react-bootstrap/Card";

// Contact page with an email form to be sent.
const PageContact = () => {
  // Due to the amount of nesting Bootstrap.React uses, Indentation starts on first child elements
  return (
    <Card className="rounded-bottom rounded-0 offWhiteBack">
      <Card.Body>
        <Card className="mb-5">
          {/* Contact Info Section */}
          <Card.Header className="cardHeader">
            How to get in contact with me
          </Card.Header>
          <Card.Body className="pb-0">
            <h4 className="mb-2 text-center">
              Emailing me is the best way to get in contact:{" "}
              <a href="mailto:RyanUlchDev@gmail.com?subject=From RyanUlch.com">
                RyanUlchDev@Gmail.com
              </a>
            </h4>
            <Card className="well mt-3 text-center">
              <Card.Body>
                <p>I am currently available for freelance work.</p>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
        <Card>
          {/* Location Section */}
          <Card.Header className="cardHeader">Where I am:</Card.Header>

          <Card.Body className="pb-0">
            <div className="mapContainer">
              <iframe
                className="rounded border map"
                title="MapFrame"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA72Tg4Xp4O92XC-9ilIGfgyVlVQpS59_Y&q=43220&zoom=11"
              />
            </div>
            <Card className="well">
              <Card.Body>
                <p>
                  I reside in Columbus, Ohio. I can only accept jobs that are
                  either local to the area, or are 100% work-from-home
                  currently.
                </p>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default PageContact;
