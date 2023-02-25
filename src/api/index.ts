import axios from 'axios';
import type { RandomUserAPIResponse, User } from '../interfaces';

export const getRandomUser = async (): Promise<User> => {
	const API_URL = `https://randomuser.me/api/`;
	try {
		const response = await axios.get<RandomUserAPIResponse>(API_URL);
		const { data } = response;
		return data.results[0];
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			console.error(`[API ERROR]: ${error.message}`);
		}
		throw new Error(error);
	}
};
