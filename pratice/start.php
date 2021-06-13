<!DOCTYPE html>
<html lang="cn">

<body>
<h1>
    My first PHP page</h1>
<?php
//php 单行注释
/*这是php
多行注释*/

echo "1、打印文案：hello world!! </br>";

$x = 5;
$y = 6;
$z = $x + $y;
echo "2、变量运算符：$x+$y=$z";
echo "</br>";

echo 'PHP变量作用域: local global static parameter';
$a = 5;//全局变量

function myTest()
{
    $b = 10;//局部变量
    echo "<p>测试函数内变量<p>";
    global $a;
    echo "变量a为：$a";
    echo "<br>";
    echo "变量b为：$b";

}

myTest();

echo 'PHP 将所有全局变量存储在一个名为 $GLOBALS[index] 的数组中。 index 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量';

echo "<p>测试函数外变量:<p>";
echo "变量 a 为: $a";
echo "<br>";
//echo "变量 b 为: $b";

function globalTest()
{
    $GLOBALS['a'] = $GLOBALS['x'] + $GLOBALS['y'];
    global $a;
    echo $a;
}

globalTest();

echo "<br>";
echo '希望某个局部变量不要被删除';
echo "<br>";

function myStaticTest()
{
    static $x=0;
    echo $x;
    $x++;
    echo PHP_EOL;    // 换行符
}

myStaticTest();
echo PHP_EOL;
myStaticTest();
myStaticTest();
echo "<br>";
echo "$x";
echo "<br>";
echo "ddddd";
echo "<br>";

echo "PHP EOF(heredoc) 使用说明";
$name="runoob";
$a= <<<EOF
        "abc"$name
        "123"
EOF;
// 结束需要独立一行且前后不能空格
echo $a;


echo "数据类型";



?>
</body>
</html>