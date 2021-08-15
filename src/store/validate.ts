import schema from '../schema';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { derived } from 'svelte/store';
import { obj } from './cff';

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(schema);

export const is_yaml_valid = derived(obj, ($obj) => {
	const valid = validate($obj);
	const errors = validate.errors;
	return { valid, errors };
});
