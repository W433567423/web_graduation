export enum IEmunRunStatus {
	fail = -1,
	unknown = 0,
	success = 1
}
interface IProjectListItem {
	id: number;
	projectName: string;
	lastStatus: IEmunRunStatus;
	createTime: string;
	updateTime: string;
	disable: boolean;
}

interface IProjectList {
	list: IProjectListItem[];
	total: number;
}

export type { IProjectList, IProjectListItem };
