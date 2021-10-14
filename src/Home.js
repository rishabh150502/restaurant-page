const home = (() => {
    const container = document.querySelector('.container');
    const header = document.createElement('div');
    const logo = document.createElement('div');
    const options = document.createElement('div');
    const homeBut = document.createElement('button');
    const menuBut = document.createElement('button');
    const aboutBut = document.createElement('button');
    const main = document.createElement('div');
    const welcome = document.createElement('p');
    const info = document.createElement('p');
    const buttonArray = [homeBut,menuBut,aboutBut];
    const load = () => {
        container.classList.add('home');
        header.classList.add('header');
        logo.classList.add('logo');
        options.classList.add('options');
        homeBut.classList.add('button');
        homeBut.classList.add('active');
        menuBut.classList.add('button');
        aboutBut.classList.add('button');
        main.classList.add('main');
        welcome.classList.add('welcome');
        info.classList.add('info');

        logo.textContent = "Siena";
        homeBut.textContent = "Home";
        menuBut.textContent = "Menu";
        aboutBut.textContent = "Contact Us";
        welcome.textContent = "Welcome To Siena";
        info.textContent = "Located in the heart of Providence’s Federal Hill, Siena Restaurant was opened in 2005 and features authentic Tuscan cuisine in a warm and lively atmosphere.";
        
        main.append(welcome);
        main.append(info);
        options.append(homeBut);
        options.append(menuBut);
        options.append(aboutBut);
        header.append(logo);
        header.append(options);
        container.append(header);
        container.append(main);
    }
    const unload = () =>{
        container.classList.remove('home');
        header.remove();
        main.remove();
    }
    return { load,unload,buttonArray};
})();

export { home };