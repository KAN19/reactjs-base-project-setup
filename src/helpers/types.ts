export type RequestStateType =
	| 'idle'
	| 'loading'
	| 'succeeded'
	| 'failed'
	| 'rejected';

export interface OptionsItemType {
	label: string;
	value: string;
	isDisabled?: boolean;
}

export type OptionsItemArrayType = Array<OptionsItemType>;

export type QueryType<T> = {
	page?: number;
	records?: number;
	searchField?: keyof T;
	searchValue?: string;
	sortBy?: keyof T;
	sortOrder?: 'asc' | 'desc';
};

export type PagingType = {
	pageIndex: number;
	itemsPerPage: number;
	currentItemCount: number;
	totalItems: number;
};

export type ListResponseType<T> = PagingType & {
	items: Array<T>;
};

export type SliceStateType<T> = {
	list: Array<T>;
	status: RequestStateType;
	error?: string;
	paging: PagingType;
	query: QueryType<T>;
};

export type SimpleSliceStateType<T> = {
	list: Array<T>;
	status: RequestStateType;
	error?: string;
};

export type SearchFieldsType<T> = Pick<
	QueryType<T>,
	'searchField' | 'searchValue'
>;
