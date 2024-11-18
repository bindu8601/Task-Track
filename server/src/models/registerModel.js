const db=require('../config/db')

const registerUser=(userData,callback)=>{
    const sqlQuery='INSERT INTO USERS (FIRSTNAME,LASTNAME,USEREMAIL,PASSWORD,USERNAME) VALUES (?,?,?,?,?)'
    const {firstName,lastName,userEmail,password,userName}=userData;
    db.query(sqlQuery,[firstName,lastName,userEmail,password,userName])
}

module.exports={
    registerUser
}