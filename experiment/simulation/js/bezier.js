function calculate_xu() {
    for (let i = 0; i <= 4; i++) {
        xu[i] = (x_val[0] * (Math.pow((1 - u[i]), 3))) + (x_val[1] * 3 * u[i]) * (Math.pow((1 - u[i]), 2)) + (x_val[2] * 3 * Math.pow(u[i], 2) * (1 - u[i])) + (x_val[3] * Math.pow(u[i], 3));
    }
    return (xu);
}
function calculate_yu() {
    for (let i = 0; i <= 4; i++) {
        yu[i] = (y_val[0] * (Math.pow((1 - u[i]), 3))) + (y_val[1] * 3 * u[i]) * (Math.pow((1 - u[i]), 2)) + (y_val[2] * 3 * Math.pow(u[i], 2) * (1 - u[i])) + (y_val[3] * Math.pow(u[i], 3));
    }
    return (yu);
}
//# sourceMappingURL=bezier.js.map