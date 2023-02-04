alert("lets check");
const addBtn=document.querySelector('#addBtn');
const main=document.querySelector('#main');
addBtn.addEventListener("click",function(){
    addNote();
})
const addNote=()=>{
const note=document.createElement("div");
note.classList.add('note');
note.innerHTML=` <div class="tool"> 
<i class=" trash fa-solid fa-trash"></i>
<i class="save fa-solid fa-floppy-disk"></i>
</div>
<textarea > </textarea>
`;
main.appendChild(note);
note.querySelector('.trash').addEventListener('click',function(){
    note.remove();
 
}
)
note.querySelector('.save').addEventListener('click',function(){savenotes()})
} 
