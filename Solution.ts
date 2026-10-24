
function countSubarrays(input: number[], minValue: number, maxValue: number): number {
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
