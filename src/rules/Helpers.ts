import path from 'path';
import fs from 'fs';

const MC_HAMMER_KEYWORDS = ['mc', 'hammer', 'stop', 'hammer', 'time', 'touch'];

const MC_HAMMER_SPECIAL_PHRASES = [
  'mc hammer',
  'stop! hammer time!',
  "can't touch this",
  'stop, hammer time!'
];

export function containsMCHammerReferences(content: string): boolean {
  const normalizedContent = content.toLowerCase();

  const containsPhrase = MC_HAMMER_SPECIAL_PHRASES.some(
    (reference) => normalizedContent.indexOf(reference) !== -1
  );

  return (
    containsPhrase ||
    MC_HAMMER_KEYWORDS.some(
      (keyword) => normalizedContent.indexOf(keyword) !== -1
    )
  );
}

const rootSpecPath = path.join(__dirname, 'specs');
export const getSpecFiles = (folder: string) =>
  fs
    .readdirSync(path.join(rootSpecPath, folder))
    .map((f) => path.join(rootSpecPath, folder, f))
    .filter((f) => !fs.lstatSync(f).isDirectory());
