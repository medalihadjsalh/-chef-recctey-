
const db = require("../database-mysql/index");

const findUser = function (req, res) {
  db.query("SELECT * FROM user", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

  const adduser = function (req, res) {
    let sql = `INSERT INTO user (name,pw) VALUES (?,?)`
    let data = [req.body.name,req.body.pw]
    db.query(sql,data, (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };




 
  const deleteduser = function (req,res) {
    let data = req.params.id;
    console.log(data)
    let sql=`delete from user where iduser=${data}`
    let sql1 = `delete from post where user_iduser=${data}`
    try{
      let del=db.query(sql)
      let del1=db.query(sql1)
      res.status(200).json("done")
    }catch(err){
      res.json(err)
    }
  };

  




module.exports = { findUser,adduser,deleteduser};
