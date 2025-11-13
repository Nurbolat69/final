$(document).ready(function(){
  const quoteBox = $("#quoteBox");
  function loadQuote(){
    fetch("https://api.quotable.io/random?tags=fitness|motivational")
      .then(r=>r.json())
      .then(data=>{
        if(data && data.content){
          quoteBox.hide().html(`<div class="quote-card">"${data.content}"<br><small style="opacity:0.8">— ${data.author}</small></div>`).fadeIn(400);
        } else {
          quoteBox.text("Keep going — small steps every day!");
        }
      }).catch(()=>{
        quoteBox.text("Keep going — small steps every day!");
      });
  }
  loadQuote();
  $("#refreshQuote").on("click", function(){ loadQuote(); });
});
