var body = {
      setColor : function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var links = {
  setColor : function(color){
  var i = 0;
  var alist = document.querySelectorAll('a');
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}
}
function nightDayHandler(self){
  if(self.value === "야간모드"){
    body.setColor('white');
    body.setBackgroundColor('black');
    links.setColor('powderblue');
    self.value = "주간모드";
  } else {
    body.setColor('black');
    body.setBackgroundColor('white');
    links.setColor('green');
    self.value = "야간모드";
  }
}
