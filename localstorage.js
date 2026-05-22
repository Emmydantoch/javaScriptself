// JS Local Storage

// This is like a database inside our browser, where we can
// store user's data

// It is important to note that the user's data that is sensistive
// should not be stored in local storage, because any data stored 
// there can easily be accesed by hackers

// Step one: Set the item in localstorage
// We do this by using the setItem method
// syntax: localStorage.setItem('name of item', value of item)

localStorage.setItem("lastname", "Smith");

// Step two: View the item in localstorage
// Inspect
// Go to the Application Tab, and the under local storage, you will
// see your item

// Unless you delete the item on localStorage, it never leaves 
// the browser


// Get the item in localstorage
// We do this by using the getItem method
// syntax: localStorage.getItem('name of item')
lastname = localStorage.getItem("lastname");
console.log(lastname)