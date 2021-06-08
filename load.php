<?php
for($i = 0; $i<5000; $i++){
print_r("call #" . $i . "/n");
// create curl resource
        $ch = curl_init();

        // set url
        curl_setopt($ch, CURLOPT_URL, "http://dev.talklike.kz/serviceA");

        //return the transfer as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // $output contains the output string
        $output = curl_exec($ch);

	print_r($output);

        // close curl resource to free up system resources
        curl_close($ch);
}
?>