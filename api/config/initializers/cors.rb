Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # TODO: 本番環境のURLを設定する
    origins 'localhost:3001'

    resource '*',
      headers: :any,
      expose: ["access-token", "expiry", "token-type", "uid", "client"],
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end