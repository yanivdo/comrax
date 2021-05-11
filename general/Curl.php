<?php


class Curl
{

    function sendRequest($request)
    {
        $curl_handle = curl_init();
        $curlUrl = 'http://api.duckduckgo.com/?q=' . $request . '&amp;format=json';
        curl_setopt($curl_handle, CURLOPT_URL, $curlUrl);
        curl_setopt($curl_handle, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_handle, CURLOPT_CUSTOMREQUEST, "GET");
        $result = curl_exec($curl_handle);
        curl_close($curl_handle);
        if (empty($result)) {
            print "Nothing returned from url.<p>";
        } else {
            return $result;
        }
    }
}
