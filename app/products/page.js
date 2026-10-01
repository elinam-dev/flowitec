'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { ALL_PRODUCTS } from '@/lib/productsData';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    // Use mock data directly
    setProducts(ALL_PRODUCTS);
    
    // Generate categories from products
    const categoryMap = {};
    ALL_PRODUCTS.forEach(product => {
      if (!categoryMap[product.category]) {
        categoryMap[product.category] = {
          id: product.category,
          name: product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' '),
          description: `High-quality ${product.category} for industrial applications`,
          hasSubcategories: false
        };
      }
    });
    
    const categories = Object.values(categoryMap);
    setCategories(categories);
    
    // Expand all categories by default
    const expanded = {};
    categories.forEach(cat => {
      expanded[cat.id] = true;
    });
    setExpandedCategories(expanded);
    
    // Set category from URL parameter
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  const categoryTabs = [
    { id: 'all', name: 'All Products' },
    { id: 'pumps', name: 'Pumps' },
    { id: 'valves', name: 'Valves' },
    { id: 'motors', name: 'Electric Motors' },
    { id: 'control-panels', name: 'Control Panels' },
    { id: 'spare-parts', name: 'Spare Parts' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <nav className="text-sm mb-4 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Products</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-2xl">World-class industrial equipment from leading manufacturers</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-96 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categoryTabs.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products by Category with Hierarchy */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          {categories.map(category => {
            // Filter products for this category
            const categoryProducts = products.filter(p => p.category === category.id);
            
            if (selectedCategory !== 'all' && selectedCategory !== category.id) {
              return null;
            }

            if (searchQuery && !categoryProducts.some(p => 
              p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
            )) {
              return null;
            }

            return (
              <div key={category.id} className="mb-16" id={category.slug}>
                {/* Category Header */}
                <div 
                  className="flex items-center justify-between mb-8 cursor-pointer group"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div>
                    <h2 className="text-4xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>
                  <button className="p-2 hover:bg-muted rounded-full">
                    {expandedCategories[category.id] ? (
                      <ChevronUp className="w-8 h-8" />
                    ) : (
                      <ChevronDown className="w-8 h-8" />
                    )}
                  </button>
                </div>

                {expandedCategories[category.id] && (
                  <>
                    {/* If category has subcategories */}
                    {category.hasSubcategories ? (
                      <div className="space-y-12">
                        {category.subcategories?.map(subcategory => {
                          const subProducts = searchQuery
                            ? subcategory.products.filter(p =>
                                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
                              )
                            : subcategory.products;

                          if (subProducts.length === 0) return null;

                          return (
                            <div key={subcategory.id}>
                              <h3 className="text-2xl font-bold mb-6 text-primary">
                                {subcategory.name}
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {subProducts.map(product => (
                                  <ProductCard key={product.id} product={product} />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* Category without subcategories */
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categoryProducts
                          .filter(p => !searchQuery || 
                            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
                          )
                          .map(product => (
                            <ProductCard key={product.id} product={product} />
                          ))}
                      </div>
                    )}
                  </>
                )}

                <div className="border-b border-border mt-12"></div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No products found</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="btn primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-8 opacity-90">Contact our team for custom solutions and product recommendations</p>
          <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default ProductsPage;
