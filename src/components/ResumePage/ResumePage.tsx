import classes from "./ResumePage.module.css";
import FenceBox from "../FenceBox/FenceBox";
import HouseBox from "../HouseBox/HouseBox";
import ImageBox from "../ImageBox/ImageBox";
import SectionGroup from "../SectionGroup/SectionGroup";
import { linker, linkSM, linkList } from "../../helpers/linker";
import UnorderedList from "../UnorderedList/UnorderedList";
const ResumePage = () => {
	return (
		<>
			<div className={classes.beach}>
				<header>
					<h1>Ryan Ulch - Web Developer</h1>
				</header>
			</div>
			<div className={classes.grass}>
				{/* Accordion of Resume Sections
			- About Me
			- Qualifications
			- Work experience
			- Education
		*/}

				{/* About Me */}
				<FenceBox heading="About Me">
					<SectionGroup>
						<div className={`${classes.property} ${classes.isOdd}`}>
							<HouseBox>
								<p>
									&emsp;&emsp;I am a self-taught programmer from Windsor, Canada.
									Interested in computers and technology since I was a little
									child; I went into Film and Television production naturally. I
									enjoyed the technical aspects of production; mostly camera
									operation and editing. They both gave me the ability to express
									myself artistically, while still adhering to conventions (and
									knowing when to buck conventions) to produce something that was
									uniquely me.
								</p>
								<p>
									&emsp;&emsp;However, the job I got out of college involved none
									of that. I did get to work in a fast-paced office environment.
									Working on large-scale projects Quality-Controlling and encoding
									video for {linker("Crave.ca", "https:crave.ca")} (Service not
									available outside of Canada) for almost 8 years.
								</p>
							</HouseBox>
							<ImageBox src="header0.jpg" alt="Me in a suit" />
						</div>
					</SectionGroup>
					<SectionGroup>
						<div className={`${classes.property} ${classes.isEven}`}>
							<ImageBox src="header1.jpg" alt="Me with my black cat 'Soy Sauce'" />
							<HouseBox isBlue>
								<p>
									&emsp;&emsp;I had started to learn {linkSM("c++")} programming
									around 2016. Creating two functional programs that my department
									used to allow a more efficient workflow.
								</p>
								<p>
									(Due to creating the applications for a private corporation, I
									do not own the own code for these, and cannot share the github
									links)
								</p>
								<p>
									&emsp;&emsp;The first was a {linkSM("cli")} (Command Line
									Interface) to work with a proprietary application we used to
									Quality Control assets. Eventually being reworked as a{" "}
									{linkSM("qt")} {linkSM("gui")} application as that proprietary
									app and workflow became more complex. The other being a QT GUI
									application for file manipulation, as there was a lot of manual
									changing of file structures.
								</p>
							</HouseBox>
						</div>
					</SectionGroup>
					<SectionGroup>
						<div className={`${classes.property} ${classes.isOdd}`}>
							<HouseBox>
								<p>
									&emsp;&emsp;While working for
									{linker("Bell Media Canada", "https://www.bellmedia.ca/")}, I
									met my lovely wife Lucy; who has lived in Ohio her whole life.
									We got married in November of 2019 in Toledo, Ohio and started
									immigration procedures. 2 years later, while during a pandemic,
									I was able to{" "}
									{linker(
										"immigrate",
										"https://www.dhs.gov/get-green-card#:~:text=A%20Green%20Card%20holder%20is,called%20a%20%22Green%20Card.%22"
									)}{" "}
									to the United States of America with my wife. While getting
									settled, I got a part-time job at{" "}
									{linker(`Graeter's Ice Cream`, "https://www.graeters.com/")}{" "}
									here in Columbus, Ohio. A great place that helped hone my
									ability to deal with the general public while completing orders
									and going above and beyond with both customers and the needs of
									the store.
								</p>
							</HouseBox>
						</div>
					</SectionGroup>
					<SectionGroup>
						<HouseBox isBlue>
							<p>
								&emsp;&emsp;While working at Graeter's, I learned web development
								with the help of my{" "}
								{linker(
									"best friend",
									"https://www.linkedin.com/mwlite/in/eric-sartor-21867616a"
								)}
								; a software developer. Who works at Bell Media, in Canada.
							</p>
						</HouseBox>
					</SectionGroup>
					<SectionGroup>
						<HouseBox>
							<p>
								&emsp;&emsp;Now, I'm looking for an employer who wants a
								self-starting, smart, adaptable junior web developer to grow and
								learn with.
							</p>
						</HouseBox>
					</SectionGroup>
				</FenceBox>

				{/* Qualifications */}
				<FenceBox heading="Qualifications">
					{/* Technologies Start */}
					<UnorderedList title="Technologies:">
						{[
							{ name: "Javascript / ECMAScript", link: "" },
							{ name: "React", link: "" },
							{ name: "Vue3", link: "" },
							{ name: "Bootstrap", link: "" },
							{ name: "Node.js", link: "" },
							{ name: "SQL/MySQL", link: "" },
							{ name: "HTML 5", link: "" },
							{ name: "CSS 3", link: "" },
							{ name: "TypeScript", link: "" },
							{ name: "C++", link: "" },
							{ name: "Java", link: "" },
						]}
					</UnorderedList>
					<UnorderedList title="Soft Skills:">
						{[
							{ name: "Self-Starter" },
							{ name: "Fast-Learner" },
							{ name: "Committed to deadlines" },
							{ name: "Works Well in a team" },
							{ name: "Asks the right questions" },
							{ name: "Deductive Reasoning" },
						]}
					</UnorderedList>
				</FenceBox>

				{/* Experience */}
				<FenceBox heading="Experience">
					{/* Experience at Users First */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isOdd}`}>
							<HouseBox isBlue title="Users First - Front-End Developer">
								{[
									<h4>Key Achievements:</h4>,
									<p>
										&emsp;&emsp;Delivered SharePoint Web Component with based on
										Spec image. Worked with SharePoint Online to connect
										multiple Web Components state.
									</p>,
									<h4>Job Duties:</h4>,
									<p>
										&emsp;&emsp;Creating, updating, and fixing front-end React
										Components to meet specification for multiple clients.
										Working with data formats (CSV, TSV, etc.) to populate
										tables for dynamic content
									</p>,
								]}
							</HouseBox>
							<ImageBox
								src="UsersFirst.jpeg"
								label="Users First 2023 - Present - Columbus, Ohio, USA"
								alt="Logo of Users First"
								href="https://www.linkedin.com/company/usersfirst/"
							/>
						</div>
					</SectionGroup>
					{/* Experience at Bell Media Inc */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isEven}`}>
							<ImageBox
								src="DALLE_Office.jpg"
								alt="Dall-e generated: Open concept office"
								label="Bell Media Inc 2014-2022 - Scarborough, Ontario, Canada"
								href="https://www.bellmedia.ca/"
							/>
							<HouseBox title="Bell Media Inc. - Digital Media Operator">
								{[
									<h4>Key Achievements:</h4>,
									<p>
										Created a {linkSM("c++")} program that interacts with
										another software through {linkSM("cli")} to increase
										productivity, as manual manipulation of this software was
										time consuming. Part of a team to design a workflow in
										regards to a unique ID associated with media assets which
										has since seen widespread use in and out of the department.
										Implemented new techniques associated with communicating
										with other shifts; such as a color coded system for
										programming schedules.
									</p>,
									<h4>Job Duties:</h4>,
									<p>
										Working with media assets from a large range of suppliers;
										to ensure quality of assets, transcode to multiple
										specifications, and deliver to a diverse group of partners.
										Maintaining linear live streams for sporting events, award
										shows and the like; working with distribution, scheduling,
										and technicians to ensure a smooth, uninterrupted user
										experience. Maintaining accurate information across a
										plethora of sources; including programming schedules,
										e-mails, sharepoint systems, etc.
									</p>,
									<h4>Relevance:</h4>,
									<p>
										This job has given me a lot of office experience, including
										working on a small team to achieve tight deadlines for large
										scale projects. Creating multiple applications from scratch
										(not the {linker("language", "https://scratch.mit.edu/")}
										). That allowed me to develop skills to take active feedback
										as me and my colleagues used them in our day to day jobs.
									</p>,
								]}
							</HouseBox>
						</div>
					</SectionGroup>
					{/* Experience at Graeter's */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isOdd}`}>
							<HouseBox isBlue title="Graeter's - Line Service Worker">
								{[
									<h4>Job Duties</h4>,
									<p>
										Worked in a fast-paced environment to make orders to
										specifications; often having to have work on multiple orders
										at a time. Being part of a team, working with others
										regardless of their experience. Asking questions of those
										who knew more, and helping those who were newer to the
										process. Keeping work and customer areas tidy, hygienic and
										inviting.
									</p>,
									<h4>Relevance:</h4>,
									<p>
										Being able to work under a time constraint, while handling
										customer and co-worker interactions, has allowed me to
										develop professional stress management skills to use
										time-pressure in a advantageous way.
									</p>,
								]}
							</HouseBox>
							<ImageBox
								src="ryanGraeters.jpg"
								alt="Me in a Graeter's uniform on my first day of work"
								label="Graeter's Ice Cream (Part-Time) 2022 - Columbus, Ohio, USA"
								href="https://www.graeters.com/"
							/>
						</div>
					</SectionGroup>
					{/* Experience at Wal-Mart (London) */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isEven}`}>
							<ImageBox
								src="DALLE_StoreRoom.jpg"
								alt="Dall-e generated: A backroom of a large department store"
								label="Wal-Mart Canada 2012 - 2013 - London, Ontario, Canada"
								href="https://www.walmart.ca/en"
							/>
							<HouseBox title="Wal-Mart - Second Shift In-Stock Associate">
								{[
									<h4>Job Duties:</h4>,
									<p>
										Organized the stockroom to operate in a smooth manner.
										Worked with the computer system to find and deliver stock to
										their corresponding departments. Asked to help out in all
										departments from time to time; where a spot was needed to be
										filled.
									</p>,
									<h4>Relevance:</h4>,
									<p>
										I had to handle lots of inventory coming into the store,
										sorting and organizing product as to allow easy access for
										the other associates of the store. I developed my
										team-working skills from this job. As it was the first time
										I was in an environment where you had to work together, or
										the tasks involved would not be completed in time. I was
										also going to college at the time of this job and had to
										balance work and school. Allowing me to develop a lot of
										time-management skills.
									</p>,
								]}
							</HouseBox>
						</div>
					</SectionGroup>
					{/* Experience at Wal-Mart (Windsor) */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isOdd}`}>
							<HouseBox isBlue title="Wal-Mart - Produce/Hardware Associate">
								{[
									<h4>Job Duties:</h4>,
									<p>
										Responsible for the timely upkeep of the department from
										spills and messes. Proper care and cleaning of certain
										vegetables for safe consumption for customers. Cleaning and
										organizing the cooler for easy access to stock. While in
										Hardware; working with machinery and tools (Paint Mixer, Key
										Cutter).
									</p>,

									<h4>Relevance:</h4>,
									<p>
										This was one of my first jobs as a young adult. It showed me
										that taking pride in one's work; regardless of the
										recognition you receive from it, allows you to feel good
										about yourself and keep up a good work ethic. Even when the
										job is a simple, mostly manual labor type of job. This job,
										and my dads influence, helped teach me my work ethic. Being
										responsible for things needing to be done, and doing them
										without complaint (ok, mostly. I was 16 at the time). Being
										able to listen to instruction and ask clarifying questions
										when needed; to not presume I know everything.
									</p>,
								]}
							</HouseBox>
							<ImageBox
								src="DALLE_Hardware.jpg"
								alt="Dall-e generated: A DIY department in a large department store"
								label="Wal-Mart Canada 2010 - 2012 - Windsor, Ontario, Canada"
								href="https://www.walmart.ca/en"
							/>
						</div>
					</SectionGroup>
				</FenceBox>

				{/* Education */}
				<FenceBox heading="Education">
					{/* Education at Fanshawe */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isEven}`}>
							<ImageBox
								src="DALLE_Newsroom.jpg"
								alt="Dall-e generated: A newsroom from behind the camera"
								label="Fanshawe College Graduated 2014. London, Ontario, Canada"
								href="https://www.fanshawec.ca/"
							/>
							<HouseBox title="Fanshawe College - Television and Film (Associates)">
								{[
									<h4>The Program:</h4>,
									<p>
										&emsp;&emsp;The Program focused on all aspects of
										production, including but not limited to: Budgeting,
										Paperwork, Camera Operation, Editing and Advertising.
										Completed the program with a GPA of 3.89.
									</p>,
									<h4>Relevance:</h4>,
									<p>
										&emsp;&emsp;In college, we mostly worked on projects in
										teams. I was able to understand that team-member fill a
										role. Which taught me that I can work on aspects of
										projects, while trusting the other members to complete their
										parts. I learned that I thrived with structures (How to
										frame a shot, how to color grade a scene, etc.). However,
										that within the structures of how to do something, there was
										always some creativity that goes into technical work. I
										learned from school that there is imagination and creativity
										in technical work; and that was the type of creativity I was
										really good with.
									</p>,
								]}
							</HouseBox>
						</div>
					</SectionGroup>
					{/* Education at ITT */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isOdd}`}>
							<HouseBox isBlue title="Institute of Technical Trades - Welder Fitter">
								{[
									<h4>The Program:</h4>,
									<p>
										&emsp;&emsp;A six month program training physical skills in
										everything to be a Welder Fitter. I received full{" "}
										{linker("CWB", "https://www.cwbgroup.org/")} certificates in{" "}
										{linker("SMAW", "https://weldguru.com/smaw-welding/")} and{" "}
										{linker(
											"FCAW",
											"https://fractory.com/flux-cored-arc-welding-explained/"
										)}{" "}
										welding.
									</p>,
									<h4>Relevance:</h4>,
									<p>
										&emsp;&emsp;Even though this field is vastly different to
										programming. I went into the schooling because I was missing
										something from my work at Bell Media. I wanted to create and
										work on things in a more tangible way than I was. Although
										this career path didn't take, I don't regret the schooling
										as it showed me that I do value creating and seeing my work
										come to life.
									</p>,
								]}
							</HouseBox>
							<ImageBox
								src="DALLE_Welder.jpg"
								alt="Dall-e generated: A welder, welding"
								label="Institute of Technical Trades Graduated 2016. Toronto, Ontario, Canada"
								href="https://www.instituteoftechnicaltrades.com/"
							/>
						</div>
					</SectionGroup>
					{/* Education at General Amherst */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isEven}`}>
							<ImageBox
								src="DALLE_Highschool.jpg"
								alt="Dall-e generated: A highschool classroom"
								label="General Amherst High School Graduated 2012. Amherstburg, Ontario, Canada"
								href="https://en.wikipedia.org/wiki/General_Amherst_High_School"
							/>
							<HouseBox title="General Amherst High School - HS Diploma">
								{[
									<h4>Note:</h4>,
									<p>
										&emsp;&emsp;This school is no longer around. It was
										decommissioned in 2022 as a new school in Amherstburg,
										Ontario was built to accommodate students from General
										Amherst and Western Secondary School.
									</p>,
								]}
							</HouseBox>
						</div>
					</SectionGroup>
				</FenceBox>
			</div>
			<div className={classes.grassMountainTransition} />
			<div className={classes.mountain}>
				{/* Resume Sections
				- Alex Game
				- Hex-Sweep
				- Hexitaire
				- This Site
			*/}
				<FenceBox heading="Portfolio">
					<SectionGroup>
						<div className={`${classes.property} ${classes.isOdd}`}>
							<div className={classes.sideGroup}>
								<ImageBox
									src="screenshots1.png"
									href="https://djfreekyfresh.itch.io/the-death-and-life-of-alex"
									alt="The game in the opening area"
								/>
								<ImageBox
									src="screenshots2.png"
									href="https://djfreekyfresh.itch.io/the-death-and-life-of-alex"
									alt="Showing the dialogue system"
								/>
								<ImageBox
									src="screenshots3.png"
									href="https://djfreekyfresh.itch.io/the-death-and-life-of-alex"
									alt="Main character in a farm environment"
								/>
							</div>
							<HouseBox title="The Death and Life of Alex">
								<p>
									&emsp;&emsp;The Death and Life of Alex is a game made in 13 days
									for the 2023 <a href="https://gamedevjs.com/">GameDev.js</a>
									Game Jam. This was made by my friend and I. We created a game
									engine in Vue3 and made a top-down RPG, story based game.
								</p>
								<p>
									&emsp;&emsp;The engine was worked on before the game jam
									started, and as such is not a part of those 13 days. We solely
									focussed on different mechanics and systems that would be able
									to work together. In the end, we actually threw out a lot of
									those systems for the game, as the scale was a lot smaller, and
									wasn't served by having a card system for example.
								</p>
								<p>
									&emsp;&emsp;This being written in Vue3, was a change for me.
									This allowed me to test my ability to adapt to a new system with
									a time constraint. Overall the work with the engine before the
									jam started was invaluable as it allowed me to experiment with
									the framework in ways I might not have; if we knew the exact
									game we wanted to make.
								</p>
								<p>
									&emsp;&emsp;We both had hands in most components/aspects of the
									game. However, I did do the lions share of both the front-end
									component work, and the level design and creation. This was only
									due to the fact that my partner had prior commitments throughout
									the jam.
								</p>
							</HouseBox>
						</div>
						<div className={classes.togetherList}>
							<UnorderedList title="Technologies Used:">
								{[
									linkList("vue"),
									linkList("type"),
									linkList("html"),
									linkList("css"),
								]}
							</UnorderedList>
							<UnorderedList title="Skills Used:">
								{[
									linkList("front"),
									linkList("gui"),
									linkList("resp"),
									linkList("comp"),
									linkList("strict"),
									linkList("ux"),
								]}
							</UnorderedList>
						</div>
						Public github link: &nbsp;
						<a
							className="whiteText expandLink"
							href="https://github.com/RyanUlch/AlexGame"
						>
							Client
						</a>
					</SectionGroup>
					<SectionGroup>
						{/* Hex-sweep.com */}
						<div className={`${classes.property} ${classes.isEven}`}>
							<div className={classes.sideGroup}>
								<ImageBox
									src="hexsweep_1_ref.jpg"
									href="http://Hex-Sweep.com/"
									alt="An Easy Hex-Sweep Game"
								/>
								<ImageBox
									src="hexsweep_2_ref.jpg"
									href="http://Hex-Sweep.com/"
									alt="A Hard game in progress"
								/>
								<ImageBox
									src="hexsweep_3_ref.jpg"
									href="http://Hex-Sweep.com/"
									alt="Lost game in Hex-Sweep"
								/>
							</div>
							<HouseBox title="Hex-Sweep.com">
								<p>
									&emsp;&emsp;Hex-Sweep was my spiritual successor to Hexitaire. I
									enjoyed making a game, and learning how better to interact with
									the browser, so I decided to make that my next project as well.
								</p>
								<p>
									&emsp;&emsp;Although this game is not as well defined as
									Hexitaire is (which is just solitaire with different cards).
									Hex-Sweep does combine some elements of logic, as well as luck.
									There are situations you can get yourself into where there is a
									50/50 chance of picking a bomb cell. Although I would prefer if
									the game could be 100% deduced, I decided to spend my time on
									the "good" of making the game. Rather than the "Perfect" of
									making mechanics to make sure every game could be won by pure
									logic.
								</p>
								<p>
									&emsp;&emsp;I did learn a lot with this game. Although if I had
									to do it again, I would probably pick a harder concept, or try
									to create it using a different framework. As there were
									different challenges for sure. However, using React again didn't
									really push me to learn any new technologies. That being said, I
									do think the spacing of the cells and the logic for drawing
									those did help me better understand the box-model and understand
									how to manipulate space better.
								</p>
							</HouseBox>
						</div>
						<div className={classes.togetherList}>
							<UnorderedList title="Technologies Used:">
								{[
									linkList("react"),
									linkList("type"),
									linkList("html"),
									linkList("css"),
								]}
							</UnorderedList>
							<UnorderedList title="Skills Used:">
								{[
									linkList("front"),
									linkList("gui"),
									linkList("resp"),
									linkList("comp"),
									linkList("strict"),
									linkList("ux"),
								]}
							</UnorderedList>
						</div>
						Public github link: &nbsp;
						<a
							className="whiteText expandLink"
							href="https://github.com/RyanUlch/hexsweep"
						>
							Client
						</a>
					</SectionGroup>
					{/* Hexitaire.com */}
					<SectionGroup>
						<div className={`${classes.property} ${classes.isOdd}`}>
							<HouseBox title="Hexitaire.com">
								<p>
									&emsp;&emsp;Hexitaire was a really fun project to work on. From
									the jump using React and Typescript, I built a card game from
									scratch. The idea was simply to build a solitaire game; since my
									wife highly enjoys those types of games, but to give it a bit of
									a twist.
								</p>
								<p>
									&emsp;&emsp;I highly suggest you have a round or two to see it
									in action. Like a normal solitaire game, it's about putting the
									cards away in their ending piles. There are a few differences
									you'll want to check the "rules" button and the bottom for.
								</p>
								<p>
									&emsp;&emsp;I did learn a lot with this project, and although I
									have a few ideas for features in the future (ie. LocalStorage
									Stats, Online Leader board, Next Move suggestion, etc), I am
									very happy with how this app both looks and performs.
								</p>
							</HouseBox>
							<div className={classes.sideGroup}>
								<ImageBox
									src="hex_start_ref.jpg"
									href="http://Hexitaire.com/"
									alt="Hexitaire game just starting out"
								/>
								<ImageBox
									src="hex_dedication_ref.jpg"
									href="http://Hexitaire.com/"
									alt="The dedication page of Hexitaire.com"
								/>
								<ImageBox
									src="hex_win_ref.jpg"
									href="http://Hexitaire.com/"
									alt="A winning game of Hexitaire!"
								/>
							</div>
						</div>
						<div className={classes.togetherList}>
							<UnorderedList title="Technologies Used:">
								{[
									linkList("react"),
									linkList("type"),
									linkList("html"),
									linkList("css"),
								]}
							</UnorderedList>
							<UnorderedList title="Skills Used:">
								{[
									linkList("front"),
									linkList("gui"),
									linkList("resp"),
									linkList("comp"),
									linkList("strict"),
									linkList("ux"),
								]}
							</UnorderedList>
						</div>
						Public github link: &nbsp;
						<a
							className="whiteText expandLink"
							href="https://github.com/RWACU/hexitaire"
						>
							Client
						</a>
					</SectionGroup>
					<SectionGroup>
						{/* RyanUlch.com */}
						<div className={`${classes.property} ${classes.isEven}`}>
							<HouseBox title="This Site!">
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
									&emsp;&emsp;I have now redesigned this website from the ground
									up using React-Bootstrap. This allowed me to create a responsive
									site that has more of a professional, web 3.0 feel.
								</p>
								<p>
									&emsp;&emsp;This is also the first project I used Typescript in.
									As I originally learned development through C++, I am used to
									strongly typed languages; and although Typescript does have some
									quirks with the Javascript compilation, it was fairly easy to
									pick up.
								</p>
							</HouseBox>
						</div>
						<div className={classes.togetherList}>
							<UnorderedList title="Technologies Used:">
								{[
									linkList("react"),
									linkList("type"),
									linkList("js"),
									linkList("boot"),
									linkList("html"),
									linkList("css"),
								]}
							</UnorderedList>
							<UnorderedList title="Skills Used:">
								{[linkList("front"), linkList("resp"), linkList("strict")]}
							</UnorderedList>
						</div>
						Public github link: &nbsp;
						<a
							className="whiteText expandLink"
							href="https://github.com/RWACU/ryanulchsite"
						>
							Client
						</a>
					</SectionGroup>
				</FenceBox>
			</div>
		</>
	);
};

export default ResumePage;
