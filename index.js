const syllables = [];

function fill() {
	const consonants = [
		'b', 'bl', 'br', 'by',
		'ch',
		'd', 'dr',
		'f', 'fl', 'fr', 'fy',
		'g', 'gl', 'gn', 'gr', 'gy',
		'h', 'hy',
		'j',
		'k', 'kl', 'kn', 'ks', 'ky',
		'l', 'ly',
		'm', 'my',
		'n', 'ny',
		'p', 'pl', 'pr', 'py',
		'r', 'ry',
		's', 'sf', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'sy',
		't', 'tr', 'ts', 'tw', 'ty',
		'v', 'vl', 'vr', 'vy',
		'w', 'wy',
		'y',
		'z', 'zh', 'zk', 'zp', 'zt', 'zy'
	];
	const vowels = [
		'a', 'e', 'u', 'i', 'o',
		'aa', 'ee', 'uu', 'ie', 'oo',
		'au', 'eu', 'ue', 'ia', 'io'
	];

	for (const consonant of consonants) {
		for (const vowel of vowels) {
			syllables.push(consonant + vowel);
		}
	}
}

function pick() {
	return syllables[Math.round(Math.random() * syllables.length)];
}

fill();

const maxword = 3;
const maxsentence = 6;

const all = [];
for (let sentence = 0; sentence < maxsentence; sentence++) {
	let result = '';
	for (let word = 0; word < maxword; word++) {
		result += pick();
	}
	all.push(result);
}
console.log(all.join(' '));