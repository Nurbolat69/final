$(document).ready(function(){
  $("#contactForm").on("submit", function(e){
    e.preventDefault();
    let name = $("#cname").val().trim();
    let email = $("#cemail").val().trim();
    let msg = $("#cmsg").val().trim();
    let ok=true;
    if(name.length<2){ ok=false; $("#cname").addClass("is-invalid"); } else { $("#cname").removeClass("is-invalid"); }
    const emailRe=/^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if(!emailRe.test(email)){ ok=false; $("#cemail").addClass("is-invalid"); } else { $("#cemail").removeClass("is-invalid"); }
    if(msg.length<6){ ok=false; $("#cmsg").addClass("is-invalid"); } else { $("#cmsg").removeClass("is-invalid"); }

    if(!ok){ $("#contactResult").html('<div class="text-danger">Please check the fields.</div>'); return; }

    // save to localStorage (simulate send)
    const arr = JSON.parse(localStorage.getItem("fitlife_contacts")||"[]");
    arr.push({name,email,msg,date:new Date().toISOString()});
    localStorage.setItem("fitlife_contacts", JSON.stringify(arr));
    $("#contactResult").html('<div class="text-success">Message saved. We will contact you soon.</div>');
    $(this)[0].reset();
  });

  // calories calculator
  $("#calForm").on("submit", function(e){
    e.preventDefault();
    let age = Number($("#age").val()), weight = Number($("#weight").val()), height=Number($("#height").val()), activity=$("#activity").val(), sex=$("#sex").val();
    if(!age || !weight || !height){ $("#calResult").html('<div class="text-danger">Fill all numeric fields.</div>'); return; }
    let bmr;
    if(sex==="male"){ bmr = 10*weight + 6.25*height - 5*age + 5; } else { bmr = 10*weight + 6.25*height - 5*age -161; }
    let mult=1.2;
    if(activity==="light") mult=1.375;
    if(activity==="moderate") mult=1.55;
    if(activity==="active") mult=1.725;
    let cal = Math.round(bmr*mult);
    $("#calResult").html(`<div class="text-success">Estimated daily calories: <strong>${cal}</strong> kcal</div>`);
  });
});
