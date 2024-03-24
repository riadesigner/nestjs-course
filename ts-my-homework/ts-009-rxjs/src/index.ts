
import { ajax } from 'rxjs/ajax';

const get_title = (url: string): HTMLElement => {    
    const h1 = document.createElement('h4');
    h1.innerHTML = `Адрес: ${url}`;
    return h1;
}
const get_list = (arr: {'title': string; 'url': string}[] ): HTMLElement => {    
    const ul = document.createElement('ul');            
    for(let i in arr){        
        const li = document.createElement('li');        
        const title = arr[i].title; 
        const url = arr[i].url;         
        li.innerHTML = `<a target="_blank" href="${url}">${title}</a>`;
        ul.appendChild(li);
    }
    return ul;
}

let search_str = 'ar+js';
let url = `https://api.github.com/search/repositories?q=${search_str}`; 
const ajax$ = ajax.getJSON(url);

ajax$.subscribe((json: any) => {
    console.log('asked github',json);
    const title = get_title(url);
    const b = document.querySelector('body');
    b?.appendChild(title);    
    const items = json['items'];
    if(items && items.length){
        const arr = items.map((items: any) => { return {title: items.name, url: items.html_url} } );
        const ul = get_list(arr);
        b?.appendChild(ul);
    }
});

let search_str2 = 'node';
let url2 = `https://gitlab.com/api/v4/projects?search=${search_str2}`; 
const ajax2$ = ajax.getJSON(url2);

ajax2$.subscribe(json=>{
    console.log('asked gitlab',json);
    const title = get_title(url2);
    const b = document.querySelector('body');
    b?.appendChild(title);    
    const items = json;
    if(items && Array.isArray(items) ){
        const arr = items.map((items: any) => { return {title: items.name_with_namespace, url: items.web_url} } );
        const ul = get_list(arr);
        b?.appendChild(ul);
    }else{
        const msg = get_title('ничего не найдено');
        b?.appendChild(msg);        
    }
});
