require("../src/database/mongoose")
const User = require("../src/models/User")

const _id = "618fae884dc92f2a30bbb1a7"

/*User.findByIdAndUpdate(_id, { age: 0 })
    .then((user) => {
        console.log(user);
        return User.countDocuments({ age: 0 });
    }).then((resutl) => {
    console.log(resutl);
}).catch((error) => {
    console.log(error);
});*/

const updateAgeCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return {user, count}
}

updateAgeCount(_id, 5)
    .then((obj) => {
        console.log(obj)
    }).catch((e) => {
    console.log(e)
})