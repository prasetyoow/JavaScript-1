let data = {
  id: 1, 
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: 
  {
      street: "Kulkas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874,"
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org"
}

// a. ubah value dari 3 keyname dibawah
// name, email dan hobi

let data2 = {
  name: "Wahyu Prasetyo",
  email: "praztamer@gmail.com",
  hobby: "Gaming"
}

const combine = {...data, ...data2};
console.log(combine)


// b. ambil data "street dan city" dengan destructuring

const {address: {street}, address: {city}} = data
console.log(street, city)