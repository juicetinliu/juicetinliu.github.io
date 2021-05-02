function setupHTML(){
  main = new Main();
  let thgroup = new HorzGroup(main)
  let titlePanel = new Panel(thgroup, ['out' ,'round']);
  let titleGroup = new HorzGroup(titlePanel);
  let title = new Text(titleGroup, "Stuff");   
  noCanvas();

  let hgroup = new HorzGroup(main)
  repos.forEach(r => {
    let p = new Panel(hgroup, ['out' ,'round'], 300, 200);
    let button1 = new Image(p, 300, 200, "https://juicetinliu.github.io/"+r, 'https://raw.githubusercontent.com/juicetinliu/'+r+'/master/header.png', r);
  });
  
  // let bothGroup = new HorzGroup(main);
  
  // let button1 = new Button(bothGroup, ['#FFFFFF', '#AACCFF'], 'https://www.linkedin.com/in/justin-l-aa5259130/', 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg', 'LinkedIn');

  main.createHTML();
}

class Image extends Webponent{
  constructor(parent, w, h, func = null, path = null, hovertxt = 'Image'){
    super('image', parent);
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

    this.HTML.style('width: ' + this.w + 'px');
    this.HTML.style('height: ' + this.h + 'px');
    this.HTML.style('overflow: hidden');
    let imgInteraction;
    if(this.purpose === 'l'){
      imgInteraction = createA(this.func, '', "_blank" );
    }else{
      imgInteraction = createButton('');
    }
    imgInteraction.class('image');
    if(this.purpose === 'f'){
      imgInteraction.mousePressed(this.func);
    }
    imgInteraction.parent(this.HTML);
    imgInteraction.attribute('title', this.htxt);
    if(this.w > 0){
      imgInteraction.style('width: ' + this.w + 'px');
    }
    if(this.h > 0){
      imgInteraction.style('height: ' + this.h + 'px');
    }
    if(this.path === null || this.path === ''){
      imgInteraction.style('padding: 20px');
    }else{
      let icon = createImg(this.path, this.path);
      icon.style('height: ' + this.h*1.1 + 'px');
      // icon.style('width: ' + this.w*1.1 + 'px');
      icon.parent(imgInteraction);
    }
  }
}