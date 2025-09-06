var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "75000",
        "ok": "74261",
        "ko": "739"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "60009"
    },
    "maxResponseTime": {
        "total": "68808",
        "ok": "64777",
        "ko": "68808"
    },
    "meanResponseTime": {
        "total": "1495",
        "ok": "886",
        "ko": "62711"
    },
    "standardDeviation": {
        "total": "7197",
        "ok": "3822",
        "ko": "1914"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "62109"
    },
    "percentiles2": {
        "total": "4",
        "ok": "3",
        "ko": "64106"
    },
    "percentiles3": {
        "total": "9548",
        "ok": "7764",
        "ko": "65860"
    },
    "percentiles4": {
        "total": "60201",
        "ok": "17313",
        "ko": "66894"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68046,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 257,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5958,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 739,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "249.169",
        "ok": "246.714",
        "ko": "2.455"
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
        "ok": "74261",
        "ko": "739"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "60009"
    },
    "maxResponseTime": {
        "total": "68808",
        "ok": "64777",
        "ko": "68808"
    },
    "meanResponseTime": {
        "total": "1495",
        "ok": "886",
        "ko": "62711"
    },
    "standardDeviation": {
        "total": "7197",
        "ok": "3822",
        "ko": "1914"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "62109"
    },
    "percentiles2": {
        "total": "4",
        "ok": "3",
        "ko": "64106"
    },
    "percentiles3": {
        "total": "9561",
        "ok": "7764",
        "ko": "65860"
    },
    "percentiles4": {
        "total": "60190",
        "ok": "17313",
        "ko": "66894"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68046,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 257,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5958,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 739,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "249.169",
        "ok": "246.714",
        "ko": "2.455"
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
