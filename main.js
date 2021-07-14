student_name_array=[];

function submit(){
var display_name_array=[];
for(var j=1; j<=4; j++){
var name_student= document.getElementById("name_of_the_student_"+j).value;
console.log(name_student);
student_name_array.push(name_student);
}
var length_of_name=student_name_array.length;
console.log(length_of_name);
for(var k=0;k<length_of_name;k++){
    display_name_array.push("<h4> Name - "+student_name_array[k]+"</h4>");
    console.log(display_name_array);
}
document.getElementById("display_name_with_commas").innerHTML=display_name_array;
var remove_comma=display_name_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
student_name_array.sort();
console.log(student_name_array);
var display_sort_name_array=[];
var length_of_name=student_name_array.length;
console.log(length_of_name);
for(var k=0;k<length_of_name;k++){
    display_sort_name_array.push("<h4> Name - "+student_name_array[k]+"</h4>");
    console.log(display_sort_name_array);
}
var commas=display_sort_name_array.join(" ");
console.log(commas);
document.getElementById("display_name_witout_commas").innerHTML=commas;
}