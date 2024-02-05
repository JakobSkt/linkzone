import urlMetadata from 'url-metadata';
import type { RequestHandler } from '@sveltejs/kit';

const allowedOrigin = {
  'Access-Control-Allow-Origin': 'localhost:5173'
};

export async function getLinkInfo(link: string) {
    
    const queryUrl = link

    // Error when no URL is passed
    if (!queryUrl) {
      return {
        status: 401,
        body: { error: 'Invalid URL' },
        headers: allowedOrigin
      };
    }
  
    try {
      const options = {
        mode: 'no-cors',
        maxRedirects: 1,
      }
      // Fetch metadata
      const metadata = await urlMetadata(queryUrl, options);
  
      // Error response when page has no title configured.
      // Nothing to show to user
      if (!metadata.title) throw new Error();
  
      // Caching the response at the edge for 1 hour.
      return {
        status: 200,
        headers: {
          'Cache-Control': 's-maxage=43200', // Cache header for CDN
          ...allowedOrigin
                },
        body: {
          title: metadata.title,
          image: metadata.image || '',
          description: metadata.description || ''
        }
      };
    } catch {
      // Return error
    }
}

  