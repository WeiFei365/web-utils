import {
  select,
  add,
  delete as dbDelete,
} from '../../store/lstore-db-search_words';


console.log(select());

add('-1234');
add('-2345');
add('-3456');
add('-4567');
add('-5678');
add('-6789');
add('-7890');

// will return 6 data
console.log(select());

dbDelete('-1234');
dbDelete('-2345');

// will return 5 data
console.log(select());

console.log(select(1));

// // will return 3 data
console.log(select(10, '8'));
