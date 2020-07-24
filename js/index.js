//DOM Elements
var hours_num = document.getElementById("hours-num")
var classes_num = document.getElementById("classes-num")
var students_num = document.getElementById("students-num")

setTimeout(function () {hours_num.innerHTML = 120},500)
setTimeout(function () {classes_num.innerHTML = 96},500)
setTimeout(function () {students_num.innerHTML = 60},500)

/*var students_ctr = 0
var students_max = 99

var classes_ctr = 0
var classes_max = 80

var hours_ctr = 0
var hours_max = 96

function count () {
  var flag = false
  if (students_ctr < students_max) {
    flag = true
    students_ctr++;
    var students_string = students_ctr.toString()
    if (students_string.length == 1) {
      students_string = "0" + students_string
    }
    students_num.innerHTML = students_string
  }
  if (classes_ctr < classes_max) {
    flag = true
    classes_ctr++;
    var classes_string = classes_ctr.toString()
    if (classes_string.length == 1) {
      classes_string = "0" + classes_string
    }
    classes_num.innerHTML = classes_string
  }
  if (hours_ctr < hours_max) {
    flag = true
    hours_ctr++;
    var hours_string = hours_ctr.toString()
    if (hours_string.length == 1) {
      hours_string = "0" + hours_string
    }
    hours_num.innerHTML = hours_string
  }
  if (flag) {
    setTimeout(count,50)
  }
}

count()*/