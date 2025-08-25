export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-6 py-6 text-center">
        <p>© {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </div>
    </footer>
  );
}
