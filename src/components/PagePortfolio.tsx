import { linkSM } from "../helpers/linker";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

// Portfolio page showing all of my web applications
const PagePortfolio = () => {
  // Due to the amount of nesting Bootstrap.React uses, Indentation starts on first child elements
  return (
    <Card className="rounded-bottom rounded-0 offWhiteBack">
      <Card.Body>
        {/* Resume Sections
			- Hexitaire
			- Food-Groups
			- This Site
		*/}
        {/* Hex-sweep.com */}
        <Card className="mb-5">
          <a
            href="https://djfreekyfresh.itch.io/the-death-and-life-of-alex"
            className="whiteText"
          >
            <Card.Header className="cardHeader">
              <h3>The Death and Life of Alex</h3>
            </Card.Header>
          </a>
          {/* Carousel of Images, not linked */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 tallImage"
                src="images/portfolio/screenshots1.png"
                alt="The game in the opening area"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 tallImage"
                src="images/portfolio/screenshots2.png"
                alt="Showing the dialogue system"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 tallImage"
                src="images/portfolio/screenshots3.png"
                alt="Main character in a farm environment"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 tallImage"
                src="images/portfolio/screenshots4.png"
                alt="Part of the opening cutscene"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 tallImage"
                src="images/portfolio/screenshots5.png"
                alt="The user is confronted with a choice"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <p>
              &emsp;&emsp;The Death and Life of Alex is a game made in 13 days
              for the 2023 <a href="https://gamedevjs.com/">GameDev.js</a> Game
              Jam. This was made by my friend and I. We created a game engine in
              Vue3 and made a top-down RPG, story based game.
            </p>
            <p>
              &emsp;&emsp;The engine was worked on before the game jam started,
              and as such is not a part of those 13 days. We solely focussed on
              different mechanics and systems that would be able to work
              together. In the end, we actually threw out a lot of those systems
              for the game, as the scale was a lot smaller, and wasn't served by
              having a card system for example.
            </p>
            <p>
              &emsp;&emsp;This being written in Vue3, was a change for me. This
              allowed me to test my ability to adapt to a new system with a time
              constraint. Overall the work with the engine before the jam
              started was invaluable as it allowed me to experiment with the
              framework in ways I might not have; if we knew the exact game we
              wanted to make.
            </p>
            <p>
              &emsp;&emsp;We both had hands in most components/aspects of the
              game. However, I did do the lions share of both the front-end
              component work, and the level design and creation. This was only
              due to the fact that my partner had prior commitments throughout
              the jam.
            </p>
            <Card className="mb-3">
              <Card.Header className="offWhiteBack">
                Technologies Used:
              </Card.Header>
              <Card.Body className="text-center">
                <p>
                  [{linkSM("vue")}], [{linkSM("type")}], [{linkSM("html")}], [
                  {linkSM("css")}]
                </p>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Header className="offWhiteBack">Skills Used:</Card.Header>
              <Card.Body className="text-center">
                <p>
                  [{linkSM("front")}], [{linkSM("gui")}], [{linkSM("resp")}], [
                  {linkSM("comp")}], [{linkSM("strict")}], [{linkSM("ux")}]
                </p>
              </Card.Body>
            </Card>
          </Card.Body>
          <Card.Footer className="cardHeader">
            Public github link: &nbsp;
            <a
              className="whiteText"
              href="https://github.com/RyanUlch/AlexGame"
            >
              Client
            </a>
          </Card.Footer>
        </Card>
        {/* Hex-sweep.com */}
        <Card className="mb-5">
          <a href="https://Hex-Sweep.com/" className="whiteText">
            <Card.Header className="cardHeader">
              <h3>Hex-Sweep.com</h3>
            </Card.Header>
          </a>
          {/* Carousel of Images, not linked */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 tallImage"
                src="images/portfolio/hexsweep_1_ref.jpg"
                alt="An Easy Hex-Sweep Game"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 tallImage"
                src="images/portfolio/hexsweep_2_ref.jpg"
                alt="A Hard game in progress"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 tallImage"
                src="images/portfolio/hexsweep_3_ref.jpg"
                alt="Lost game in Hex-Sweep"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <p>
              &emsp;&emsp;Hex-Sweep was my spiritual successor to Hexitaire. I
              enjoyed making a game, and learning how better to interact with
              the browser, so I decided to make that my next project as well.
            </p>
            <p>
              &emsp;&emsp;Although this game is not as well defined as Hexitaire
              is (which is just solitaire with different cards). Hex-Sweep does
              combine some elements of logic, as well as luck. There are
              situations you can get yourself into where there is a 50/50 chance
              of picking a bomb cell. Although I would prefer if the game could
              be 100% deduced, I decided to spend my time on the "good" of
              making the game. Rather than the "Perfect" of making mechanics to
              make sure every game could be won by pure logic.
            </p>
            <p>
              &emsp;&emsp;I did learn a lot with this game. Although if I had to
              do it again, I would probably pick a harder concept, or try to
              create it using a different framework. As there were different
              challenges for sure. However, using React again didn't really push
              me to learn any new technologies. That being said, I do think the
              spacing of the cells and the logic for drawing those did help me
              better understand the box-model and understand how to manipulate
              space better.
            </p>
            <Card className="mb-3">
              <Card.Header className="offWhiteBack">
                Technologies Used:
              </Card.Header>
              <Card.Body className="text-center">
                <p>
                  [{linkSM("react")}], [{linkSM("type")}], [{linkSM("html")}], [
                  {linkSM("css")}]
                </p>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Header className="offWhiteBack">Skills Used:</Card.Header>
              <Card.Body className="text-center">
                <p>
                  [{linkSM("front")}], [{linkSM("gui")}], [{linkSM("resp")}], [
                  {linkSM("comp")}], [{linkSM("strict")}], [{linkSM("ux")}]
                </p>
              </Card.Body>
            </Card>
          </Card.Body>
          <Card.Footer className="cardHeader">
            Public github link: &nbsp;
            <a
              className="whiteText"
              href="https://github.com/RyanUlch/hexsweep"
            >
              Client
            </a>
          </Card.Footer>
        </Card>
        {/* Hexitaire.com */}
        <Card className="mb-5">
          <a href="https://Hexitaire.com/" className="whiteText">
            <Card.Header className="cardHeader">
              <h3>Hexitaire.com</h3>
            </Card.Header>
          </a>
          {/* Carousel of Images, not linked */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/portfolio/hex_start_ref.jpg"
                alt="Hexitaire game just starting out"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/portfolio/hex_dedication_ref.jpg"
                alt="The dedication page of Hexitaire.com"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/portfolio/hex_win_ref.jpg"
                alt="A winning game of Hexitaire!"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <p>
              &emsp;&emsp;Hexitaire was a really fun project to work on. From
              the jump using React and Typescript, I built a card game from
              scratch. The idea was simply to build a solitaire game; since my
              wife highly enjoys those types of games, but to give it a bit of a
              twist.
            </p>
            <p>
              &emsp;&emsp;I highly suggest you have a round or two to see it in
              action. Like a normal solitaire game, it's about putting the cards
              away in their ending piles. There are a few differences you'll
              want to check the "rules" button and the bottom for.
            </p>
            <p>
              &emsp;&emsp;I did learn a lot with this project, and although I
              have a few ideas for features in the future (ie. LocalStorage
              Stats, Online Leader board, Next Move suggestion, etc), I am very
              happy with how this app both looks and performs.
            </p>
            <Card className="mb-3">
              <Card.Header className="offWhiteBack">
                Technologies Used:
              </Card.Header>
              <Card.Body className="text-center">
                <p>
                  [{linkSM("react")}], [{linkSM("type")}], [{linkSM("html")}], [
                  {linkSM("css")}]
                </p>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Header className="offWhiteBack">Skills Used:</Card.Header>
              <Card.Body className="text-center">
                <p>
                  [{linkSM("front")}], [{linkSM("gui")}], [{linkSM("resp")}], [
                  {linkSM("comp")}], [{linkSM("strict")}], [{linkSM("ux")}]
                </p>
              </Card.Body>
            </Card>
          </Card.Body>
          <Card.Footer className="cardHeader">
            Public github link: &nbsp;
            <a className="whiteText" href="https://github.com/RWACU/hexitaire">
              Client
            </a>
          </Card.Footer>
        </Card>
        {/* RyanUlch.com */}
        <Card>
          <Card.Header className="cardHeader">
            <h3>This Site!</h3>
          </Card.Header>
          <Card.Body>
            <p>
              &emsp;&emsp;This site is simply to showcase the projects I have
              worked on, as well as show that I can implement CSS to properly
              create dynamic, responsive designs for multiple device sizes. As
              well as saying hi, to any potential employers. Hi!
            </p>
            <p>
              &emsp;&emsp;I've learned having a clear understanding of how the
              responsiveness of a site should be front and center when first
              creating mock-ups of a site.
            </p>
            <p>
              &emsp;&emsp;I had started creating the site with media queries
              trying to handle the switching between different designs; using
              React to dynamically send different classes to components. This
              proved inefficient, as it created a complicated, hardly readable
              codebase just to handle CSS classes.
            </p>
            <p>
              &emsp;&emsp;I threw out the media query handling of responsive
              design model I was using; opting to use CSS features such as
              clamp(), calc(), rem/em units, ect. to make sure that the site
              looked and preformed well on all platforms.
            </p>
            <p>
              &emsp;&emsp;I have now redesigned this website from the ground up
              using React-Bootstrap. This allowed me to create a responsive site
              that has more of a professional, web 3.0 feel.
            </p>
            <p>
              &emsp;&emsp;This is also the first project I used Typescript in.
              As I originally learned development through C++, I am used to
              strongly typed languages; and although Typescript does have some
              quirks with the Javascript compilation, it was fairly easy to pick
              up.
            </p>
            <Card className="mb-3">
              <Card.Header className="offWhiteBack">
                Technologies Used:
              </Card.Header>
              <Card.Body className="text-center">
                <p>
                  [{linkSM("react")}], [{linkSM("type")}], [{linkSM("js")}], [
                  {linkSM("boot")}], [{linkSM("html")}], [{linkSM("css")}]
                </p>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Header className="offWhiteBack">Skills Used:</Card.Header>
              <Card.Body className="text-center">
                <p>
                  [{linkSM("front")}], [{linkSM("resp")}], [{linkSM("strict")}]
                </p>
              </Card.Body>
            </Card>
          </Card.Body>
          <Card.Footer className="cardHeader">
            Public github link: &nbsp;
            <a
              className="whiteText"
              href="https://github.com/RWACU/ryanulchsite"
            >
              Client
            </a>
          </Card.Footer>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default PagePortfolio;
