# total sam

from collections import defaultdict

class Tweet:
    def __init__(self, tweetId, userId):
        self.tweetId = tweetId
        self.userId = userId

class Twitter:

    def __init__(self):
        self.follow_map = defaultdict(set)
        self.tweets = []

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))

    def getNewsFeed(self, userId: int):
        self.follow_map[userId].add(userId)
        res = []
        i = len(self.tweets) - 1
        while len(res) < 10 and i > -1:
            tweetId, tweetAuthorId = self.tweets[i]
            if tweetAuthorId in self.follow_map[userId]:
                res.append(tweetId)
            i -= 1
        return res    

    def follow(self, followerId: int, followeeId: int) -> None:
        self.follow_map[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.follow_map[followerId]:
            self.follow_map[followerId].remove(followeeId)