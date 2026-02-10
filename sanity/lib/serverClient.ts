import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Server-side client with write permissions
// This requires a Sanity API token with write access
export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for writes
  token: process.env.SANITY_API_WRITE_TOKEN, // Add this token in your .env.local
})
