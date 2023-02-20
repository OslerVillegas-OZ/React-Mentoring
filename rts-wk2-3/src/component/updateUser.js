export function updateUser(user) {

	let updatedUser = {
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		isActive: !user.isActive,
		imgUrl: user.imgUrl
	}


	fetch("http://localhost:8000/users/" + user.id, {
		methd: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(updatedUser)
	}).then(() => {
		console.log("user updated")
	})
}
