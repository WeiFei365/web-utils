import {
  select,
  add,
  delete as dbDelete,
} from '../../store/lstore-db-user_list';


console.log(select());

add({ id: 1, name: '-1' });
add({ id: 2, name: '-2' });
add({ id: 3, name: '-3' });

// 无效的操作，不会增加重复的
add({ id: 3, name: '-3' });

// 以下可以
add({ id: 4, name: '-3' });
add({ id: 3, name: '-4' });

add({ id: 5, name: '-5' });
add({ id: 6, name: '-6' });
add({ id: 7, name: '-7' });
add({ id: 8, name: '-8' });

// will return 6 data
console.log(select());

dbDelete({ id: 1, name: '-1' });

console.log(select());
