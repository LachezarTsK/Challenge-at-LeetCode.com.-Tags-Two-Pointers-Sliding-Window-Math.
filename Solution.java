
public class Solution {

    public long countSubarrays(int[] input, int minValue, int maxValue) {
        int back = 0;
        long numberOfSubarraysWithLooseBounds = 0;

        for (int front = 0; front < input.length; ++front) {
            if (input[front] >= minValue && input[front] <= maxValue) {
                numberOfSubarraysWithLooseBounds += front - back + 1;
                continue;
            }
            back = front + 1;
        }

        return numberOfSubarraysWithLooseBounds;
    }
}
