<?php
$t = date("H");
echo $t;
echo "<br>";
if ($t < 20) {
    echo "Have a good day!";
} else {
    echo "Have a good night!";
}
echo "<br>";

$favcolor="red";
switch ($favcolor)
{
    case "red":
        echo "你喜欢的颜色是红色!";
        break;
    case "blue":
        echo "你喜欢的颜色是蓝色!";
        break;
    case "green":
        echo "你喜欢的颜色是绿色!";
        break;
    default:
        echo "你喜欢的颜色不是 红, 蓝, 或绿色!";
}
echo "<br>";

$cars=array("Volvo","BMW","Toyota");
//$carsObject=array("Volvo","BMW","Toyota");

//echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";

echo json_encode($cars,JSON_UNESCAPED_UNICODE);
//echo json_encode($carsObject,JSON_UNESCAPED_UNICODE);

$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");

foreach($age as $x=>$x_value)
{
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}
