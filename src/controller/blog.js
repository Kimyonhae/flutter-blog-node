const fs = require("fs").promises;
class BlogController {
    static async fileFcMethod(res,path) {
        const response = await fs.readFile(`./src/database/${path}.json`);
        const file = JSON.parse(response);
        res.json(file);
    };

    static home = async(req,res) => {
        this.fileFcMethod(res,"home");
    };

    static state = async(req,res) => {
        this.fileFcMethod(res,"state");
    };

    static widget = async(req,res) => {
        this.fileFcMethod(res,"widget");
    };

    static package = async(req,res) => {
        this.fileFcMethod(res,"package");
    };
}
module.exports = BlogController;