import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ErrorObjectType {
	message?: string;
	error?: boolean;
	errorObject?: any;
	errorCode?: number;
}

type ResponseType<T> = ErrorObjectType & {
	requestUuid?: string;
	data?: T;
	instance?: Omit<AxiosResponse<T>, 'data'>;
	totalPages?: number;
	totalRecords?: number;
};

/**
 * The Base API
 */
const api = axios.create();
api.defaults.baseURL = process.env.REACT_APP_BASE_URL || '/api/'; // Init default base URL

export class API {
	/**
	 * Setup an `accessToken` in Api Instance
	 * @param token string
	 * @returns VoidFunction
	 */
	static setToken = (token?: string) => {
		if (!token) {
			return;
		}
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	};
	/**
	 * Remove an `accessToken` in Api Instance
	 * @returns VoidFunction
	 */
	static removeToken = () => {
		api.defaults.headers.common['Authorization'] = false;
	};
}

export const get = async <T = any, D = any>(
	url: string,
	config?: AxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await api.get<T & ErrorObjectType>(url, config);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const post = async <T = any, D = any>(
	url: string,
	data?: D,
	config?: AxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await api.post<T & ErrorObjectType>(url, data, config);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const put = async <T = any, D = any>(
	url: string,
	data?: D,
	config?: AxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await api.put<T & ErrorObjectType>(url, data, config);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const patch = async <T = any, D = any>(
	url: string,
	data?: D,
	config?: AxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await api.patch<T & ErrorObjectType>(
			url,
			data,
			config
		);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const remove = async <T = any, D = any>(
	url: string,
	config?: AxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await api.delete<T & ErrorObjectType>(url, config);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
