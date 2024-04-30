use serde;
use sled;
use std::fs::File;

#[derive(serde::Serialize, serde::Deserialize)]
pub struct UserAaccount {
    pub username: String,
    pub password: String,
}

#[tauri::command(rename_all = "snake_case")]
pub fn create_user(user_details: String) -> String {
    match serde_json::from_str::<UserAaccount>(&user_details) {
        Ok(user) => {
            println!(
                "username is {}, password is {}",
                user.username, user.password
            );

            let db: sled::Db = sled::open("user_credentials").expect("open");

            let _ = db.insert(user.username.to_string(), user.password.as_str());

            let value_created = &db.get(user.username).unwrap().unwrap();

            return String::from("user created");
        }
        Err(e) => {
            println!("Error deserializing user details: {}", e);
            return String::from("Error processing user details");
        }
    }
}
