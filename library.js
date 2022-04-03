// Write your code here!
//----------------------------------------------------------------------
//-------------------------------------------------------------------
//Global variable declarations
let username = document.getElementById('logged-user')
let flag2 = 0;

//----------------------------------------------------------------------
//-------------------------------------------------------------------
//Table printing structure

function buildTable(data) {
    let table = document.getElementById('info-table')

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
          <td>${data[i].Id}</td>
          <td>${data[i].Title}</td>
          <td>${data[i].Author}</td>
          <td>${data[i].Lender}</td>
          <td>${data[i].Borrower}</td>
          <td>${data[i].Action}</td>

      </tr>`
        table.innerHTML += row
    }

}

//---------------------------------------------------------------
function returnValue(i){
 myArray[i].Borrower="-";
 removetable(myArray)
 button(myArray);
 inputnewrow();
}

//---------------------------------------------------------------
//---------------------------------------------------------------
function borrowValue(i){
    myArray[i].Borrower=username.value;
    removetable(myArray)
    button(myArray);
    inputnewrow();

}
//---------------------------------------------------------------
//---------------------------------------------------------------
function button(data) {
    let table = document.getElementById('info-table')
    for (let i = 0; i < data.length; i++) {
        if (username.value != data[i].Lender && username.value == data[i].Borrower) {
            let row3 = `<tr>
              <td>${data[i].Id}</td>
              <td>${data[i].Title}</td>
              <td>${data[i].Author}</td>
              <td>${data[i].Lender}</td>
              <td>${data[i].Borrower}</td>
              <td><button type="button" onclick="returnValue(${i});">Return</button></td>
    
          </tr>`
            table.innerHTML += row3
        } else if (username.value != data[i].Lender && data[i].Borrower == '-') {
            let row4 = `<tr>
              <td>${data[i].Id}</td>
              <td>${data[i].Title}</td>
              <td>${data[i].Author}</td>
              <td>${data[i].Lender}</td>
              <td>${data[i].Borrower}</td>
              <td><button type="button" onclick="borrowValue(${i});">Borrow</button></td>
    
          </tr>`
            table.innerHTML += row4
        } else {
            let row = `<tr>
    <td>${data[i].Id}</td>
    <td>${data[i].Title}</td>
    <td>${data[i].Author}</td>
    <td>${data[i].Lender}</td>
    <td>${data[i].Borrower}</td>
    <td>${data[i].Action}</td>

</tr>`
            table.innerHTML += row
        }

    }
}

//---------------------------------------------------------------

//Add row function

function addrow(data) {
    let table1 = document.getElementById('info-table')
    let row1 = `<tr>
    <td>${data.Id}</td>
    <td>${data.Title}</td>
    <td>${data.Author}</td>
    <td>${data.Lender}</td>
    <td>${data.Borrower}</td>
    <td>${data.Action}</td>

</tr>`
    table1.innerHTML += row1

}
//-----------------------------------------------------------------



//----------------------------------------------------------------------
//-------------------------------------------------------------------
//Data structure
let myArray = [{
        'Id': '1',
        'Title': 'Book1',
        'Author': 'Author1',
        'Lender': 'UserC',
        'Borrower': 'UserB',
        'Action': ''
    },
    {
        'Id': '2',
        'Title': 'Book2',
        'Author': 'Author2',
        'Lender': 'UserC',
        'Borrower': '-',
        'Action': ''
    },
    {
        'Id': '3',
        'Title': 'Book3',
        'Author': 'Author3',
        'Lender': 'UserD',
        'Borrower': 'UserC',
        'Action': ''
    },
    {
        'Id': '4',
        'Title': 'Book4',
        'Author': 'Author4',
        'Lender': 'UserA',
        'Borrower': '-',
        'Action': ''
    },
    {
        'Id': '5',
        'Title': 'Book5',
        'Author': 'Author5',
        'Lender': 'UserA',
        'Borrower': '-',
        'Action': ''
    },
    {
        'Id': '6',
        'Title': 'Book6',
        'Author': 'Author6',
        'Lender': 'UserB',
        'Borrower': 'UserA',
        'Action': ''
    }
];
//----------------------------------------------------------
//Printing Table
buildTable(myArray)


//Add New book and printing input books
//----------------------------------------------------------
function textbox() {
    let table = document.getElementById('info-table')
    let p = username.value
    let row = `<tr>
            <td>${myArray.length+1}</td>
            <td><input type='text' id="new-book" placeholder="title"></td>
            <td><input type='text' id="new-author" placeholder="author"></td>
            <td>${p}</td>
            <td>${''}</td>
            <td><button type="button" onclick="getInputValue();">Add book</button></td>

        </tr>`
    table.innerHTML += row
}
//----------------------------------------------------------
//------------------------------------------------------------------------
//New row functionality

function inputnewrow() {
    textbox();
}
//------------------------------------------------------------------------
//----------------------------------------------------------------
//remove function
function removetable(data) {
    if (flag2 == 0) {
        for (let i = data.length; i > 0; i--) {
            document.getElementById('info-table').deleteRow(i)
        }
    } else if (flag2 == 1) {
        for (let i = data.length + 1; i > 0; i--) {
            document.getElementById('info-table').deleteRow(i)
        }
    }
}


//------------------------------------------------------------------------
//----------------------------------------------------------------

//------------------------------------------------------------------------
function getInputValue() {
    var nearr = {
            'Id': null,
            'Title': null,
            'Author': null,
            'Lender': null,
            'Borrower': null,
            'Action': null
        }
        // Selecting the input element and get its value 
    var inputedbook = document.getElementById("new-book").value;
    var inputedauthor = document.getElementById("new-author").value;
    if (inputedbook && inputedauthor) {
        nearr.Id = myArray.length + 1;
        nearr.Title = inputedbook;
        nearr.Author = inputedauthor;
        nearr.Lender = username.value;
        nearr.Borrower = "-";
        nearr.Action = "";
        myArray.push(nearr);
        document.getElementById("info-table").deleteRow(myArray.length);
        addrow(nearr);
        inputnewrow();
    }
    //buildTable(myArray);

}

//---------------------------------------
//----------------------------------------------------------------
//Logged in

function changeLoggedInUser() {
    let UserArray = ["UserA", "UserB", "UserC", "UserD"]

    for (let j = 0; j < UserArray.length; j++) {
        if (username.value === UserArray[j]) {
            removetable(myArray)
            flag2 = 1;
            button(myArray)
            inputnewrow()


            return document.getElementById('logged-in-user-name').innerHTML = "Logged in: " + username.value
        } else {
            
            document.getElementById('logged-in-user-name').innerHTML = "No User logged in."
        }
    }
    removetable(myArray)
    flag2 = 0;
    buildTable(myArray)

}

//----------------------------------------------------------
//------------------------------------------------------------------------

//----------------------------------------------------------------------

//------------------------------------------------------------------------