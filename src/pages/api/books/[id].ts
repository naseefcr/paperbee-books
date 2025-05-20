import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../lib/firebase';
import { doc, getDoc, updateDoc, deleteDoc, serverTimestamp, DocumentData } from 'firebase/firestore';

interface BookUpdateInput {
  title?: string;
  author?: string;
  isbn?: string;
  description?: string;
  price?: number;
  stock?: number; // Added stock
  coverImageUrl?: string; // Renamed from coverImage to coverImageUrl for consistency
  language?: string;
  category?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid book ID' });
  }

  const bookDocRef = doc(db, 'books', id);

  if (req.method === 'GET') {
    try {
      const docSnap = await getDoc(bookDocRef);

      if (!docSnap.exists()) {
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
      if (author !== undefined && (typeof author !== 'string' || author.trim() === '')) {
        return res.status(400).json({ error: 'Author, if provided, must be a non-empty string' });
      }
      if (price !== undefined && (typeof price !== 'number' || price <= 0)) {
        return res.status(400).json({ error: 'Price, if provided, must be a positive number' });
      }
      if (isbn !== undefined && (typeof isbn !== 'string' || isbn.trim() === '')) {
        return res.status(400).json({ error: 'ISBN, if provided, must be a non-empty string' });
      }
      if (description !== undefined && (typeof description !== 'string' || description.trim() === '')) {
        return res.status(400).json({ error: 'Description, if provided, must be a non-empty string' });
      }
      if (stock !== undefined && (typeof stock !== 'number' || stock < 0 || !Number.isInteger(stock))) {
        return res.status(400).json({ error: 'Stock, if provided, must be a non-negative integer' });
      }
      if (coverImageUrl !== undefined && (typeof coverImageUrl !== 'string' || coverImageUrl.trim() === '')) {
        return res.status(400).json({ error: 'coverImageUrl, if provided, must be a non-empty string' });
      }
      
      // Check if the document exists before attempting to update
      const docSnap = await getDoc(bookDocRef);
      if (!docSnap.exists()) {
        return res.status(404).json({ error: 'Book not found' });
      }

      // Construct object with only provided fields
      const updateData: { [key: string]: any } = { ...otherData }; // Start with otherData
      if (title !== undefined) updateData.title = title;
      if (author !== undefined) updateData.author = author;
      if (price !== undefined) updateData.price = price;
      if (isbn !== undefined) updateData.isbn = isbn;
      if (description !== undefined) updateData.description = description;
      if (stock !== undefined) updateData.stock = stock;
      if (coverImageUrl !== undefined) updateData.coverImageUrl = coverImageUrl;
      
      // Do not update if no valid fields were provided (excluding otherData)
      const mainFieldsProvided = Object.keys(updateData).some(key => 
        ['title', 'author', 'price', 'isbn', 'description', 'stock', 'coverImageUrl'].includes(key)
      );
      
      if (!mainFieldsProvided && Object.keys(otherData).length === 0) {
         // If only otherData is present and it's empty, or no main fields and otherData is empty.
         // Or if you want to ensure at least one of the specified fields is present:
         // if (Object.keys(updateData).length === Object.keys(otherData).length) { // only otherData was present or nothing
        return res.status(400).json({ error: 'No valid fields provided for update' });
      }


      updateData.updatedAt = serverTimestamp();

      await updateDoc(bookDocRef, updateData);
      
      const updatedDocSnap = await getDoc(bookDocRef);
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
      const docSnap = await getDoc(bookDocRef);
      if (!docSnap.exists()) {
        return res.status(404).json({ error: 'Book not found' });
      }

      await deleteDoc(bookDocRef);
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
