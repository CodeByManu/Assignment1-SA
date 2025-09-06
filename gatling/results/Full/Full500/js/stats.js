var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150000",
        "ok": "111504",
        "ko": "38496"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60191",
        "ok": "54614",
        "ko": "60191"
    },
    "meanResponseTime": {
        "total": "5288",
        "ok": "3324",
        "ko": "10975"
    },
    "standardDeviation": {
        "total": "11177",
        "ok": "7536",
        "ko": "16695"
    },
    "percentiles1": {
        "total": "6",
        "ok": "5",
        "ko": "3687"
    },
    "percentiles2": {
        "total": "4227",
        "ok": "14",
        "ko": "6226"
    },
    "percentiles3": {
        "total": "35041",
        "ok": "21653",
        "ko": "45513"
    },
    "percentiles4": {
        "total": "46421",
        "ok": "29294",
        "ko": "51257"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 87253,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 999,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23252,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 38496,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "496.689",
        "ok": "369.219",
        "ko": "127.47"
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
        "ok": "111504",
        "ko": "38496"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60191",
        "ok": "54614",
        "ko": "60191"
    },
    "meanResponseTime": {
        "total": "5288",
        "ok": "3324",
        "ko": "10975"
    },
    "standardDeviation": {
        "total": "11177",
        "ok": "7536",
        "ko": "16695"
    },
    "percentiles1": {
        "total": "6",
        "ok": "5",
        "ko": "3687"
    },
    "percentiles2": {
        "total": "4227",
        "ok": "14",
        "ko": "6226"
    },
    "percentiles3": {
        "total": "35043",
        "ok": "21661",
        "ko": "45513"
    },
    "percentiles4": {
        "total": "46421",
        "ok": "29295",
        "ko": "51257"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 87253,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 999,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23252,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 38496,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "496.689",
        "ok": "369.219",
        "ko": "127.47"
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
