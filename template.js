(function(){
	var ex={
		title:"Welcome Template Application",
		body:"This is the first template application,let's check out!!!"
	}

	var head=document.getElementById('template'),
		paragraph=document.getElementById('moudle'),
		key,
		regex,
		value;
	for(key in ex){
		regex= new RegExp("{{"+key+"}}","g");
		value=ex[key];
		head.innerHTML=head.innerHTML.replace(regex,value);
		paragraph.innerHTML=paragraph.innerHTML.replace(regex,value);
		temlll=temlll.replace(regex,value);
	}
	alert(temlll);
	console.log(temlll);

	console.log(head.innerHTML);

}());