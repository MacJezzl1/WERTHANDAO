import formidable, {errors as formidableErrors} from 'formidable';
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
    try {
    	const { files } = await new Promise((resolve, reject) => {
	    	const form = new formidable.IncomingForm({ 
	    		uploadDir: path.join(process.cwd(), "public/uploads"),
	    		filename: (name, ext, part, form) => {
	    			const { originalFilename, mimetype} = part;
	    			return originalFilename
	    		}
	    	});
    		form.parse(req, (err, fields, files) => {
	    		if (err) {
		          reject(err);
		          return;
		        }
			    resolve({fields, files});
			});	    	
    	})

    	let file = files.file;

        res.send({
            status: "success",
            message: "File is uploaded",
            data: {
            	path: `/uploads/${file.originalFilename}`,
                name: file.originalFilename,
                mimetype: file.mimetype,
                size: file.size,
            },
        });
    } catch (err) {
    	console.log(err)
        res.status(500).send(err);
    }
}
