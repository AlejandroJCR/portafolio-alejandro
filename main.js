// SLIDER HERO
let i = 0;
let x = 5;
let img = [];

img.push('images/foto1.jpg', 'images/foto2.jpg', 'images/foto3.jpg');

function slider() {
    document.hero.src = img[i]
    i < img.length-1 ? i++ : i=0;
    setTimeout("slider()", x*1000);
}
window.onload = slider;

// SKILLS JSON
function SkillsJSON() {
    var skills = [{"Python":"70%"}, {"HTML":"70%"},{"Mathlab":"60%"},{"JavaScript":"20%"}]
    
    
    }