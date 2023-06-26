$("button").click(function(){
    const text = document.getElementById('text').value;
    $("ol").append("<li>"+text+"</li>");
});