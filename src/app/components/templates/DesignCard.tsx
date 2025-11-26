export default function DesignCard() {
  return (
    <div className="max-w-sm w-full mx-auto p-4">
      <div
        className="bg-white/80 rounded-xl    p-5  
                   transition duration-400 
                   hover:shadow-xl shadow-emerald-400"
      >
        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 ">
          <img
            src="https://wallpapers.com/images/hd/green-landscape-1920-x-1200-wallpaper-j89fj5uh2cg13bbw.jpg"
            alt="Imagen"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-xl font-bold text-emerald-900 mb-1">
          Titulo 
        </h2>

        <p className="text-sm text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facere? Magni ab architecto sapiente recusandae possimus id ducimus delectus unde?
        </p>

        <button
          className="w-full bg-emerald-600 text-white font-medium py-2 rounded-lg
                     hover:bg-emerald-700  focus:ring-2 
                     focus:ring-emerald-600 focus:ring-offset-2"
        >
          enter
        </button>
      </div>
    </div>
  );
}
