<?php
//声明header为json
header("Content-type:application/json");

//构建数据
$data = array(
    array(
        'title' => '百度',
        'time' => '2000',
        'website' => 'www.baidu.com'
    ),
    array(
        'title' => '阿里巴巴',
        'time' => '1999',
        'website' => 'www.alibaba.com'
    ),
    array(
        'title' => '腾讯',
        'time' => '1998',
        'website' => 'www.qq.com'
    )
);

$json = array(
    'title' => '腾讯',
    'time' => '1998',
    'website' => 'www.qq.com'
);
echo "<br>";
echo "<br>";
echo "<br>";
//转为JSON
echo json_encode($data, JSON_UNESCAPED_UNICODE);
echo json_encode($json, JSON_UNESCAPED_UNICODE);
