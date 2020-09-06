// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let fast = list.head;
  let slow = list.head;

  while (fast.next.next && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (!fast.next && fast.next.next) slow = fast - n;
  return slow;
}

module.exports = fromLast;
