
let counter = 0;
const get_days_since_last_accident = function () {
    return counter;
}; // Relies on mutable state. Can return different values for the same call.

const record_accident = function () {
    counter = 0;
}; // Side effects, setting state

const record_accident_free_day = function () {
    counter += 1;
    return counter;
}; // Does both: Relies on mutable state. Side effects, setting state.
// Can return different values for the same call.

const increment = function (x) {
    return x + 1;
};

const security_report_example = {
    "days_since_last_accident": 0
};

const get_days_since_last_accident_pure = function (security_report) {
    return security_report.days_since_last_accident;
};

const record_accident_pure = function () {
    return {
        "days_since_last_accident": 0
    };
};

const record_accident_free_day_pure = function (security_report) {
    return {
        "days_since_last_accident":
            security_report.days_since_last_accident + 1
    };
};


const add = function (x, y) {
    console.log("I Love Maths!");
    return x + y;
}; // Side effect.

const add_pure = function (x, y) {
    return x + y;
};

debugger;

const update_sign = function (days) {
    const sign = document.getElementById("accident_sign");
    sign.textContent = `We have had ${days} days since the last accident`;
}; // Effect.

const validate_door_lock = function () {
    const pass_code = "201118135";
    const keypad_code = document.getElementById("keypad").value;
    return keypad_code === pass_code;
}; // Relies on external mutable state.

const pure_validate_door_lock = function (keypad_code) {
    const pass_code = "201118135";
    return keypad_code === pass_code;
}; // pure function.

const make_door_validator = function (pass_code) {
    return function (keypad_code) {
        return keypad_code === pass_code;
    };
};

const pure_validate_door_lock_2 = make_door_validator("201118135");

if (pure_validate_door_lock_2(document.getElementById("keypad").value)) {
    unlock();
}
