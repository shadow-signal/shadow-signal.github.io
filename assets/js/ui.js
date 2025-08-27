(function(){
  const EMOJIS = ["😶‍🌫️","😵‍💫","😐","😑","😬","😏","😮‍💨","😤","😴","😳","😠","😇","😈","🤯","🤨","🤪","🤬","🤫","🤔","🙃","🖕","✌️","🤟","🤘","🫶","👀","💥","⚡"];
  document.querySelectorAll('.emoji-sep').forEach(sep=>{
    const count = 5 + Math.floor(Math.random()*12);
    let html = '';
    for(let i=0;i<count;i++){
      html += `<span>${EMOJIS[Math.floor(Math.random()*EMOJIS.length)]}</span>`;
    }
    sep.innerHTML = html;
  });
})();
