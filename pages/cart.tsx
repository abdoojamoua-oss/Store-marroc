import Head from 'next/head'
import Link from 'next/link'

export default function Cart() {
  return (
    <>
      <Head>
        <title>السلة - Store Marroc</title>
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
                <Link href="/products" className="text-gray-700 hover:text-indigo-600">
                  المنتجات
                </Link>
                <Link href="/cart" className="text-indigo-600 font-bold">
                  السلة 🛒
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Cart Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8">سلة التسوق</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-bold mb-2">السلة فارغة</h3>
            <p className="text-gray-600 mb-8">لم تضف أي منتجات للسلة بعد</p>
            <Link
              href="/products"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition inline-block"
            >
              تصفح المنتجات
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
