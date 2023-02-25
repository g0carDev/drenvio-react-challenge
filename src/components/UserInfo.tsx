import { useAppSelector } from '../redux/hooks';

interface Props {
	title: string;
	items: Item[];
}

interface Item {
	label: string;
	value: string | number;
}

export const UserInfo = ({ title, items }: Props) => {
	const { user } = useAppSelector((state) => state.user);

	const backgroundColor = () => {
		return user!.gender === 'male' ? '#C8E7F5' : 'pink';
	};
	return (
		<div className='user_info'>
			<h2 className='user_info_title'>{title}</h2>
			<ul className='user_info_items'>
				{items.map(({ label, value }) => (
					<li key={label} className='user_info_items-item'>
						<span
							className='label'
							style={{
								backgroundColor: backgroundColor(),
							}}
						>
							{label}
						</span>{' '}
						<span
							className='value'
							style={{
								backgroundColor: backgroundColor(),
							}}
						>
							{value}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};
