// ✰ webmeji ✰
// little creatures that walk around your website =w=b
// inspired by shimeji, originally by Lars de Rooij
// last updated: 27 january 2026

window.SPAWNING = [
  { id: 'webmeji-0', config: 'SHIMEJI_CONFIG' }
];

window.SHIMEJI_CONFIG = {
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right', 'soccer', 'sk8', 'playing'],

  walkspeed: 50,
  fallspeed: 200,
  jumpspeed: 150,
  gettingupspeed: 2000,

  walk: {
    frames: ["webmeji/shimeji/shime1.png", "webmeji/shimeji/shime2.png", "webmeji/shimeji/shime3.png", "webmeji/shimeji/shime2.png"],
    interval: 175, loops: 6},

  stand: {
    frames: ["webmeji/shimeji/shime1.png"],
    interval: 200, loops: 1},

  sit: {
    frames: ["webmeji/shimeji/shime11.png"],
    interval: 1000, loops: 1,
    randomizeDuration: true, min: 3000, max: 11000},

  spin: {
    frames: ["webmeji/shimeji/shime5.png", "webmeji/shimeji/shime6.png", "webmeji/shimeji/shime7.png", "webmeji/shimeji/shime8.png", "webmeji/shimeji/shime9.png", "webmeji/shimeji/shime10.png"],
    interval: 300, loops: 2},

  dance: {
    frames: ["webmeji/shimeji/shime30.png", "webmeji/shimeji/shime31.png", "webmeji/shimeji/shime32.png", 'webmeji/shimeji/shime33.png'],
    interval: 600, loops: 3},

  //personalizadas
  soccer: {
    frames:["webmeji/shimeji/shime20.png", "webmeji/shimeji/shime21.png"], 
    interval: 175, loops:2},

  sk8: {
    frames:["webmeji/shimeji/shime15.png", "webmeji/shimeji/shime16.png", "webmeji/shimeji/shime17.png"],
  interval: 1000, loops:2,  
  randomizeDuration: true, min: 3000, max: 11000},

  playing: {
    frames:["webmeji/shimeji/shime26.png", "webmeji/shimeji/shime27.png", "webmeji/shimeji/shime28.png", "webmeji/shimeji/shime29.png"], 
    interval: 175, loops:2},

  trip: {
    frames: ["webmeji/shimeji/shime38.png", "webmeji/shimeji/shime39.png", "webmeji/shimeji/shime40.png", "webmeji/shimeji/shime41.png", "webmeji/shimeji/shime42.png", "webmeji/shimeji/shime43.png", "webmeji/shimeji/shime44.png", "webmeji/shimeji/shime45.png"],
    interval: 1000, loops:1},

  forcewalk: { 
    loops: 6},

  forcethink: { 
    frames: ["webmeji/shimeji/shime38.png", "webmeji/shimeji/shime39.png", "webmeji/shimeji/shime40.png", "webmeji/shimeji/shime41.png", "webmeji/shimeji/shime42.png", "webmeji/shimeji/shime43.png", "webmeji/shimeji/shime44.png", "webmeji/shimeji/shime45.png", "webmeji/shimeji/shime46.png"],
    interval: 800, loops: 2},

  pet: {
    frames: ["webmeji/shimeji/shime15.png", "webmeji/shimeji/shime16.png", "webmeji/shimeji/shime17.png"],
    interval: 300},

  drag: {
    frames: ["webmeji/shimeji/shime5.png", "webmeji/shimeji/shime6.png", "webmeji/shimeji/shime5.png", "webmeji/shimeji/shime6.png", "webmeji/shimeji/shime5.png", "webmeji/shimeji/shime6.png"],
    interval: 420},

  falling: {
    frames: ["webmeji/shimeji/shime4.png"],
    interval: 200, loops: 2},

  fallen: {
    // Corrigido: adicionado 'webmeji/' que faltava na imagem shime18
    frames: ["webmeji/shimeji/shime19.png", "webmeji/shimeji/shime18.png"],
    interval: 250, loops: 1},

  ORIGINAL_ACTIONS: [
    'walk','walk',
    'spin',
    'sit',
    'dance','dance',
    'trip',
    'soccer', 'soccer',
    'playing', 'playing',
    'sk8', 'sk8',
    'forcethink'
  ],

  EDGE_ACTIONS: [
    'hang','hang',
    'climb','climb','climb','climb',
    'fall','fall'
  ],

  JUMP_CHANCE: 0.05, 

  climbSide: {
    frames: ["webmeji/shimeji/shime13.png", "webmeji/shimeji/shime14.png"],
    interval: 200, loops: 2},

  hangstillSide: {
    frames: ["webmeji/shimeji/shime12.png"],
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  climbTop: {
    frames: ["webmeji/shimeji/shime24.png", "webmeji/shimeji/shime25.png"],
    interval: 200, loops: 6},

  hangstillTop: {
    frames: ["webmeji/shimeji/shime23.png"],
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  jump: {
    frames: ["webmeji/shimeji/shime22.png"],
    interval: 200}
};