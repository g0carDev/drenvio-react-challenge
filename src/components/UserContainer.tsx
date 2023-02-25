import { MyMap } from './MyMap';
import { formatDate } from '../utils';
import { useAppDispatch } from '../redux/hooks';
import type { User } from '../interfaces';
import { getUserFetch } from '../redux/userSlice';
import { UserInfo } from './UserInfo';

interface Props {
	user: User;
}

export const UserContainer = ({ user }: Props) => {
	const dispatch = useAppDispatch();
	const onChangeUser = () => dispatch(getUserFetch());

	return (
		<div
			className='container'
			style={{
				backgroundColor: user.gender === 'male' ? '#C8E7F5' : '#F9D1D1',
			}}
		>
			<div className='avatar_container'>
				<img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className='avatar' />
				<h1 className='user_name'>
					<span className='user_title'>{user.name.title}</span> {user.name.first} {user.name.first}
				</h1>
				<button
					onClick={onChangeUser}
					className='button'
					style={{
						maxWidth: '500px',
					}}
				>
					Change user
				</button>
			</div>
			<div style={{ width: '100%' }}>
				<UserInfo
					title='Personal Information'
					items={[
						{ label: 'Age', value: user.dob.age },
						{ label: 'Date of Birthday', value: formatDate(user.dob.date) },
						{ label: 'Email', value: user.email },
						{ label: 'Phone', value: user.phone },
						{ label: 'Cell', value: user.cell },
					]}
				/>
				<UserInfo
					title='Address'
					items={[
						{ label: 'Street', value: `${user.location.street.name} #${user.location.street.number}` },
						{ label: 'City', value: user.location.city },
						{ label: 'Country', value: user.location.country },
						{ label: 'Postcode', value: user.location.postcode },
					]}
				/>
				<div className='location_container'>
					<h2 className='user_info_title'>Location</h2>
					<MyMap
						style={{
							borderRadius: '10px',
						}}
						longitude={Number(user.location.coordinates.longitude)}
						latitude={Number(user.location.coordinates.latitude)}
					/>
				</div>
				<div style={{ height: '5rem' }}></div>
				<UserInfo
					title='Credentials'
					items={[
						{ label: 'Username', value: user.login.username },
						{ label: 'Password', value: user.login.password },
					]}
				/>
			</div>
			<button onClick={onChangeUser} className='button'>
				Change user
			</button>
		</div>
	);
};
