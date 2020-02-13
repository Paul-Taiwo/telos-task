
const admin = require("firebase-admin");

const path = require("path");
const os = require("os");
const fs = require("fs");
const Busboy = require("busboy");
const bucket = admin.storage().bucket("telos-task-2ee4b.appspot.com");

class UploadController {
    static upload(req, res) {
        res.set(
            "Access-Control-Allow-Origin",
            "https://ivsys-b6b8b.firebaseapp.com",
            // "http://localhost:3000"
        );
        res.set("Access-Control-Allow-Credentials", "true");

        console.log('request', req)

        const busboy = new Busboy({ headers: req.headers });
        const tmpdir = os.tmpdir();
        let uploads = "";
        const fileWrites = [];
        let files = [];

        // This code will process each file uploaded.
        busboy.on("file", (fieldname, file, filename) => {
            // Note: os.tmpdir() points to an in-memory file system on GCF
            // Thus, any files in it must fit in the instance's memory.
            console.log(`Processed file ${filename}`);
            const filepath = path.join(tmpdir, filename);
            uploads = filepath;

            const writeStream = fs.createWriteStream(filepath);
            file.pipe(writeStream);

            // File was processed by Busboy; wait for it to be written to disk.
            const promise = new Promise((resolve, reject) => {
                file.on("end", () => {
                    writeStream.end();
                });
                writeStream.on("finish", resolve);
                writeStream.on("error", reject);
            });
            fileWrites.push(promise);
        });

        // Triggered once all uploaded files are processed by Busboy.
        // We still need to wait for the disk writes (saves) to complete.
        busboy.on("finish", async () => {
            await Promise.all(fileWrites);

            // TODO(developer): Process saved files here

            try {
                const uploadResponse = await bucket.upload(uploads);
                const [urlRes] = await bucket
                    .file(uploadResponse[0].metadata.name)
                    .getSignedUrl({
                        version: "v2",
                        action: "read",
                        expires: "03-09-2491"
                    });
                    console.log(`Response ====> ${urlRes}`);

                res.json({ link: urlRes });
            } catch (err) {           
                console.log(`Error ====> ${err}`);

                res.status(500).json({ error: err });
            }
            fs.unlinkSync(uploads);
        });

        busboy.end(req.rawBody);
    }
}

module.exports = UploadController;