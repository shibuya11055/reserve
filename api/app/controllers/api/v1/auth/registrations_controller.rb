class Api::V1::Auth::RegistrationsController <  DeviseTokenAuth::RegistrationsController
  private

  def sign_up_params
    params.permit(
      :first_name,
      :last_name,
      :age,
      :email,
      :password,
      :password_confirmation,
    )
  end
end
