$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var animal = $("input:radio[name=animal]:checked").val();
    console.log(animal);

      if (animal === "ott") {
          $(".guin, .ham").hide();
          $(".ott").show();
      } else if (animal === "guin") {
          $(".ott, .ham").hide();
          $(".guin").show();

      } else {
        $(".ott, .guin").hide();
        $(".ham").show();
    }
  });
});
