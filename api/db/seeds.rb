3.times do |i|
  count = i + 1
  User.create!(
    first_name: "太郎#{count}",
    last_name: 'テスト',
    age: 20,
    gender: 0,
    address: '宮城県仙台市青葉区',
    birthday: Time.now - count.month,
    phone_number: "1231234123#{count}",
    email: "user#{count}@example.com",
    password: 'password1234!',
    confirmed_at: Time.now
  )

  owner = Owner.create!(
    first_name: "オーナー#{count}",
    last_name: '太郎',
    age: 20,
    gender: 0,
    phone_number: "22312341234#{count}",
    address: '宮城県仙台市青葉区',
    email: "owner#{count}@example.com",
    password: 'password1234!',
    confirmed_at: Time.now
  )

  company = Company.create!(
    owner_id: owner.id,
    name: "美容室#{count}",
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
