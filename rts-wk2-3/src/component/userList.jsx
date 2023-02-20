import UserCard from "./userCard";
//import { useEffect, useReducer, useState } from "react";
import '../styles/userList.css';
import { useEffect } from "react";
import {useGetUserList} from "../function/getUserList";

function UserList() {
	const {users, fetchData} = useGetUserList();


	useEffect( () => {
		fetchData()
	}, [users.length])


	return (
		<div>
				<ul id="usersList">
					{ users && users.map((user) => (
						<UserCard user={user} key={user.id}/>
					)) }
				</ul>

		</div>
	)
}

export default UserList;