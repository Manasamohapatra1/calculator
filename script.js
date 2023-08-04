const buttons = document.querySelectorAll(".btn");
var expression = '';

Array.from (buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML== '='){
            expression=eval(expression);
            document.querySelector('input').value= expression;
        }
        else if(e.target.innerHTML== 'C'){
            expression='';
            document.querySelector('input').value= expression;
        }
        else{
        console.log(e.target)
        expression = expression+e.target.innerHTML;
        document.querySelector('input').value=expression;
        } 
        
    })
})

