'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product, priority = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Use coverImage first, then fallback to image, then to a default
  const imageUrl = product.coverImage || product.image || '/products/cover/endsuction-pump.jpg';
  
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {!imageError && (
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className={`group-hover:scale-105 transition-all duration-300 object-cover ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            quality={60}
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Loading skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        {/* Fallback when image fails */}
        {imageError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="text-2xl mb-2">📦</div>
              <div className="text-xs">Product Image</div>
            </div>
          </div>
        )}
        
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.category}/${product.slug}`}
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          View Details
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;