let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');
let title3 = document.getElementById('title3');
let inputs = document.getElementById('inputs-main');
let table = document.getElementById('table-main');
let table2 = document.getElementById('table-main2');
let submit = document.getElementById('sumbit');
let btnshow = document.getElementById('btnshowall');
let done = document.getElementById('done-send');
let backbtn = document.getElementById('back2');
let mood = 'create';
// btn1
function show1() {
    backbtn.classList.remove('hide');
    btn1.classList.add('hide');
    btn2.classList.add('hide');
    btn3.classList.add('hide');
    inputs.classList.remove('hide');
    table.classList.remove('hide');
    title1.classList.remove('hide');
    title2.classList.remove('hide');
    title3.classList.remove('hide');
    table.classList.remove('hide');
    submit.classList.remove('hide');
};
// create 
let sdata;
if (localStorage.ofc != null) {
    sdata = JSON.parse(localStorage.ofc);
} else {
    sdata = [];
};
submit.onclick = function () {
    names = {
        title1: title1.value,
        title2: title2.value,
        title3: title3.value,
    }
    if (mood === 'create') {
        sdata.push(names);
    } else {
        sdata[i1] = names;
        mood = 'create';
        submit.innerHTML = 'Create';
    }
    localStorage.setItem('ofc', JSON.stringify(sdata));
    clear();
    showData();
};
// clear
function clear() {
    title1.value = '';
    title2.value = '';
    title3.value = '';
};
// read
let applys1job = JSON.parse(localStorage.applys1job);
function showData() {
    let table = '';
    for (let i = 0; i < sdata.length; i++) {
        table += `<tr>
                  <td>${i + 1}</td>  
                  <td>${sdata[i].title1}</td>
                  <td>${sdata[i].title2}</td>
                  <td>${sdata[i].title3}</td>
                  <td><button style="width:100%;height: 30px;" onclick="updateData(${i})" id="update">update</button></td>
                  <td><button style="width:100%;height: 30px;" onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>`;
    };
    document.getElementById('tbody').innerHTML = table;
}
showData();
// delete
function deleteData(i) {
    sdata.splice(i,1);
    localStorage.ofc = JSON.stringify(sdata);
    showData();
};
// update
function updateData(i) {
    title1.value = sdata[i].title1;
    title2.value = sdata[i].title2;
    title3.value = sdata[i].title3;
    submit.innerHTML = 'Update';
    mood = 'update';
    i1 = i;
    scroll({
        top: 0,
        behavior: 'smooth',
    });
};
// btn 2
function show2() {
    btn1.classList.add('hide');
    btn2.classList.add('hide');
    btn3.classList.add('hide');
    backbtn.classList.remove('hide');
    table2.classList.remove('hide');
    let table = '';
    for (let i = 0; i < applys1job.length; i++) {
        table += `<tr>
                  <td>${applys1job[i].select2}</td>
                  <td>${applys1job[i].myinp1}</td>  
                  <td>${applys1job[i].myinp2}</td>
                  <td>${applys1job[i].myinp3}</td>
                  <td>${applys1job[i].myinp4}</td>
                  <td><button style="width:100%;height: 30px;" onclick="deleteData2(${i})" id="delete">delete</button></td>
                </tr>`;
    };
    document.getElementById('tbody2').innerHTML = table;
};
// delete2
function deleteData2(i) {
    applys1job.splice(i, 1);
    localStorage.applys1job = JSON.stringify(applys1job);
    show2();
};
// show all button
function showall() {
    var password = prompt('enter the password ?');
    if (password == 536422) {
    btnshow.classList.add('hide');
    done.classList.add('hide');    
    btn1.classList.remove('hide');
    btn2.classList.remove('hide');
    btn3.classList.remove('hide');
    }else { 
    done.classList.remove('hide');
    btn1.classList.add('hide');
    btn2.classList.add('hide');
    btn3.classList.add('hide');
    };
};
// back button
function back1() {
    title1.classList.add('hide');
    title2.classList.add('hide');
    title3.classList.add('hide');
    table.classList.add('hide');    
    table2.classList.add('hide');
    submit.classList.add('hide');
    btn1.classList.remove('hide');
    btn2.classList.remove('hide');
    btn3.classList.remove('hide');
    backbtn.classList.add('hide');
};