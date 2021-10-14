(()=>{"use strict";const e=(()=>{const e=document.querySelector(".container"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("button"),d=document.createElement("button"),o=document.createElement("button"),i=document.createElement("div"),c=document.createElement("p"),r=document.createElement("p");return{load:()=>{e.classList.add("home"),t.classList.add("header"),a.classList.add("logo"),n.classList.add("options"),s.classList.add("button"),s.classList.add("active"),d.classList.add("button"),o.classList.add("button"),i.classList.add("main"),c.classList.add("welcome"),r.classList.add("info"),a.textContent="Siena",s.textContent="Home",d.textContent="Menu",o.textContent="Contact Us",c.textContent="Welcome To Siena",r.textContent="Located in the heart of Providence’s Federal Hill, Siena Restaurant was opened in 2005 and features authentic Tuscan cuisine in a warm and lively atmosphere.",i.append(c),i.append(r),n.append(s),n.append(d),n.append(o),t.append(a),t.append(n),e.append(t),e.append(i)},unload:()=>{e.classList.remove("home"),t.remove(),i.remove()},buttonArray:[s,d,o]}})(),t=(()=>{const e=document.querySelector(".container"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("button"),d=document.createElement("button"),o=document.createElement("button"),i=document.createElement("div");return{load:()=>{e.classList.add("menu"),t.classList.add("header"),a.classList.add("logo"),n.classList.add("options"),s.classList.add("button"),d.classList.add("button"),d.classList.add("active"),o.classList.add("button"),i.classList.add("menu-content"),i.innerHTML=' <h1>Menu</h1>\n            <div class="items"><h2>Rigatoni Calzolaio Pasta – $18.5</h2><p>Fresh ground sausage, San Marzano tomatoes, white wine, crushed red peppers & fresh herbs. Tossed with rigatoni pasta, topped with Pecorino-Romano Cheese.</p></div>\n            <div class="items"><h2>Ravioli di Zucca Pasta – $19</h2><p>Pumpkin ravioli tossed with a brown butter cream sauce, with Prosciutto di Parma, roasted butternut squash & fresh herbs. Topped with dried cranberries & toasted pumpkin seeds.</p></div>\n            <div class="items"><h2>Tagliatelle alla Bolognese Pasta  – $21</h2><p>Delicate golden noodles tossed with a truly classic Bolognese sauce made with pork, pancetta, sirloin, diced vegetables, tomatoes & a touch of cream. Topped with Parmigiano-Reggiano cheese.</p></div>\n            <div class="items"><h2>Pollo con Zucca Risotto – $22</h2><p>Two (2) semi-boneless chicken breast marinated with honey, lemon, garlic & wine. Grilled & served over creamy butternut squash risotto and topped with a pan juice reduction.</p></div>\n            <div class="items"><h2>Pollo alla Milanese – $16</h2><p>Extra thin chicken cutlets breaded with Tuscan crumbs. Pan-fried and finished with extra fine Tuscan olive oil & fresh lemon juice. Served with a side of San Marzano marinara.</p></div>\n            <div class="items"><h2>Pesce Spada alla Griglia – $25</h2><p>Thick center cut domestic swordfish grilled, topped with baby shrimp & a lemon butter sauce.</p></div>\n            <div class="items"><h2>Frutti di Mare (White or Red) – $26</h2><p>Shrimp, scallops, littlenecks, white fish & swordfish sautéed in a choice of white or red clam sauce. Served over a bed of linguine pasta.</p></div>\n            <div class="items"><h2>Patate Dolci Fritte – $8</h2><p>Crispy sweet potato wedges tossed with a fresh sage & honey glaze.</p></div>\n            <div class="items"><h2>Cavoletti di Bruxelles  – $10</h2><p>Oven-baked creamy, sliced Brussels sprouts topped with Tuscan breadcrumbs.</p></div>\n            <div class="items"><h2>Risotto Bianco – $8</h2><p>Slow-cooked Arborio rice folded with Parmigiano-Reggiano cheese and cream.</p></div>\n            <div class="items"><h2>Caeser – $9.5</h2><p>Romaine lettuce tossed in a homemade lemon Ceaser dressing with croutons & Parmigiano-Reggiano cheese.</p></div>\n            <div class="items"><h2>Insalata Inverno  – $9.5</h2><p>Mixed greens, baby arugula, radicchio, candied walnuts, gorgonzola cheese, dried dates & cranberries, tossed in a cranberry vinaigrette and topped with shaved Parmigiano-Reggiano cheese.</p></div>\n            ',a.textContent="Siena",s.textContent="Home",d.textContent="Menu",o.textContent="Contact Us",n.append(s),n.append(d),n.append(o),t.append(a),t.append(n),e.append(t),e.append(i)},unload:()=>{e.classList.remove("menu"),t.remove(),i.remove()},buttonArray:[s,d,o]}})(),a=(()=>{const e=document.querySelector(".container"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("button"),d=document.createElement("button"),o=document.createElement("button"),i=document.createElement("div");return{load:()=>{e.classList.add("about"),t.classList.add("header"),a.classList.add("logo"),n.classList.add("options"),s.classList.add("button"),d.classList.add("button"),o.classList.add("button"),o.classList.add("active"),i.classList.add("contact-content"),a.textContent="Siena",s.textContent="Home",d.textContent="Menu",o.textContent="Contact Us",i.innerHTML="\n        <h2>Siena Cucina • Enoteca | OPEN for Inside Dining & Take Out</h2>\n        <p>5600 Post Road</p>\n         <p>East Greenwich, RI 02818</p>\n          <p>P: 401-885-8850</p>\n          <p>F: 401-885-8858</p>\n          ",n.append(s),n.append(d),n.append(o),t.append(a),t.append(n),e.append(t),e.append(i)},unload:()=>{e.classList.remove("about"),t.remove(),i.remove()},buttonArray:[s,d,o]}})();let n=e.buttonArray,s=t.buttonArray,d=a.buttonArray;window.onload=t=>{e.load()},n[1].addEventListener("click",(function(){e.unload(),t.load()})),n[2].addEventListener("click",(function(){e.unload(),a.load()})),s[0].addEventListener("click",(function(){t.unload(),e.load()})),s[2].addEventListener("click",(function(){t.unload(),a.load()})),d[0].addEventListener("click",(function(){a.unload(),e.load()})),d[1].addEventListener("click",(function(){a.unload(),t.load()}))})();