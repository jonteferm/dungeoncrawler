var level1 = {
   name: '1',

   gameArea: [
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,13,13,11,
   11,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,13,13,11,
   11,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,13,13,11,
   11,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,21,21,21,21,21,11,11,11,11,11,11,11,11,11,11,11,11,13,13,11,
   11,21,21,21,21,21,11,11,11,11,11,11,11,11,11,11,11,11,13,13,11,
   11,21,21,21,21,21,21,11,11,11,11,11,11,19,11,11,11,11,13,13,11,
   11,21,21,21,21,21,21,11,11,19,19,19,11,19,19,19,19,11,13,13,11,
   11,21,21,21,21,21,21,11,11,19,11,19,11,19,19,19,19,11,13,13,11,
   11,21,21,21,21,21,21,11,11,19,11,19,11,19,19,19,19,11,13,13,11,
   11,21,21,21,21,21,21,11,11,19,11,19,11,19,19,19,19,11,13,13,11,
   11,21,21,21,21,21,21,21,19,19,11,19,19,19,19,19,19,11,13,13,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   ],

   obstacles: [
   12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
   12,10,10,10,10,10,14,10,10,10,10,10,14,10,10,10,10,16,10,10,12,
   12,10,10,10,10,10,14,10,10,10,10,10,14,10,10,10,10,14,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,16,10,10,12,
   12,10,10,10,10,10,14,10,10,14,14,14,14,10,10,10,10,10,10,10,12,
   12,16,16,22,14,14,14,10,10,10,10,10,14,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,14,10,10,10,10,10,14,10,10,10,10,14,10,10,12,
   12,10,10,10,10,10,14,14,14,14,14,14,14,10,10,10,10,14,10,10,12,
   12,10,10,10,10,10,14,14,18,20,18,20,18,10,18,20,18,14,10,10,12,
   12,10,10,10,10,10,10,14,18,10,10,10,18,10,10,10,18,14,10,10,12,
   12,10,10,10,10,10,10,14,18,10,18,10,18,10,10,10,18,14,10,10,12,
   12,10,10,10,10,10,10,14,18,10,18,10,18,10,10,10,18,14,10,10,12,
   12,10,10,10,10,10,10,14,18,10,18,10,18,10,10,10,18,14,10,10,12,
   12,10,10,10,10,10,10,10,10,10,18,10,10,10,10,10,18,14,10,10,12,
   12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
   ],

   levelEnemies: [
   new Enemy('ghost', null, 0, 1, null, {left:8, top:6}, true),
   new Enemy('goblin', null, 1, 1, null, {left:8, top:2},true),
   new Enemy('goblin', null, 1, 1, null, {left:19, top:2}, false),
   new Enemy('kobold', null, 2, 4, null, {left:10, top:6}, false),
   new Enemy('wraith', null, 2, 4, null, {left:13, top:13}, true),
   new Enemy('wraith', null, 2, 4, null, {left:15, top:13}, true),
   new Enemy('gnoll', null, 3, 4, null, {left:18, top:13}, true),
   new Enemy('orc', null, 4, 4, null, {left:3, top:7}, false),
   new Enemy('ghoul', null, 2, 2, null, {left:11, top:9}, false),
   ],

   levelItems: [
   new Item('weapon', 'dagger', {left:11,top:6}, 2),
   new Item('weapon', 'club', {left:3,top:3}, 1),
   new Item('armour', 'chainmail', {left:19,top:1}, null, 2),
   new Item('helmet', 'iron', {left:19,top:13}, null, 1),
   new Item('furniture', 'torch', {left:6, top:8}, null, null),
   new Item('furniture', 'torch', {left:14, top:8}, null, null),
   new Item('furniture', 'torch', {left:6, top:2}, null, null),
   new Item('furniture', 'torch', {left:12, top:2}, null, null),
   new Item('furniture', 'torch', {left:10, top:8}, null, null),
   new Item('furniture', 'altar', {left:11, top:5}, null, null),
   new Item('furniture', 'orcStatue', {left:3, top:10}, null, null),
   new Item('furniture', 'flame', {left:2, top:9}, null, null),
   new Item('furniture', 'flame', {left:2, top:11}, null, null),
   new Item('furniture', 'flame', {left:4, top:9}, null, null),
   new Item('furniture', 'flame', {left:4, top:11}, null, null),
   ]
};


var level2 = {
   gameArea: [
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
   ],

   obstacles: [
   12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
   12,10,10,10,10,10,14,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,14,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
   12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
   ],

   levelEnemies: [

   ],

   levelItems: [

   ]
};