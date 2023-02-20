import Header from './component/header';
import UserList from './component/userList';
import FormAddUser from './component/formAddUser';

/* FONTS */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <Header />
			<UserList />
			<FormAddUser />
    </div>
  );
}

export default App;
