const sql = require('../config.js');

class Laws {
  constructor(law) {
    this.id = law.id
    this.table = 'law_propositions'
    this.title = law.title
    this.short_description = law.short_description;
    this.long_description = law.long_description;
    this.number_of_opinions = law.number_of_opinions || 0;
    this.number_of_view_of_the_video = law.number_of_view_of_the_video || 0;
    this.draft = law.draft || 0;
  }

  getAll = (result) => {
    sql.query(`SELECT * FROM ${this.table}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
      });
  };

  create = (newLaw, result) => {
    let table_db = newLaw.table;
    delete newLaw['table'] //Removing 'title' property from object.
    sql.query(`INSERT INTO ${table_db} SET ?`, newLaw, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, {...newLaw });
    });
  };


  updateVisibility = (id, updatedLaw, result) => {
    const table = updatedLaw.table
    console.log('table', table)
    console.log('model updatedLaw', updatedLaw)
    delete updatedLaw['table'];
    sql.query(`UPDATE ${table} SET draft = ? WHERE id = ?`, [updatedLaw.draft, id], (err, res) =>{
      if (err) { 
        console.log("Update error:", err)
      }
      result(null, res, updatedLaw);
    })
  }
}

module.exports = Laws;
