let main;

let repos = [
  new Repo(RepoType.GITSITE, "UnderSea", "An underwater adventure"),
  new Repo(RepoType.GITSITE, "MazeGen", "Maze generation and pathfinding"),
  new Repo(RepoType.GITSITE, "BlehSim", "Virus simulation"),
  new Repo(RepoType.GITSITE, "ColorPicker", "RGB/HSV to color name converter"),
  new Repo(RepoType.GITSITE, "Collisions", "Physics simulation"),
  new Repo(RepoType.REPO, "Beng-Project", "Tactile electronics simulation platform", "https://github.com/juicetinliu/BEng-Project/blob/main/README.md", "CircuitTable"),
  new Repo(RepoType.YOUTUBE, "SMASH", "Virtual reality rageroom", "https://youtu.be/kXrILWj7JlU"),
  new Repo(RepoType.GITSITE, "Webponents", "Component based html wrapper for P5.js"),
];

function setup() {
  setupHTML();
}


function draw() {
}