import {
	Navbar,
	Container,
	NavDropdown,
	Nav,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function NavbarComponent() {
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				sticky="top"
				className="p-4"
			>
				<Container>
					<Navbar.Brand href="/">Boomflix</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Form className="d-flex">
								<FormControl
									type="search"
									placeholder="Search a movie"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-light">Search</Button>
							</Form>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
