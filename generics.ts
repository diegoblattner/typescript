interface Table<T> {
  total: number;
  items: T[];// Array<T>
}

function getItems<P>(table: Table<P>): P[] {
  return table.items;
}

const getItemsArrow = <T>(table: Table<T>) => table.items;

const getItemsArrowInTSX = <T extends {}>(table: Table<T>) => table.items;


// go to cacheable
