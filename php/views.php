<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "acm";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$pla=$_POST['id'];
$type=$_POST['type'];
$sql="select * from counts where id='$pla'";
$res=mysqli_query($conn,$sql);
$num=mysqli_fetch_assoc($res);
$nof=$num["noid"];
if($type=='0'){
$nof=$nof+1;
$sql1="update counts set noid='$nof' where id='$pla'";
mysqli_query($conn,$sql1);
}
echo $nof;
mysqli_close($conn);
?>