class Api::V1::Auth::RegistrationOwnersController <  DeviseTokenAuth::RegistrationsController
  private

  def sign_up_params
    params.permit(
      :first_name,
      :last_name,
      :age,
      :email,
      :address,
      :phone_number,
      :gender,
      :password,
      :password_confirmation,
    )
  end
end
