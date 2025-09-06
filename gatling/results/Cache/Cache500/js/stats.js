var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150000",
        "ok": "114871",
        "ko": "35129"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "70421",
        "ok": "64921",
        "ko": "70421"
    },
    "meanResponseTime": {
        "total": "4551",
        "ok": "2077",
        "ko": "12644"
    },
    "standardDeviation": {
        "total": "13713",
        "ok": "5511",
        "ko": "24863"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "6"
    },
    "percentiles2": {
        "total": "23",
        "ok": "8",
        "ko": "173"
    },
    "percentiles3": {
        "total": "26230",
        "ok": "14396",
        "ko": "65040"
    },
    "percentiles4": {
        "total": "65316",
        "ok": "24453",
        "ko": "67609"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 92529,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 844,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21498,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 35129,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "498.339",
        "ok": "381.631",
        "ko": "116.708"
    }
},
contents: {
"req_get-home-500-re-32b29": {
        type: "REQUEST",
        name: "GET home 500 req/s",
path: "GET home 500 req/s",
pathFormatted: "req_get-home-500-re-32b29",
stats: {
    "name": "GET home 500 req/s",
    "numberOfRequests": {
        "total": "150000",
        "ok": "114871",
        "ko": "35129"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "70421",
        "ok": "64921",
        "ko": "70421"
    },
    "meanResponseTime": {
        "total": "4551",
        "ok": "2077",
        "ko": "12644"
    },
    "standardDeviation": {
        "total": "13713",
        "ok": "5511",
        "ko": "24863"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "6"
    },
    "percentiles2": {
        "total": "23",
        "ok": "8",
        "ko": "173"
    },
    "percentiles3": {
        "total": "26222",
        "ok": "14399",
        "ko": "65040"
    },
    "percentiles4": {
        "total": "65316",
        "ok": "24441",
        "ko": "67609"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 92529,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 844,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21498,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 35129,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "498.339",
        "ok": "381.631",
        "ko": "116.708"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
