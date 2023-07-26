import classes from "./ResumePage.module.css";
import FenceBox from "../FenceBox/FenceBox";
import HouseBox from "../HouseBox/HouseBox";
import ImageBox from "../ImageBox/ImageBox";
import SectionGroup from "../SectionGroup/SectionGroup";
import { linker, linkSM } from "../../helpers/linker";
import StartStopGif from "../StartStopGif/StartStopGif";

const ResumePage = () => {
	return (
		<div className={classes.grass}>
			{/* Accordion of Resume Sections
			- About Me
			- Qualifications
			- Work experience
			- Education
		*/}
			<div className="fullPage">
				{/* <StartStopGif src="droppod" /> */}
				{/* "About Me" Accordion.Item */}

				<FenceBox heading="About Me">
					<SectionGroup>
						<HouseBox>
							<p className={classes.paragraph}>
								&emsp;&emsp;I am a self-taught programmer from Windsor, Canada.
								Interested in computers and technology since I was a little child; I
								went into Film and Television production naturally. I enjoyed the
								technical aspects of production; mostly camera operation and
								editing. They both gave me the ability to express myself
								artistically, while still adhering to conventions (and knowing when
								to buck conventions) to produce something that was uniquely me.
							</p>
							<p className={classes.paragraph}>
								&emsp;&emsp;However, the job I got out of college involved none of
								that. I did get to work in a fast-paced office environment. Working
								on large-scale projects Quality-Controlling and encoding video for{" "}
								{linker("Crave.ca", "https:crave.ca")} (Service not available
								outside of Canada) for almost 8 years.
							</p>
						</HouseBox>
						<ImageBox src="header0.jpg" />
					</SectionGroup>
					<SectionGroup>
						<ImageBox src="header1.jpg" />
						<HouseBox isBlue>
							<p className={classes.paragraph}>
								&emsp;&emsp;I had started to learn {linkSM("c++")} programming
								around 2016. Creating two functional programs that my department
								used to allow a more efficient workflow.
							</p>

							<p className={classes.paragraph}>
								(Due to creating the applications for a private corporation, I do
								not own the own code for these, and cannot share the github links)
							</p>

							<p className={classes.paragraph}>
								&emsp;&emsp;The first was a {linkSM("cli")} (Command Line Interface)
								to work with a proprietary application we used to Quality Control
								assets. Eventually being reworked as a {linkSM("qt")}{" "}
								{linkSM("gui")} application as that proprietary app and workflow
								became more complex. The other being a QT GUI application for file
								manipulation, as there was a lot of manual changing of file
								structures.
							</p>
						</HouseBox>
					</SectionGroup>
					<SectionGroup>
						<HouseBox>
							<p className={classes.paragraph}>
								&emsp;&emsp;While working for{" "}
								{linker("Bell Media Canada", "https://www.bellmedia.ca/")}, I met my
								lovely wife Lucy; who has lived in Ohio her whole life. We got
								married in November of 2019 in Toledo, Ohio and started immigration
								procedures. 2 years later, while during a pandemic, I was able to{" "}
								{linker(
									"immigrate",
									"https://www.dhs.gov/get-green-card#:~:text=A%20Green%20Card%20holder%20is,called%20a%20%22Green%20Card.%22"
								)}{" "}
								to the United States of America with my wife. While getting settled,
								I got a part-time job at{" "}
								{linker(`Graeter's Ice Cream`, "https://www.graeters.com/")} here in
								Columbus, Ohio. A great place that helped hone my ability to deal
								with the general public while completing orders and going above and
								beyond with both customers and the needs of the store.
							</p>
						</HouseBox>
					</SectionGroup>
					<SectionGroup>
						<HouseBox isBlue>
							<p className={classes.paragraph}>
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
							<p className={classes.paragraph}>
								Now, I'm looking for an employer who wants a self-starting, smart,
								adaptable junior web developer to grow and learn with.
							</p>
						</HouseBox>
					</SectionGroup>
				</FenceBox>

				{/* "Qualifications" Accordion.Item */}
				<FenceBox heading="Qualifications">
					<h2>Qualifications</h2>
					{/* Technologies Start */}
					Technologies: Javascript / ECMAScript React Vue3 Bootstrap Node.js SQL/MySQL
					HTML 5 CSS 3 TypeScript C++ Java Soft Skills: Self-Starter Fast-Learner
					Committed to deadlines Works Well in a team Asks the right questions Deductive
					Reasoning
				</FenceBox>

				{/* "Experience" Accordion.Item */}
				<FenceBox heading="Experience">
					<h3>Front-End Developer</h3>
					<a
						className="noUnderline"
						href="https://www.linkedin.com/company/usersfirst/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="rounded-top w-100"
							src="images/resume/UsersFirst.jpeg"
							alt="Logo of Users First"
						/>
						Users First 2023 - Present - Columbus, Ohio, USA
					</a>
					{/* UF Key Achievements */}
					Key Achievements: &nbsp;&nbsp;Delivered SharePoint Web Component with based on
					Spec image. &nbsp;&nbsp;Worked with SharePoint Online to connect multiple Web
					Components state.
					{/* UF Job Duties */}
					Job Duties: &nbsp;&nbsp;Creating, updating, and fixing front-end React
					Components to meet specification for multiple clients. &nbsp;&nbsp;Working with
					data formats (CSV, TSV, etc.) to populate tables for dynamic content
					{/* Experience at Bell Media Inc */}
					<h3>Digital Media Operator</h3>
					<a
						className="noUnderline"
						href="https://www.bellmedia.ca/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="rounded-top w-100"
							src="images/resume/DALLE_Office.jpg"
							alt="Dall-e generated image of an open concept office"
						/>
						Bell Media Inc 2014-2022 - Scarborough, Ontario, Canada
					</a>
					{/* Bell Key Achievements */}
					Key Achievements: &nbsp;&nbsp;Created a {linkSM("c++")} program that interacts
					with another software through {linkSM("cli")} to increase productivity, as
					manual manipulation of this software was time consuming. &nbsp;&nbsp;Part of a
					team to design a workflow in regards to a unique ID associated with media assets
					which has since seen widespread use in and out of the department.
					&nbsp;&nbsp;Implemented new techniques associated with communicating with other
					shifts; such as a color coded system for programming schedules.
					{/* Bell Job Duties */}
					Job Duties: &nbsp;&nbsp;Working with media assets from a large range of
					suppliers; to ensure quality of assets, transcode to multiple specifications,
					and deliver to a diverse group of partners. &nbsp;&nbsp;Maintaining linear live
					streams for sporting events, award shows and the like; working with
					distribution, scheduling, and technicians to ensure a smooth, uninterrupted user
					experience. &nbsp;&nbsp;Maintaining accurate information across a plethora of
					sources; including programming schedules, e-mails, sharepoint systems, etc.
					{/* Bell Relevance */}
					Relevance: &nbsp;&nbsp;This job has given me a lot of office experience,
					including working on a small team to achieve tight deadlines for large scale
					projects. &nbsp;&nbsp;Creating multiple applications from scratch (not the{" "}
					{linker("language", "https://scratch.mit.edu/")}
					). That allowed me to develop skills to take active feedback as me and my
					colleagues used them in our day to day jobs.
					{/* Experience at Graeter's */}
					<h3>Line Service Worker</h3>
					<a
						className="noUnderline"
						href="https://www.graeters.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="rounded-top w-100"
							src="images/resume/ryanGraeters.jpg"
							alt="Me in a Graeter's uniform on my first day of work"
						/>
						Graeter's Ice Cream (Part-Time) 2022 - Columbus, Ohio, USA
					</a>
					{/* Graeter's Job Duties */}
					Job Duties &nbsp;&nbsp;Worked in a fast-paced environment to make orders to
					specifications; often having to have work on multiple orders at a time.
					&nbsp;&nbsp;Being part of a team, working with others regardless of their
					experience. Asking questions of those who knew more, and helping those who were
					newer to the process. &nbsp;&nbsp;Keeping work and customer areas tidy, hygienic
					and inviting.
					{/* Graeter's Relevance */}
					Relevance: &nbsp;&nbsp;Being able to work under a time constraint, while
					handling customer and co-worker interactions, has allowed me to develop
					professional stress management skills to use time-pressure in a advantageous
					way.
					{/* Experience at Wal-Mart (London) */}
					<h3>Second Shift In-Stock Associate</h3>
					<a
						className="noUnderline"
						href="https://www.walmart.ca/en"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="rounded-top w-100"
							src="images/resume/DALLE_StoreRoom.jpg"
							alt="Dall-e generated image of a a backroom of a large department store"
						/>
						Wal-Mart Canada 2012 - 2013 - London, Ontario, Canada
					</a>
					{/* Wal-Mart London Job Duties */}
					Job Duties: &nbsp;&nbsp;Organized the stockroom to operate in a smooth manner.
					&nbsp;&nbsp;Worked with the computer system to find and deliver stock to their
					corresponding departments. &nbsp;&nbsp;Asked to help out in all departments from
					time to time; where a spot was needed to be filled.
					{/* Wal-Mart London Relevance */}
					Relevance: &nbsp;&nbsp;I had to handle lots of inventory coming into the store,
					sorting and organizing product as to allow easy access for the other associates
					of the store. &nbsp;&nbsp;I developed my team-working skills from this job. As
					it was the first time I was in an environment where you had to work together, or
					the tasks involved would not be completed in time. &nbsp;&nbsp;I was also going
					to college at the time of this job and had to balance work and school. Allowing
					me to develop a lot of time-management skills.
					{/* Experience at Wal-Mart (Windsor) */}
					<h3>Produce/Hardware Associate</h3>
					<a
						className="noUnderline"
						href="https://www.walmart.ca/en"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="rounded-top w-100"
							src="images/resume/DALLE_Hardware.jpg"
							alt="Dall-e generated image of a DIY department in a large department store"
						/>
						Wal-Mart Canada 2010 - 2012 - Windsor, Ontario, Canada
					</a>
					{/* Wal-Mart Windsor Job Duties */}
					Job Duties: &nbsp;&nbsp;Responsible for the timely upkeep of the department from
					spills and messes. &nbsp;&nbsp;Proper care and cleaning of certain vegetables
					for safe consumption for customers. &nbsp;&nbsp;Cleaning and organizing the
					cooler for easy access to stock. &nbsp;&nbsp;While in Hardware; working with
					machinery and tools (Paint Mixer, Key Cutter).
					{/* Wal-Mart Windsor Relevance */}
					Relevance: &nbsp;&nbsp;This was one of my first jobs as a young adult. It showed
					me that taking pride in one's work; regardless of the recognition you receive
					from it, allows you to feel good about yourself and keep up a good work ethic.
					Even when the job is a simple, mostly manual labor type of job. &nbsp;&nbsp;This
					job, and my dads influence, helped teach me my work ethic. Being responsible for
					things needing to be done, and doing them without complaint (ok, mostly. I was
					16 at the time). Being able to listen to instruction and ask clarifying
					questions when needed; to not presume I know everything.
				</FenceBox>

				{/* "Education" Accordion.Item */}
				<FenceBox heading="Education">
					{/* Education at Fanshawe */}
					<h3>Broadcast Television and Film (Associates)</h3>
					<a
						className="noUnderline"
						href="https://www.fanshawec.ca/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="rounded-top w-100"
							src="images/resume/DALLE_Newsroom.jpg"
							alt="Dall-e generated image of a newsroom from behind the camera"
						/>
						Fanshawe College Graduated 2014
						<br />
						London, Ontario, Canada
					</a>
					{/* Fanshawe Program */}
					The Program: &nbsp;&nbsp;The Program focused on all aspects of production,
					including but not limited to: Budgeting, Paperwork, Camera Operation, Editing
					and Advertising. &nbsp;&nbsp;Completed the program with a GPA of 3.89.
					{/* Fanshawe Relevance */}
					Relevance: &nbsp;&nbsp;In college, we mostly worked on projects in teams. I was
					able to understand that team-member fill a role. Which taught me that I can work
					on aspects of projects, while trusting the other members to complete their
					parts. &nbsp;&nbsp;I learned that I thrived with structures (How to frame a
					shot, how to color grade a scene, etc.). However, that within the structures of
					how to do something, there was always some creativity that goes into technical
					work. I learned from school that there is imagination and creativity in
					technical work; and that was the type of creativity I was really good with.
					{/* Education at ITT */}
					<h3>Welder Fitter</h3>
					<a
						className="noUnderline"
						href="https://www.instituteoftechnicaltrades.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="rounded-top w-100"
							src="images/resume/DALLE_Welder.jpg"
							alt="Dall-e generated image of a welder, welding"
						/>
						Institute of Technical Trades Graduated 2016
						<br />
						Toronto, Ontario, Canada
					</a>
					{/* IOTT Program */}
					The Program: &nbsp;&nbsp;A six month program training physical skills in
					everything to be a Welder Fitter. &nbsp;&nbsp;I received full{" "}
					{linker("CWB", "https://www.cwbgroup.org/")} certificates in{" "}
					{linker("SMAW", "https://weldguru.com/smaw-welding/")} and{" "}
					{linker("FCAW", "https://fractory.com/flux-cored-arc-welding-explained/")}{" "}
					welding.
					{/* Fanshawe Relevance */}
					Relevance: &nbsp;&nbsp;Even though this field is vastly different to
					programming. I went into the schooling because I was missing something from my
					work at Bell Media. I wanted to create and work on things in a more tangible way
					than I was. Although this career path didn't take, I don't regret the schooling
					as it showed me that I do value creating and seeing my work come to life.
					{/* Education at General Amherst */}
					<h3>High School Diploma</h3>
					<a
						className="noUnderline"
						href="https://en.wikipedia.org/wiki/General_Amherst_High_School"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="rounded-top w-100"
							src="images/resume/DALLE_Highschool.jpg"
							alt="Dall-e generated image of a highschool classroom"
						/>
						General Amherst High School Graduated 2012
						<br />
						Amherstburg, Ontario, Canada
					</a>
					{/* Fanshawe Program */}
					Note: &nbsp;&nbsp;This school is no longer around. It was decommissioned in 2022
					as a new school in Amherstburg, Ontario was built to accommodate students from
					General Amherst and Western Secondary School.
				</FenceBox>
			</div>
		</div>
	);
};

export default ResumePage;
