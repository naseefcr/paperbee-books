import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../lib/firebase-admin';

interface BookUpdateInput {
  title?: string;
  author?: string;
  isbn?: string;
  description?: string;
  price?: number;
  stock?: number;
  coverImageUrl?: string;
  language?: string;
  category?: string;
}

// Define a type for the update data
interface UpdateData {
  title?: string;
  author?: string;
  isbn?: string;
  description?: string;
  price?: number;
  stock?: number;
  coverImageUrl?: string;
  language?: string;
  category?: string;
  updatedAt?: Date;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow any other properties
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid book ID' });
  }

  // Using Admin SDK
  const bookDocRef = db.collection('books').doc(id);

  if (req.method === 'GET') {
    try {
      const docSnap = await bookDocRef.get();

      if (!docSnap.exists) {
        return res.status(404).json({ error: 'Book not found' });
      }
      
      const data = docSnap.data();
      const book = {
        id: docSnap.id,
        ...data,
        createdAt: data?.createdAt?.toDate ? data.createdAt.toDate().toISOString() : null,
        updatedAt: data?.updatedAt?.toDate ? data.updatedAt.toDate().toISOString() : null,
      };
      res.status(200).json(book);
    } catch (error) {
      console.error('Error fetching book:', error);
      if (error instanceof Error) {
        return res.status(500).json({ error: 'Failed to fetch book', details: error.message });
      }
      res.status(500).json({ error: 'Failed to fetch book' });
    }
  } else if (req.method === 'PUT') {
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
      } = req.body as BookUpdateInput;

      // Validation for provided fields
      if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
        return res.status(400).json({ error: 'Title, if provided, must be a non-empty string' });
      }
      // ... other validations ...
      
      // Check if the document exists before attempting to update
      const docSnap = await bookDocRef.get();
      if (!docSnap.exists) {
        return res.status(404).json({ error: 'Book not found' });
      }

      // Explicitly type the updateData object
      const updateData: UpdateData = { ...otherData };
      if (title !== undefined) updateData.title = title;
      if (author !== undefined) updateData.author = author;
      if (price !== undefined) updateData.price = price;
      if (isbn !== undefined) updateData.isbn = isbn;
      if (description !== undefined) updateData.description = description;
      if (stock !== undefined) updateData.stock = stock;
      if (coverImageUrl !== undefined) updateData.coverImageUrl = coverImageUrl;
      
      // Check if any main fields were provided
      const mainFieldsProvided = Object.keys(updateData).some(key => 
        ['title', 'author', 'price', 'isbn', 'description', 'stock', 'coverImageUrl'].includes(key)
      );
      
      if (!mainFieldsProvided && Object.keys(otherData).length === 0) {
        return res.status(400).json({ error: 'No valid fields provided for update' });
      }

      updateData.updatedAt = new Date();

      // Using Admin SDK
      await bookDocRef.update(updateData);
      
      const updatedDocSnap = await bookDocRef.get();
      const updatedDocData = updatedDocSnap.data();
      const responseData = {
        id: updatedDocSnap.id, 
        ...updatedDocData,
        createdAt: updatedDocData?.createdAt?.toDate ? updatedDocData.createdAt.toDate().toISOString() : null,
        updatedAt: updatedDocData?.updatedAt?.toDate ? updatedDocData.updatedAt.toDate().toISOString() : null,
      }
      res.status(200).json(responseData);
    } catch (error) {
      console.error('Error updating book:', error);
      if (error instanceof Error) {
        return res.status(500).json({ error: 'Failed to update book', details: error.message });
      }
      res.status(500).json({ error: 'Failed to update book' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Check if the document exists before attempting to delete
      const docSnap = await bookDocRef.get();
      if (!docSnap.exists) {
        return res.status(404).json({ error: 'Book not found' });
      }

      // Using Admin SDK
      await bookDocRef.delete();
      res.status(204).end(); // No content to send back
    } catch (error) {
      console.error('Error deleting book:', error);
      if (error instanceof Error) {
        return res.status(500).json({ error: 'Failed to delete book', details: error.message });
      }
      res.status(500).json({ error: 'Failed to delete book' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}