// middlewares.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Adiciona headers para otimização de performance
  const response = NextResponse.next();
  
  // Cache-Control para recursos estáticos
  const pathname = request.nextUrl.pathname;
  
  if (pathname.includes('/images/') || 
      pathname.endsWith('.jpg') || 
      pathname.endsWith('.png') || 
      pathname.endsWith('.svg') || 
      pathname.endsWith('.webp')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  return response;
}

// Invoca o middleware apenas para estes caminhos
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
