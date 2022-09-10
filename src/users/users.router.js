const router = require('express').Router()
const passport = require('passport')
/* const { roleAdminMiddleware } = require('../middleware/adminRole') */
require('../middlewares/auth.middleware')(passport) 

const userServices = require('./users.http')
const postServices = require('../posts/posts.http')

router.route('/') //* /api/v1/users/
    .get(userServices.getAll)

router.route('/me')
    .put(passport.authenticate('jwt',{session: false}) , userServices.editMyUser)
    .get(passport.authenticate('jwt',{session: false}), userServices.getMyUser)
    .delete(passport.authenticate('jwt',{session: false}), userServices.removeMyUser)

router.route('/me/posts')
    .get(passport.authenticate('jwt', {session: false}), postServices.getMyPost)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}),userServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), userServices.remove)
    .put(passport.authenticate('jwt', {session: false}), userServices.edit)

router.route('/me/posts/:id')
    .get(passport.authenticate('jwt', {session: false}), postServices.getUserPostById)
    .delete(passport.authenticate('jwt', {session: false}), postServices.removeUserPost)
    .put(passport.authenticate('jwt', {session: false}), postServices.editUserPost)




exports.router = router