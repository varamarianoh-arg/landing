import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

async function makeTransparent() {
    try {
        const imagePath = path.join(process.cwd(), 'public', 'fox-logo-solid.png');
        const buffer = fs.readFileSync(imagePath);
        const image = await Jimp.read(buffer);

        // Iterate through all pixels
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // If the pixel is very dark (close to black or faint stars)
            if (red < 45 && green < 45 && blue < 45) {
                // Set alpha to 0 (transparent)
                this.bitmap.data[idx + 3] = 0;
            } else {
                // For semi-dark pixels, make them partially transparent to avoid hard edges
                const brightness = (red + green + blue) / 3;
                if (brightness < 80) {
                    this.bitmap.data[idx + 3] = Math.max(0, (brightness / 80) * 255);
                }
            }
        });

        const outputPath = './public/fox-logo-true-alpha.png';
        image.write(outputPath);
        console.log('Successfully created true transparent image at:', outputPath);
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

makeTransparent();
