const Blog = require('~/app/Models/BlogModels')
const multer = require('multer')
const path = require('path')
class BlogController {
        create(req, res, next) {
                const formData = req.body
                formData.author = req.userId
                const blog = new Blog(formData)
                blog.save()
                        .then(() => {
                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }
        get(req, res, next) {
                Blog.find({}).populate('author')
                        .then(result => {
                                res.json(result)
                        })
                        .catch(next)
        }
        detail(req, res, next) {
                const slug = req.params.slug
                Blog.find({ slug: slug }).populate('author', "email username")
                        .then(result => {
                                res.json(result)
                        })
                        .catch(next)
        }
        update(req, res, next) {
                if (!req.params.id) {
                        return res.sendStatus(400)
                }
                Blog.updateOne({ _id: req.params.id }, req.body)
                        .then(() => {
                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }
        delete(req, res, next) {
                if (!req.params.id) {
                        return res.sendStatus(400)
                }
                Blog.deleteOne({ _id: req.params.id })
                        .then(() => {
                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }

        upload = multer({
                storage: storage,
                limits: { fileSize: '1000000' },
                fileFilter: (req, file, cb) => {
                        const fileTypes = /jpeg|jpg|png|gif/
                        const mimeType = fileTypes.test(file.mimetype)
                        const extname = fileTypes.test(path.extname(file.originalname))

                        if (mimeType && extname) {
                                return cb(null, true)
                        }
                        cb('Give proper file fomate to upload')

                }
        }).single('picture')

}
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
                cb(null, 'public/Uploads/Images/Blog')

        },
        filename: function (req, file, cb) {
                cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
        }
})
module.exports = new BlogController();
