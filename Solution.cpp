
#include <vector>
using namespace std;

class Solution {

public:
    long long countSubarrays(vector<int>& input, int minValue, int maxValue) {
        int back = 0;
        long long numberOfSubarraysWithLooseBounds = 0;

        for (int front = 0; front < input.size(); ++front) {
            if (input[front] >= minValue && input[front] <= maxValue) {
                numberOfSubarraysWithLooseBounds += front - back + 1;
                continue;
            }
            back = front + 1;
        }

        return numberOfSubarraysWithLooseBounds;
    }
};
