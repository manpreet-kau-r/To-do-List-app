document.getElementById('add').addEventListener('click', function(){ 
	var value=document.getElementById('item').value;
	if(value)  
	{
		addItemTodo(value);
		document.getElementById('item').value='';
	}
},false);

function removeItem()
{
	var item=this.parentNode.parentNode;
	var parent=item.parentNode;
	parent.removeChild(item);
}

function completeItem()
{
	var item=this.parentNode.parentNode;
	var parent=item.parentNode;
	var id=parent.id;
	var target=(id=='todo')?document.getElementById('completed'):document.getElementById('todo');		//check if item is to be completed or uncompleted

	parent.removeChild(item);
	target.insertBefore(item,target.childNodes[0]);
}

function addItemTodo(text)
{
	var list=document.getElementById('todo');

	var item=document.createElement('li');
	item.textContent=text;

	var buttons=document.createElement('div');
	buttons.classList.add('buttons');

	var remove=document.createElement('button');
	remove.classList.add('remove');

	var delImg=document.createElement('img');
	delImg.setAttribute('src','img/delsel.jpg')
	remove.appendChild(delImg);

	//add click event to remove an item
	remove.addEventListener('click', removeItem);

	var add=document.createElement('button');
	add.classList.add('complete');

	var addImg=document.createElement('img');
	addImg.setAttribute('src','img/done.jpg')
	add.appendChild(addImg);

	//add click event for completing items
	add.addEventListener('click', completeItem);

	buttons.appendChild(remove);
	buttons.appendChild(add);
	item.appendChild(buttons);
	
	list.insertBefore(item,list.childNodes[0]);
}