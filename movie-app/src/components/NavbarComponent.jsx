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
import React, { useContext } from 'react';

import { CreateContext } from '../context/ContextProvider';

function NavbarComponent() {
	const { searchMovies, handleChange } = useContext(CreateContext);

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
					<Link to="/">
						<Navbar.Brand>Boomflix</Navbar.Brand>
					</Link>
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
									onChange={(e) => handleChange(e.target.value)}
								/>
								<Link to="/moviequery">
									<Button
										variant="outline-light"
										onClick={() => searchMovies()}
									>
										Search
									</Button>
								</Link>
							</Form>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
