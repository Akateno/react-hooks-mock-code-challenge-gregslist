import React from "react";
import ListingCard from "./ListingCard"
// import ListingCard from "./ListingCard";

function ListingsContainer({items, onRemoveListing}) {
  return (
    <main>
      <ul className="cards">
        {items.map((listing)=>(
          <ListingCard
          key={listing.id}
          listing={listing}
          onRemoveListing={onRemoveListing}
          />
        ))}

        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
