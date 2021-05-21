<?php include("top.html"); ?>
<?php
if (isset($_POST["name"])) {
    $name = $_POST["name"];
}
$search = "$name";
$current_user = "";
$matches = array();
if ($file = fopen("singles.txt", "r")) {
    while (!feof($file)) {
        $line = fgets($file);
        if (strpos($line, $search) !== false) {
            $current_user = $line;
        }
    }
    fclose($file);
}

if (!isset($current_user)) {
    echo "user not found";
}

$user_arr = explode(",", $current_user);
$search_gender = "M";
$start_age = $user_arr[5];
$end_age = $user_arr[6];
$search_os = $user_arr[4];
$search_personality = $user_arr[3];

if ($user_arr[1] == "M") {
    $search_gender = "F";
}

if ($file = fopen("singles.txt", "r")) {
    while (!feof($file)) {
        $line = fgets($file);
        $cur_user_arr = explode(",", $line);
        if ($cur_user_arr[1] == $search_gender &&
            (int)($cur_user_arr[2]) >= (int)($start_age) &&
            (int)($cur_user_arr[2]) <= (int)($end_age) &&
            $cur_user_arr[4] == $search_os &&
            similar_text($cur_user_arr[3], $search_personality) >= 1) {
            array_push($matches, $cur_user_arr);
        }
    }
    fclose($file);
}
?>

<?php
    foreach ($matches as $match) {
        ?>
    <div>
        <ul>
            <li>
                <div class="match-data">
                    <img class="usersimg" src="images/user.jpg" alt="user">
                    <table>
                        <th>Matches User </th>
                        <tr>
                            <td><strong>Name</strong></td>
                           <td><?php echo $match[0]?></td>
                        </tr>
                        <tr>
                        <td><strong>gender:</strong></td>
                            <td><?php echo $match[1] ?></td>
                        </tr>   
                        <tr>
                            <td><strong>age:</strong></td>
                            <td><?php echo $match[2] ?></td>
                        </tr>
                        <tr>
                            <td><strong>type:</strong></td>
                            <td><?php echo $match[3]?></td>
                        </tr>
                        <tr>
                            <td><strong>OS:</strong></td>
                            <td><?php echo $match[4]?></td>
                        </tr>
                    </table>
    
                </div>
            </li>
        </ul>
    </div>

<?php
    } ?>