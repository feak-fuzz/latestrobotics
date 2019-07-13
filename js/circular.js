let temp = new TimelineMax({paused:true});

var buttonclick = document.querySelector('.showcont');
var closeit = document.querySelector('.closecont');

temp.addLabel('together')

temp
    .to('.imagecard',1.5,{opacity:0},'together')
    .to('.showbutton',1,{opacity:0},'together')
    .to('.content',2,{opacity:1},'togetherS')
    .to('.closebutton',1.1,{opacity:1})



buttonclick.onclick = function() {
  temp.play();
}

closeit.onclick = function() {
  temp.reverse();
}
