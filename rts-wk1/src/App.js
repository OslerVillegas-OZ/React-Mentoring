import './App.css';
import React, { useState } from 'react';
import Button from './components/button';



function App() {
  return (
		<Counter />
  );
}

function Counter() {
	const [count, setCount ] = useState(0);
	//const [fruit, setFruit ] = useState(0);

	const txt = 'Hola mundo!';

	const handleIncrease = () => setCount( currentCount => currentCount + 1 );

	const handleDecrease = () => setCount( currentCount => currentCount - 1 );


	return (
	<div className='counter'>
		<div className='counter--display'>
			<p>Contador: {count}</p>
		</div>
		<div className="counter--buttons">
			<Button handleClick={handleDecrease} text={'Restar'} color={'red'}/>
			<Button handleClick={handleIncrease} text={'Sumar'}/>

			<div>
				{ count >= 5
					? (<>
							<b>{txt}</b>
							<Button handleClick={handleIncrease} text={'kaput'}/>
						</>)
					: ('')
				}
			</div>
		</div>
	</div>
	)
}



export default App;
