import { db } from '../services/firebase';

export function readChats() {
  const abc = [];
  db.ref('chats').on('value', snapshot => {
    snapshot.forEach(snap => abc.push(snap.val()));
    return abc;
  });
}

export function writeChats(message) {
  return db.ref('chats').push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid,
  });
}
