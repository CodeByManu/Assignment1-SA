var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "75000",
        "ok": "74503",
        "ko": "497"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "60046"
    },
    "maxResponseTime": {
        "total": "66059",
        "ok": "60187",
        "ko": "66059"
    },
    "meanResponseTime": {
        "total": "1164",
        "ok": "754",
        "ko": "62605"
    },
    "standardDeviation": {
        "total": "5992",
        "ok": "3283",
        "ko": "1215"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "62435"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "62980"
    },
    "percentiles3": {
        "total": "8063",
        "ok": "7201",
        "ko": "64945"
    },
    "percentiles4": {
        "total": "19297",
        "ok": "14127",
        "ko": "65835"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68299,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 285,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5919,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 497,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "249.169",
        "ok": "247.518",
        "ko": "1.651"
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
        "ok": "74503",
        "ko": "497"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "60046"
    },
    "maxResponseTime": {
        "total": "66059",
        "ok": "60187",
        "ko": "66059"
    },
    "meanResponseTime": {
        "total": "1164",
        "ok": "754",
        "ko": "62605"
    },
    "standardDeviation": {
        "total": "5992",
        "ok": "3283",
        "ko": "1215"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "62435"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "62980"
    },
    "percentiles3": {
        "total": "8063",
        "ok": "7201",
        "ko": "64945"
    },
    "percentiles4": {
        "total": "19297",
        "ok": "14127",
        "ko": "65835"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 68299,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 285,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5919,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 497,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "249.169",
        "ok": "247.518",
        "ko": "1.651"
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
