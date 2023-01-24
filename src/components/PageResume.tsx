
import { linker, linkSM, linkHREF } from '../helpers/linker';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Due to the amount of nesting Bootstrap.React uses, Indentation starts on first child elements
const PageResume = () => {
	return (
<Card className='rounded-bottom rounded-0 offWhiteBack'>
	<Card.Body>
		{/* Accordion of Resume Sections
			- About Me
			- Qualifications
			- Work experience
			- Education
		*/}
		<Accordion>
			{/* "About Me" Accordion.Item */}
			<Accordion.Item eventKey='0'>
				<Accordion.Header><h2>About Me</h2></Accordion.Header>
				<Accordion.Body className='p-md-3 p-0'>
					<Card className='shadow'>
						<Card.Body>
							<p>&emsp;&emsp;I am a self-taught programmer from Windsor, Canada. Interested in computers and technology since I was a little child; I went into Film and Television production naturally. I enjoyed the technical aspects of production; mostly camera operation and editing. They both gave me the ability to express myself artistically, while still adhering to conventions (and knowing when to buck conventions) to produce something that was uniquely me.</p>
							<p>&emsp;&emsp;However, the job I got out of college involved none of that. I did get to work in a fast-paced office environment. Working on large-scale projects Quality-Controlling and encoding video for {linker('Crave.ca', 'https:crave.ca')} (Service not available outside of Canada) for almost 8 years.</p>
							<p>&emsp;&emsp;I had started to learn {linkSM('c++')} programming around 2016. Creating two functional programs that my department used to allow a more efficient workflow.</p>
							<Card className='well'>
								<Card.Body>
									<p>(Due to creating the applications for a private corporation, I do not own the own code for these, and cannot share the github links)</p>
								</Card.Body>
							</Card>
							<p>&emsp;&emsp;The first was a {linkSM('cli')} (Command Line Interface) to work with a proprietary application we used to Quality Control assets. Eventually being reworked as a {linkSM('qt')} {linkSM('gui')} application as that proprietary app and workflow became more complex. The other being a QT GUI application for file manipulation, as there was a lot of manual changing of file structures.</p>
							<p>&emsp;&emsp;While working for {linker('Bell Media Canada', 'https://www.bellmedia.ca/')}, I met my lovely wife Lucy; who has lived in Ohio her whole life. We got married in November of 2019 in Toledo, Ohio and started immigration procedures. 2 years later, while during a pandemic, I was able to {linker('immigrate', 'https://www.dhs.gov/get-green-card#:~:text=A%20Green%20Card%20holder%20is,called%20a%20%22Green%20Card.%22')} to the United States of America with my wife. While getting settled, I got a part-time job at {linker(`Graeter's Ice Cream`, 'https://www.graeters.com/')} here in Columbus, Ohio. A great place that helped hone my ability to deal with the general public while completing orders and going above and beyond with both customers and the needs of the store.</p>
							<p>&emsp;&emsp;While working at Graeter's, I learned web development with the help of my {linker('best friend', 'https://www.linkedin.com/mwlite/in/eric-sartor-21867616a')}; a software developer. Who works at Bell Media, in Canada.</p>
							<Card className='well'>
								<Card.Body>
									<p>Now, I'm looking for an employer who wants a self-starting, smart, adaptable junior web developer to grow and learn with.</p>
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Accordion.Body>
			</Accordion.Item>

			{/* "Qualifications" Accordion.Item */}
			<Accordion.Item eventKey='1'>
				<Accordion.Header><h2>Qualifications</h2></Accordion.Header>
				<Accordion.Body className='p-md-3 p-0'>
					<Container>
						<Row xs={1} md={2}>
							<Col className='my-3'>
								{/* Technologies Start */}
								<ListGroup className='shadow'>
									<ListGroup.Item variant='success'>Technologies:</ListGroup.Item>
									<ListGroup.Item href={linkHREF('js')} 		action>Javascript / ECMAScript</ListGroup.Item>
									<ListGroup.Item href={linkHREF('react')} 	action>React</ListGroup.Item>
									<ListGroup.Item href={linkHREF('boot')} 	action>Bootstrap</ListGroup.Item>
									<ListGroup.Item href={linkHREF('node')} 	action>Node.js</ListGroup.Item>
									<ListGroup.Item href={linkHREF('sql')} 		action>SQL/MySQL</ListGroup.Item>
									<ListGroup.Item href={linkHREF('html')} 	action>HTML 5</ListGroup.Item>
									<ListGroup.Item href={linkHREF('css')} 		action>CSS 3</ListGroup.Item>
									<ListGroup.Item href={linkHREF('type')} 	action>TypeScript</ListGroup.Item>
									<ListGroup.Item href={linkHREF('c++')} 		action>C++</ListGroup.Item>
									<ListGroup.Item href={linkHREF('java')} 	action>Java</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col className='my-md-3 mb-3'>
								{/* Soft Skills Start */}
								<ListGroup className='shadow'>
									<ListGroup.Item variant='success'>Soft Skills:</ListGroup.Item>
									<ListGroup.Item>Self-Starter</ListGroup.Item>
									<ListGroup.Item>Fast-Learner</ListGroup.Item>
									<ListGroup.Item>Committed to deadlines</ListGroup.Item>
									<ListGroup.Item>Works Well in a team</ListGroup.Item>
									<ListGroup.Item>Asks the right questions</ListGroup.Item>
									<ListGroup.Item>Deductive Reasoning</ListGroup.Item>
								</ListGroup>
								</Col>
							</Row>
						</Container>
				</Accordion.Body>
			</Accordion.Item>

			{/* "Experience" Accordion.Item */}
			<Accordion.Item eventKey='2'>
				<Accordion.Header><h2>Experience</h2></Accordion.Header>
				<Accordion.Body className='p-md-3 p-0'>
					{/* Experience at Bell Media Inc */}
					<Card className='shadow mb-3'>
						<Card.Header className='cardHeader'><h3>Digital Media Operator</h3></Card.Header>
						<Card.Body>
							<Container>
								<Row xs={1} md={2}>
									<Col className='mb-3 p-0 p-md-1'>
										<a className='noUnderline' href='https://www.bellmedia.ca/' target="_blank" rel='noreferrer'>
											<Card className='offWhiteBack cardLink'>
												<Card.Header className='p-0'>
													<Image className='rounded-top w-100' src='images/resume/DALLE_Office.jpg' alt='Dall-e generated image of an open concept office' />
												</Card.Header>
												<Card.Body className='text-center text-dark'>
													<Card.Subtitle>Bell Media Inc</Card.Subtitle>
													<Card.Text>2014-2022 - Scarborough, Ontario, Canada</Card.Text>
												</Card.Body>
											</Card>
										</a>
									</Col>
									<Col className='p-0 p-md-1'>
										<ListGroup>
											{/* Bell Key Achievements */}
											<ListGroup.Item variant='success'>Key Achievements:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Created a {linkSM('c++')} program that interacts with another software through {linkSM('cli')} to increase productivity, as manual manipulation of this software was time consuming.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Part of a team to design a workflow in regards to a unique ID associated with media assets which has since seen widespread use in and out of the department.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Implemented new techniques associated with communicating with other shifts; such as a color coded system for programming schedules.</ListGroup.Item>
											{/* Bell Job Duties */}
											<ListGroup.Item variant='success'>Job Duties:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Working with media assets from a large range of suppliers; to ensure quality of assets, transcode to multiple specifications, and deliver to a diverse group of partners.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Maintaining linear live streams for sporting events, award shows and the like; working with distribution, scheduling, and technicians to ensure a smooth, uninterrupted user experience.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Maintaining accurate information across a plethora of sources; including programming schedules, e-mails, sharepoint systems, etc.</ListGroup.Item>
											{/* Bell Relevance */}
											<ListGroup.Item variant='success'>Relevance:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;This job has given me a lot of office experience, including working on a small team to achieve tight deadlines for large scale projects.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Creating multiple applications from scratch (not the {linker('language', 'https://scratch.mit.edu/')}). That allowed me to develop skills to take active feedback as me and my colleagues used them in our day to day jobs.</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
					{/* Experience at Graeter's */}
					<Card className='mb-3 shadow'>
						<Card.Header className='cardHeader'><h3>Line Service Worker</h3></Card.Header>
						<Card.Body className='d-flex flex-row mb-3'>
							<Container>
								<Row xs={1} md={2}>
									<Col className='mb-3 p-0 p-md-1 order-md-2'>
										<a className='noUnderline' href='https://www.graeters.com/' target="_blank" rel='noreferrer'>
											<Card className='offWhiteBack cardLink'>
												<Card.Header className='p-0'>
													<Image className='rounded-top w-100' src='images/resume/ryanGraeters.jpg' alt="Me in a Graeter's uniform on my first day of work" />
												</Card.Header>
												<Card.Body className='text-center text-dark'>
													<Card.Subtitle>Graeter's Ice Cream (Part-Time)</Card.Subtitle>
													<Card.Text>2022 - Columbus, Ohio, USA</Card.Text>
												</Card.Body>
											</Card>
										</a>
									</Col>
									<Col className='p-0 p-md-1 order-md-1'>
										<ListGroup>
											{/* Graeter's Job Duties */}
											<ListGroup.Item variant='success'>Job Duties</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Worked in a fast-paced environment to make orders to specifications; often having to have work on multiple orders at a time.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Being part of a team, working with others regardless of their experience. Asking questions of those who knew more, and helping those who were newer to the process.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Keeping work and customer areas tidy, hygienic and inviting.</ListGroup.Item>
											{/* Graeter's Relevance */}
											<ListGroup.Item variant='success'>Relevance:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Being able to work under a time constraint, while handling customer and co-worker interactions, has allowed me to develop professional stress management skills to use time-pressure in a advantageous way.</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
					{/* Experience at Wal-Mart (London) */}
					<Card className='mb-3 shadow'>
						<Card.Header className='cardHeader'><h3>Second Shift In-Stock Associate</h3></Card.Header>
						<Card.Body>
							<Container>
								<Row xs={1} md={2}>
									<Col className='mb-3 p-0 p-md-1'>
										<a className='noUnderline' href='https://www.walmart.ca/en' target="_blank" rel='noreferrer'>
											<Card className='offWhiteBack cardLink'>
												<Card.Header className='p-0'>
													<Image className='rounded-top w-100' src='images/resume/DALLE_StoreRoom.jpg' alt='Dall-e generated image of a a backroom of a large department store' />
												</Card.Header>
												<Card.Body className='text-center text-dark'>
													<Card.Subtitle>Wal-Mart Canada</Card.Subtitle>
													<Card.Text>2012 - 2013 - London, Ontario, Canada</Card.Text>
												</Card.Body>
											</Card>
										</a>
									</Col>
									<Col className='p-0 p-md-1'>
										<ListGroup>
											{/* Wal-Mart London Job Duties */}
											<ListGroup.Item variant='success'>Job Duties:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Organized the stockroom to operate  in a smooth manner.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Worked with the computer system to find and deliver stock to their corresponding departments.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Asked to help out in all departments from time to time; where a spot was needed to be filled.</ListGroup.Item>
											{/* Wal-Mart London Relevance */}
											<ListGroup.Item variant='success'>Relevance:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;I had to handle lots of inventory coming into the store, sorting and organizing product as to allow easy access for the other associates of the store.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;I developed my team-working skills from this job. As it was the first time I was in an environment where you had to work together, or the tasks involved would not be completed in time.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;I was also going to college at the time of this job and had to balance work and school. Allowing me to develop a lot of time-management skills.</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
					{/* Experience at Wal-Mart (Windsor) */}
					<Card className='mb-3 shadow'>
						<Card.Header className='cardHeader'><h3>Produce/Hardware Associate</h3></Card.Header>
						<Card.Body>
							<Container>
								<Row xs={1} md={2}>
									<Col className='mb-3 p-0 p-md-1 order-md-2'>
										<a className='noUnderline' href='https://www.walmart.ca/en' target="_blank" rel='noreferrer'>
											<Card className='offWhiteBack cardLink'>
												<Card.Header className='p-0'>
													<Image className='rounded-top w-100' src='images/resume/DALLE_Hardware.jpg' alt='Dall-e generated image of a DIY department in a large department store' />
												</Card.Header>
												<Card.Body className='text-center text-dark'>
													<Card.Subtitle>Wal-Mart Canada</Card.Subtitle>
													<Card.Text>2010 - 2012 - Windsor, Ontario, Canada</Card.Text>
												</Card.Body>
											</Card>
										</a>
									</Col>
									<Col className='p-0 p-md-1 order-md-1'>
										<ListGroup>
											{/* Wal-Mart Windsor Job Duties */}
											<ListGroup.Item variant='success'>Job Duties:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Responsible for the timely upkeep of the department from spills and messes.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Proper care and cleaning of certain vegetables for safe consumption for customers.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Cleaning and organizing the cooler for easy access to stock.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;While in Hardware; working with machinery and tools (Paint Mixer, Key Cutter).</ListGroup.Item>
											{/* Wal-Mart Windsor Relevance */}
											<ListGroup.Item variant='success'>Relevance:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;This was one of my first jobs as a young adult. It showed me that taking pride in one's work; regardless of the recognition you receive from it, allows you to feel good about yourself and keep up a good work ethic. Even when the job is a simple, mostly manual labor type of job.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;This job, and my dads influence, helped teach me my work ethic. Being responsible for things needing to be done, and doing them without complaint (ok, mostly. I was 16 at the time). Being able to listen to instruction and ask clarifying questions when needed; to not presume I know everything.</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
				</Accordion.Body>
			</Accordion.Item>

			{/* "Education" Accordion.Item */}
			<Accordion.Item eventKey='3'>
				<Accordion.Header><h2>Education</h2></Accordion.Header>
				<Accordion.Body className='p-md-3 p-0'>
					{/* Education at Fanshawe */}
					<Card className='mb-3 shadow'>
						<Card.Header className='cardHeader'><h3>Broadcast Television and Film (Associates)</h3></Card.Header>
						<Card.Body>
							<Container>
								<Row xs={1} md={2}>
									<Col className='mb-3 p-0 p-md-1'>
										<a className='noUnderline' href='https://www.fanshawec.ca/' target="_blank" rel='noreferrer'>
											<Card className='offWhiteBack cardLink'>
												<Card.Header className='p-0'>
													<Image className='rounded-top w-100' src='images/resume/DALLE_Newsroom.jpg' alt='Dall-e generated image of a newsroom from behind the camera'/>
												</Card.Header>
												<Card.Body className='text-center text-dark'>
													<Card.Subtitle>Fanshawe College</Card.Subtitle>
													<Card.Text>Graduated 2014<br />London, Ontario, Canada</Card.Text>
												</Card.Body>
											</Card>
										</a>
									</Col>
									<Col className='p-0 p-md-1'>
										<ListGroup>
											{/* Fanshawe Program */}
											<ListGroup.Item variant='success'>The Program:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;The Program focused on all aspects of production, including but not limited to: Budgeting, Paperwork, Camera Operation, Editing and Advertising.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Successfully completed the program with a GPA of 3.89.</ListGroup.Item>
											{/* Fanshawe Relevance */}
											<ListGroup.Item variant='success'>Relevance:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;In college, we mostly worked on projects in teams. I was able to understand that team-member fill a role. Which taught me that I can work on aspects of projects, while trusting the other members to complete their parts.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;I learned that I thrived with structures (How to frame a shot, how to color grade a scene, etc.). However, that within the structures of how to do something, there was always some creativity that goes into technical work. I learned from school that there is imagination and creativity in technical work; and that was the type of creativity I was really good with.</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
					{/* Education at ITT */}
					<Card className='mb-3 shadow'>
						<Card.Header className='cardHeader'><h3>Welder Fitter</h3></Card.Header>
						<Card.Body>
							<Container>
								<Row xs={1} md={2}>
									<Col className='mb-3 p-0 p-md-1 order-md-2'>
										<a className='noUnderline' href="https://www.instituteoftechnicaltrades.com/" target="_blank" rel='noreferrer'>
											<Card className='offWhiteBack cardLink'>
												<Card.Header className='p-0'>
													<Image className='rounded-top w-100' src='images/resume/DALLE_Welder.jpg' alt='Dall-e generated image of a welder, welding' />
												</Card.Header>
												<Card.Body className='text-center text-dark'>
													<Card.Subtitle>Institute of Technical Trades</Card.Subtitle>
													<Card.Text>Graduated 2016<br />Toronto, Ontario, Canada</Card.Text>
												</Card.Body>
											</Card>
										</a>
									</Col>
									<Col className='p-0 p-md-1 order-md-1'>
										<ListGroup>
											{/* Fanshawe Program */}
											<ListGroup.Item variant='success'>The Program:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;A six month program training physical skills in everything to be a Welder Fitter.</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;I received full {linker('CWB', 'https://www.cwbgroup.org/')} certificates in {linker('SMAW', 'https://weldguru.com/smaw-welding/')} and {linker('FCAW', 'https://fractory.com/flux-cored-arc-welding-explained/')} welding.</ListGroup.Item>
											{/* Fanshawe Relevance */}
											<ListGroup.Item variant='success'>Relevance:</ListGroup.Item>
											<ListGroup.Item>&nbsp;&nbsp;Even though this field is vastly different to programming. I went into the schooling because I was missing something from my work at Bell Media. I wanted to create and work on things in a more tangible way than I was. Although this career path didn't take, I don't regret the schooling as it showed me that I do value creating and seeing my work come to life.</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
					{/* Education at General Amherst */}
					<Card className='mb-3 shadow'>
						<Card.Header className='cardHeader'><h3>High School Diploma</h3></Card.Header>
						<Card.Body>
							<Container>
								<Row xs={1} md={2}>
									<Col className='mb-3 p-0 p-md-1'>
										<a className='noUnderline' href="https://en.wikipedia.org/wiki/General_Amherst_High_School" target="_blank" rel='noreferrer'>
											<Card className='offWhiteBack cardLink'>
												<Card.Header className='p-0'>
													<Image className='rounded-top w-100' src='images/resume/DALLE_Highschool.jpg' alt='Dall-e generated image of a highschool classroom' />
												</Card.Header>
												<Card.Body className='text-center text-dark '>
													<Card.Subtitle>General Amherst High School</Card.Subtitle>
													<Card.Text>Graduated 2012<br />Amherstburg, Ontario, Canada</Card.Text>
												</Card.Body>
											</Card>
										</a>
									</Col>
									<Col className='p-0 p-md-1'>
										<ListGroup>
											{/* Fanshawe Program */}
											<ListGroup.Item variant='success'>Note:</ListGroup.Item>
											<ListGroup.Item className='well'>&nbsp;&nbsp;This school is no longer around. It was decommissioned in 2022 as a new school in Amherstburg, Ontario was built to accommodate students from General Amherst and Western Secondary School.</ListGroup.Item>
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	</Card.Body>
</Card>
	);
}

export default PageResume;