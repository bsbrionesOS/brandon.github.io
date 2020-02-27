// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//creating an object with the keys of id, nameFirst, and nameLast
function makeContact(id, nameFirst, nameLast) {
let object = {};
object.id = id;
object.nameFirst = nameFirst;
object.nameLast = nameLast;
return object;
} 


function makeContactList() {
    // need to hold a container to hold contacts
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // function to take the object to be added to the contact list
        addContact: function(object){
            //adding the object to contacts by using the .push method()
            contacts.push(object);
        },
        //  returns the contact object if the full name is found
         findContact: function (fullName){
             //use a foor loop to loop through the array
            for(var i = 0; i < contacts.length; i++)
            //using if statement to compare the fullname with the values of nameFirst and nameLast with a space inbetween
            if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"])
            //return the object if the fullName is found
            return contacts[i];
    
        },
        //removing a content object from list given contact
        removeContact: function(contact){
            //have to use a for loop to loop through the array
            for(var i = 0; i < contacts.length; i++){
                var currentContact = contacts[i]
                //use a if statement to compare the argument with the contents of contacts
                if(contact.id == contacts[i].id){
                    //if it equals too then using the splice method we remove it from the array
                    contacts.splice(i,1);
                }
            }
           }, printAllContactNames: function(){
               //need to create a container where all the full name will be put into
            var contactNames = '';
            //use a for loop to loop through the array with the contacts
            for(var i = 0; i < contacts.length; i++){
                //need to add all the properties of nameFirst and last into contact names, with a new line for seperatation
                contactNames += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
            }
            // return the list with the full names that doesnt have a new line at the last full name, using slice method to bring everything needed
            return contactNames.slice(0,contactNames.length-1);
        
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
