const { Jimp } = require('jimp');

async function processFavicon() {
    const imagePath = 'C:\\Users\\maria\\.gemini\\antigravity\\brain\\b1e61d5e-6e4b-44e2-972a-7d513f62ba90\\favicon_fox_turquoise_1772716407385.png';
    const outputPath = 'C:\\Users\\maria\\OneDrive\\Documentos\\Clau\\FoxieWeb\\lovable\\public\\fox-logo-favicon.png';

    try {
        const image = await Jimp.read(imagePath);

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            // Get RGB values
            const r = this.bitmap.data[idx];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // Calculate luminosity (brightness)
            const luminosity = (0.299 * r + 0.587 * g + 0.114 * b);

            // We want pure turquoise: Hex #00FFCC -> R=0, G=255, B=204
            // And we use the luminosity to define the opacity (alpha)

            // If the pixel is very dark (background), make it fully transparent
            if (luminosity < 30) {
                this.bitmap.data[idx + 3] = 0; // Alpha 0
            } else {
                // Boost opacity for the glowing lines
                let alpha = luminosity * 2.0;
                if (alpha > 255) alpha = 255;

                // Force color to solid #00FFCC
                this.bitmap.data[idx] = 0;      // R
                this.bitmap.data[idx + 1] = 255; // G
                this.bitmap.data[idx + 2] = 204; // B
                this.bitmap.data[idx + 3] = alpha; // A
            }
        });

        await new Promise((resolve, reject) => {
            image.write(outputPath, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
        console.log("Favicon successfully processed with pure Turquoise and transparent background!");
    } catch (err) {
        console.error("Error processing image:", err);
    }
}

processFavicon();
