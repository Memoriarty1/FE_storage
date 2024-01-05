import axios from '@/core/axios';
import {LoginFormDTO, LoginResponseDTO, RegistrationFormDTO, getAuthUserResponseDTO} from './dto/auth.dto';
import {destroyCookie} from 'nookies';

export const login = async (values: LoginFormDTO): Promise<LoginResponseDTO> => {
	// return (await axios.post("/auth/login", values)).data;
	const {data} = await axios.post('/auth/login', values);

	return data;
};

export const registration = async (values: RegistrationFormDTO): Promise<LoginResponseDTO> => {
	// return (await axios.post("/auth/login", values)).data;
	console.log(values);
	const {data} = await axios.post('/auth/register', values);
	console.log(data);
	return data;
};

export const getAuthUser = async (): Promise<getAuthUserResponseDTO> => {
	const {data} = await axios.get('/users/authorized-user-data');

	return data;
};

export const logout = () => {
	destroyCookie({}, '_token', {path: '/'});
};
