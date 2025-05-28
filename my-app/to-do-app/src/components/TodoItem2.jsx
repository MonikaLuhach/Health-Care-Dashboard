function TodoItem2() {

  let todoName = "Complete React";
  let todoDate = "10/4/2025";

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
export default TodoItem2;


// Version 2 
