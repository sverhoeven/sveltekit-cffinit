<script lang="ts">
	import { type, title, message } from '../../store/cff';
</script>

TITLE

<label>
	What is the title of the work?
	<input bind:value={$title} />
</label>

<label>
	What do you want citers to do with the information provided in your CITATION.cff file?
	<input bind:value={$message} />
</label>

<div>
	What type of work does this CITATION.cff describe?
	<label>
		<input type="radio" bind:group={$type} value="software" />
		Software
	</label>
	<label>
		<input type="radio" bind:group={$type} value="dataset" />
		Dataset
	</label>
</div>

<ol>
	<li><a href="authors">Next</a></li>
</ol>
