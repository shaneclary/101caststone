# Images Directory Structure

This folder contains all static images for the 101 Cast Stone website.

## Folder Organization

- **`logos/`** - Company logos and branding
- **`hero/`** - Hero/banner images for main sections
- **`products/`** - Individual product photography (columns, capitals, cornices, etc.)
- **`projects/`** - Featured project case studies and installations
- **`gallery/`** - General gallery images, process photos, workshop
- **`team/`** - Team member and craftsman photos
- **`testimonials/`** - Client photos and testimonial images

## Image Optimization Tips

1. **Compress all images** before uploading (use tools like TinyPNG, ImageOptim, or Squoosh)
2. **Use WebP format** when possible for better compression
3. **Provide multiple sizes** for responsive images
4. **Use descriptive filenames** (e.g., `corinthian-capital-white-marble.jpg`)
5. **Keep file sizes under 500KB** for hero images, 200KB for product images

## Next.js Image Component

This project uses Next.js Image component for automatic optimization.
Images are automatically:
- Lazy loaded
- Sized appropriately for device
- Served in modern formats (WebP/AVIF)
- Cached for performance

## Adding New Images

1. Place images in the appropriate folder
2. Use the Next.js Image component in your code:
   ```jsx
   import Image from 'next/image'

   <Image
     src="/images/products/corinthian-capital.jpg"
     alt="Corinthian Capital"
     width={1200}
     height={800}
   />
   ```
