require("../src/database/mongoose")
const Task = require("../src/models/Task")

const _id = "61903125ae59925b21f41ebb"

const deleteTaskAndCount = async (id) => {
    const deleted = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return { deleted, count }
}

deleteTaskAndCount(_id)
    .then((obj) => {
        console.log(obj)
    }).catch((error) => {
    console.log(error)
})
