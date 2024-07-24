let main;

let showcases = [
  new Showcase(ShowcaseType.YOUTUBE, "TSV", "with @ellipsoul", "https://ellipsoul.github.io/Travelling-Salesman-Visualiser/", "Travelling Salesman Visualiser"),
  new Showcase(ShowcaseType.GITSITE, "MazeGen", "Maze Generation & Pathfinding"),
  new Showcase(ShowcaseType.GITSITE, "UnderSea", "An Underwater Adventure"),
  new Showcase(ShowcaseType.GITSITE, "Webponents", "Component-based HTML Wrapper for P5.js"),
  new Showcase(ShowcaseType.GITSITE, "BlehSim", "A Virus Simulation"),
  new Showcase(ShowcaseType.GITSITE, "ColorPicker", "RGB/HSV to Name Converter"),
  new Showcase(ShowcaseType.REPO, "BEng-Project", "A Tactile Electronics Simulation Platform", "https://github.com/juicetinliu/BEng-Project/blob/main/README.md", "CircuitTable"),
  new Showcase(ShowcaseType.YOUTUBE, "SMASH", "A Virtual Reality Rageroom", "https://youtu.be/kXrILWj7JlU"),
  new Showcase(ShowcaseType.GITSITE, "RayMarch", "A Simple RayMarcher"),
  new Showcase(ShowcaseType.GITSITE, "Collisions", "A Physics Simulation"),
  new Showcase(ShowcaseType.GITSITE, "SheepLeGeSheep", "An Inspired Card Matching Game"),
  new Showcase(ShowcaseType.GITSITE, "PassManage", "A Secure Password Manager"),
  new Showcase(ShowcaseType.GITSITE, "LeagueKookGame", "An Online Team Trivia Game", "", "BaronAttack"),

];

function setup() {
  setupHTML(showcases);
}


function draw() {
}