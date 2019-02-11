function intersect(list1, list2) {
  if (list1.getLast().data !== list2.getLast().data) {
    return null;
  }

  let diff = Math.abs(list1.size() - list2.size());
  let counter = 0;
  let longerList = list1.size >= list2.size ? list1.head : list2.head;
  let shorterList = list1.size >= list2.size ? list2.head : list1.head;

  while (longerList) {
    if (counter === diff) {
      if (longerList.data === shorterList.data) {
        longerList.data = shorterList.data;
        return shorterList.data;
      } else {
        shorterList = shorterList.next;
        diff++;
      }
    }
    longerList = longerList.next;
    counter++;
  }
  return false;
}
