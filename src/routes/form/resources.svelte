<script lang="ts">
	import { repository, repository_artifact, repository_code, url } from '../../store/cff';

	// When visiting directly stepper should be expanded
	import { expanded } from '../../store/stepper';
	expanded.set(true);
</script>

Related resources

<label>
	The URL of a landing page/website for the work
	<input bind:value={$url} />
</label>
<label>
	The URL of the work in a repository
	<input bind:value={$repository} />
</label>
<label>
	The URL of the work in a build artifact/binary repository
	<input bind:value={$repository_artifact} />
</label>
<label>
	The URL of the work in a source code repository
	<input bind:value={$repository_code} />
</label>

<ol>
	<li><a href="identifiers">Back</a></li>
	<li><a href="/finish">Finish</a></li>
	<li><a href="abstract">Next</a></li>
</ol>
