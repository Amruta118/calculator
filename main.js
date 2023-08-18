let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{        //arrow for calling
        if(e.target.innerHTML == '='){
            string = eval(string);                 // for math operation eval js function
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'c'){
            string = ""                           //clear ac
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "D"){
            string = string.substring(0, string.length-1);      //for delete substring
            document.querySelector('input').value = string;
        }
        else{

       
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    })
})