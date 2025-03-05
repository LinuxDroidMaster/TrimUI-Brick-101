export default function AccessoriesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">
        TrimUI Brick Accessories
      </h1>
      <p className="text-lg text-black dark:text-white text-center mb-8">
        Enhance your TrimUI Brick experience with these recommended accessories.
      </p>

      {/* Grid de Accesorios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AccessoryCard
          image="https://m.media-amazon.com/images/I/51FeeXHe1nL._AC_SL1000_.jpg"
          title="128GB High-Speed microSD Card"
          description="A high-speed microSD card to store all your games and firmwares."
          link="https://amzn.to/41si9fQ"
          buttonText="Buy on Amazon"
          buttonColor="bg-yellow-500 hover:bg-yellow-400"
        />
        <AccessoryCard
          image="https://ae-pic-a1.aliexpress-media.com/kf/S07beb5bacfc1450683b49b877dadd0b3X.jpg_300x300Q70.jpg_.webp"
          title="Protective Case (Optional Tempered Glass)"
          description="A sturdy protective case to keep your TrimUI Brick safe."
          link="https://s.click.aliexpress.com/e/_ExALD8k"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/S1e4a2373a1714b69abd358ca792da5b9H.jpg?width=1500&height=1500&hash=3000"
          title="Tempered Glass Screen Protectors"
          description="Keep your screen scratch-free with these durable tempered glass protectors."
          link="https://s.click.aliexpress.com/e/_Evg1v4k"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
        <AccessoryCard
          image="https://www.litnxt.com/cdn/shop/files/litnxt-customize-buttons-kit-775381.jpg?v=1734037560"
          title="Customizable Buttons Kit"
          description="Swap out your buttons with custom colors and styles for a unique look."
          link="https://www.litnxt.com/products/litnxt-customize-buttons-kit-for-trimui-brick?ref=xkkgvewr"
          buttonText="Buy on LitNxt"
          buttonColor="bg-gray-700 hover:bg-gray-600"
        />
        <AccessoryCard
          image="https://www.litnxt.com/cdn/shop/files/litnxt-trimui-brick-blank-aluminum-alloy-backplate-laser-engraving-customization00.jpg?v=1733542967"
          title="Customizable Metal Backplate"
          description="Personalize your TrimUI Brick with a custom laser-engraved metal backplate."
          link="https://www.litnxt.com/products/litnxt-trimui-brick-blank-aluminum-alloy-backplate-laser-engraving-customization?ref=xkkgvewr"
          buttonText="Buy on LitNxt"
          buttonColor="bg-gray-700 hover:bg-gray-600"
        />
      </div>

      {/* Disclaimer sobre enlaces referidos */}
      <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-8">
        ⚠️ Some of the links on this page are affiliate links. By using them, you help support this project at no extra cost to you. Thank you! 💙
      </p>
    </div>
  );
}

// Reusable Accessory Card Component
function AccessoryCard({ image, title, description, link, buttonText, buttonColor }) {
  return (
    <div className="border-4 border-black p-4 bg-retroBlue text-white text-center">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 mx-auto mb-4 border-4 border-black"
      />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-white">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`retro-button mt-4 inline-block ${buttonColor}`}
      >
        {buttonText}
      </a>
    </div>
  );
}
