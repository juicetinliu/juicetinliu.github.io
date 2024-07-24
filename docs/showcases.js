const types_of_showcase = {
  REPO: 0,
  GITSITE: 1,
  WEBSITE: 2,
  YOUTUBE: 3,
  OTHER: 4
}

let ShowcaseType = types_of_showcase;

class Showcase{
  constructor(type, name, description, extras, card_title = name){
    this.name = name;
    this.card_title = card_title;
    this.desc = description;
    this.type = type;
    this.link = extras;
  }

  details(){
    let title = this.card_title;
    let name = this.name;
    let description = this.desc;
    let image, link;
    switch(this.type){

      case ShowcaseType.REPO:
        image = `https://raw.githubusercontent.com/juicetinliu/${name}/main/header.png`;
        link = `https://github.com/juicetinliu/${name}/blob/main/README.md`;
        break;

      case ShowcaseType.GITSITE:
        image = `https://raw.githubusercontent.com/juicetinliu/${name}/main/header.png`;
        link = `https://juicetinliu.github.io/${name}`;
        break;

      case ShowcaseType.WEBSITE:
        image = `assets/headers/${name}_header.png`
        link = this.link;
        break;

      case ShowcaseType.YOUTUBE:
        image = `assets/headers/${name}_header.png`
        link = this.link;
        break;

      case ShowcaseType.OTHER:
        break;

      default:
    }
    // Header images are 600x400 pixels!
    return {title, description, image, link};
  }
}