interface linkType {
	[index: string]: string[];
}

// Links used in conjunction with linkSM to allow for easier readability on
// page components.
const links: linkType = {
	'react': 	['React', 									'https://reactjs.org/'],
	'js': 		['Javascript', 								'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
	'html':		['HTML', 									'https://developer.mozilla.org/en-US/docs/Web/HTML'],
	'css':		['CSS', 									'https://developer.mozilla.org/en-US/docs/Web/CSS'],
	'node':		['Node.js', 								'https://nodejs.org/en/docs/'],
	'sql':		['MySQL', 									'https://dev.mysql.com/doc/'],
	'fs':		['Full-Stack', 								'https://www.w3schools.com/whatis/whatis_fullstack.asp'],
	'front':	['Front-End', 								'https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html'],
	'db':		['Database Management', 					'https://www.oracle.com/database/what-is-database/'],
	'sec':		['Security (Password Hashing)', 			'https://github.com/P-H-C/phc-winner-argon2'],
	'sess':		['Session Storage', 						'https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage'],
	'comp':		['Component Based-Libraries/Frameworks',	'https://www.oreilly.com/library/view/what-react-is/9781491996744/ch01.html'],
	'type':		['TypeScript', 								'https://www.typescriptlang.org/docs/'],
	'resp':		['Responsive Design', 						'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design'],
	'aria':		['ARIA/Accessibility', 						'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques'],
	'strict':	['Strict Typing', 							'https://www.infoworld.com/article/3538428/what-is-typescript-strongly-typed-javascript.html'],
	'ecma':		['EMCAScript 6',							'http://es6-features.org/#Constants'],
	'c++':		['C++', 									'https://en.cppreference.com/w/'],
	'java':		['Java', 									'https://docs.oracle.com/en/java/'],
	'cli':		['CLI', 									'https://www.w3schools.com/whatis/whatis_cli.asp'],
	'qt':		['QT', 										'https://doc.qt.io/'],
	'gui':		['GUI', 									'https://en.wikipedia.org/wiki/Graphical_user_interface'],
	'quest':	['questions', 								'https://www.forbes.com/sites/goldiechan/2021/02/01/why-asking-questions-is-good-for-your-brand-and-your-career/?sh=370fb3bb1c23'],
};


export const linker = (copy: string, link: string, isNewTab: boolean = true) => {
	return <a href={link} target={isNewTab ? '_blank' : ''}>{copy}</a>
}

export const linkSM = (prop: string) => {
	return <a href={links[prop][1]} target='_blank'>{links[prop][0]}</a>
}