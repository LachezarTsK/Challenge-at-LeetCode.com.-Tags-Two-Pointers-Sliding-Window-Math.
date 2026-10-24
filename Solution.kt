
class Solution {

    fun countSubarrays(input: IntArray, minValue: Int, maxValue: Int): Long {
        var back = 0;
        var numberOfSubarraysWithLooseBounds: Long = 0

        for (front in input.indices) {
            if (input[front] >= minValue && input[front] <= maxValue) {
                numberOfSubarraysWithLooseBounds += front - back + 1
                continue
            }
            back = front + 1
        }

        return numberOfSubarraysWithLooseBounds
    }
}
