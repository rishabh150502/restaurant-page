const about = (()=>{
    const container = document.querySelector('.container');
    const header = document.createElement('div');
    const logo = document.createElement('div');
    const options = document.createElement('div');
    const homeBut = document.createElement('button');
    const menuBut = document.createElement('button');
    const aboutBut = document.createElement('button');
    const contact = document.createElement('div');
    const buttonArray = [homeBut,menuBut,aboutBut];
    const load = () => {
        container.classList.add('about');
        header.classList.add('header');
        logo.classList.add('logo');
        options.classList.add('options');
        homeBut.classList.add('button');
        menuBut.classList.add('button');
        aboutBut.classList.add('button');
        aboutBut.classList.add('active');
        contact.classList.add('contact-content')

        logo.textContent = "Siena";
        homeBut.textContent = "Home";
        menuBut.textContent = "Menu";
        aboutBut.textContent = "Contact Us";
        contact.innerHTML=`
        <h2>Siena Cucina • Enoteca | OPEN for Inside Dining & Take Out</h2>
        <p>5600 Post Road</p>
         <p>East Greenwich, RI 02818</p>
          <p>P: 401-885-8850</p>
          <p>F: 401-885-8858</p>
          `;

        options.append(homeBut);
        options.append(menuBut);
        options.append(aboutBut);
        header.append(logo);
        header.append(options);
        container.append(header);
        container.append(contact);
    }
    const unload = () =>{
        container.classList.remove('about');
        header.remove();
        contact.remove();
    }
    return { load,unload,buttonArray};
})();

export { about };