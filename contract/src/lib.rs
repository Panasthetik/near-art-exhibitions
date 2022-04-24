#[allow(unused_imports)]

use near_sdk::{borsh::{self, BorshDeserialize, BorshSerialize}};
use near_sdk::{env, PromiseIndex, near_bindgen};
near_sdk::setup_alloc!();


mod models;
mod utils;

use std::convert::TryInto;

use crate::{
    utils::{
        AccountId,
        Timestamp
    },
    models::{
        Exhibition,
        Artist, 
        Endorsement,
        // ActionType,
        // NewsItem,
        ArtistNewsItem,
        ExhibitionNewsItem,
    }
};

#[near_bindgen]
#[derive(Clone, Default, BorshDeserialize, BorshSerialize)]

pub struct ExhibitionContract {
    owner: AccountId,
    exhibitions: Vec<Exhibition>,
    total_artists: usize,
    artist_news_items: Vec<ArtistNewsItem>,
    exhibition_news_items: Vec<ExhibitionNewsItem>,
}

#[near_bindgen]
impl ExhibitionContract{
    #[init]
    pub fn new(
        owner: AccountId,
    ) -> Self{
        let exhibitions: Vec<Exhibition> = Vec::new();
        let artists: Vec<Artist> = Vec::new();
        let total_artists: i32 = 0;
        let artist_news_items: Vec<ArtistNewsItem> = Vec::new();
        let exhibition_news_items: Vec<ExhibitionNewsItem> = Vec::new();

        ExhibitionContract{
            owner,
            exhibitions,
            total_artists: total_artists.try_into().unwrap(),
            artist_news_items,
            exhibition_news_items,
        }
    }

    pub fn add_exhibition(&mut self, title: String, description: String,
        f_image_link: String, s_image_link: String, 
        t_image_link: String, q_image_link: String, c_image_link: String) {
        
        let id = self.exhibitions.len() as i32;

        let exhibition_news_id = self.exhibition_news_items.len() as i32;

        let exhibition_news = ExhibitionNewsItem::new(exhibition_news_id);
       
        self.exhibitions.push(Exhibition::new(
            id,
            title,
            description,
            f_image_link,
            s_image_link,
            t_image_link,
            q_image_link,
            c_image_link
        ));

        env::log("Added a new exhibition!".as_bytes());

        self.exhibition_news_items.push(exhibition_news);
    }

    pub fn list_exhibition_news(&self) -> Vec<ExhibitionNewsItem> {
        let exhibitions_news = &self.exhibition_news_items;

       return exhibitions_news.to_vec();
    }

    pub fn delete_exhibition(&mut self, id:usize) -> usize{
        let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();

        let artist_count: usize = exhibition.artists.len().try_into().unwrap();
   


        let mut new_total_artists = self.total_artists - artist_count;

        self.exhibitions.remove(id);

        return new_total_artists;
    }

    pub fn list_exhibitions(&self) -> Vec<Exhibition> {
        let exhibitions = &self.exhibitions;

       return exhibitions.to_vec();
    }

    pub fn exhibition_count(&mut self) -> usize {
        return self.exhibitions.len();
    }

    pub fn artist_count(&mut self, id:usize) -> u64 {
        let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();
        return exhibition.artists.len().try_into().unwrap();
    }

    pub fn add_artist(&mut self, id:usize, age: i32, first_name: String, last_name: String, medium: String,
        a_image_link: String, b_image_link: String, d_image_link: String, x_image_link: String, y_image_link: String, location: String){
        let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();
        let artist_id = exhibition.artists.len() as usize;

        let art_news_id = self.artist_news_items.len() as i32;

        let artist_news = ArtistNewsItem::new(art_news_id);

        // let curator = env::predecessor_account_id();
        // assert_eq!(curator, exhibition.creator);
        // if curator != exhibition.creator {
        //     env::panic(b"Only the owner can add artists!!");
        // };
        let artist = Artist::new(artist_id.try_into().unwrap(), age, first_name, last_name,
        medium, a_image_link, b_image_link, d_image_link, x_image_link, y_image_link, location);

        self.total_artists = self.total_artists + 1;
        env::log("Successfully added an artist to this exhibition!".as_bytes());
        exhibition.artists.push(artist);

        self.artist_news_items.push(artist_news);
        
    }

    pub fn list_artists_news(&self) -> Vec<ArtistNewsItem> {
        let artists_news = &self.artist_news_items;

       return artists_news.to_vec();
    }


    pub fn add_endorsement(&mut self, id:usize, artist_id: usize, comment: String){
        let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();
        // let endorser = env::predecessor_account_id();
        let artist = &mut exhibition.artists.get_mut(artist_id).unwrap();
        let endorsement = Endorsement::new(comment);
        artist.total_endorsements = artist.total_endorsements + 1;
        env::log("Endorsement submitted successfully for this artist!".as_bytes());
        artist.endorsements.push(endorsement);
        
    }

    pub fn get_total_endorsements(&mut self, id:usize, artist_id: usize) -> u64 {
        let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();
        let artist = &mut exhibition.artists.get_mut(artist_id).unwrap();
        return artist.endorsements.len().try_into().unwrap();

    }

