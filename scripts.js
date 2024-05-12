const addBirthdayBtn = document.querySelector("input[type=button]");
const form = document.querySelector("form");
const table = document.querySelector("table");
const body = document.querySelector("body");

body.onload = function () {
    let i = localStorage.length;
    for (let key in localStorage) {
        if (i <= 0)
            break;
        let value = localStorage.getItem(key).split(',');
        let data = `<tr><td>${key}</td><td>${value[0]}/${value[1]}</td><td><button id=${key} onclick=editRow("${key}",${value[0]},${value[1]})>Edit</button><button onclick=updateRow("${key}")>Update</button></tr>`;
        table.innerHTML += data;
        i -= 1;
    }
}

function editRow(id, month, date) {
    let row = document.querySelector(`#${id}`);
    let parent = row.parentNode.parentNode;
    parent.childNodes[0].innerHTML = `<input name="updatename" value=${id} type="text"></input>`
    parent.childNodes[1].innerHTML = `<input name="updatemonth" value=${month} type="number" min="1" max="12">`
    parent.childNodes[1].innerHTML += `<input name="updatedate" value=${date} type="number" min="1" max="31">`
}

function updateRow(prevName) {
    let name = document.querySelector("input[name=updatename]").value;
    let month = document.querySelector("input[name=updatemonth]").value;
    let date = document.querySelector("input[name=updatedate]").value;
    if ((name.length > 0) && (month >= 1 && month <= 12) && (date >= 1 && date <= 31)) {
        let data = `<tr><td>${name}</td><td>${month}/${date}</td></tr>`;
        table.innerHTML += data;
        let monthdate = [month, date]
        localStorage.removeItem(prevName);
        localStorage.setItem(name, monthdate);
        window.location.reload();
    }
}

addBirthdayBtn.addEventListener("click", function () {
    var name = document.querySelector("input[name=name]").value;
    var month = document.querySelector("input[name=month]").value;
    var date = document.querySelector("input[name=date]").value;
    addNewBDInTable(name, month, date);
    window.location.reload();
})

function addNewBDInTable(name, month, date) {
    if ((name.length > 0) && (month >= 1 && month <= 12) && (date >= 1 && date <= 31)) {
        let data = `<tr><td>${name}</td><td>${month}/${date}</td></tr>`;
        table.innerHTML += data;
        let monthdate = [month, date]
        localStorage.setItem(name, monthdate);
    }
}


