var todoItems;
// api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}
// CRUD methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function deleteTodo(index) {
    todoItems.splice(index, 1); // index 위치에서 하나의 항목을 삭제한다는 의미
}
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo); // index 위치의 항목을 1개 삭제하고 새로운 todo 항목을 그 자리에 삽입
}
// business logic
function logFirstTodo() {
    // 할 일 목록에서 첫 번째 출력
    return todoItems[0];
}
function showCompleted() {
    // 배열의 각 요소에 대해 콜백함수의 결과가 true를 반환하는 요소들로 새로운 배열을 생성
    return todoItems.filter(function (item) { return item.done; });
}
function log() {
    console.log(todoItems);
}
// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 'addTodo()' 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
    var item1 = {
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
var completedTodoList = showCompleted();
console.log(completedTodoList);
deleteTodo(3);
log();
