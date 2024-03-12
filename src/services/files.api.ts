import request from '@/services/require.ts';
import { type IPostNewFileReq } from './interfaces/files';
const baseUrl = '/files';

// 获取 项目列表
export const getWorkFileMenu = async (parentId: number) => {
	return await request.get(baseUrl + '/menu', {
		params: { parentId }
	});
};

// 新建文件夹
export const postNewFolder = async (fileName: string, parentId: number) => {
	return await request.post(baseUrl + '/newFolder', {
		data: { fileName, parentId },
		originData: true
	});
};
// 新建文件
export const postNewFile = async (data: IPostNewFileReq) => {
	return await request.post(baseUrl + '/newFolder', {
		data,
		originData: true
	});
};