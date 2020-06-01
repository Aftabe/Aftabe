(function doSomeThing(){
    let el = document.createElement('h1');
    el.textContent = 'Heading primary is created through javaScript';
    el.classList = 'el-style';

    document.getElementById('demo').appendChild(el);


    // create element
    let ul = document.createElement('ul');
    ul.textContent = el;

    localStorage.setItem('newVlue', ul);

}());

// text blog
(function(){
    let div = document.createElement('div');
    div.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat eum harum itaque ab fugit eos rem, tempora nesciunt tempore nihil magni ipsam voluptate odit reiciendis nostrum soluta voluptatum assumenda unde accusamus saepe dolorum eaque! Distinctio commodi veniam reprehenderit nulla!';
    div.classList = 'css-style';
    document.querySelector('.div').appendChild(div);
}());


let nL = document.createElement('ul');

nL.textContent = 'this is unorder list';
nL.classList = 'nl';

document.getElementById('new').appendChild(nL);
