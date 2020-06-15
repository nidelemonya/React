## 函数式编程
- 不可变
- 纯函数：提倡写一个函数风格 => 函数无副作用

## immutable
- Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象
- Immutable 实现的原理是 Persistent Data Structure （持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变
- 同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗， Immutable 使用了 Structural Sharing···· （结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

深拷贝浅拷贝： 各有优缺点。

- 结构共享
没有更新的用的还是原来的数据
只有有必要更新的地方才使用新的数据。