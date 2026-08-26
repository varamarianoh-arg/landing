const fs = require('fs');

async function makeTransparent() {
    try {
        // Dynamically import jimp
        const Jimp = (await import('jimp')).default;

        const imagePath = 'C:\\Users\\maria\\OneDrive\\Documentos\\Clau\\FoxieWeb\\lovable\\public\\fox-logo-solid.png';
        const image = await Jimp.read(imagePath);

        // Iterate through all pixels
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // If the pixel is very dark (close to black)
            if (red < 30 && green < 30 && blue < 30) {
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

        const outputPath = 'C:\\Users\\maria\\OneDrive\\Documentos\\Clau\\FoxieWeb\\lovable\\public\\fox-logo-true-alpha.png';
        await image.writeAsync(outputPath);
        console.log('Successfully created true transparent image at:', outputPath);
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

makeTransparent();
