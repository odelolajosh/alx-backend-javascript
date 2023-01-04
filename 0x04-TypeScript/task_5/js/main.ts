export interface MajorCredits {
	credits: number;
	__brand: 'majorCredits';
}

export interface MinorCredits {
	credits: number;
	__brand: 'minorCredits';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return { credits: subject1.credits + subject2.credits, __brand: 'majorCredits' };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return { credits: subject1.credits + subject2.credits, __brand: 'minorCredits' };
}
