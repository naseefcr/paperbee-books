import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../lib/firebase-admin-config';

interface BookInput {
  title: string;
  author: string;
  isbn: string;
  description: string;
  price: number;
  stock: number;
  coverImageUrl: string;
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
        ...otherData 
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
        ...otherData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Using Admin SDK methods
      const docRef = await db.collection('books').add(bookDataToSave);
      
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
      // Using Admin SDK methods
      const querySnapshot = await db.collection('books')
        .orderBy('createdAt', 'desc')
        .get();
      
      const books: { createdAt: unknown; updatedAt: unknown; id: string; }[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const book = {
          id: doc.id,
          ...data,
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