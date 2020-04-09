(function doSomeThing(){
    let el = document.createElement('h1');
    el.textContent = 'Heading primary';
    el.classList = 'el-style';

    document.getElementById('demo').appendChild(el);

    localStorage.setItem('elVlue', el);

}());