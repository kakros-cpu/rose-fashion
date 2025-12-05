'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { categories } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { useState } from "react"

const colors = ['Mawar', 'Lavender', 'Krem', 'Hitam', 'Cokelat', 'Nude', 'Beige', 'Biru Dongker', 'Abu-abu Heather', 'Classic Wash', 'Champagne'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'Satu Ukuran'];

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 3000000]);

  return (
    <div className="sticky top-20">
      <h3 className="text-lg font-headline font-semibold mb-4">Filter</h3>
      <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Kategori</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={`cat-${category.id}`} />
                  <Label htmlFor={`cat-${category.id}`}>{category.name}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Harga</AccordionTrigger>
          <AccordionContent>
            <div className="p-1">
              <div className="flex justify-between mb-2 text-sm">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}{priceRange[1] === 3000000 && '+'}</span>
              </div>
              <Slider
                defaultValue={[0, 3000000]}
                min={0}
                max={3000000}
                step={100000}
                onValueChange={setPriceRange}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="colors">
          <AccordionTrigger>Warna</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {colors.map(color => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox id={`color-${color}`} />
                  <Label htmlFor={`color-${color}`}>{color}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sizes">
          <AccordionTrigger>Ukuran</AccordionTrigger>
          <AccordionContent>
             <div className="grid grid-cols-3 gap-2">
              {sizes.map(size => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rating">
          <AccordionTrigger>Peringkat</AccordionTrigger>
          <AccordionContent>
             <RadioGroup defaultValue="any">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4" id="r1" />
                <Label htmlFor="r1">4 bintang ke atas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3" id="r2" />
                <Label htmlFor="r2">3 bintang ke atas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2" id="r3" />
                <Label htmlFor="r3">2 bintang ke atas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="any" id="r4" />
                <Label htmlFor="r4">Apa saja</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
