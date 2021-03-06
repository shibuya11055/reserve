Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  post "/graphql", to: "graphql#execute"

  mount_devise_token_auth_for 'User', at: 'api/v1/auth', controllers: {
    registrations: 'api/v1/auth/registrations'
  }
  mount_devise_token_auth_for 'Owner', at: 'api/v1/auth/owners', controllers: {
    registrations: 'api/v1/auth/registration_owners',
    sessions: 'api/v1/auth/owner_sessions'
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
