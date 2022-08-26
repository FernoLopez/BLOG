const router = require('express').Router()
const passport = require('passport')
/* const { roleAdminMiddleware } = require('../middleware/adminRole') */
require('../middlewares/auth.middleware')(passport)

const postServices = require('./posts.http')

router.route('/') //* /api/v1/posts/
    .get(postServices.getAll)
    .post(postServices.create)

/* router.route('/me') //* /api/v1/posts/me/
    .put(passport.authenticate('jwt',{session: false}) ,postServices.editMyPost)
    .get(passport.authenticate('jwt',{session: false}), postServices.getMyPost)
    .delete(passport.authenticate('jwt',{session: false}), postServices.removeMyPost) */

router.route('/:id') //* /api/v1/posts/:id/
    .get(passport.authenticate('jwt', {session: false}),postServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), postServices.remove)
    .put(passport.authenticate('jwt', {session: false}), postServices.edit)


exports.router = router