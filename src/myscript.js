todoarr = [];
comparr = [];
$(document).ready(function () {
  $("#errormsg").hide();
  $("#update").hide();

  $("#addtodo").on("click", function () {
    var task = document.getElementById("addinput").value;
    if (task == "") {
      $("#errormsg").show();
      $("#errormsg").text("please enter a to do");
      $("#errormsg").css("color", "red");
    } else {
      todoarr.push(task);
      displaytodo(todoarr);
      document.getElementById("addinput").value = "";
    }
  });
});
function displaytodo(todoarr) {
  html = "<table>";
  for (let i = 0; i < todoarr.length; i++) {
    html +=
      '<tr><td><input type="checkbox" onclick="complete(' +
      parseInt([i]) +
      ')" ></td><td>' +
      todoarr[i] +
      '</td> <td> <a id="edit" href="#"  onclick="edit(' +
      parseInt([i]) +
      ')"> Edit </a></td><td> <a  href="#" onclick="remove(' +
      parseInt([i]) +
      ')"> Delete</a></td> </tr>';
  }
  html += "</table>";
  document.getElementById("showdiv").innerHTML = html;
}

function remove(v) {
  for (let i = 0; i < todoarr.length; i++) {
    if ([i] == v);

    todoarr.splice(i, 1);

    displaytodo(todoarr);
  }
  displaytodo(todoarr);
}
function edit(e) {
  $("#addtodo").hide();
  $("#update").show();
  for (let i = 0; i < todoarr.length; i++) {
    if ([i] == e) {
      console.log("e");
      $("#addinput").val(todoarr[i]);
    }
  }

  $("#update").on("click", function () {
    $("#addtodo").show();
    $("#update").hide();
    var task = document.getElementById("addinput").value;
    for (let i = 0; i < todoarr.length; i++) {
      if ([i] == e) {
        todoarr[i] = task;
      }
    }
    displaytodo(todoarr);
    document.getElementById("addinput").value = "";
  });
}
function complete(ch) {
  for (let i = 0; i < todoarr.length; i++) {
    if (ch == [i]) {
      comparr.push(todoarr[i]);
      todoarr.splice([i], 1);
      displaytodo(todoarr);
      displaycomplete(comparr);
    }
  }
}

function displaycomplete(comparr) {
  html = "<table>";
  for (let i = 0; i < comparr.length; i++) {
    html +=
      '<tr><td><input type="checkbox" onclick="redo(' +
      parseInt([i]) +
      ')" checked></td><td>' +
      comparr[i] +
      '</td> <td> <a id="edit" href="#"  onclick="edit(' +
      parseInt([i]) +
      ')"> Edit </a></td><td> <a  href="#" onclick="remove(' +
      parseInt([i]) +
      ')"> Delete</a></td> </tr>';
  }
  html += "</table>";
  document.getElementById("compdisp").innerHTML = html;
}
function redo(r){
    for (let i = 0; i < comparr.length; i++) {
        if (r == [i]) {
          todoarr.push(comparr[i]);
          comparr.splice([i], 1);
          displaycomplete(comparr);
          displaytodo(todoarr);
          
        }
      }
}