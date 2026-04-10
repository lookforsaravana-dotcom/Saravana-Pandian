//Task1
function userProfile(name) {
    console.log("Hello, " + name);
}
userProfile("John");

//Task2
const double = num => { return num * 2; };
console.log(double(5));

//Task3

setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

//Task4

function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId >= 0) {
                const userData = { id: userId, name: "John Doe", age: 30 };
                resolve(userData);
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 2000);
    });
}
getUserData(0).then(userData => {
    console.log("User Data:", userData);
}).catch(error => {
    console.error("Error fetching user data:", error);
});