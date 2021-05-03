function setupHTML(){
  main = new Main();
  let thgroup = new HorzGroup(main)
  let titlePanel = new Panel(thgroup, ['out' ,'round']);
  let titleGroup = new HorzGroup(titlePanel);
  let title = new Text(titleGroup, "My Stuff");   
  noCanvas();

  let hgroup = new HorzGroup(main)
  repos.forEach(r => {
    let p = new Panel(hgroup, ['out' ,'round'], 300, 200);
    let card = new Card(p, 300, 200, "https://juicetinliu.github.io/"+r[0], 'https://raw.githubusercontent.com/juicetinliu/'+r[0]+'/master/header.png', [r[0],r[1]]);
  });
  
  // let bothGroup = new HorzGroup(main);
  
  // let button1 = new Button(bothGroup, ['#FFFFFF', '#AACCFF'], 'https://www.linkedin.com/in/justin-l-aa5259130/', 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg', 'LinkedIn');

  main.createHTML();
}

class Card extends Webponent{
  constructor(parent, w, h, func = null, path = null, hovertxt = ['card', '']){
    super('card', parent);
    this.path = path;
    this.w = w;
    this.h = h;
    if(func === null){
      this.purpose = 'x'; //no purpose
    }else if(typeof func === 'string'){
      this.purpose = 'l'; //link
    }else{
      this.purpose = 'f'; //function
    }
    this.func = func;
    this.htxt = hovertxt;
  }
  
  genHTML(){

    this.HTML = createDiv();
    this.HTML.parent(this.parent.HTML);
    this.HTML.class('card');
    this.HTML.style('width: ' + this.w + 'px');
    this.HTML.style('height: ' + this.h + 'px');
    this.HTML.style('border-radius: 5px;')
    this.HTML.style('overflow: hidden');
    this.HTML.style('position: relative');

    let imgInteraction;
    if(this.purpose === 'l'){
      imgInteraction = createA(this.func, '', "_blank" );
    }else{
      imgInteraction = createButton('');
    }
    imgInteraction.class('cardimg');

    if(this.purpose === 'f'){
      imgInteraction.mousePressed(this.func);
    }
    imgInteraction.parent(this.HTML);
    imgInteraction.attribute('title', this.htxt[0] + ": " + this.htxt[1]);
    if(this.w > 0){
      imgInteraction.style('width: ' + this.w + 'px');
    }
    if(this.h > 0){
      imgInteraction.style('height: ' + this.h + 'px');
    }
    if(this.path === null || this.path === ''){
      imgInteraction.style('padding: 20px');
    }else{
      let icon = createImg(this.path, this.htxt[0] + ": " + this.htxt[1]);
      icon.class('cardimg');
      icon.style('height: ' + this.h*1.1 + 'px');
      // icon.style('width: ' + this.w*1.1 + 'px');
      icon.parent(imgInteraction);
    }

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
  }
}