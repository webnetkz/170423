function loader() {
    let loader = document.querySelector('#loader');
        loader.style.display = 'grid';

    // запретить скроллинг на время выполнения функции
    const body = document.body;
    const scrollY = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.overflow = 'hidden';

    setTimeout(() => {
        loader.style.display = 'none';
        body.style.position = '';
        body.style.top = '';
        body.style.overflow = '';
        window.scrollTo(0, scrollY);
      }, 3000);
}
export { loader };