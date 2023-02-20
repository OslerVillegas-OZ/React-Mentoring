import '../styles/header.css'
import { useGetUserList } from '../function/getUserList';

function Header() {

	return (
		<>
			<header>
				<h1>
					User Manager ({useGetUserList().users.length})
				</h1>
			</header>
		</>
	)
}

export default Header;