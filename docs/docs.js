let main;

let repos = [
  new Repo(RepoType.GITSITE, "UnderSea", "An Underwater Adventure"),
  new Repo(RepoType.GITSITE, "MazeGen", "Maze Generation & Pathfinding"),
  new Repo(RepoType.GITSITE, "BlehSim", "A Virus Simulation"),
  new Repo(RepoType.GITSITE, "ColorPicker", "RGB/HSV to Name Converter"),
  new Repo(RepoType.GITSITE, "Collisions", "Physics Simulation"),
  new Repo(RepoType.REPO, "BEng-Project", "A Tactile Electronics Simulation Platform", "https://github.com/juicetinliu/BEng-Project/blob/main/README.md", "CircuitTable"),
  new Repo(RepoType.YOUTUBE, "SMASH", "A Virtual Reality Rageroom", "https://youtu.be/kXrILWj7JlU"),
  new Repo(RepoType.GITSITE, "Webponents", "Component-based HTML Wrapper for P5.js"),
];

function setup() {
  setupHTML();
}


function draw() {
}