const tasks = document.querySelector('.tasks');
const list = document.querySelector('.list');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.addTask__form');


const getHeight = elem => {
    return elem.children[0].offsetHeight;
}

document.addEventListener('click', e => {
    const target = e.target;
    // раскрытие/закрытие таски
    if (target.closest('.item__open')) {
        const li = target.closest('.item');
        const btn = li.querySelector('.item__open');
        if (li.classList.contains('item-active')) {
            li.classList.remove('item-active');
            li.children[1].style.maxHeight = '0px';
            btn.classList.remove('item__open--active');

        } else {
            li.classList.add('item-active');
            li.children[1].style.maxHeight = `${getHeight(li.children[1])}px`;
            btn.classList.add('item__open--active');
        }
    }
    // удаление таски
    if (target.closest('.item__delete')) {

        deleteTodo(target.closest('.item__delete').dataset.id)
            .then(response => {
                if (response.ok){
                    render();
                }
            })
    }
    // таска выполнена
    if (target.closest('.item__done')){
        done(target.closest('.item__done').dataset.id)
        .then(response => {
            if (response.ok){
                render();
            }
        })
    }

    // открытие модального окна
    if (target.classList.contains('add__task')){
        overlay.classList.add('overlay--active');
        disableScroll();
    }
    // закрытие модалки
    if (target.classList.contains('addTask__close')){
        closeModal();
    }
    // закрытие модалки
    if (target.classList.contains('overlay')){
        closeModal();
    }
    // добавление новой таски
    if (target.classList.contains('addTask__btn')){
        add(e).then(response => {
            if (response.ok){
                render();
                closeModal();
            }
        })
    }



})


// рендер тасков
async function render() {
    list.innerHTML = '';
    const data = await getData();
    data.forEach(item => {
        const li = document.createElement('li');
        const done = item.finish ? 'finish' : ''
        li.className = 'list__item item';
        li.innerHTML = `
            <div class="item__top">
                <div class="item__status">
                    <button data-id="${item.id}" class="item__done ${done}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="m9.877 15.485-4.95-4.95a1 1 0 1 0-1.414 1.415l5.657 5.657a.997.997 0 0 0 1.414 0l9.9-9.9a1 1 0 1 0-1.415-1.414l-9.192 9.192z"/></svg>
                    </button>
                </div>
                <div class="item__info">
                    <h3 class="item__title">${item.title}</h3>
                </div>
                <div class="item__control">
                    <button class="item__open">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><g fill="#b4b4b4"><path d="M16.947 1.008H5.019L0 5.498v17.594h13.706v-1.58H1.777V7.218h5.149v-4.63h8.243v4.824h1.778z"/><path d="M7.71 17.67h8.228v4.803l8.162-6.251-8.162-6.254v4.806H7.71z"/></g></svg>
                    </button>
                    <button data-id="${item.id}" class="item__delete" ${item.finish ? 'disabled' : ''} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"/></svg>
                    </button>
                </div>
            </div>

            <div class="item__bottom">
                <p class="item__descroption" >${item.description}</p>
            </div>
        `;

        list.insertAdjacentElement('beforeend', li);
    })
}

// получение данных с сервера
async function getData() {
    return await fetch('./content.php')
        .then(response => response.json())
        .then(data => JSON.parse(data))
}

// удаление таски
function deleteTodo(id) {
    const str = `./delete.php?id=${id}`;
    
    return fetch(str)
}
// таска выполнена
const done = (id) => {
    const str = `./update.php?id=${id}`;
    return fetch(str)
}
// добавление новой таски
const add = e => {
    e.preventDefault();
    const formData = new FormData(form);

    return fetch('./add.php', {
        method: 'POST',
        body: formData
    })
}
// закрытие модалки + сброс формы
const closeModal = () => {
    enableScroll();
    overlay.classList.remove('overlay--active');
    form.reset();
}


render();


document.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(e.target);

    fetch('./content.php', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(response => {
        if (response.ok) {
            getData();
        }
    })


})


// отключение и включение скрола

const disableScroll = () => {
    const scrollWidth = window.innerWidth - document.body.offsetWidth;
    document.body.dataset.scrollY = window.scrollY;
    document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        height: 100vh;
        top: -${window.scrollY}px;
        left: 0;
        width: 100%;
        padding-right: ${scrollWidth}px;
    `
}

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dataset.scrollY
    })
}



