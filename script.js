/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const items = document.querySelector('.items');

function addItem() {
    const itemText = input.value;

    const listItem = document.createElement('div');

    listItem.textContent = itemText;

    listItem.addEventListener('click', function() {
        listItem.classList.toggle('done');
    })

    if (itemText != '') {
        items.append(listItem);
    }

    input.value = '';

}

function sendByKey(event) {
    if (event.key == 'Enter') {
        addItem();
    }
}

input.addEventListener('keydown', sendByKey);