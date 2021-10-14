const menu = (() => {
    const container = document.querySelector('.container');
    const header = document.createElement('div');
    const logo = document.createElement('div');
    const options = document.createElement('div');
    const homeBut = document.createElement('button');
    const menuBut = document.createElement('button');
    const aboutBut = document.createElement('button');
    const menu = document.createElement('div')
    const buttonArray = [homeBut,menuBut,aboutBut];

    const load = () => {
        container.classList.add('menu');
        header.classList.add('header');
        logo.classList.add('logo');
        options.classList.add('options');
        homeBut.classList.add('button');
        menuBut.classList.add('button');
        menuBut.classList.add('active');
        aboutBut.classList.add('button');
        menu.classList.add('menu-content');

        menu.innerHTML=` <h1>Menu</h1>
            <div class="items"><h2>Rigatoni Calzolaio Pasta – $18.5</h2><p>Fresh ground sausage, San Marzano tomatoes, white wine, crushed red peppers & fresh herbs. Tossed with rigatoni pasta, topped with Pecorino-Romano Cheese.</p></div>
            <div class="items"><h2>Ravioli di Zucca Pasta – $19</h2><p>Pumpkin ravioli tossed with a brown butter cream sauce, with Prosciutto di Parma, roasted butternut squash & fresh herbs. Topped with dried cranberries & toasted pumpkin seeds.</p></div>
            <div class="items"><h2>Tagliatelle alla Bolognese Pasta  – $21</h2><p>Delicate golden noodles tossed with a truly classic Bolognese sauce made with pork, pancetta, sirloin, diced vegetables, tomatoes & a touch of cream. Topped with Parmigiano-Reggiano cheese.</p></div>
            <div class="items"><h2>Pollo con Zucca Risotto – $22</h2><p>Two (2) semi-boneless chicken breast marinated with honey, lemon, garlic & wine. Grilled & served over creamy butternut squash risotto and topped with a pan juice reduction.</p></div>
            <div class="items"><h2>Pollo alla Milanese – $16</h2><p>Extra thin chicken cutlets breaded with Tuscan crumbs. Pan-fried and finished with extra fine Tuscan olive oil & fresh lemon juice. Served with a side of San Marzano marinara.</p></div>
            <div class="items"><h2>Pesce Spada alla Griglia – $25</h2><p>Thick center cut domestic swordfish grilled, topped with baby shrimp & a lemon butter sauce.</p></div>
            <div class="items"><h2>Frutti di Mare (White or Red) – $26</h2><p>Shrimp, scallops, littlenecks, white fish & swordfish sautéed in a choice of white or red clam sauce. Served over a bed of linguine pasta.</p></div>
            <div class="items"><h2>Patate Dolci Fritte – $8</h2><p>Crispy sweet potato wedges tossed with a fresh sage & honey glaze.</p></div>
            <div class="items"><h2>Cavoletti di Bruxelles  – $10</h2><p>Oven-baked creamy, sliced Brussels sprouts topped with Tuscan breadcrumbs.</p></div>
            <div class="items"><h2>Risotto Bianco – $8</h2><p>Slow-cooked Arborio rice folded with Parmigiano-Reggiano cheese and cream.</p></div>
            <div class="items"><h2>Caeser – $9.5</h2><p>Romaine lettuce tossed in a homemade lemon Ceaser dressing with croutons & Parmigiano-Reggiano cheese.</p></div>
            <div class="items"><h2>Insalata Inverno  – $9.5</h2><p>Mixed greens, baby arugula, radicchio, candied walnuts, gorgonzola cheese, dried dates & cranberries, tossed in a cranberry vinaigrette and topped with shaved Parmigiano-Reggiano cheese.</p></div>
            `

            logo.textContent = "Siena";
        homeBut.textContent = "Home";
        menuBut.textContent = "Menu";
        aboutBut.textContent = "Contact Us";
        
            options.append(homeBut);
            options.append(menuBut);
            options.append(aboutBut);
            header.append(logo);
            header.append(options);
            container.append(header);
            container.append(menu);
    }
    const unload = () =>{
        container.classList.remove('menu');
        header.remove();
        menu.remove();
    }
    return{load,unload,buttonArray};
})();

export { menu };