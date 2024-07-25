class Solution:
    def sortArray(self, nums):
        def merge(l, m, r):
            leftPart = nums[l : m + 1]
            rightPart = nums[m + 1 : r + 1]
            n1, n2 = len(leftPart), len(rightPart)
            i, j, idx = 0, 0, l

            while i < n1 and j < n2:
                if leftPart[i] <= rightPart[j]:
                    nums[idx] = leftPart[i]
                    i += 1
                else:
                    nums[idx] = rightPart[j]
                    j += 1
                idx += 1

            while i < n1:
              nums[idx] = leftPart[i]
              idx += 1
              i += 1        

            while j < n2:
              nums[idx] = rightPart[j]
              idx += 1
              j += 1        

        def mergeSort(l, r):
            if l >= r: return
            m = (l + r) // 2
            mergeSort(l, m)
            mergeSort(m + 1, r)
            merge(l, m, r)    

        mergeSort(0, len(nums) - 1)
        return nums    
        