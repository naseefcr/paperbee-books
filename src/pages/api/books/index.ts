import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy, DocumentData } from 'firebase/firestore';

interface BookInput {
  title: string;
  author: string;
  isbn: string;
  description: string;
  price: number;
  stock: number;
  coverImageUrl: string;
  // Optional fields from previous interface, can be kept or removed based on strictness
  language?: string;
  category?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { 
        title, 
        author, 
        price, 
        isbn, 
        description, 
        stock, 
        coverImageUrl,
        ...otherData // Collect any other fields passed in the body
      } = req.body as BookInput;

      // Validation for required fields
      if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
      }
      if (!author || typeof author !== 'string') {
        return res.status(400).json({ error: 'Author is required and must be a non-empty string' });
      }
      if (price === undefined || typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: 'Price is required and must be a positive number' });
      }
      if (!isbn || typeof isbn !== 'string') {
        return res.status(400).json({ error: 'ISBN is required and must be a non-empty string' });
      }
      if (!description || typeof description !== 'string') {
        return res.status(400).json({ error: 'Description is required and must be a non-empty string' });
      }
      if (stock === undefined || typeof stock !== 'number' || stock < 0 || !Number.isInteger(stock)) {
        return res.status(400).json({ error: 'Stock is required and must be a non-negative integer' });
      }
      if (!coverImageUrl || typeof coverImageUrl !== 'string') {
        return res.status(400).json({ error: 'coverImageUrl is required and must be a non-empty string' });
      }

      const bookDataToSave = {
        title,
        author,
        price,
        isbn,
        description,
        stock,
        coverImageUrl,
        ...otherData, // Include other fields like language, category if they were part of BookInput and passed
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, 'books'), bookDataToSave);
      
      // Return the saved data along with the ID
      // Note: serverTimestamp fields will be resolved by Firestore, not immediately available here.
      // Consider fetching the doc if exact resolved timestamps are needed in the response.
      res.status(201).json({ id: docRef.id, ...bookDataToSave });

    } catch (error) {
      console.error('Error creating book:', error);
      if (error instanceof Error) {
        return res.status(500).json({ error: 'Failed to create book', details: error.message });
      }
      res.status(500).json({ error: 'Failed to create book' });
    }
  } else if (req.method === 'GET') {
    try {
      const q = query(collection(db, 'books'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const books: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        // Properly handle server timestamps if they need specific formatting
        const data = doc.data();
        const book = {
          id: doc.id,
          ...data,
          // Convert Firestore Timestamps to ISO strings or milliseconds if needed by the client
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : null,
          updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate().toISOString() : null,
        };
        books.push(book);
      });
      res.status(200).json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      if (error instanceof Error) {
        return res.status(500).json({ error: 'Failed to fetch books', details: error.message });
      }
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
