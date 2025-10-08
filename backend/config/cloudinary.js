import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadOnCloudinary = async (filePath) => {
    // Cloudinary configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "assistant_images"
        });

        // Delete local file safely
        try { fs.unlinkSync(filePath); } catch (err) {}

        return result.secure_url;

    } catch (error) {
        // Delete local file if exists
        try { fs.unlinkSync(filePath); } catch (err) {}
        console.error("Cloudinary upload error:", error);

        // Throw error for controller to handle
        throw new Error("Cloudinary upload failed");
    }
}

export default uploadOnCloudinary;
