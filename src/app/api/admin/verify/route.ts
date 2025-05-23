// src/app/api/admin/books/count/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin-config';

export async function GET() {
  try {
    const snapshot = await db.collection('books').count().get();
    return NextResponse.json({ count: snapshot.data().count });
  } catch (error) {
    console.error('Error getting book count:', error);
    return NextResponse.json(
      { error: 'Failed to get book count' },
      { status: 500 }
    );
  }
}