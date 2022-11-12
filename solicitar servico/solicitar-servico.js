function somar(){
  var result = $("input:checkbox");
  var total = 0;

  for(var i=0; i<result.lenght; i++)
  {
    total = total + parseFloat(result[i].value)
  }
  $("#res").val(total.toFixed(2));
}
somar();
$(":checkbox").click(somar);