export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-11'

export const dataset = "production"

export const projectId = "r0q6w8hr"

// Studio Authentication
export const studioPassword = process.env.STUDIO_PASSWORD || 's'
export const studioAuthToken = process.env.STUDIO_AUTH_TOKEN || 'studio-authenticated'

// Sanity API Token for write operations
export const sanityApiToken = process.env.SANITY_API_WRITE_TOKEN


