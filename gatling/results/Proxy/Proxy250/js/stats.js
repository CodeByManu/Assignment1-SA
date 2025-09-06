var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "75000",
        "ok": "74251",
        "ko": "749"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "31177"
    },
    "maxResponseTime": {
        "total": "42712",
        "ok": "38217",
        "ko": "42712"
    },
    "meanResponseTime": {
        "total": "1113",
        "ok": "747",
        "ko": "37323"
    },
    "standardDeviation": {
        "total": "4698",
        "ok": "2979",
        "ko": "2525"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "37414"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "39456"
    },
    "percentiles3": {
        "total": "9037",
        "ok": "7352",
        "ko": "41576"
    },
    "percentiles4": {
        "total": "33673",
        "ok": "14346",
        "ko": "42336"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68090,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 249,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5912,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 749,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "249.169",
        "ok": "246.681",
        "ko": "2.488"
    }
},
contents: {
"req_get-home-2500-r-c880b": {
        type: "REQUEST",
        name: "GET home 2500 req/s",
path: "GET home 2500 req/s",
pathFormatted: "req_get-home-2500-r-c880b",
stats: {
    "name": "GET home 2500 req/s",
    "numberOfRequests": {
        "total": "75000",
        "ok": "74251",
        "ko": "749"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "31177"
    },
    "maxResponseTime": {
        "total": "42712",
        "ok": "38217",
        "ko": "42712"
    },
    "meanResponseTime": {
        "total": "1113",
        "ok": "747",
        "ko": "37323"
    },
    "standardDeviation": {
        "total": "4698",
        "ok": "2979",
        "ko": "2525"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "37414"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "39456"
    },
    "percentiles3": {
        "total": "9037",
        "ok": "7352",
        "ko": "41576"
    },
    "percentiles4": {
        "total": "33673",
        "ok": "14346",
        "ko": "42336"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68090,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 249,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5912,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 749,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "249.169",
        "ok": "246.681",
        "ko": "2.488"
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
