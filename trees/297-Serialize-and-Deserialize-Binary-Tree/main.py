class Codec:

    def serialize(self, root):
        if not root:
            return ""

        nodes = []
        q = collections.deque([root])

        while q:
            node = q.popleft()
            if node:
                nodes.append(str(node.val))
                q.append(node.left)
                q.append(node.right)    
            else:
                nodes.append("null")

        return ",".join(nodes)
        

    def deserialize(self, data):
        if not data:
            return None
        
        data = data.split(",")
        root = TreeNode(data[0])
        i = 1
        q = collections.deque([root])

        while q:
            node = q.popleft()

            if data[i] != "null":
                node.left = TreeNode(data[i])
                q.append(node.left)
            i += 1    

            if data[i] != "null":
                node.right = TreeNode(data[i])
                q.append(node.right)    
            i += 1    

        return root    