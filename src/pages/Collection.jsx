function Collection() {
  return (
    <section className="collection">
      <h2 className="collection_bg_text">our collection</h2>

      <div className="collection-items">
        <div className="item">
          <img src="/imegs/kopi1 copy@2x.png" alt="Gran Espresso" />
          <h3>Gran Espresso</h3>
          <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
        </div>

        <div className="item">
          <img src="/imegs/kopi1 copy@2x.png" alt="Planalto" />
          <h3>Planalto</h3>
          <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
        </div>

        <div className="item">
          <img src="/imegs/kopi1 copy@2x.png" alt="Piccollo" />
          <h3>Piccollo</h3>
          <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
        </div>

        <div className="item">
          <img src="/imegs/kopi1 copy@2x.png" alt="Danche" />
          <h3>Danche</h3>
          <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
        </div>
      </div>
    </section>
  );
}

export default Collection;