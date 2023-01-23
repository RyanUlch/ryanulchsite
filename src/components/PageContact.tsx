import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import type { FormEvent } from 'react';

// Contact page with an email form to be sent.
const PageContact = () => {
	// Send call to php file to send email
	const emailCall = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('sending');
		var data = new FormData(document.getElementById("emailForm") as HTMLFormElement | undefined);
		fetch("index.php", { method: "GET", body: data })
		.then(res => res.text())
		.then(txt => console.log(txt))
		.catch(err => console.error(err));
	}

// Due to the amount of nesting Bootstrap.React uses, Indentation starts on first child elements
	return (
<Card className='rounded-bottom rounded-0 offWhiteBack'>
	<Card.Body>
		<Card className='mb-5'>
			{/* Contact Info Section */}
			<Card.Header className='cardHeader'>How to get in contact with me</Card.Header>
			<Card.Body className='pb-0'>
				<h4 className='mb-2 text-center'>Emailing me is the best way to get in contact: <a href='mailto:RyanUlchDev@gmail.com?subject=From RyanUlch.com'>RyanUlchDev@Gmail.com</a></h4>
				{/* Needs work with PHP to get working to send email, Commenting out for now */}
				{/* <Form id='emailForm' method="POST" onSubmit={emailCall}>
					<Container>
						<Row xs={1} md={2}>
							<Col>
								<Form.Group className="mb-3" controlId="email">
									<Form.Label>Email Address: *</Form.Label>
									<Form.Control required name='email' type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
									</Form.Text>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="subject">
									<Form.Label>Subject:</Form.Label>
									<Form.Control name='email' placeholder="Subject (Optional)" />
									<Form.Text className="text-muted">
									</Form.Text>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Form.Group className="mb-3" controlId="message">
								<Form.Label>Message: *</Form.Label>
								<Form.Control as="textarea" required name='msg' rows={3} placeholder="Message" />
							</Form.Group>
							<p>*Required</p>
						</Row>
						<Row>
							<Button className='center' style={{margin: 'auto'}} variant="primary" type="submit">
								Submit
							</Button>
						</Row>
					</Container>
				</Form> */}
				<Card className='well mt-3 text-center'>
					<Card.Body>
						<p>I am currently available for freelance work.</p>
					</Card.Body>
				</Card>
			</Card.Body>
		</Card>
		<Card>
			{/* Location Section */}
			<Card.Header className='cardHeader'>Where I am</Card.Header>
			<Card.Body className='pb-0'>
				<iframe
					className='rounded border'
					style={{width: '100%', height:'20rem'}}
					title='MapFrame'
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA72Tg4Xp4O92XC-9ilIGfgyVlVQpS59_Y&q=43220&zoom=11"
				/>
				<Card className='well'>
					<Card.Body>
						<p>I reside in Columbus, Ohio. I can only accept jobs that are either local to the area, or are 100% work-from-home currently.</p>
					</Card.Body>
				</Card>	
			</Card.Body>
		</Card>
	</Card.Body>
</Card>
	);
}

export default PageContact;