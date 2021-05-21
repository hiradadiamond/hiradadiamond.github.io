<?php
if(isset($_POST["name"])){
    $name = $_POST["name"];
}
$search = "$name";
$current_user = ""
if ($file = fopen("singles.txt", "r")) {
    while(!feof($file)) {
        $line = fgets($file);
        echo $line;
        // if(strpos($line, $search) !== false) {
        //      $current_user = $line;
        // }
    }
    fclose($file);
}

// $matches = array()
// if (!isset($current_user)) {
// echo "user not found"
// }

// echo "user found $current_user"

// $user_arr = explode (",", $current_user);

// echo "user array splitted $user_arr"

// $search_gender = "M"

// $start_age = $user_arr[5]
// echo "start age is $start_age"

// $end_age = $user_arr[6]

// echo "end age is $end_age"

// $search_os = $user_arr[4]

// echo "search os is $search_os"
// $search_personality = $user_arr[3]

// echo "search personality is $search_personality"
// if ($user_arr[1] == "M") {
//  search_gender = "F"
// }
// foreach($lines as $line) {
//  $cur_user_arr = explode (",", $line);
//  if ($cur_user_arr[1] == $search_gender &&
//      int($cur_user_arr[2]) >= int($start_age) &&
//      int($cur_user_arr[2]) <= int($end_age) &&
//      $cur_user_arr[4] == $search_os
//     ) {
//       echo "User found $cur_user_arr"
//       array_push($matches, $cur_user_arr)
//     }
// }

?>
<!-- <div>
    <ul>
        <li>
            <div>
                <img id="usersimg" src="images/user.jpg" alt="user">
                <table>
                    <th>First USer</th>
                    <tr>
                        <td><strong>gender:</strong></td>
                        <td><?php echo "HIRa" ?></td>
                    </tr>
                    <tr>
                        <td>age:</td>
                        <td><?php echo "HIRa" ?></td>
                    </tr>
                    <tr>
                        <td><strong>type:</strong></td>
                        <td><?php echo "HIRa"?></td>
                    </tr>
                    <tr>
                        <td><strong>OS:</strong></td>
                        <td><?php echo "HIRa"?></td>
                    </tr>
                </table>

            </div>
        </li>
    </ul>
</div> -->