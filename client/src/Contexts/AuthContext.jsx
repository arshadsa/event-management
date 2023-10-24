import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		// if localsorage has user then set user
		if (localStorage.getItem('user')) {
			setUser(JSON.parse(localStorage.getItem('user')));
		}

		// if localsorage has token then set token
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
		}
	}, []);

	console.log('user', user);

	const login = (userData, token) => {
		setUser(userData);
		setToken(token);

		localStorage.setItem('user', JSON.stringify(userData));
		localStorage.setItem('token', JSON.stringify(token));
	};

	const logout = () => {
		setUser(null);
		setToken(null);

		localStorage.removeItem('user');
		localStorage.removeItem('token');
	};

	const authContextValues = {
		user,
		login,
		logout,
		token,
	};

	return (
		<AuthContext.Provider value={authContextValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;

