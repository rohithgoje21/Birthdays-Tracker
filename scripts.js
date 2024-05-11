const addBirthdayBtn = document.querySelector("input[type=button]");
const form=document.querySelector("form");
const table=document.querySelector("table");
const body=document.querySelector("body");

body.onload=function(){
    let i=localStorage.length;
    for (let key in localStorage){
        if(i<=0)
            break;
        let value=localStorage.getItem(key).split(',');
        let data=`<tr><td>${key}</td><td>${value[0]}/${value[1]}</td></tr>`;
        table.innerHTML +=data;
        i-=1;
     }
}

addBirthdayBtn.addEventListener("click",function(){
    var name=document.querySelector("input[name=name]").value;
    var month=document.querySelector("input[name=month]").value;
    var date=document.querySelector("input[name=date]").value;
    addNewBDInTable(name,month,date);
    window.location.reload();
})

function addNewBDInTable(name,month,date){
    let data = `<tr><td>${name}</td><td>${month}/${date}</td></tr>`;
    table.innerHTML+=data;
    let monthdate=[month,date]
    localStorage.setItem(name,monthdate);
}

