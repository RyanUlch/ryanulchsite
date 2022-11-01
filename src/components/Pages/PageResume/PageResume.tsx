// CSS Import
import classes from './PageResume.module.css';

import PageBreaker from '../../PageBreaker/PageBreaker';
import Expander from '../../Expander/Expander';

const PageResume = (props: any) => {

	return (
		<section>
			<PageBreaker value='Resumé'/>
			<div className='background'>
				<article id='about'>
					<Expander anchor='about'>
						<h3>About Me</h3>
						<p>I am a self-taught programmer from Windsor, Canada. Interested in computers, and technology since I was a little child I went into Film and Television production obviously. I enjoyed the technical aspects of production, mostly camera operation and editing. They both gave me the ability to express myself artistically, while still adhearing to conventions (and knowing when to buck conventions) to produce something that only I could have.</p>
						<p>Anyway; the job I got out of college involved none of that. I did get to work in a fast-paced office environment working on large-scale projects Quality-Controlling and encoding video for <a href='https:crave.ca'>Crave.ca</a> (Service not available outside of Canada) for almost 8 years.</p>
						<p>I had started to learn C++ programming around 2016, eventually creating 2 functional programs, that my department used to allow a more efficient workflow. (Due to creating the applications for a private corperation, I do not own my own code for these, and cannot share the github links). The first was a CLI (Command Line Interface) to work with a proprietary application we used to Quality Control assets, eventually being reworked as a QT GUI application as that proprietary app became more complex. The other being a QT GUI application for file manipulation as there wa a lot of manual changing of file structures.</p>
						<p>While working for Bell Media Canada, I had met my lovely (now) wife Lucy, who had lived in Ohio her whole life. We got married in November of 2019 in Toledo, Ohio and started immigration procedures. 2 years later, while during a pandemic, I was able to immigrate to the United States of America with my wife. While getting settled, I got a part-time job at Graeter's Ice Cream here in Columbus Ohio. A great place that helped hone my ability to deal with the general public while completing orders and going above and beyond with both customers and the needs of the store.</p>
						<p>While working at Graeter's, I learned web development with the help of my best friend, a web app developer, who worked at the same company I was in, in Canada.</p>
						<p>Now, I'm looking for a company who wants a self-starting, smart, adaptable junior web development to grow and learn even more from.</p>
						<img src='#' alt=''/>
					</Expander>
				</article>
				<article id='qualifications'>
					<Expander anchor='qualifications'>
						<h3>Qualifications</h3>
						<ul>
							<li>(Add Resume Qualifications in list form here)</li>
						</ul>
						<img src='#' alt=''/>
					</Expander>
				</article>
				<article id='experience'>
					<Expander anchor='experience'>
						<h3>Experience</h3>
						<p>Please note, I am listing my entire working history as I believe that every job; even though not programming specific, have given me skills that help in a web development environment. Each one made me the type of worker that I am today</p>
						<section>
							<p>(Add Resume experience in sections here)</p>
						</section>
						<img src='#' alt=''/>
					</Expander>
				</article>
			</div>
		</section>
	);
}

export default PageResume;