import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>الصفحة الرئيسية - Store Marroc</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-indigo-600">🇲🇦 Store Marroc</h1>
              <div className="flex gap-4">
                <Link href="/products" className="text-gray-700 hover:text-indigo-600">
                  المنتجات
                </Link>
                <Link href="/cart" className="text-gray-700 hover:text-indigo-600">
                  السلة 🛒
                </Link>
                <Link href="/login" className="text-gray-700 hover:text-indigo-600">
                  دخول
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              مرحباً بك في متجر مغربي
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              أفضل منصة للبيع والشراء في المغرب
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/products"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                تصفح المنتجات
              </Link>
              <Link
                href="/register"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition"
              >
                إنشاء حساب
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-12">المميزات</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h4 className="text-xl font-bold mb-2">آلاف المنتجات</h4>
              <p className="text-gray-600">تصفح مجموعة واسعة من المنتجات</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h4 className="text-xl font-bold mb-2">دفع آمن</h4>
              <p className="text-gray-600">طرق دفع آمنة وموثوقة</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h4 className="text-xl font-bold mb-2">شحن سريع</h4>
              <p className="text-gray-600">توصيل إلى جميع أنحاء المغرب</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">عن المتجر</h4>
                <p className="text-gray-400">متجر مغربي موثوق للبيع والشراء</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
                <ul className="text-gray-400 space-y-2">
                  <li><Link href="/products">المنتجات</Link></li>
                  <li><Link href="/contact">اتصل بنا</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">تابعنا</h4>
                <p className="text-gray-400">وسائل التواصل الاجتماعي قريباً</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Store Marroc. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
