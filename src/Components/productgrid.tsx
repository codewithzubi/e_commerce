"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: {
    text: string;
    variant: "success" | "destructive";
  };
}

export default function ProductGrid() {
  const products: Product[] = [
    {
      id: "1",
      name: "Library Stool Chair",
      price: 20,
      image: "/img1.png",
      badge: {
        text: "New",
        variant: "success",
      },
    },
    {
      id: "2",
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/img2.png",
      badge: {
        text: "Sales",
        variant: "destructive",
      },
    },
    {
      id: "3",
      name: "Library Stool Chair",
      price: 20,
      image: "/img3.png",
    },
    {
      id: "4",
      name: "Library Stool Chair",
      price: 20,
      image: "/img4.png",
    },
    {
      id: "5",
      name: "Library Stool Chair",
      price: 20,
      image: "/img5.png",
      badge: {
        text: "New",
        variant: "success",
      },
    },
    {
      id: "6",
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/img4.png",
      badge: {
        text: "Sales",
        variant: "destructive",
      },
    },
    {
      id: "7",
      name: "Library Stool Chair",
      price: 20,
      image: "/img4.png",
    },
    {
      id: "8",
      name: "Library Stool Chair",
      price: 20,
      image: "/img2.png ",
    },
  ];

  const handleAddToCart = (productId: string) => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-12 text-black">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <Badge
                    variant={
                      product.badge.variant === "success"
                        ? "default" // Map "success" to "default"
                        : product.badge.variant
                    }
                    className="absolute top-4 left-4"
                  >
                    {product.badge.text}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-purple-600 font-medium mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleAddToCart(product.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only">Add to cart</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
