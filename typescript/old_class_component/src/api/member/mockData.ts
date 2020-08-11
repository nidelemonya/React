import { MemberEntity } from '../../model';

// MemberEntity[] 的作用是什么?
// 因为后端传来的数据有风险 可能有些项会丢失
// 所以要加一个约束 声明为一个接口 是 MemberEntity 类型的
// MemberEntity 是一个 model
export const members: MemberEntity[] =
  [
    {
      id: 1457912,
      login: "brauliodiez",
      avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
    },
    {
      id: 4374977,
      login: "Nasdan",
      avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
    }
  ];