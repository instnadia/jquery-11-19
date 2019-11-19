//vanilla js

document.getElementById("fadeout").addEventListener("click", function() {
  var target = document.getElementById("fadeout");
  var fadeeffect = setInterval(function() {
    if (!target.style.opacity) {
      target.style.opacity = 1;
    } else if (target.style.opacity > 0) {
      target.style.opacity -= 0.1;
    } else {
      clearInterval(fadeeffect);
    }
  }, 100);
});

//setInterval(function(){ alert("Hello"); }, 3000);

$("#jfadeout").click(function() {
  // Fade out the current element
  $(this).fadeOut();
});

var todolist = [
  "clean house",
  "walk the dog",
  "do homework",
  "cook dinner",
  "call mom",
  "prepare for exam"
];

var i = 0;
function addtodo() {
  var todo = document.getElementById("todo");
  var ul = document.createElement("ul");
  var li = document.createElement("li");

  todo.appendChild(ul);
  if (i < todolist.length) {
    li.innerHTML=`${todolist[i]}`
    ul.appendChild(li);
    i++;
  } else {
    li.innerHTML="Nothing more!"
    ul.appendChild(li);
    document.getElementById("btn").disabled = true;  }
}

var ji=0;
$('#jbtn').click(function(){
    if($('#jtodo').find('ul')){
        var list = $('#jtodo').append('<ul>');
    }
    if(ji<todolist.length){
        list.append(`<li>${todolist[ji]}</li>`);
        ji++;
    }else{
        list.append("<li>nothing more!</li>")
        $("#jbtn").prop('disabled', true)
        list.append('</ul>')
    }

})