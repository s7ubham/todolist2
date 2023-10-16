var pendingCheckList = [], completedCheckList = [], pending = [], completed = [], nextId = 0;

function toggleInput(){
    document.querySelector("#inputContainer").classList.toggle("active");
}

function addToPending(){
    let input = document.querySelector("#task");

    pending.push({
        id: nextId,
        task: task.value
    });

    input.value = "";
    nextId++;

    toggleInput();
    changePendingList();
}

function changePendingCheckList(event){
    console.log(pendingCheckList);
    pendingCheckList.push(parseInt(event.target.id.substring(2)));
    console.log(pendingCheckList);
}

function changeCompletedCheckList(event){
    console.log(completedCheckList);
    completedCheckList.push(parseInt(event.target.id.substring(2)));
    console.log(completedCheckList);
}

function changePendingList(){
    let list = document.querySelector("#pending");

    list.innerHTML = `<div class="listTitle">Pending</div>`;

    pending.forEach(item => {
        list.insertAdjacentHTML("beforeend",
        `<div class="listItem" id="li${item.id}">
            <input type="checkbox" name="" id="ch${item.id}" onclick="changePendingCheckList(event)">
            <p>${item.task}</p>
        </div>`)
    })
}

function changeCompletedList(){
    let list = document.querySelector("#completed");

    list.innerHTML = `<div class="listTitle">Completed</div>`;

    completed.forEach(item => {
        list.insertAdjacentHTML("beforeend",
        `<div class="listItem" id="li${item.id}">
            <input type="checkbox" name="" id="ch${item.id}" onclick="changeCompletedCheckList(event)">
            <p>${item.task}</p>
        </div>`)
    })
}

function movePending(){
    pendingCheckList.forEach(id => {
        let curr = {id: -1}
        for (let index = 0; index < pending.length; index++) {
            const element = pending[index];

            if(element.id === id){
                curr = element;
                pending.splice(index, 1);
                break;
            }
        }

        if(curr.id !== -1) completed.push(curr);
    })

    pendingCheckList = [];

    changePendingList();
    changeCompletedList();
}

function moveCompleted(){
    completedCheckList.forEach(id => {
        let curr = {id: -1}
        for (let index = 0; index < completed.length; index++) {
            const element = completed[index];

            if(element.id === id){
                curr = element;
                completed.splice(index, 1);
                break;
            }
        }

        if(curr.id !== -1) pending.push(curr);
    })

    completedCheckList = [];

    changePendingList();
    changeCompletedList();
}