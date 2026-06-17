import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Products() {
  const [products] = useState([
    {
      id: 1,
      name: 'هاتف ذكي',
      price: 2499,
      category: 'إلكترونيات',
      image: '📱',
    },
    {
      id: 2,
      name: 'حقيبة جلدية',
      price: 599,
      category: 'ملابس',
      image: '👜',
    },
    {
      id: 3,
      name: 'ساعة ذكية',
      price: 899,
      category: 'إلكترونيات',
      image: '⌚',
    },
    {
      id: 4,
      name: 'حذاء رياضي',
      price: 449,
      category: 'ملابس',
      image: '👟',
    },
    {
      id: 5,
      name: 'سماعات بلوتوث',
      price: 349,
      category: 'إلكترونيات',
      image: '🎧',
    },
    {
      id: 6,
      name: 'عطر فاخر',
      price: 799,
      category: 'عطور',
      image: '💐',
    },
  ])

  return (
    <>
      <Head>
        <title>المنتجات - Store Marroc</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                🇲🇦 Store Marroc
              </Link>
              <div className="flex gap-4">
                <Link href="/products" className="text-indigo-600 font-bold">
                  المنتجات
                </Link>
                <Link href="/cart" className="text-gray-700 hover:text-indigo-600">
                  السلة 🛒
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8">منتجاتنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <div className="text-6xl p-8 text-center bg-gray-100">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">
                      {product.price} درهم
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                      إضافة للسلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
