import { MemberEntity } from '../../model';
import { members } from './mockData';

// 函数的 返回值 是 promise
// 约束 为 Promise 的函数
const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,
};