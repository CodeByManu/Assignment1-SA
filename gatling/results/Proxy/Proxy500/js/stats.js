var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150000",
        "ok": "113094",
        "ko": "36906"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "54489",
        "ok": "50459",
        "ko": "54489"
    },
    "meanResponseTime": {
        "total": "4257",
        "ok": "2301",
        "ko": "10251"
    },
    "standardDeviation": {
        "total": "10192",
        "ok": "6001",
        "ko": "16254"
    },
    "percentiles1": {
        "total": "6",
        "ok": "5",
        "ko": "2492"
    },
    "percentiles2": {
        "total": "2351",
        "ok": "10",
        "ko": "5694"
    },
    "percentiles3": {
        "total": "33694",
        "ok": "17921",
        "ko": "43519"
    },
    "percentiles4": {
        "total": "44282",
        "ok": "25098",
        "ko": "47820"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 92542,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1050,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19502,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 36906,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "498.339",
        "ok": "375.728",
        "ko": "122.611"
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
        "ok": "113094",
        "ko": "36906"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "54489",
        "ok": "50459",
        "ko": "54489"
    },
    "meanResponseTime": {
        "total": "4257",
        "ok": "2301",
        "ko": "10251"
    },
    "standardDeviation": {
        "total": "10192",
        "ok": "6001",
        "ko": "16254"
    },
    "percentiles1": {
        "total": "6",
        "ok": "5",
        "ko": "2492"
    },
    "percentiles2": {
        "total": "2343",
        "ok": "10",
        "ko": "5694"
    },
    "percentiles3": {
        "total": "33694",
        "ok": "17923",
        "ko": "43519"
    },
    "percentiles4": {
        "total": "44282",
        "ok": "25100",
        "ko": "47820"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 92542,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1050,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19502,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 36906,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "498.339",
        "ok": "375.728",
        "ko": "122.611"
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
