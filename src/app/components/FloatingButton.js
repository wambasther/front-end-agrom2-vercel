const FloatingButton = () => {
    return (
        <a
        href="https://wa.me/556592729267?text=Oi,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Agro%20M2."
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 z-20 rounded-full shadow-lg hover:bg-green-600 transition-all lg:bottom-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 0C5.371 0 0 5.371 0 12c0 2.124.551 4.144 1.597 5.949L0 24l6.213-1.572A11.943 11.943 0 0 0 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm6.396 17.599c-.288.806-1.634 1.54-2.255 1.63-.609.09-1.14.288-3.893-.805-3.284-1.286-5.4-4.457-5.571-4.675-.168-.218-1.329-1.771-1.329-3.388s.842-2.396 1.145-2.716c.307-.317.674-.396.9-.396s.451.007.648.012c.197.006.507-.041.793.601.288.642.982 2.218 1.069 2.378.086.161.145.34.029.548-.116.207-.174.339-.342.519-.168.181-.348.4-.501.537-.168.148-.342.309-.146.605s.868 1.423 1.862 2.305c1.28 1.152 2.354 1.514 2.706 1.669.353.155.56.129.764-.078.203-.206.879-1.02 1.11-1.374.23-.353.486-.293.829-.174.344.118 2.166 1.019 2.539 1.203.373.184.622.274.711.426.09.153.09.822-.198 1.628z"
          />
        </svg>
        <div className="absolute top-0 right-0 bg-blue-500 w-4 h-4 rounded-full animate-ping"></div>
      </a>
    );
}

export default FloatingButton;
