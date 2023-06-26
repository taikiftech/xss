

function xss_lv2(){
    const last = document.getElementById('last').value.toLowerCase();
    const middle = document.getElementById('middle').value.toLowerCase();
    const first = document.getElementById('first').value.toLowerCase();
    var title = document.getElementById('title');

    if (last.indexOf('script')!= -1 | -1 != last.indexOf('div')| -1 != last.indexOf('button')| -1 != last.indexOf('a')| -1 != last.indexOf('p')| -1 != last.indexOf('h')| -1 != last.indexOf('img')| -1 != last.indexOf('onerror')){
        alert('攻撃しないでください( *´艸｀)');
        return ;
    }else if (-1 != middle.indexOf('script') | -1 != middle.indexOf('div') | -1 != last.indexOf('button')| -1 != last.indexOf('a')| -1 != last.indexOf('p')| -1 != last.indexOf('h')| -1 != last.indexOf('img')| -1 != last.indexOf('onerror')){
        alert('攻撃しないでください( *´艸｀)');
        return ;
    }else if (-1 != first.indexOf('script') | -1 != first.indexOf('div')| -1 != last.indexOf('button')| -1 != last.indexOf('a')| -1 != last.indexOf('p')| -1 != last.indexOf('h')| -1 != last.indexOf('img')| -1 != last.indexOf('onerror')){
        alert('攻撃しないでください( *´艸｀)');
        return ;
    }else{
        title.innerHTML = last+middle+first+"さんですね、ようこそ！";
    }

}