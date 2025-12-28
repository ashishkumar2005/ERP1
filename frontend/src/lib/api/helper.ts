import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { verifyToken } from '@/lib/auth';

export async function getUser(req: NextRequest) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }

    const token = authHeader.split(' ')[1];
    const payload: any = verifyToken(token);
    
    if (!payload || !payload.sub) {
      return null;
    }

    const db = await getDb();
    const user = await db.collection('users').findOne({ email: payload.sub });

    if (!user) {
      return null;
    }

    return {
      ...user,
      id: user._id.toString()
    };
  } catch (error) {
    return null;
  }
}

export function errorResponse(error: any) {
  return NextResponse.json({ detail: error.message || "Internal Server Error" }, { status: 500 });
}

export function forbiddenResponse() {
  return NextResponse.json({ detail: "Forbidden" }, { status: 403 });
}
