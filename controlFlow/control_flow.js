let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access granted";
}else if(userRole === "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted";
}
console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage = "Welcome, Admin!";
    }else{
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please log in to access the system";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? "Authenticated": "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

//Practice Task
let person = "Subscriber";
switch(person){
    case "Employee":
        console.log("You have access to Dietary Services");
        break;
    case "Enrolled Member":
        console.log("You have access to Dietary Services and 1 on 1 with dietician");
        break;
    case "Subscriber":
        console.log("You have partial access to Dietary Services");
        break;
    case "Non-Subscriber":
        console.log("You need to enroll or at least subscribe");
        break;
    default:
        console.log("I don't know who you are");
}