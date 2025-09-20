package mergetwosortedlists

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummy := &ListNode{}
	curr := dummy

	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			curr.Next = &ListNode{Val: list1.Val}
			list1 = list1.Next
		} else {
			curr.Next = &ListNode{Val: list2.Val}
			list2 = list2.Next
		}
		curr = curr.Next
	}

	for list1 != nil {
		curr.Next = &ListNode{Val: list1.Val}
		curr = curr.Next

		list1 = list1.Next
	}

	for list2 != nil {
		curr.Next = &ListNode{Val: list2.Val}
		curr = curr.Next

		list2 = list2.Next
	}

	return dummy.Next
}
