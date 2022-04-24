# near-art-exhibitions
Art exhibitions and artist portfolio site on Near Protocol with Rust, WASM, Parcel and React. Edited.

# Features (high-level):
1) User can add an exhibition with title, description and 5 image links
2) User can add an artist to an exhibition with portfolio 5 image links
3) Users can 'Endorse' artists and 'Vote' on exhibitions.
4) News feed on Home page updates when an Artist or Exhibition is added (UNIX timestamp, date needs to be re-formatted in Rust to be displayable in React)
5) User can delete an exhibition (Rust indexing updates (-1 value) ID in the array - to fix)
6) Artists page lists all artists by exhibition (by ID);


# In Progress (to-do's)
1) Redo the exhibitions ID to be a unique number.
2) Reformat the date in Rust (from "block.timestamp()" to UTC)
3) Allow-list, "only owner" for 'Delete Exhibition'
4) Add donations to Artist, Exhibition or both.
5) News feed lists donations and endorsements.
6) IPFS or Pinata for the images.

# Instructions
In progress - install and deploy instructions coming soon...