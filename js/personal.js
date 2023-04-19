const preference_movie = new Map ([
    ["mi", 1],
    ["intern", 2],
    ["drive", 5],
    ["toy", 4],
    ["top", 3],
    ["sing", 6]
]);

const rate_movie = new Map ([
    ["mi", 4],      // 7.4
    ["intern", 6],  // 7.1
    ["drive", 3],   // 7.6
    ["toy", 2],     // 7.7
    ["top", 1],     // 8.3
    ["sing", 5]     // 7.4
]);

const preference_tvshow = new Map ([
    ["money", 1],
    ["emily", 2],
    ["friends", 3]
]);

const rate_tvshow = new Map ([
    ["money", 2],    // 8.2
    ["emily", 3],    // 6.9
    ["friends", 1]   // 8.9
]);

function order_by_preference() {
    var is_large_enough = window.matchMedia("(min-width: 950px)");
    if (is_large_enough.matches) {
        for (let [key, value] of preference_movie) {
            set_order(key, value);
        }
        for (let [key, value] of preference_tvshow) {
            set_order(key, value);
        }
    } else {
        for (let [key, value] of preference_movie) {
            set_order(key, 0);
        }
        for (let [key, value] of preference_tvshow) {
            set_order(key, 0);
        }
    }
}

function order_by_rate() {
    var is_large_enough = window.matchMedia("(min-width: 950px)");
    if (is_large_enough.matches) {
        for (let [key, value] of rate_movie) {
            set_order(key, value);
        }
        for (let [key, value] of rate_tvshow) {
            set_order(key, value);
        }
    } else {
        for (let [key, value] of rate_movie) {
            set_order(key, 0);
        }
        for (let [key, value] of rate_tvshow) {
            set_order(key, 0);
        }
    }
}

function set_order(id, order) {
    document.getElementById(id).style.order = order;
}

window.addEventListener("load", order_by_preference);
window.addEventListener("resize", order_by_preference);