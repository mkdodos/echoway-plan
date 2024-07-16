<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:text/html; charset=big5");

// 新增ODBC資料來源
// 驅動程式選擇
// Microsoft Access Driver (*.mdb)
$db = new PDO("odbc:page");

$table= "stock";

// 日期欄位(在組合陣列資料時,將時分秒去除)
$dateField = "inDate";
// $dateField = "";

$query = " SELECT TOP 50
    id,
    inDate,
    price   
    FROM $table      
    ORDER BY id 
";


/*** 以下程式為固定不用更改 ***/

$query = mb_convert_encoding($query, "BIG5", "UTF-8");


$rs = $db->prepare($query);
$rs->execute();
$arr = $rs->fetchAll(\PDO::FETCH_ASSOC);

$json = "";
$rows=[];


for ($i = 0; $i < count($arr); $i++) {
  $j = 0;
  foreach ($arr[$i] as $key => $value) {         
    // 去除掉換行問題
    $value = trim(preg_replace('/\s\s+/', ' ', $value));   
    // 去除掉"問題
    $value = str_replace('"', '\"', $value);   
    $newarr[$key] =urlencode(trim($value));     
    $j++;
  }    

  // 原始日期 2022-01-05 00:00:00 將時分秒去掉   
  if($dateField!='') 
  $newarr[$dateField] = substr( $newarr[$dateField] , 0 , 10 );

  $rows[$i] = $newarr;
}


// array to json
$json = json_encode($rows,JSON_UNESCAPED_SLASHES);

// 再用urldecode把資料轉回成中文格式
$json = urldecode($json);

echo $json
?>
