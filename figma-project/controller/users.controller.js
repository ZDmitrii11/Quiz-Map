const db =  require('../db')

class UsersController {

   async createUser(req,res){
    const token = new Date().getTime().toString()
    const {name,password} = req.body
    const newPerson = await db.query(`INSERT INTO person (name, password,token) values ($1, $2, $3) RETURNING *`,
        [name,password,token])
       res.json(newPerson.rows[0])

 }
    async getUsers(req,res){
       const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getUser(req,res){
       const id = req.params.id
       const user = await db.query(`SELECT * FROM person where id = $1`, [id])
       res.json(user.rows[0])
    }
    async updateUser(req,res){
     const {id,name,password} = req.body
        const user = await db.query(`UPDATE person set name = $1, password = $2 where id = $3 RETURNING *`,
            [name,password,id])
        res.json(user.rows[0])
    }
    async deleteUser(req,res){
        const id = req.params.id
        const user = await db.query(`DELETE FROM person where id = $1`, [id])
        res.json(user.rows[0])
    }

}

module.exports = new UsersController()