<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import MessageCard from '../components/MessageCard.svelte';
	import SearchBlock from '../components/SearchBlock.svelte';

	import { values } from '../data/values.js';
	import { users } from '../data/users.js';

	let searchTerm = '';
</script>

<style>
    .root {
        background: linear-gradient(132.15deg, #211A1A 0%, #212127 95.96%);
    }

    .gradient-underlay {
        background: #24FFBC;
    }
</style>

<div class="relative max-w-[400px] max-h-[704px] mt-3 m-auto rounded-[16px] overflow-hidden root leading-[21px]">
	<div class="w-full h-[388px] absolute left-0 top-0 z-0 gradient-underlay"></div>
	<Header {users} />
	<div class="px-4 min-h-[315px] mb-0 relative top-[-152px] z-1 relative">
		<MessageCard />
		<SearchBlock {values} {searchTerm} />
	</div>
	<Footer />
</div>