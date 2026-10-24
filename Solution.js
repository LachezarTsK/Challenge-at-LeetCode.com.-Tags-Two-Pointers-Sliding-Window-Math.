
/**
 * @param {number[]} input
 * @param {number} minValue
 * @param {number} maxValue
 * @return {number}
 */
var countSubarrays = function (input, minValue, maxValue) {
    let back = 0;
    let numberOfSubarraysWithLooseBounds = 0;

    for (let front = 0; front < input.length; ++front) {
        if (input[front] >= minValue && input[front] <= maxValue) {
            numberOfSubarraysWithLooseBounds += front - back + 1;
            continue;
        }
        back = front + 1;
    }

    return numberOfSubarraysWithLooseBounds;
};
