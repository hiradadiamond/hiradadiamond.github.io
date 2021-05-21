<?php include("top.html"); ?>

<?php
if(isset($_POST["name"])) {
$name = $_POST["name"];
}
if(isset($_POST["gender"])) {
$gender = $_POST["gender"];
}
if(isset($_POST["age"])){
    $age = $_POST["age"];
}
if(isset($_POST["personalitytype"])){
    $personalitytype= $_POST["personalitytype"];
}
if(isset($_POST["seekingAge"])){
    $seekingAge = $_POST["seekingAge"];
}
if(isset($_POST["favoriteOs"])){
    $favoriteOs = $_POST["favoriteOs"];
}
?>
<?php

$File = "singles.txt";
$fp = fopen($File, 'a+');
$Data = $name.",".$gender.",".$age.",".$personalitytype.",".$favoriteOs.",".$seekingAge."\n";
fwrite($fp, $Data);
fclose($fp);

?>
<div>
    <p><strong>Thank you!</strong></p>
    <p> Welcome to nerdluv, <?php  echo $_POST["name"] ?>! </p>
    <p>Now <a href=""> Login to see your matches!</a></p>
</div>
