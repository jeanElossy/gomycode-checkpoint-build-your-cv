import Cv from './components/Cv';
import Load from './components/Load';
import { useState, useEffect } from 'react';

const App = () => {
	const [
		loader,
		setLoader,
	] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1100);
	}, []);

	return loader ? <Load /> :
		<div className='App'>
			<Cv />
		</div>;
};

export default App;
