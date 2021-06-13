<?php
function funInt()
{
    echo "var_dump 返回变量的数据类型和值";
    $x = 5985;
    var_dump($x);
    echo "<br>";
    $x = -345; // 负数
    var_dump($x);
    echo "<br>";
    $x = 0x8C; // 十六进制数
    var_dump($x);
    echo "<br>";
    $x = 047; // 八进制数
    var_dump($x);
}

function funFloat()
{
    $x = 10.365;
    var_dump($x);
    echo "<br>";
    $x = 2.4e3;
    var_dump($x);
    echo "<br>";
    $x = 8E-5;
    var_dump($x);
}

function funBool()
{
    $x = true;
    $y = false;
}

function funArray()
{
    $cars = array("Volvo", "BMW", "Toyota");
    var_dump($cars);
}


echo "<br>";
funInt();
echo "<br><br> 分割 <br><br>";
funFloat();
echo "<br><br> 分割 <br><br>";
funArray();
echo "<br><br> 分割 <br><br>";

$x="Hello world!";
$x=null;
var_dump($x);
echo "<br><br> 分割 <br><br>";
if(42 == "42") {
    echo '1、值相等';
}

echo PHP_EOL; // 换行符

if(42 === "42") {
    echo '2、类型相等';
} else {
    echo '3、类型不相等';
}

echo "比较 0、false、null、空字符串";
echo "<br>";
echo '0 == false: ';
var_dump(0 == false);
echo '0 === false: ';
var_dump(0 === false);
echo PHP_EOL;
echo '0 == null: ';
var_dump(0 == null);
echo '0 === null: ';
var_dump(0 === null);
echo PHP_EOL;
echo 'false == null: ';
var_dump(false == null);
echo 'false === null: ';
var_dump(false === null);
echo PHP_EOL;
echo "<br>";

echo '"0" == false: ';
var_dump("0" == false);
echo '"0" === false: ';
var_dump("0" === false);
echo PHP_EOL;
echo '"0" == null: ';
var_dump("0" == null);
echo '"0" === null: ';
var_dump("0" === null);
echo PHP_EOL;
echo '"" == false: ';
var_dump("" == false);
echo '"" === false: ';
var_dump("" === false);
echo PHP_EOL;
echo '"" == null: ';
var_dump("" == null);
echo '"" === null: ';
var_dump("" === null);

echo '<br>';
echo '<br>';
// 区分大小写的常量名 常量是全局的
//const GREETING = "欢迎访问 Runoob.com";
//echo GREETING;    // 输出 "欢迎访问 Runoob.com"
//echo '<br>';
//echo greeting;   // 输出 "greeting"
// 不区分大小写的常量名
const GREETING = "欢迎访问 Runoob.com";
echo GREETING;    // 输出 "欢迎访问 Runoob.com"
echo '<br>';
//echo greeting;  // 输出 "欢迎访问 Runoob.com"

echo '<br>';

//字符串追加
$text1 = 'Hello World!';
$text2 = 'What a nice day';
echo $text1.$text2;
echo "<br>";
echo strlen("Hello world!");
echo "<br>";
echo var_dump("Hello world!");
echo "<br>";
echo var_export("Hello world!");
echo "<br>";
//该函数会返回第一个匹配的字符位置。如果未找到匹配，则返回 FALSE。
echo strpos("Hello world!","world");

echo "<br>";
///intdiv
var_dump(intdiv(10, 3));

echo "<br>";
$test = '菜鸟教程';
// 普通写法 isset 不为空
//$username = isset($test) ? $test : 'nobody';
$username = $test ?? 'nobody';
echo $username, PHP_EOL;

// PHP 5.3+ 版本写法
$username = $test ?: 'nobody';
echo $username, PHP_EOL;