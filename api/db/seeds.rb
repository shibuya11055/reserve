3.times do |i|
  user = User.new(
    first_name: "太郎#{i + 1}",
    last_name: 'テスト',
    age: 20,
    gender: 0,
    account_type: 0,
    phone_number: '12312341234',
    email: "test#{i + 1}@example.com",
    password: 'password1234!',
    confirmed_at: Time.now
  )
  user.save!

  company = Company.create!(
    staff_id: 1,
    name: "美容室#{i + 1}",
    open_at: '10:00',
    close_at: '20:00'
  )

  5.times do |i|
    menu = Menu.create!(
      name: "カット#{i + 1}",
      required_time: 1.5,
      price: 4000 + i * 100,
      note: "カットメニューバージョン#{i + 1}です。",
      company_id: company.id
    )

    option = Option.create!(
      name: "ヘッドスパ#{i + 1}",
      required_time: 1.0,
      price: 2000 + i * 100,
      note: "ヘッドスパオプションバージョン#{i + 1}です。",
      company_id: company.id
    )

    MenuOption.create!(
      menu_id: menu.id,
      option_id: option.id
    )
  end
end
