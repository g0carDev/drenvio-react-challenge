import Map, { Marker } from 'react-map-gl';

interface Props {
	longitude: number;
	latitude: number;
	style?: React.CSSProperties;
	zoom?: number;
	markColor?: string;
}

export const MyMap = ({ style, latitude, longitude, zoom = 3, markColor = 'red' }: Props) => {
	return (
		<Map
			initialViewState={{
				longitude,
				latitude,
				zoom,
			}}
			style={
				style || {
					width: '100%',
					height: '100%',
				}
			}
			mapStyle='mapbox://styles/mapbox/streets-v9'
			mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}
		>
			<Marker longitude={longitude} latitude={latitude} color={markColor} />
		</Map>
	);
};
