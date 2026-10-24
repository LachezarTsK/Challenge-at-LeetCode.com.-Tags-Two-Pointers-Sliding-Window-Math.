
package main

func countSubarrays(input []int, minValue int, maxValue int) int64 {
    back := 0
    numberOfSubarraysWithLooseBounds := int64(0)

    for front := range input {
        if input[front] >= minValue && input[front] <= maxValue {
            numberOfSubarraysWithLooseBounds += int64(front - back + 1)
            continue
        }
        back = front + 1
    }

    return numberOfSubarraysWithLooseBounds
}
