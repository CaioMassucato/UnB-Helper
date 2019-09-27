Rails.application.routes.draw do
  
  #Rotas para Users
  get "/users" => "users#index"
  get "/users/:id" => "users#show"
  get "/users/search/:q" => "users#search"

  post "/users" => "users#create"
  post "/users/new" => "users#new"
  
  put "/users/login" => "users#login"
  put "/users/logout" => "users#logout"
  put "/users" => "users#update"

  delete "/users" => "users#destroy"
  delete "/users/:id" => "users#remove"

  #Rotas para Subjects
  get "/subjects" => "subjects#index"
  get "/subjects/:id" => "subjects#show"

  post "/subjects" => "subjects#create"

  put "/subjects" => "subjects#update"

  delete "/subjects" => "subjects#destroy"
  delete "/subjects/:id" => "subjects#remove"

  #Rotas para Posts
  get "/posts" => "posts#index"
  get "/posts/:id" => "posts#show"
  get "/subjects/:id/posts" => "posts#post_by_subject"

  post "/posts" => "posts#create"

  put "/posts" => "posts#update"

  delete "/posts" => "posts#destroy"
  delete "/posts/:id" => "posts#remove"
end