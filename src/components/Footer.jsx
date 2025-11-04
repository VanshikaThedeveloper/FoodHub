// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#00000095] text-white text-center py-4 mt-auto fixed bottom-0 w-full">
      <p>© {new Date().getFullYear()} FoodieHub. All rights reserved.</p>
    </footer>
  );
}
