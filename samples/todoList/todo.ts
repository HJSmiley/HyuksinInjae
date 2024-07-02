type Todo = { id: number; title: string; done: boolean };
let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// CRUD methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1); // index 위치에서 하나의 항목을 삭제한다는 의미
}

function completeTodo(index: number, todo: Todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo); // index 위치의 항목을 1개 삭제하고 새로운 todo 항목을 그 자리에 삽입
}

// business logic
function logFirstTodo(): Todo {
  // 할 일 목록에서 첫 번째 출력
  return todoItems[0];
}

function showCompleted(): Todo[] {
  // 배열의 각 요소에 대해 콜백함수의 결과가 true를 반환하는 요소들로 새로운 배열을 생성
  return todoItems.filter((item) => item.done);
}

function log(): void {
  console.log(todoItems);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 'addTodo()' 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  const item1 = {
    id: 4,
    title: "아이템 4",
    done: false,
  };
  addTodo(item1);

  addTodo({
    id: 5,
    title: "아이템 5",
    done: true,
  });
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
completeTodo(0, todoItems[0]);
log();
let completedTodoList = showCompleted();
console.log(completedTodoList);
deleteTodo(3);
log();

/**
 * [
  { id: 1, title: '안녕', done: false },
  { id: 2, title: '타입', done: false },
  { id: 3, title: '스크립트', done: false },
  { id: 4, title: '아이템 4', done: false },
  { id: 5, title: '아이템 5', done: true }
]
[
  { id: 1, title: '안녕', done: true },
  { id: 2, title: '타입', done: false },
  { id: 3, title: '스크립트', done: false },
  { id: 4, title: '아이템 4', done: false },
  { id: 5, title: '아이템 5', done: true }
]
[
  { id: 1, title: '안녕', done: true },
  { id: 5, title: '아이템 5', done: true }
]
[
  { id: 1, title: '안녕', done: true },
  { id: 2, title: '타입', done: false },
  { id: 3, title: '스크립트', done: false },
  { id: 5, title: '아이템 5', done: true }
]
 */
