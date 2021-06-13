<?php

$servername = "localhost";
$username = "root";
$password = "root";
$port = 8889;
$dbname = "azhansy_db";

// 创建连接
$conn = mysqli_connect($servername . ":" . $port, $username, $password, $dbname);
// 检测连接
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
} else {
    echo "数据库连接成功" . "<br>";
}

// 创建数据库
//$sql = "CREATE DATABASE $dbname";
//if (mysqli_query($conn, $sql)) {
//    echo "数据库创建成功";
//} else {
//    echo "Error creating database: " . mysqli_error($conn);
//}

// 使用 sql 创建数据表
$sql_account = "CREATE TABLE Account (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
password VARCHAR(50),
reg_date TIMESTAMP
)";
//insert();

function insert()
{
    $sql = "INSERT INTO Account (firstname, lastname, email,password)
VALUES ('John', 'Doe', 'john@example.com,123456','123456')";
    global $conn;
    if (mysqli_query($conn, $sql)) {
        echo "插入成功";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//if ($conn->query($sql_account) === TRUE) {
//    echo "Table Account created successfully";
//} else {
//    echo "创建数据表错误: " . $conn->error;
//}

//mysqli_query($conn, "set character set 'utf8'");//读库
//mysqli_query($conn,"set names 'utf8'");//写库


mysqli_close($conn);

