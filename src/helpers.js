export default function transformTemp(temp) {
    return parseFloat(temp - 273.15).toFixed(2);
}
