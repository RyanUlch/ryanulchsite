// CSS Import
import classes from './PageResume.module.css';

import { useEffect } from 'react';

import PageBreaker from '../../PageBreaker/PageBreaker';
import Expander from '../../Expander/Expander';

import { linker, linkSM } from '../../../helpers/linker';
import { setTransitionHeight } from '../../../helpers/transition';

const PageResume = () => {
	useEffect(() => {
		setTransitionHeight('#about', '--aboutMax');
		setTransitionHeight('#qualifications', '--qualificationsMax');
		setTransitionHeight('#workExperience', '--workMax');
		setTransitionHeight('#schoolExperience', '--schoolMax');
	}, []);
	

	return (
		<section>
			<PageBreaker value='Resumé'/>
			<div className='background'>
				<article id='about'>
					<Expander nodeName='about' anchor='about'>
						<h3>About Me</h3>
						<div className='imageContainer'>
							<img className='displayImage' src='images/ryan4.jpg' alt='Me and my wife Lucy on my first day as an American immigrant'/>
							<img className='displayImage' src='images/ryan2.jpg' alt='Me and our little black kitten' />
							<img className='displayImage' src='images/ryan3.jpg' alt='Me with our kitten again. This time both of us being lazy'/>
						</div>
						<a href='https://www.linkedin.com/in/ryan-ulch/'>LinkedIn Profile</a>
						<p>&emsp;&emsp;I am a self-taught programmer from Windsor, Canada. Interested in computers and technology since I was a little child; I went into Film and Television production naturally. I enjoyed the technical aspects of production; mostly camera operation and editing. They both gave me the ability to express myself artistically, while still adhering to conventions (and knowing when to buck conventions) to produce something that was uniquely me.</p>
						<p>&emsp;&emsp;However, the job I got out of college involved none of that. I did get to work in a fast-paced office environment. Working on large-scale projects Quality-Controlling and encoding video for {linker('Crave.ca', 'https:crave.ca')} (Service not available outside of Canada) for almost 8 years.</p>
						<p>&emsp;&emsp;I had started to learn {linkSM('c++')} programming around 2016. Creating two functional programs that my department used to allow a more efficient workflow.</p>
						<em className='note'>(Due to creating the applications for a private corporation, I do not own the own code for these, and cannot share the github links)</em>
						<p>&emsp;&emsp;The first was a {linkSM('cli')} (Command Line Interface) to work with a proprietary application we used to Quality Control assets. Eventually being reworked as a {linkSM('qt')} {linkSM('gui')} application as that proprietary app and workflow became more complex. The other being a QT GUI application for file manipulation, as there wa a lot of manual changing of file structures.</p>
						<p>&emsp;&emsp;While working for {linker('Bell Media Canada', 'https://www.bellmedia.ca/')}, I met my lovely wife Lucy; who has lived in Ohio her whole life. We got married in November of 2019 in Toledo, Ohio and started immigration procedures. 2 years later, while during a pandemic, I was able to {linker('immigrate', 'https://www.dhs.gov/get-green-card#:~:text=A%20Green%20Card%20holder%20is,called%20a%20%22Green%20Card.%22')} to the United States of America with my wife. While getting settled, I got a part-time job at {linker(`Graeter's Ice Cream`, 'https://www.graeters.com/')} here in Columbus, Ohio. A great place that helped hone my ability to deal with the general public while completing orders and going above and beyond with both customers and the needs of the store.</p>
						<p>&emsp;&emsp;While working at Graeter's, I learned web development with the help of my {linker('best friend', 'https://www.linkedin.com/mwlite/in/eric-sartor-21867616a')}; a software developer. Who works at Bell Media, in Canada.</p>
						<p className={`${classes.endAbout} note`}>Now, I'm looking for an employer who wants a self-starting, smart, adaptable junior web developer to grow and learn with.</p>
						<img src='#' alt=''/>
					</Expander>
				</article>
				<article id='qualifications'>
					<Expander nodeName='qualifications' anchor='qualifications'>
						<h3>Qualifications</h3>
						<div className={classes.listsContainer}>
							<h4 className={classes.listTitle}>Technologies:</h4>
							<ul className={classes.listSection}>
								<li>{linkSM('js')} / {linkSM('ecma')}</li>
								<li>{linkSM('react')}</li>
								<li>{linkSM('node')}</li>
								<li>{linkSM('sql')}</li>
								<li>{linkSM('html')} / {linkSM('css')}</li>
								<li>{linkSM('type')}</li>
								<li>{linkSM('c++')}</li>
								<li>{linkSM('java')}</li>
							</ul>
							<h4 className={classes.listTitle}>Soft Skills:</h4>
							<ul className={classes.listSection}>
								<li>Self-Starter</li>
								<li>Fast-Learner</li>
								<li>Committed to deadlines</li>
								<li>Works Well in a team</li>
								<li>Asks the right {linkSM('quest')}</li>
								<li>Deductive Reasoning</li>
							</ul>
						</div>
						<img src='#' alt=''/>
					</Expander>
				</article>
				<article id='workExperience'>
					<Expander nodeName='work' anchor='workExperience'>
						<h3>Work Experience</h3>
						<em className='note'>Please note, I am listing my entire working history as I believe that every job; even though not programming specific, has given me skills that help in a web development environment. Each one made me the type of worker that I am today</em>
						<hr />
						<section className={classes.experienceSection}>
							<h4>Line Service Worker (Part-Time)</h4>
							<h5><a href='https://www.graeters.com/' target="_blank">Graeter's</a> ~ 2022 ~ Columbus, Ohio, USA</h5>
							<h6>Job Duties:</h6>
							<ul>
								<li>Worked in a fast-paced environment to make orders to specifications; often having to have work on multiple orders at a time.</li>
								<li>Being part of a team, working with others regardless of their experience. Asking questions of those who knew more, and helping those who need that were newer.</li>
								<li>Keeping work and customer areas tidy, hygienic and inviting.</li>
							</ul>
							<h6>Relevance:</h6>
							<ul>
								<li>Being able to work under a time constraint, while handling customer and co-worker interactions, has allowed me to develop professional stress management skills to use time-pressure in a advantageous way</li>
							</ul>
							<div className='imageContainer'>
								<img className='displayImage' src='images/ryanGraeters.jpg' alt="Me on my way for my first day at Graeter's" />
							</div>
						</section>
						<hr />
						<section className={classes.experienceSection}>
							<h4>Digital Media Operator</h4>
							<h5><a href='https://www.bellmedia.ca/' target="_blank">Bell Media Canada</a> ~ 2014-2022 ~ Scarborough, Ontario, Canada</h5>
							<h6>Key Achievements:</h6>
							<ul>
								<li>Created a {linkSM('c++')} program that interacts with another software through {linkSM('cli')} to increase productivity, as manual manipulation of this software was time consuming.</li>
								<li>Part of a team to design a workflow in regards to a unique ID associated with media assets which has since seen widespread use in and out of the department.</li>
								<li>Implemented new techniques associated with communicating with other shifts; such as a color coded system for programming schedules.</li>
							</ul>
							<h6>Job Duties:</h6>
							<ul>
								<li>Working with media assets from a large range of suppliers; to ensure quality of assets, transcode to multiple specifications, and deliver to a diverse group of partners.</li>
								<li>Maintaining linear live streams for sporting events, award shows and the like; working with distribution, scheduling, and technicians to ensure a smooth, uninterrupted user experience.</li>
								<li>Maintaining accurate information across a plethora of sources; including programming schedules, e-mails, sharepoint systems, etc.</li>
							</ul>
							<h6>Relevance:</h6>
							<ul>
								<li>This job has given me a lot of office experience, including working on a small team to achieve tight deadlines for large scale projects.</li>
								<li>Creating multiple applications from scratch (not the {linker('language', 'https://scratch.mit.edu/')}). That allowed me to develop skills to take active feedback as me and my colleagues used them in our day to day jobs.</li>
							</ul>
						</section>
						<hr />
						<section className={classes.experienceSection}>
							<h4>Second Shift Instock Associate</h4>
							<h5><a href='https://www.walmart.ca/en' target="_blank">Walmart</a> Canada ~ 2012-2013 ~ London, Ontario, Canada</h5>
							<h6>Job Duties:</h6>
							<ul>
								<li>Organized the stockroom to operate  in a smooth manner.</li>
								<li>Worked with the computer system to find and deliver stock to their corresponding departments.</li>
								<li>Asked to help out in all departments from time to time; where a spot was needed to be filled.</li>
							</ul>
							<h6>Relevance:</h6>
							<ul>
								<li>I had to handle lots of inventory coming into the store, sorting and organizing product as to allow easy access for the other associates of the store.</li>
								<li>I developed my team-working skills from this job. As it was the first time I was in an environment where you had to work together, or the tasks involved would not be completed in time.</li> 
								<li>I was also going to college at the time of this job and had to balance work and school. Allowing me to develop a lot of time-management skills.</li>
							</ul>
						</section>
						<hr />
						<section className={classes.experienceSection}>
							<h4>Produce/Hardware Associate</h4>
							<h5><a href='https://www.walmart.ca/en' target="_blank">Walmart Canada</a> ~ 2011-2012 ~ Windsor, Ontario, Canada</h5>
							<h6>Job Duties:</h6>
							<ul>
								<li>Responsible for the timely upkeep of the department from spills and messes.</li>
								<li>Proper care and cleaning of certain vegetables for safe consumption for customers</li>
								<li>Cleaning and organizing the cooler for easy access to stock.</li>
								<li>While in Hardware; working with machinery and tools (Paint Mixer, Key Cutter)</li>
							</ul>
							<h6>Relevance:</h6>
							<ul>
								<li>This was one of my first jobs as a young adult. It showed me that taking pride in one's work; regardless of the recognition you receive from it, allows you to feel good about yourself and keep up a good work ethic. Even when the job is a simple, mostly manual labor type of job.</li>
								<li>This job, and my dads influence, helped teach me my work ethic. Being responsible for things needing to be done, and doing them without complaint (ok, mostly. I was 16 at the time). Being able to listen to instruction and ask clarifying questions when needed; to not presume I know everything.</li>
							</ul>
						</section>
						<img src='#' alt=''/>
					</Expander>
				</article>
				<article id='schoolExperience'>
					<Expander nodeName='school' anchor='schoolExperience'>
						<h3>School Experience</h3>
						<hr />
						<section className={classes.experienceSection}>
							<h4>Broadcast Television and Film (Associates)</h4>
							<h5>{linker('Fanshawe College', 'https://www.fanshawec.ca/')} ~ Graduated 2014 ~ London, Ontario, Canada</h5>
							<h6>The Program:</h6>
							<ul>
								<li>The Program focused on all aspects of production, including but not limited to: Budgeting, Paperwork, Camera Operation, Editing and Advertising.</li>
								<li>Have successfully completed the program with a GPA of 3.89</li>
							</ul>
							<h6>Relevance:</h6>
							<ul>
								<li>In college, we mostly worked on projects in teams. I was able to understand that team-member fill a role. Which taught me that I can work on aspects of projects, while trusting the other members to complete their parts.</li>
								<li>I learned that I thrived with structures (How to frame a shot, how to color grade a scene, etc.). However, that within the structures of how to do something, there was always some creativity that goes into technical work. I learned from school that there is imagination and creativity in technical work; and that was the type of creativity I was really good with.</li>
							</ul>
						</section>
						<img src='#' alt=''/>
						<hr />
						<section className={classes.experienceSection}>
							<h4>Welder Fitter</h4>
							<h5>{linker('Institute of Technical Trades', 'https://www.instituteoftechnicaltrades.com/')} ~ Graduated 2016 ~ Toronto, Ontario, Canada</h5>
							<h6>The Program:</h6>
							<ul>
								<li>A six month program training physical skills in everything to be a Welder Fitter</li>
								<li>I recieved full {linker('CWB', 'https://www.cwbgroup.org/')} certificates in {linker('SMAW', 'https://weldguru.com/smaw-welding/')} and {linker('FCAW', 'https://fractory.com/flux-cored-arc-welding-explained/')} welding</li>
							</ul>
							<h6>Relevance:</h6>
							<ul>
								<li>Even though this field is vastly different to programming. I went into the schooling because I was missing something from my work at Bell Media. I wanted to create and work on things in a more tangible way than I was. Although this career path didn't take, I don't regret the schooling as it showed me that I do value creating and seeing my work come to life.</li>
							</ul>
						</section>
						<img src='#' alt=''/>
						<hr />
						<section className={classes.experienceSection}>
							<h4>High School Degree</h4>
							<h5>{linker('General Amherst High School', 'https://en.wikipedia.org/wiki/General_Amherst_High_School')} ~ Graduated 2012 ~ Amherstburg, Ontario, Canada</h5>
							<em className={classes.note}>This school is no longer around. It was decommissioned in 2022 as a new school in Amherstburg, Ontario was built to accommodate students from General Amherst and Western Secondary School.</em>
						</section>
						<img src='#' alt=''/>
					</Expander>
				</article>
			</div>
		</section>
	);
}

export default PageResume;