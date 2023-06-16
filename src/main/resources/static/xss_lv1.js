//<, >, ', "をサニタイズする
//これでdivとかも使えなくなる

//&ltと&gt, &#039, &quotをサニタイズする
//これでdivとか使えるようになる

function xss_lv1(){
    var text = document.getElementById('text').value;
    var title = document.getElementById('title');


    //ここで正規表現使ってreplaceを呼ぶ
    text = text.replace("<", "&amp;lt");
    text = text.replace(">", "&amp;gt");
    text = text.replace("\"", "&amp;quot");
    text = text.replace("\'", "&amp;#039");
    
    text = text.replace("&lt", "<");
    text = text.replace("&gt", ">");
    text = text.replace("&quot", "\"");
    text = text.replace("&#039", "\'");
    text = text.replace("&lt", "<");
    text = text.replace("&gt", ">");
    text = text.replace("&quot", "\"");
    text = text.replace("&#039", "\'");
    text = text.replace("&lt", "<");
    text = text.replace("&gt", ">");
    text = text.replace("&quot", "\"");
    text = text.replace("&#039", "\'");
    text = text.replace("&lt", "<");
    text = text.replace("&gt", ">");
    text = text.replace("&quot", "\"");
    text = text.replace("&#039", "\'");

    title.innerHTML = text;

}