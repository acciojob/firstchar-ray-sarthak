function firstChar(text) {
  let frstchar="";
	for(let i=0;i<text.length;i++){
		if(text.charAt(i)!=" "){
			frstchar=text.charAt(i);
			break;
		}
	}
	return frstchar;
}

// Do not change the code below

  const text = prompt("Enter text:");
alert(firstChar(text));
