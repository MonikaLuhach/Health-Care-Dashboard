function TodoItem1() {

  let todoName = "Read Book";
  let todoDate = "5/4/2025";

  return(
    <div class="container">
      <div class="row kg-row">
        <div class="col-6 txt-col">{todoName}</div>
        <div class="col-4 txt-col">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;

// For version - 2 we use only use TodoItem file 
