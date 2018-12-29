const db = require("./database-connection");
module.exports = {
    getAllFish() {
        return db("fish");
    },
    getAllUsers() {
        return db("users").select(
            "id",
            "first_name",
            "last_name"
        );
    },
    getAllCommentsWithUsername() {
        return db("comments").innerJoin("users", "users.id", "comments.uid")
        .select(
            "comments.*",
            "users.username"
        ).orderBy('id')
    },
    findUsernameWhenPostComment(newCommentObj) {
        return db("comments").innerJoin("users", "users.id", "comments.uid")
        .select(
            "comments.*",
            "users.username"
        ).where("cid", newCommentObj.cid)
        .returning("*");
    },
    createNewFishProduct(newFishObj) {
        return db("fish")
            .insert(newFishObj)
            .returning("*");
    },
    createNewComment(newCommentObj) {
        return db("comments")
            .insert(newCommentObj)
            .returning("*");
    },
    updateComment(updateCommentObj) {
        return db('comments')
            .where('cid', updateCommentObj.cid)
            .update({
                text: updateCommentObj.text,
                rating: updateCommentObj.rating
            })
            .returning('*');
    },
    deleteComment(cid) {
        return db("comments")
            .where("cid", cid)
            .del()
            .returning("*");
    },
}