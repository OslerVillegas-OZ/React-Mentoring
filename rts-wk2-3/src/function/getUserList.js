import { useState, useEffect } from "react";

export function useGetUserList() {

	const [users, setUsers] = useState([]);

	/*
		useEffect( ()=> {
		fetch("http://localhost:8000/users")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => {
				err.name === "AbotError"
				? console.log("Fetch Aborted")
				: console.log("Fetch Completed");
			})
		}, [users.length])
	//*/

	///**
	const fetchData = () => {
		fetch("http://localhost:8000/users")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => {
				err.name === "AboutError"
				? console.log("Fetch Aborted")
				: console.log("Fetch Completed");
			})
	}

	//*
	useEffect( () => {
		fetchData()
	}, [])
	// */

	return {users, fetchData}
}




