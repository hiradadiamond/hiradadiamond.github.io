<?php include("top.html"); ?>
<form action="matches-submit.php" method="POST">
    <fieldset>
        <legend>Returning User:</legend>
        <div class="form-data">
        <label>
            <strong>Name: </strong>
            <input type = "text" name="name"/>
        </label>
        </div>    
        <input type="submit" value="View my Matches"/>
    </fieldset>
</form>