const types_of_repo = {
  REPO: 0,
  GITSITE: 1,
  WEBSITE: 2,
  YOUTUBE: 3,
  OTHER: 4
}

let RepoType = types_of_repo;

class Repo{
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

      case RepoType.REPO:
        image = "https://raw.githubusercontent.com/juicetinliu/" + name + "/main/header.png"
        link = "https://github.com/juicetinliu/" + name + "/blob/main/README.md"
        break;

      case RepoType.GITSITE:
        image = "https://raw.githubusercontent.com/juicetinliu/" + name + "/main/header.png"
        link = "https://juicetinliu.github.io/"+ name;
        break;

      case RepoType.WEBSITE:
        image = "https://raw.githubusercontent.com/juicetinliu/juicetinliu.github.io/main/docs/" + name + "_header.png"
        link = this.link;
        break;

      case RepoType.YOUTUBE:
        image = title + "_header.png"
        link = this.link;
        break;

      case RepoType.OTHER:
        break;

      default:
    }

    return {title, description, image, link};
  }
}