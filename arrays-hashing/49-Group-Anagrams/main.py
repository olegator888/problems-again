# tle
# class Solution:
#     def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
#         def is_valid_anagram(a, b):
#             if len(a) != len(b):
#                 return False
#             aCount = Counter(a)
#             bCount = Counter(b)
#             for k in aCount.keys():
#                 if aCount[k] != bCount[k]:
#                     return False
#             return True
        
#         anagrams_map = defaultdict(list)
#         for s in strs:
#             included = False
#             for k in anagrams_map:
#                 if is_valid_anagram(s, k):
#                     anagrams_map[k].append(s)
#                     included = True
#                     break   
#             if not included:
#                 anagrams_map[s] = [s]    

#         res = []
#         for v in anagrams_map.values():
#             res.append(v)

#         return res      

# passes, slow
# class Solution:
#     def groupAnagrams(self, strs: List[str]) -> List[List[str]]:        
#         res = []
#         included = set()
#         for i in range(len(strs)):
#           if i in included:
#              continue
#           included.add(i)
#           cur = [strs[i]]
#           sorted_str = sorted(strs[i])
#           for j in range(i + 1, len(strs)):
#              if j in included:
#                 continue
#              if len(strs[i]) != len(strs[j]):
#                 continue
#              if sorted(strs[j]) == sorted_str:
#                 cur.append(strs[j])
#                 included.add(j)
#           res.append(cur)      

#         return res


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:        
        anagrams_mp = defaultdict(list)

        for s in strs:
            s_sorted = "".join(sorted(s))
            anagrams_mp[s_sorted].append(s)      

        return anagrams_mp.values()
                
