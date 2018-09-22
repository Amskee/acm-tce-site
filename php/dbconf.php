<?php
$svr="localhost";
$usr="root";
$pwd="";
$db="acm";

$con=mysqli_connect($svr,$usr,$pwd);
$sql="drop database acm";
$x=mysqli_query($con,$sql);

$sql="create database acm";
$y=mysqli_query($con,$sql);

$con=mysqli_connect($svr,$usr,$pwd,$db);

$sql = "drop table counts";
$dt = mysqli_query($con,$sql);

$sql="create table counts (id int(10) auto_increment,noid int(10),primary key(id))";
$b=mysqli_query($con,$sql);

$sql="insert into counts(noid) values(0)";
$c=mysqli_query($con,$sql);

$sql="insert into counts(noid) values(0)";
$d=mysqli_query($con,$sql);

if($y) {
echo "<br>Initialized Database <br>";
} 
if($b && $c && $d)  
{
echo "<br>Initialized Tables ...<br>";
echo "<br>We are all set now you can use acm" ;
}

?>