import { useEffect } from 'react';
import { UserContainer } from './components';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getUserFetch } from './redux/userSlice';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
	const dispatch = useAppDispatch();
	const { user, isLoading, hasError } = useAppSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUserFetch());
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isLoading && hasError) {
		return <div>Ups Error...</div>;
	}

	return <>{user && <UserContainer user={user} />}</>;
}

export default App;
