
const admin = require("firebase-admin");
const serviceAccount = require("../telos-task-2ee4b-firebase-adminsdk-9uq9m-c094aa3295.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "telos-task-2ee4b.appspot.com"
});


const path = require("path");
const os = require("os");
const fs = require("fs");
const Busboy = require("busboy");
const bucket = admin.storage().bucket("telos-task-2ee4b.appspot.com");
const fancyLogger = require("fancy-log");

class UploadController {
    static upload(req, res) {
        res.set(
            "Access-Control-Allow-Origin",
            "https://ivsys-b6b8b.firebaseapp.com"
        );
        res.set("Access-Control-Allow-Credentials", "true");

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
                const re = await bucket.upload(uploads);
                const [urRes] = await bucket
                    .file(re[0].metadata.name)
                    .getSignedUrl({
                        version: "v2",
                        action: "read",
                        expires: "03-09-2491"
                    });
                fancyLogger.info("Response ====> ", urRes);

                res.json({ link: urRes });
            } catch (err) {
                fancyLogger.error("Erorr ====> ", err);
                res.status(500).json({ error: err });
            }
            fs.unlinkSync(uploads);
        });

        busboy.end(req.rawBody);
    }
}

module.exports = UploadController;