'use client'

/**
<<<<<<< HEAD
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
=======
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\product\[[...tool]]\page.tsx` route
>>>>>>> 1945779e04fb7ccd7a96b89393c72966ec86d3dc
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
<<<<<<< HEAD
  basePath: '/studio',
=======
  basePath: '/product',
>>>>>>> 1945779e04fb7ccd7a96b89393c72966ec86d3dc
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
