class Api::V1::Auth::OwnerSessionsController < DeviseTokenAuth::SessionsController
  wrap_parameters format: []
end