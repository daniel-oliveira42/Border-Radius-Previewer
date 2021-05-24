function preview()
{
    document.getElementById('sample').style.borderBottomLeftRadius = document.getElementById('blr').value + "px"
    document.getElementById('sample').style.borderBottomRightRadius = document.getElementById('brr').value + "px"
    document.getElementById('sample').style.borderTopLeftRadius = document.getElementById('tlr').value + "px"
    document.getElementById('sample').style.borderTopRightRadius = document.getElementById('trr').value + "px"
    document.getElementById('clipboard').value = document.getElementById('sample').style.borderRadius
}

function clipboard()
{
  var copyText = document.getElementById("clipboard");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  if (copyText.value !== '')
    alert("CSS Copiado!")
} 