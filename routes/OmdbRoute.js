const router = require('./index')
const omdbController = require('../controllers/OmdbController')

router.route('/detail/:id')
    .get(omdbController.detail)

router.route('/search')
    .get(omdbController.search)

module.exports = router;

