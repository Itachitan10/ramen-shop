const mysql =require('mysql');


const conn = mysql.createConnection({ 
    host :"localhost", 
    user : 'root',
    password :  '',
    database : 'coffiedb'

})
module.exports = ((query , value=[])=>{ 

    return new Promise((resolve, reject) => {
        conn.query(query ,value ,(error , result)=>{
            if(error){ 
              return  reject(error)
            }else
            resolve(result)
        })
    })
})