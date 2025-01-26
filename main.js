function $(id) {
  return document.getElementById(id);
}
$('checking').addEventListener('click',function () {
  $('back-color').style.backgroundColor = $('text-color').value;
})
