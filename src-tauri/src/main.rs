// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod authentication;
use crate::authentication::create_user;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![create_user])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
