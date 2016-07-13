<?php 

session_start();

switch ($_POST["fnname"]) {
  case "begin":
    begin();
    break;
  case "add":
    add();
    break;
  case "total":
    total();
    break;
  default:
    break;
}


function begin() {
  session_destroy();
  session_start();
  $_SESSION['score'] = 0;
  echo json_encode($_SESSION['score']);
}
  

function add() {
  if (isset($_SESSION['score'])) {
    $_SESSION['score']++;
  }
}


function total() {
  echo json_encode($_SESSION['score']);
}

?>