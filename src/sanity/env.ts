export const apiVersion =
<<<<<<< HEAD
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-25'
=======
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-30'
>>>>>>> 1945779e04fb7ccd7a96b89393c72966ec86d3dc

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
