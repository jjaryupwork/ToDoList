
function addListItem(){
	var text = $("#new-text").val();
	$("#todolist").append('<li><label><input type="checkbox"/><span>'+text+'</span></label><button class="delete">Delete</button></li>');
	$("#new-text").val('');
	
}
function deleteItem(eventArg) {
  var myElem = $(eventArg.target);
  if (myElem.hasClass('delete')) {
    eventArg.stopPropagation();
	  myElem.parent().remove();
  }
}

$(function() {
	$("#add").on('click', addListItem);
	$("#todolist").on('click', deleteItem);
});