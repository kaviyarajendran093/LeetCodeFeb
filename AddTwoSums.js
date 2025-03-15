function addTwoNumbers(l1, l2) {
  l1 = reverseArray(l1);
  l2 = reverseArray(l2);

  return l1;
}

function reverseArray(arr) {
  left = 0;
  right = arr.length - 1;
  while (left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

//console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummyHead.next;
}

function arrToLinkList(arr) {
  let dummyhead = new ListNode(0);
  current = dummyhead;
  for (let i = arr.length - 1; i >= 0; i--) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return dummyhead.next;
}

let l2 = arrToLinkList([5, 6, 4]); // Represents number 465

console.log(l2);
