import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Collection references
export const usersCollection = collection(db, 'users');
export const settingsCollection = collection(db, 'settings');

// Generic CRUD operations
export async function createDocument<T>(collectionName: string, data: T): Promise<string> {
  const now = Timestamp.now();
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    created_at: now,
    updated_at: now,
  });
  return docRef.id;
}

export async function getDocument<T>(collectionName: string, docId: string): Promise<T | null> {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    return null;
  }
  
  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    created_at: data.created_at?.toDate(),
    updated_at: data.updated_at?.toDate(),
  } as T;
}

export async function updateDocument<T>(collectionName: string, docId: string, updates: Partial<T>): Promise<void> {
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, {
    ...updates,
    updated_at: Timestamp.now(),
  });
}

export async function deleteDocument(collectionName: string, docId: string): Promise<void> {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
}

export async function getDocuments<T>(collectionName: string, conditions?: any[]): Promise<T[]> {
  let q = query(collection(db, collectionName));
  
  if (conditions) {
    q = query(collection(db, collectionName), ...conditions);
  }
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    created_at: doc.data().created_at?.toDate(),
    updated_at: doc.data().updated_at?.toDate(),
  })) as T[];
}