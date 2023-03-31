require('dotenv').config();
const loginService = require('../service/serviceLogin');

const loginController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ message: 'Some required fields are missing' });
            }
            const result = await loginService.login({ email, password });
            if (result.error) {
                return res.status(400)
                    .json({ message: result.error.message });
            }
            res.status(200).json({ token: result });
        } catch (e) {
            return res
                .status(500)
                .json({ message: 'Internal error', error: e.message });
        }
    },
};
module.exports = loginController;