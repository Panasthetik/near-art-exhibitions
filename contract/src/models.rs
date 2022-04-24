#[allow(unused_imports)]

use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{env, near_bindgen};

use crate::utils::{
    AccountId,
    Timestamp
};

#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct ArtistNewsItem {
    art_news_id: i32,
    pub creator: AccountId,
    pub created_at: Timestamp,
    // pub action: ActionType,
    pub message: String,


}

#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct ExhibitionNewsItem {
    exhibition_news_id: i32,
    pub creator: AccountId,
    pub created_at: Timestamp,
    // pub action: ActionType,
    pub message: String,


}


// #[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
// #[serde(crate = "near_sdk::serde")]
// pub enum ActionType {
//     ExhibitionAdded,
//     ArtistAdded,

// }

impl ArtistNewsItem {
    pub fn new(art_news_id: i32) -> Self {

        ArtistNewsItem {
            art_news_id,
            creator: env::signer_account_id().to_string(),
            created_at: env:: block_timestamp(),
            // action: ActionType::ArtistAdded,
            message: "A curator has added an artist".to_string(),
        }
    }
}

impl ExhibitionNewsItem {
    pub fn new(exhibition_news_id: i32) -> Self {

        ExhibitionNewsItem {
            exhibition_news_id,
            creator: env::signer_account_id().to_string(),
            created_at: env:: block_timestamp(),
            // action: ActionType::ExhibitionAdded,
            message: "A curator has added an exhibition".to_string(),
        }
    }
}

#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Exhibition {
    id: i32,
    pub creator: AccountId,
    pub created_at: Timestamp,
    pub title: String,
    pub total_votes: i64,
    pub description: String,
    pub f_image_link: String,
    pub s_image_link: String,
    pub t_image_link: String,
    pub q_image_link: String,
    pub c_image_link: String,
    pub votes: Vec<String>,
    pub artists: Vec<Artist>
}


impl Exhibition {
    pub fn new(id:i32, title: String, description: String, f_image_link:String,
        s_image_link:String, t_image_link:String,
        q_image_link:String, c_image_link:String) -> Self {
        
        Exhibition {
            id,
            creator: env::signer_account_id().to_string(),
            created_at: env::block_timestamp(),
            title,
            total_votes : 0,
            description,
            f_image_link,
            s_image_link,
            t_image_link,
            q_image_link,
            c_image_link,
            votes: vec![],
            artists: vec![],
        }
    }
}

#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Artist {
    pub artist_id: i32,
    pub age: i32,
    pub first_name: String,
    pub last_name: String,
    pub total_endorsements: i64,
    pub medium: String,
    pub a_image_link: String,
    pub b_image_link: String,
    pub d_image_link: String,
    pub x_image_link: String,
    pub y_image_link: String,
    pub location: String,
    pub date_added: Timestamp,
    pub added_by: AccountId,
    pub endorsements: Vec<Endorsement>

}

impl Artist {
    pub fn new(
        artist_id:i32,
        age: i32,
        first_name: String,
        last_name: String,
        medium: String,
        a_image_link: String,
        b_image_link: String,
        d_image_link: String,
        x_image_link: String,
        y_image_link: String,
        location: String) -> Self {

            Artist {
                artist_id, 
                age,
                first_name,
                last_name,
                total_endorsements: 0,
                medium,
                a_image_link,
                b_image_link,
                d_image_link,
                x_image_link,
                y_image_link,
                location,
                date_added: env::block_timestamp(),
                added_by: env::signer_account_id().to_string(),
                endorsements: vec![],
            }
        }

}
#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Endorsement {
    pub endorser: AccountId,
    pub added_at: Timestamp,
    pub comment: String,
}

impl Endorsement{
    pub fn new(comment: String) -> Self {

        Endorsement {
            endorser: env::signer_account_id().to_string(),
            added_at: env:: block_timestamp(),
            comment,
        }
    }
}

