/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page){ 
// create two variables which will represent the index for the first and last student on the page
const startIndex = (page * 9) - 9;
const endIndex = (page * 9);
// select the element with a class of `student-list` and assign it to a variable
const studList = document.querySelector(".student-list") ;
  // set the innerHTML property of the variable you just created to an empty string
studList.innerHTML = " ";
  // loop over the length of the `list` parameter
  for (let i = 0; i < list.length; i += 1){
    // inside the loop create a conditional to display the proper students
    if ( i >= startIndex && i < endIndex){
      // inside the conditional:
        // create the elements needed to display the student information
        let studItem = 
        `
          <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        </li>
        `;
        // insert the above elements
        studList.insertAdjacentHTML("beforeend", studItem);
    };
  }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  // create a variable to calculate the number of pages needed
let numberOfPages = Math.ceil(list.length / 9);
  // select the element with a class of `link-list` and assign it to a variable
let liLi = document.querySelector('.link-list')
  // set the innerHTML property of the variable you just created to an empty string
liLi.innerHTML = ' ';
  // loop over the number of pages needed
  for (i = 1; i <= numberOfPages; i++){
    // create the elements needed to display the pagination button
    let btns = `
        <li> <button type="button">${i}</button> </li>
    `
    // insert the above elements
liLi.insertAdjacentHTML('beforeend', btns)
  // give the first pagination button a class of "active"
liLi.querySelector('button').className = 'active';
  // create an event listener on the `link-list` element
liLi.addEventListener('click', (event) =>{
      // if the click target is a button:
      if (event.target.tagName == 'BUTTON'){
              // remove the "active" class from the previous button
        liLi.querySelector('.active').className = ''
              // add the active class to the clicked button
        event.target.className = 'active'
              // call the showPage function passing the `list` parameter and page to display as arguments
        showPage (list, event.target.textContent)
      }
})
};
}



// Call functions
showPage(data, 1);
addPagination(data);