<? 
	require_once ('mysql/MysqliDb.php');

	$db = new MysqliDb ('localhost', 'c32goldenweek', 'MRSuht1d9Lr2p', 'c32goldenweek');

	$data = Array (
		"user_name" => $_POST['user_name'],
       	"mobile_number" => $_POST['mobile_number'],
       	"wechat_name" => $_POST['wechat_name'],
       	'score' => $_POST['score'],
       	'play_time' => $_POST['play_time'],
       	'city_num' => $_POST['city_num'],
       	'created' => date('Y-m-d H:i:s'),
	);
	$id = $db->insert ('game_info', $data);
	if($id) {
		die('SUCCESS');
	}
?>