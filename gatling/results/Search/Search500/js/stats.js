var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150000",
        "ok": "116074",
        "ko": "33926"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "71422",
        "ok": "65215",
        "ko": "71422"
    },
    "meanResponseTime": {
        "total": "4212",
        "ok": "1915",
        "ko": "12070"
    },
    "standardDeviation": {
        "total": "13406",
        "ok": "5850",
        "ko": "24448"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "4"
    },
    "percentiles2": {
        "total": "6",
        "ok": "6",
        "ko": "36"
    },
    "percentiles3": {
        "total": "25906",
        "ok": "16007",
        "ko": "64812"
    },
    "percentiles4": {
        "total": "64903",
        "ok": "26144",
        "ko": "65698"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99670,
    "percentage": 66
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 657,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15747,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 33926,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "386.913",
        "ko": "113.087"
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
        "ok": "116074",
        "ko": "33926"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "71422",
        "ok": "65215",
        "ko": "71422"
    },
    "meanResponseTime": {
        "total": "4212",
        "ok": "1915",
        "ko": "12070"
    },
    "standardDeviation": {
        "total": "13406",
        "ok": "5850",
        "ko": "24448"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "4"
    },
    "percentiles2": {
        "total": "6",
        "ok": "6",
        "ko": "36"
    },
    "percentiles3": {
        "total": "25885",
        "ok": "16008",
        "ko": "64812"
    },
    "percentiles4": {
        "total": "64903",
        "ok": "26144",
        "ko": "65698"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99670,
    "percentage": 66
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 657,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15747,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 33926,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "386.913",
        "ko": "113.087"
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
