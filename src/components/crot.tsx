const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini
  
    return (
      <footer className="w-full text-center p-4 bg-gray-800 text-white">
        Made by <span className="font-bold">@skytech</span> {currentYear}
      </footer>
    );
  };
  
  export default Footer;
  