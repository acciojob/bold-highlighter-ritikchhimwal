let strong = document.querySelectorAll("strong");

function highlight() {
    //Write your code here
	strong.forEach(ele=>{
		ele.style.color = "green";
	})


}


function return_normal() {
    //Write your code here
	strong.forEach(ele=>{
		ele.style.color = "black";
	})
    
}
