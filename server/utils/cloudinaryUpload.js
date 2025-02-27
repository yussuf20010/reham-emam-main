const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your cloud name, API key, and API secret
cloudinary.config({
    cloud_name: 'dffov6dw1',
    api_key: '353214544668246',
    api_secret: 'YABFAE4AZkoYcGq2VN9cm4j1Lzo'
});

async function handleUpload(file) {
    try {
        const res = await cloudinary.uploader.upload(file, {
            resource_type: "auto",
        });
        return res;
    } catch (error) {
        throw new Error(`Error uploading to Cloudinary: ${error.message}`);
    }
}

module.exports = handleUpload;
