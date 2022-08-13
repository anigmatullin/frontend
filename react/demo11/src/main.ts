import store from './store/store';
import {add, remove} from './store/todoSlice';
import { v4 as uuidv4 } from 'uuid';

import {SimpleGreeting} from './components/Greeting';

import './style.css'


function useWrapper(tag: string)
{
  return function(text: string) {
    return `<${tag}>${text}</${tag}>`;
  }
}

function useWrapperWithId(tag: string)
{
  return function(id: string, text: string) {
    return `<${tag} data-id='${id}'>${text}</${tag}>`;
  }
}


function handleSubmit(ev: any)
{
    const value = ev.target.todo.value;
    ev.preventDefault();
    addTodo(value);
    console.log(value);
}


function handleClick(ev: any)
{
    const id = ev.target.dataset.id;
    console.log(id);
    removeTodo(id);
}


function render()
{
    const form = document.getElementById('frm')!;
    form.addEventListener('submit', handleSubmit);

    const app = document.querySelector<HTMLDivElement>('#app')!
    const wrapLi = useWrapperWithId('li');
    const wrapUl = useWrapper('ul');

    const state = store.getState();
    const arr = state.todo.map(item => wrapLi(item.id, item.text));
    const html = wrapUl(arr.join(''));

    app.innerHTML = html;

    const elements = document.querySelectorAll('li');
    if (elements.length) {
        elements.forEach(el => {
            el.addEventListener('click', handleClick);
        })
    }

}

function setHandlers(elements: any)
{
    const arr = Array.from(elements);
    arr.forEach(element => {
        const el = element as HTMLElement;
        console.log(el);
        el.addEventListener('click', handleClick);
    });
}

function addTodo(text: string)
{
    store.dispatch(add({
        id: uuidv4(),
        text,
        done: false,
    }))
}

function removeTodo(id: string)
{
    const action = remove( {id} );
    store.dispatch(action);
}


render();
store.subscribe(render);
