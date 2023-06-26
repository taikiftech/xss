$("button").click(function(){
   const text = document.getElementById('text').value.toLowerCase();
    if(text.indexOf('/div')!= -1 | text.indexOf('/img')!= -1 | text.indexOf('/a')!= -1 | text.indexOf('/p')!= -1 | text.indexOf('/button')!= -1 | text.indexOf('/h')!= -1 | text.indexOf('/form')!= -1 | text.indexOf('</') == -1){
        alert('攻撃しないでください( *´艸｀)');
        return ;
    }
   $("ol").append("<li>"+text+"</li>");
});

// function xss_lv3(){
//     var text = document.getElementById('text').value;
//     text = document.createTextNode(text);
//     var li = document.createElement('li');
//     li.appendChild(text);

//     var ol = document.getElementById('ol');
//     ol.appendChild(li);
// }