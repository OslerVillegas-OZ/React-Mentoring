//import users from '../users.json'
import '../styles/userCard.css'
import * as React from 'react';
import { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
//import {updateUser} from './updateUser';

import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
//import { red } from '@mui/material/colors';
//import { DeleteIcon, CheckIcon, CloseIcon } from '@mui/icons-material'


function UserCard({user}) {
	const [updatedOpen, setUpdatedOpen] = useState(false);
	const [redOpen, setRedOpen] = useState(false);

	const updateUser = () => {
		user.isActive = !user.isActive

		fetch("http://localhost:8000/users/" + user.id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		}).then(() => {
			setUpdatedOpen(true);
			console.log('User Updated');
		})
	}

	const deleteUser = () => {
		fetch("http://localhost:8000/users/" + user.id, {
			method: "DELETE",
		}).then(() => {
			setRedOpen(true);
			console.log('User Deleted');
		})
	}

	const handleUpdatedClose = () => setUpdatedOpen(false);
	const handleRedClose = () => setRedOpen(false);

	console.log(redOpen)

	return (
		<li className={ `userCard ${user.isActive ? "checked" : ""}` }>
			<img src={ user.imgURL } alt="profile"/>
			<div className="userNames">
				<p className="userName">{user.firstName}</p>
				<p className="userEmail">{user.lastName}</p>
			</div>
			<div className="actionsButtons">
				{ user.isActive
					? <Button
							variant="text"
							style={{color: `crimson`}}
							onClick={updateUser}
						>
							<CloseIcon/>
						</Button>
					: <Button
							variant="text"
							style={{color: `rgb(135, 199, 67)`}}
							onClick={updateUser}
						>
							<CheckIcon/>
						</Button>
				}
				<Button
					variant="text"
					onClick={() => deleteUser()}
				><DeleteIcon/>
				</Button>

				<Snackbar
					anchorOrigin={{vertical: 'top', horizontal: 'center'}}
					open={updatedOpen}
					autoHideDuration={3000}
					onClose={handleUpdatedClose}
				>
					<Alert
						onClose={handleUpdatedClose}
						severity="info"
					>	User Active status Updated
					</Alert>
				</Snackbar>

			</div>
			<Snackbar
					anchorOrigin={{vertical: 'top', horizontal: 'center'}}
					open={redOpen}
					autoHideDuration={3000}
					onClose={handleRedClose}
				>
					<Alert
						onClose={handleRedClose}
						severity="warning"
					>User Deleted
					</Alert>
				</Snackbar>
		</li>
	)
}


export default UserCard;
