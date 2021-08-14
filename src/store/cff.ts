import { derived, writable } from 'svelte/store';
import available_licenses from 'spdx-license-ids/index.json';

export const cff_version = '1.2.0';

export type TypeType = 'software' | 'dataset';

// TODO move to constants.ts
const available_types = Object.freeze(['dataset', 'software']);
export const type = writable<TypeType>('software');

export const title = writable('');

export const message = writable('');

export interface Author {
	given_names?: string;
	name_particle?: string;
	name_suffix?: string;
	orcid?: string;
	family_names?: string;
	affiliation?: string;
	email?: string;
}

export const authors = writable<Author[]>([]);

// TODO move to constants.ts
export const available_identifier_types: [string, string][] = [
	['doi', 'DOI'],
	['url', 'URL'],
	['swh', 'Software Heritage identifier'],
	['other', 'Other']
];
export const identifier_type_label_lookup = new Map(available_identifier_types);

export interface Identifier {
	type: 'doi' | 'url' | 'swh' | 'other';
	value: string;
	description?: string;
}

export const identifiers = writable<Identifier[]>([]);

export const url = writable('');

export const repository = writable('');

export const repository_artifact = writable('');

export const repository_code = writable('');

export const abstract = writable('');

export const keywords = writable<string[]>([]);

export const license = writable('');

export const commit = writable('');

export const version = writable('');

export const date_released = writable('');

export function reset(): void {
	type.set('software');
	title.set('');
	message.set('');
	authors.set([]);
	identifiers.set([]);
	url.set('');
	repository.set('');
	repository_artifact.set('');
	repository_code.set('');
	abstract.set('');
	keywords.set([]);
	license.set('');
	commit.set('');
	version.set('');
	date_released.set('');
}

function author2cff(author: Author) {
	const a = {};
	for (const k in author) {
		if (author[k]) {
			a[k.replace('_', '-')] = author[k];
		}
	}
	return a;
}

export const obj = derived(
	[
		title,
		message,
		type,
		authors,
		identifiers,
		url,
		repository,
		repository_artifact,
		repository_code,
		abstract,
		keywords,
		license,
		commit,
		version,
		date_released
	],
	([
		$title,
		$message,
		$type,
		$authors,
		$identifiers,
		$url,
		$repository,
		$repository_artifact,
		$repository_code,
		$abstract,
		$keywords,
		$license,
		$commit,
		$version,
		$date_released
	]) => {
		const o: Record<string, string | string[] | Author[] | Identifier[]> = {
			'cff-version': cff_version,
			title: $title,
			message: $message,
			type: $type
		};
		if ($authors.length > 0) {
			o.authors = $authors.map(author2cff)
		}
		if ($identifiers.length > 0) {
			o.identifiers = $identifiers;
		}
		if ($url) {
			o.url = $url;
		}
		if ($repository) {
			o.repository = $repository;
		}
		if ($repository_artifact) {
			o.repository_artifact = $repository_artifact;
		}
		if ($repository_code) {
			o.repository_code = $repository_code;
		}
		if ($abstract) {
			o.abstract = $abstract;
		}
		if ($keywords.length > 0) {
			o.keywords = $keywords;
		}
		if ($license) {
			o.license = $license;
		}
		if ($commit) {
			o.commit = $commit;
		}
		if ($version) {
			o.version = $version;
		}
		if ($date_released) {
			o['date-released'] = $date_released;
		}
		return o;
	}
);

export const is_valid_title_step = derived([title, message, type], ([$title, $message, $type]) => {
	return $title && $message && available_types.includes($type);
});

function valid_author(author: Author) {
	const orcid_regexp = new RegExp('https://orcid.org/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[0-9X]{1}');
	if (author.orcid) {
		return orcid_regexp.test(author.orcid);
	}
	// TODO check other author fields
}

export const is_valid_authors_step = derived(
	authors,
	($authors) => $authors.length >= 1 && $authors.every(valid_author)
);

export const is_minimal = derived(
	[is_valid_title_step, is_valid_authors_step],
	([$is_valid_title_step, $is_valid_authors_step]) => {
		return $is_valid_title_step && $is_valid_authors_step;
	}
);

export const is_valid_abstract_step = derived(abstract, ($abstract) => $abstract.length >= 1);

function valid_identifier(identifier: Identifier) {
	return identifier_type_label_lookup.has(identifier.type) && identifier.value.length >= 1;
}

export const is_valid_identifiers_step = derived(identifiers, ($identifiers) =>
	// TODO dont be valid initially
	$identifiers.every((i) => valid_identifier(i))
);

export const is_valid_resources_step = derived(
	[url, repository, repository_artifact, repository_code],
	([$url, $repository, $repository_artifact, $repository_code]) => {
		// If one of them is filled then step is completed
		return (
			$url.length >= 1 ||
			$repository.length >= 1 ||
			$repository_artifact.length >= 1 ||
			$repository_code.length >= 1
		);
	}
);

export const is_valid_keywords_step = derived(keywords, ($keywords) =>
	// TODO dont be valid initially
	$keywords.every((keyword) => keyword.length >= 1)
);

export const is_valid_license_step = derived(license, ($license) =>
	available_licenses.includes($license)
);

export const is_valid_version_step = derived(
	[commit, version, date_released],
	([$commit, $version, $date_released]) => {
		// If one of them is filled then step is completed
		return (
			$commit.length >= 1 ||
			$version.length >= 1 ||
			($date_released && new Date($date_released) >= new Date(1970, 1, 1))
		);
	}
);

export const is_valid = derived(
	[
		is_minimal,
		is_valid_identifiers_step,
		is_valid_resources_step,
		is_valid_abstract_step,
		is_valid_keywords_step,
		is_valid_license_step,
		is_valid_version_step
	],
	([
		$is_minimal,
		$is_valid_identifiers_step,
		$is_valid_resources_step,
		$is_valid_abstract_step,
		$is_valid_keywords_step,
		$is_valid_license_step,
		$is_valid_version_step
	]) => {
		return (
			$is_minimal &&
			$is_valid_identifiers_step &&
			$is_valid_resources_step &&
			$is_valid_abstract_step &&
			$is_valid_license_step &&
			$is_valid_keywords_step &&
			$is_valid_version_step
			// TODO check all optional fields if present
		);
	}
);
