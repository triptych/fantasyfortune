var rg;
var theFortune;


var rg = new RiGrammar();


rg.addRule('<start>', '<money> | <love> | <travel> | <adventure> | <advice> | <fate> ');

rg.addRule('<money>', 'You will get <amt> <currency> from a <type> <character>.')
rg.addRule('<love>', 'You will catch the eye of a <type> <character>.');
rg.addRule('<travel>', 'You will soon be travelling via <mount> to <place>.');
rg.addRule('<adventure>', 'You will go on a <type> quest with a <character> to <action> a <enemy>.');
rg.addRule('<advice>', 'You should <sometimes> <task>.');
rg.addRule('<fate>', 'You are <fateverb> to <yourfate>');

// money / items

rg.addRule('<amt>', '500 | 5 | a million | 147 | 11');
rg.addRule('<currency>', 'diamonds | gil | gold | silver | bronze | <item>');
rg.addRule('<item>', 'mana | health | scrolls | rations');
rg.addRule('<weapon>', 'sword | shield | whip | dagger | staff | magic book |  armor | helmet');

// characters 
rg.addRule('<character>', 'archer | swordsman | wizard | barkeep | elf | dwarf | swordswoman | theif | cleric | hero |villain | NPC | villager');
rg.addRule('<enemy>', 'dragon | dark lord | snake | beholder | orc | slime | rat');
rg.addRule('<type>', 'mysterious | gregarious | sneaky | worried | wandering | greedy');
rg.addRule('<mount>', 'horse | dragon | wyvern | dire wolf | ghost horse | wagon');

// places 
rg.addRule('<place>', 'Avalon | Mordor | Havenhold | Battlecliff | Easthaven');

// actions
rg.addRule('<action>', 'defeat | destroy | overthrow | plunder | banish | slay | capture');

// advice 
rg.addRule('<sometimes>', 'sometimes | always | never | maybe | sorta | kinda | absolutely');
rg.addRule('<task>', 'roll the dice | check for traps | heal up | set up camp | equip that <weapon> | repair your <weapon> | run away | keep adventuring | feed the <enemy> | fight the <enemy>' );

// destiny 
rg.addRule('<fateverb>', 'fated | destined | cursed | blessed | advised | born');
rg.addRule('<yourfate>', 'become a  <character> | <action> a <enemy> | move to <place> | <random> <amt> of <currency> | fall in love with a <character> ');
rg.addRule('<random>', 'lose | give | win | find | earn | inherit')

// var result = rg.expand();
// console.log(result);

window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    document.getElementById('fairy').addEventListener("click", (evt)=> {
      // console.log("fairy clicked!");
      // console.log(evt.target)
      evt.target.classList.add('thinking');
      setTimeout(generateFortune, 1000);
    })
});


generateFortune = () => {
  // console.log('generate fortune');

  theFortune = rg.expand();
  document.getElementById('fortune').value = theFortune;

  document.getElementById('fairy').classList.remove('thinking');

}

document.getElementById('share').addEventListener('click',function(event){
    event.preventDefault();
    prefix = "My Fantasy Fortune: ";
    link = " https://Fantasy-Fortune--triptych.repl.co"; 
    hashtag = " #myfantasyfortune";
    if(typeof theFortune != 'undefined'){
    window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(prefix + theFortune +link + hashtag ));
    // console.log(url)
    }

},false);
