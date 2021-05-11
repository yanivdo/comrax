<?php

include "./general/Curl.php";
class ManageRequestController
{

    protected $curl;

    function __construct()
    {
        $this->curl = new Curl();
    }

    function getApiData($request)
    {
        $query = $request['search'];
        if (empty($query)) {
            $result = [];
        } else {
            $curlResult = json_decode($this->curl->sendRequest($query));
            $RelatedTopics = $curlResult->RelatedTopics;
            $result = $this->innerDataLayer($RelatedTopics);
        }
        return $result;
    }

    function innerDataLayer($topics)
    {
        $result = [];
        foreach ($topics as $singleTopic) {
            if (isset($singleTopic->Topics)) {
                $result = array_merge($result, $this->innerDataLayer($singleTopic->Topics));
            } else {
                $result[] = ["url" => $singleTopic->FirstURL, "title" => $singleTopic->Text];
            }
        }
        return $result;
    }
}
