# Near Art Exhibitions
Art exhibitions and artist portfolio site on Near Protocol with Rust, WASM, Parcel and React. Based on the 'Near Starter Template' also posted on this GitHub and documented in my Medium articles.    
      
Can be expanded / adapted to suit a variety of needs in Fine Art or Photography for those looking to build on Near Protocol. Permissions and other functions should be added for production deployment. Also possible would be a native token with DAO functionality for the curation and voting, but it's beyond the scope of this template.

# Features (high-level):
1) User can add an exhibition with title, description and 5 image links.
2) User can add an artist to an exhibition with portfolio (5 image links).
3) Users can 'Endorse' artists and 'Vote' on exhibitions.
4) News feed on Home page updates when an Artist or Exhibition is added (UNIX timestamp, date needs to be re-formatted in Rust to be properly displayable in React).
5) User can delete an exhibition (Rust indexing doesn't update (-1 value) ID in the vector - to fix).
6) Artists page lists all artists by exhibition (by ID).

# Testing
You can run "cargo build" in the 'contract' folder, and it will compile a debug target in regular Rust. You can then run "bash ./test.sh" in the 'contract' folder and it will run the 5 unit tests.


# In Progress (to-do's)
1) Redo the exhibitions ID to be a unique number.
2) Reformat the date in Rust (from "block.timestamp()" to UTC).
3) Allow-list, "only owner" for 'Delete Exhibition'.
4) Add donations to Artist, Exhibition or both.
5) News feed lists donations and endorsements.
6) IPFS or Pinata for the images.

# Instructions
In progress - install and deploy instructions coming soon.  

You can compile the Rust code to WASM and re-deploy a fresh copy of this contract to the Near Testnet by following the instructions in the Near Starter Template articles posted elsewhere on this GitHub. Be sure to include the contract address in the "config.js" Near configuration file before launching the React app with "npm start".
