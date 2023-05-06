
let input=document.querySelector("input");
let addBtn=document.querySelector(".add");
let updateBtn=document.querySelector(".update")
let error=document.querySelector(".error")
let ul=document.querySelector("ul")
let array=[]
let arrayIndex=""


addBtn.addEventListener("click",()=>{
    if(!Boolean(input.value)){
        error.innerHTML="please inter your message"
    }else{
        error.innerHTML="";
        array.push(input.value);
        input.value=""
        newFun()
    }
});

const newFun=()=>{
    ul.innerHTML=""
    array.map((inputItem)=>{
        ul.innerHTML+=`<li>${inputItem} <button class="edit">Edit</button> <button class="delet">Delet</button></li>`
    });
    //delet button
    const delet=document.querySelectorAll(".delet");
    const deletBtn=Array.from(delet);
    deletBtn.map((delItem,index)=>{
        delItem.addEventListener("click",()=>{
            array.splice(index,1);
            newFun()
        })
    });

    //edit button
    const edit=document.querySelectorAll(".edit");
    const editBtn=Array.from(edit);
    editBtn.map((editItem,idx)=>{
        editItem.addEventListener("click",()=>{
            input.focus();
            input.value=array[idx];
            arrayIndex=idx
            updateBtn.style.display="inline-block"
            newFun()
            
        })
    });
    //update button

}
updateBtn.addEventListener("click",()=>{
    if(!Boolean(input.value)){
        error.innerHTML="please select something"
    }else{
    error.innerHTML=""
    array[arrayIndex]=input.value;
    input.value=""
    newFun()
    }
})