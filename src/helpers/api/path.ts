export const APIPaths = {
	auth: {
		signUp: 'auth/sign-up',
		logIn: 'auth/login',
		logOut: 'auth/logout',
		refreshToken: 'auth/refresh-token',
		resetPassword: 'auth/reset-password',
		changePassword: 'auth/change-password',
	},
	defect: {
		list: 'defect',
	},
} as const;
