const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const collectionsDir = path.join(__dirname, '../public/images/collections');

// Files to optimize (PNGs over 1MB)
const filesToOptimize = [
  'outdoor/outdoor-fireplaces.png',
  'architectural/pilaster-caps.png',
  'architectural/door-trims.png',
  'outdoor/fire-pits.png',
  'architectural/crown-molding.png',
  'functional/wall-caps.png',
  'functional/treads.png',
  'outdoor/benches.png',
  'functional/kitchen-hoods.png',
  'functional/sills.png',
  'outdoor/pavers.png',
  'outdoor/fountains.png',
  'architectural/corbels.png',
];

async function optimizeImage(relativePath) {
  const inputPath = path.join(collectionsDir, relativePath);
  const outputPath = inputPath.replace('.png', '.jpg');

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠ Skipping (not found): ${relativePath}`);
    return;
  }

  const inputStats = fs.statSync(inputPath);
  const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

  try {
    await sharp(inputPath)
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
    const savings = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

    console.log(`✓ ${relativePath}`);
    console.log(`  ${inputSizeMB} MB → ${outputSizeMB} MB (${savings}% smaller)`);

    // Delete original PNG
    fs.unlinkSync(inputPath);
    console.log(`  Deleted original PNG`);

    return { input: inputSizeMB, output: outputSizeMB };
  } catch (err) {
    console.error(`✗ Error processing ${relativePath}:`, err.message);
  }
}

async function main() {
  console.log('🖼  Optimizing collection images...\n');

  let totalInputMB = 0;
  let totalOutputMB = 0;

  for (const file of filesToOptimize) {
    const result = await optimizeImage(file);
    if (result) {
      totalInputMB += parseFloat(result.input);
      totalOutputMB += parseFloat(result.output);
    }
    console.log('');
  }

  console.log('═'.repeat(50));
  console.log(`Total: ${totalInputMB.toFixed(2)} MB → ${totalOutputMB.toFixed(2)} MB`);
  console.log(`Saved: ${(totalInputMB - totalOutputMB).toFixed(2)} MB`);
  console.log('\n✨ Done! Remember to update image references in code from .png to .jpg');
}

main();