    // pub fn delete_artist(&mut self, id:usize, artist_id: usize) {
    //     let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();
    //     let mut artist_id = exhibition.artists.get(artist_id);
    //     exhibition.artists.remove(artist_id);
    //     self.total_artists = self.total_artists - 1;

    // }

    pub fn get_artists(&mut self, id:usize) -> Vec<Artist> {
        let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();
        return exhibition.artists.clone();

    }

    pub fn get_total_artists(&mut self) -> usize {
        let artists_count = self.total_artists;
        return artists_count;
    }
 

    pub fn add_vote(&mut self, id:usize){
        let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();
        let voter = env::predecessor_account_id();

        exhibition.total_votes = exhibition.total_votes + 1;
        env::log("Vote submitted successfully for this event!".as_bytes());
        exhibition.votes.push(voter.to_string());
        
    }

    pub fn get_total_votes(&mut self, id:usize) -> u64 {
        let exhibition: &mut Exhibition = self.exhibitions.get_mut(id).unwrap();
        return exhibition.total_votes.try_into().unwrap();

    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::test_utils::VMContextBuilder;
    use near_sdk::{testing_env, AccountId};

    fn get_context(predecessor: AccountId) -> VMContextBuilder {
        let mut builder = VMContextBuilder::new();
        builder.predecessor_account_id(predecessor);
        builder
    }

    #[test]
    fn add_project() {

        let alice = AccountId::new_unchecked("alice.testnet".to_string());
        // Set up the testing context and unit test environment
        let context = get_context(alice.clone());

        testing_env!(context.build());

        let mut contract = ExhibitionContract::new(alice.to_string());

        contract.add_exhibition("New Contemporary Art Show".to_string(), "Amazing selection of 
            international artists from all over the world".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string());

        let result = contract.exhibition_count();

        assert_eq!(result, 1);
    }

    #[test]
    fn add_voter() {

        let alice = AccountId::new_unchecked("alice.testnet".to_string());
        // Set up the testing context and unit test environment
        let context = get_context(alice.clone());

        testing_env!(context.build());

        let mut contract = ExhibitionContract::new(alice.to_string());

        contract.add_exhibition("New Contemporary Art Show".to_string(), "Amazing selection of 
        international artists from all over the world".to_string(),
        "https://picsum.photos/seed/picsum/200/300".to_string(),
        "https://picsum.photos/seed/picsum/200/300".to_string(),
        "https://picsum.photos/seed/picsum/200/300".to_string());

        contract.add_vote(0);

        let result = contract.get_total_votes(0);

        assert_eq!(result, 1);

    }

    #[test]
    fn add_an_artist() {

        let alice = AccountId::new_unchecked("alice.testnet".to_string());
        // Set up the testing context and unit test environment
        let context = get_context(alice.clone());

        testing_env!(context.build());

        let mut contract = ExhibitionContract::new(alice.to_string());

                contract.add_exhibition("New Contemporary Art Show".to_string(), "Amazing selection of 
            international artists from all over the world".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string());

        contract.add_artist(0, 47, "Jason".to_string(), "Jagello".to_string(), "Photography".to_string(), "Detroit".to_string());

        let result = contract.get_artists(0);

        let artists = contract.get_total_artists();

        assert_eq!(artists, 1);

    }

    #[test]
    fn remove_exhibition() {
        let alice = AccountId::new_unchecked("alice.testnet".to_string());
        // Set up the testing context and unit test environment
        let context = get_context(alice.clone());

        testing_env!(context.build());

        let mut contract = ExhibitionContract::new(alice.to_string());

                contract.add_exhibition("New Contemporary Art Show".to_string(), "Amazing selection of 
            international artists from all over the world".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string(),
            "https://picsum.photos/seed/picsum/200/300".to_string());
            
        let result = contract.exhibition_count();

        assert_eq!(result, 1);

        contract.delete_exhibition(0);

        let new_result = contract.exhibition_count();

        assert_eq!(new_result, 0);

    }

    // #[test]
    // fn delete_an_artist() {

    //     let alice = AccountId::new_unchecked("alice.testnet".to_string());
    //     // Set up the testing context and unit test environment
    //     let context = get_context(alice.clone());

    //     testing_env!(context.build());

    //     let mut contract = ExhibitionContract::new(alice.to_string());

    //     contract.add_exhibition("New Contemporary Art Show".to_string(), "Amazing selection of 
    //     international artists from all over the world".to_string());

    //     contract.add_artist(0, 47, "Jason".to_string(), "Jagello".to_string(), "Photography".to_string(), "Detroit".to_string());

    //     let result = contract.get_artists(0);

    //     let artists = contract.get_total_artists();

    //     assert_eq!(artists, 1);

    //     contract.delete_artist(0, 47, "Jason".to_string(), "Jagello".to_string(), "Photography".to_string(), "Detroit".to_string());

        // let new_artists = contract.get_total_artists();

        // assert_eq!(artists, 0);

//     }
}