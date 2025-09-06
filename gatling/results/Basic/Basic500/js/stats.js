var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150000",
        "ok": "114797",
        "ko": "35203"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "71409",
        "ok": "67454",
        "ko": "71409"
    },
    "meanResponseTime": {
        "total": "4327",
        "ok": "1868",
        "ko": "12348"
    },
    "standardDeviation": {
        "total": "13459",
        "ok": "5760",
        "ko": "24075"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "5"
    },
    "percentiles2": {
        "total": "8",
        "ok": "6",
        "ko": "530"
    },
    "percentiles3": {
        "total": "25364",
        "ok": "14906",
        "ko": "64537"
    },
    "percentiles4": {
        "total": "64747",
        "ok": "25527",
        "ko": "66350"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 98075,
    "percentage": 65
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 700,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16022,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 35203,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "498.339",
        "ok": "381.385",
        "ko": "116.953"
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
        "ok": "114797",
        "ko": "35203"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "71409",
        "ok": "67454",
        "ko": "71409"
    },
    "meanResponseTime": {
        "total": "4327",
        "ok": "1868",
        "ko": "12348"
    },
    "standardDeviation": {
        "total": "13459",
        "ok": "5760",
        "ko": "24075"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "5"
    },
    "percentiles2": {
        "total": "8",
        "ok": "6",
        "ko": "534"
    },
    "percentiles3": {
        "total": "25345",
        "ok": "14902",
        "ko": "64538"
    },
    "percentiles4": {
        "total": "64747",
        "ok": "25525",
        "ko": "66350"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 98075,
    "percentage": 65
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 700,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16022,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 35203,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "498.339",
        "ok": "381.385",
        "ko": "116.953"
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
