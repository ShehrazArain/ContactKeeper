const contacts = [
  {
    id: 1,
    name: "Sheraz",
    email: "sheraz@gmail.com",
    phone: "03462931512",
    type: "personal"
  },
  {
    id: 2,
    name: "Ali",
    email: "Ali@gmail.com",
    phone: "03462931513",
    type: "personal"
  },
  {
    id: 3,
    name: "Sheroz",
    email: "shmed@gmail.com",
    phone: "03462931514",
    type: "professional"
  }
]

const newContacts = contacts.filter(contact => {
  const regex = new RegExp("sher", 'gi');
  return contact.name.match(regex) || contact.email.match(regex)
})

console.log(newContacts)