$(document).ready(function(){
  const themeKey = "fitlife_theme";
  function applyTheme(t){
    if(t==="dark"){ $("body").addClass("dark"); } else { $("body").removeClass("dark"); }
  }
  let saved = localStorage.getItem(themeKey) || "light";
  applyTheme(saved);

  $("#themeToggle").on("click", function(){
    saved = (saved==="light") ? "dark" : "light";
    localStorage.setItem(themeKey, saved);
    applyTheme(saved);
  });
});
