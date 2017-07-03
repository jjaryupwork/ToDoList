function addListItem(){
	var text = $("#new-text").val();
	$("#todolist").append('<li><input type="checkbox" class="done"/><label>'+text+' </label><button class="delete">Delete</button></li>');
	$("#new-text").val('');
	
}
function deleteItem(){
	$(this).parent().remove();
}


$(function(){
	$("#add").on('click', addListItem);
	
	$(document).on('click', '.delete', deleteItem);
	
});
