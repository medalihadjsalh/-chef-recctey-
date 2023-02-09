const db=require("../database-mysql/index")

const updateAll = function (req,res) {
    let sql = `UPDATE post SET title =?,description=?,imageUrl=? WHERE idpost=?`
    let data = [req.body.title,req.body.description,req.body.imageUrl,req.params.id];
    db.query(sql,data, (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };
  const deletedpost = function (req,res) {
    let sql = `delete from post  where idpost=?`
    let data = [req.params.id];
    db.query(sql,data, (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };
  const addpost = function (req, res) {
    let sql = `INSERT INTO post (title,description,imageUrl,user_iduser) VALUES (?,?,?,?)`
    let data = [req.body.title,req.body.description,req.body.imageUrl,req.body.user_iduser]
    db.query(sql,data, (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };
  const findPost = function (req, res) {
    db.query("SELECT * FROM post", (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };
  module.exports={addpost,findPost,deletedpost,updateAll}