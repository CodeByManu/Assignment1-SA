var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "75000",
        "ok": "74396",
        "ko": "604"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "32200"
    },
    "maxResponseTime": {
        "total": "44100",
        "ok": "43351",
        "ko": "44100"
    },
    "meanResponseTime": {
        "total": "1089",
        "ok": "802",
        "ko": "36452"
    },
    "standardDeviation": {
        "total": "4448",
        "ok": "3108",
        "ko": "2436"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "36026"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "38359"
    },
    "percentiles3": {
        "total": "9346",
        "ok": "8252",
        "ko": "41047"
    },
    "percentiles4": {
        "total": "25732",
        "ok": "14066",
        "ko": "42025"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 67908,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 385,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6103,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 604,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "249.169",
        "ok": "247.163",
        "ko": "2.007"
    }
},
contents: {
"req_get-home-250-re-f5ef4": {
        type: "REQUEST",
        name: "GET home 250 req/s",
path: "GET home 250 req/s",
pathFormatted: "req_get-home-250-re-f5ef4",
stats: {
    "name": "GET home 250 req/s",
    "numberOfRequests": {
        "total": "75000",
        "ok": "74396",
        "ko": "604"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "32200"
    },
    "maxResponseTime": {
        "total": "44100",
        "ok": "43351",
        "ko": "44100"
    },
    "meanResponseTime": {
        "total": "1089",
        "ok": "802",
        "ko": "36452"
    },
    "standardDeviation": {
        "total": "4448",
        "ok": "3108",
        "ko": "2436"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "36026"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "38359"
    },
    "percentiles3": {
        "total": "9344",
        "ok": "8252",
        "ko": "41047"
    },
    "percentiles4": {
        "total": "25540",
        "ok": "14066",
        "ko": "42025"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 67908,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 385,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6103,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 604,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "249.169",
        "ok": "247.163",
        "ko": "2.007"
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
