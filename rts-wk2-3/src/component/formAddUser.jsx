import { Button, FormControlLabel, FormGroup, useScrollTrigger } from "@mui/material";
import { useState, useEffect } from "react";

import '../styles/formAddUser.css'
import { useGetUserList } from '../function/getUserList'

// Material UI Components
import AddBoxIcon from '@mui/icons-material/AddBox';
import { TextField, Snackbar, Checkbox, Alert } from "@mui/material";

function FormAddUser() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [imgURL, setImgURL] = useState("");
	const [isActive, setIsActive] = useState(false);

	const [open, setOpen] = useState(false);

	const {fetchData} = useGetUserList()

	const addUser = () => {
		const newUser = {
			firstName,
			lastName,
			email,
			isActive,
			imgURL
		}

		setOpen(true)

		fetch("http://localhost:8000/users", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newUser)
		}).then(() => {
			setFirstName("");
			setLastName("");
			setEmail("");
			setImgURL("");
			setIsActive(false);
			fetchData();
			console.log('new user added')
		})
	}

	const propSetFirstName = (e) => setFirstName(e.target.value);
	const propSetLastName = (e) => setLastName(e.target.value);
	const propSetEmail = (e) => setEmail(e.target.value);
	const propImgURL = (e) => setImgURL(e.target.value);
	const propIsActive = (state) => setIsActive(!isActive);

	const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

	return (
		<div className="form">
			<FormGroup>
				<div className="form--header">
					<h2 className="form--title">ADD A NEW USER</h2>
				</div>
				<div className="form--addUser">
						<TextField
						id="firstName"
						label="First Name"
						variant="outlined"
						value={firstName}
						onChange={propSetFirstName}
					/>
					<TextField
						id="lastName"
						label="Last Name"
						variant="outlined"
						value={lastName}
						onChange={propSetLastName}
					/>
					<TextField
						id="email"
						label="email"
						variant="outlined"
						value={email}
						onChange={propSetEmail}
					/>
					<TextField
						label="Image URL"
						variant="outlined"
						value={imgURL}
						onChange={propImgURL}
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={isActive}
								id="isActive"
								className="form--checkbox"
								onChange={propIsActive}
							/>
						}
						label="User Active"
						labelPlacement="top"
					/>
					<Button variant="text" onClick={addUser}>
						<AddBoxIcon/>
					</Button>
					<Snackbar
						anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
						open={open}
						autoHideDuration={3000}
						onClose={handleClose}
						//message="User created successfully"
						//action={action}
					>
						<Alert
							onClose={handleClose}
							severity="success"
						>User created successfully
						</Alert>
					</Snackbar>
				</div>
			</FormGroup>
		</div>

	)
}

export default FormAddUser;
