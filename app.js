$("#updatebtn").hide();
var todo = [];
var comptodo =[];
$("#addbtn").click(()=>{
    var value = $("#new-task").val()
    console.log(value);
    todo.push(value);
    console.log(todo);
    display();
    $("#new-task").val("");
})
function display(){
    var list = ""
    todo.forEach((element,index) => {
    var item =`<li>
    <input type="checkbox" class="chk" id="chk_${index}"/>
    <label>${element}</label>
    <button class="edit" id="edit_${index}" class="edit">Edit</button>
    <button class="delete" id="del_${index}" class="del">Delete</button>
    </li>`;
    list += item;
});
$("#incomplete-tasks").html(list);
};
$(document).on("click" , ".edit", function(){
    var classid = this.id;
    var id = classid.split("_")
    var i =id[1]
    $("#todoindex").val(i)
    var data = todo[i]

    $("#new-task").val(data);
    $("#addbtn").hide();
    $("#updatebtn").show();
});

$("#updatebtn").click(()=>{
    var id = $("#todoindex").val();
    console.log(id);
    var value = $("#new-task").val();
    todo[id]=value;
    console.log(todo);
    display();
    $("#addbtn").show();
    $("#updatebtn").hide();
    $("#new-task").val("");
})

$(document).on("click" , ".delete", function(){
    console.log(this.id);
    var classid = this.id;
    var id = classid.split("_")
    console.log(id[1]);
    todo.splice(id[1],1)
    display();
})
$(document).on("click" , ".chk", function(){
    console.log(this.id);
    var classid = this.id;
    var id = classid.split("_")
    console.log(id[1]);
    comptodo.push(todo[id[1]])
    console.log(comptodo);
    todo.splice(id[1],1)
    display();
    compdisplay();
});
function compdisplay(){
    var list = ""
    comptodo.forEach((element,index) => {
    var item =`<li>
    <label>${element}</label>
    <button class="comdelete" id="comdel_${index}" class="del">Delete</button>
    </li>`;
    list += item;
});
$("#completed-tasks").html(list);
};

$(document).on("click" , ".comdelete", function(){
    console.log(this.id);
    var classid = this.id;
    var id = classid.split("_")
    console.log(id[1]);
    comptodo.splice(id[1],1)
    compdisplay();
})