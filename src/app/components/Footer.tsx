export default function Footer() {
  return (
    <footer className="bg-primary-300 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg mb-4">
          © {new Date().getFullYear()} Elvira Sabirova. All rights reserved.
        </p>
        <p className="text-primary-200 italic">
          a wrap.
        </p>
      </div>
    </footer>
  )
}