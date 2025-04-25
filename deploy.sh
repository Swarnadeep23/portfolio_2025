#!/bin/bash

# Build the Next.js application
npm run build

# Deploy to Supabase
supabase deploy

# Optional: Set up custom domain
# supabase domains create your-domain.com 