const _prefix = 'DOCHERO_';
const _parseKey = (key: string) => `${_prefix}${key}`;

export class Local {
	static setItem = (key: string, value: any) => {
		return localStorage.setItem(_parseKey(key), JSON.stringify(value));
	};
	static getItem = (key: string) => {
		try {
			return JSON.parse(localStorage.getItem(_parseKey(key)) || '');
		} catch (error) {
			return undefined;
		}
	};
	static removeItem = (key: string) => {
		return localStorage.removeItem(_parseKey(key));
	};
	static clearAll = () => {
		const theme = Local.getItem('theme');
		localStorage.clear();
		theme && Local.setItem('theme', theme);
		return;
	};
}

export const parseQuery = (path: string, object?: any) => {
	const copyObject = { ...object };
	if (!copyObject) return path;
	if (!copyObject?.searchField || !copyObject?.searchValue) {
		delete copyObject.searchField;
		delete copyObject.searchValue;
	}
	const result = Object.keys(copyObject).reduce(
		(prev, current) =>
			`${prev}${
				typeof copyObject[current] !== 'undefined' &&
				copyObject[current] !== false &&
				String(copyObject[current]).length > 0
					? `${
							prev.length > 0 ? '&' : ''
					  }${current}=${encodeURIComponent(copyObject[current])}`
					: ''
			}`,
		''
	);
	return `${path}${result ? `?${result}` : ''}`;
};
