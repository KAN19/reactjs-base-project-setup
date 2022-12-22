const _prefix = "DOCHERO_";
const _parseKey = (key: string) => `${_prefix}${key}`;

export class Local {
	static setItem = (key: string, value: any) => {
		return localStorage.setItem(_parseKey(key), JSON.stringify(value));
	};
	static getItem = (key: string) => {
		try {
			return JSON.parse(localStorage.getItem(_parseKey(key)) || "");
		} catch (error) {
			return undefined;
		}
	};
	static removeItem = (key: string) => {
		return localStorage.removeItem(_parseKey(key));
	};
	static clearAll = () => {
		const theme = Local.getItem("theme");
		localStorage.clear();
		theme && Local.setItem("theme", theme);
		return;
	};
}
