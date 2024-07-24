const PANEL_SIZE = [300, 200];

function setupHTML(repos){
  main = new Main();
  noCanvas();

  let hgroup = new HorzGroup(main)
  repos.forEach(r => {
    let rd = r.details();
    let p = new Panel(hgroup, ['out' ,'round'], PANEL_SIZE[0], PANEL_SIZE[1]);
    let card = new Card(p, PANEL_SIZE[0], PANEL_SIZE[1], rd.link, rd.image, [rd.title, rd.description]);
  });
  
  let bothGroup = new HorzGroup(main);
  
  let button1 = new Button(bothGroup, ['#FFFFFF', '#AACCFF'], 'https://www.linkedin.com/in/justin-l-aa5259130/', 'assets/icons/linkedin.png', 'LinkedIn');
  let button2 = new Button(bothGroup, ['#FFFFFF', '#AAAAAA'], 'https://github.com/juicetinliu', 'assets/icons/github.png', 'Github');

  main.createHTML();
}


class Card extends Webponent{
  constructor(parent, w, h, func = null, path = null, hovertxt = ['', '']){
    super('card', parent);
    this.path = path;
    this.w = w;
    this.h = h;
    this.func = func;
    this.htxt = hovertxt;
  }
  
  genHTML(){

    this.HTML = createDiv();
    this.HTML.parent(this.parent.HTML);
    this.HTML.class('card');
    this.HTML.style(`width: ${this.w}px`);
    this.HTML.style(`height: ${this.h}px`);
    this.HTML.style('border-radius: 5px;')
    this.HTML.style('overflow: hidden');
    this.HTML.style('position: relative');

    let textdiv = createDiv();
    textdiv.parent(this.HTML);
    textdiv.class('cardtxtwrap');

    let title = createDiv(this.htxt[0]);
    title.parent(textdiv);
    title.class('cardtxt');
    title.style('font-size: 20px');

    let description = createDiv(this.htxt[1]);
    description.parent(textdiv);
    description.class('cardtxt');
    description.style('font-size: 14px');
            
    let imgInteraction;
    imgInteraction = createA(this.func, '', '_blank');
    imgInteraction.class('cardlink');
    imgInteraction.parent(this.HTML);
    imgInteraction.attribute('title', `${this.htxt[0]}: ${this.htxt[1]}`);
    imgInteraction.style(`width: ${this.w}px`);
    imgInteraction.style(`height: ${this.h}px`);
    
    let cardImage = createImg(this.path, `${this.htxt[0]}: ${this.htxt[1]}`);
    cardImage.class('cardimg');
    cardImage.style(`height: ${this.h}px`);
    cardImage.parent(imgInteraction);

  }
}