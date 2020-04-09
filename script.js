(function doSomeThing(){
    let el = document.createElement('h1');
    el.textContent = 'Heading primary';
    el.classList = 'el-style';

    document.getElementById('demo').appendChild(el);


    // create element
    let ul = document.createElement('ul');
    ul.textContent = el;

    localStorage.setItem('newVlue', ul);

}());